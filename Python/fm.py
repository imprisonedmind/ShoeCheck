from bs4 import BeautifulSoup
from pyasn1.type import tag
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from webdriver_manager.chrome import ChromeDriverManager
import requests
import simplejson as json   
import pyrebase

# Firebase settings
firebaseConfig={  
    "apiKey": "AIzaSyBdRJCeVGlpIhgsNxlBWycUPmNL7-SOrog",
    "authDomain": "shoecheck-3cae6.firebaseapp.com",
    "databaseURL": "https://shoecheck-3cae6-default-rtdb.europe-west1.firebasedatabase.app",
    "projectId": "shoecheck-3cae6",
    "storageBucket": "shoecheck-3cae6.appspot.com",
    "messagingSenderId": "766369205594",
    "appId": "1:766369205594:web:1a7532d092267aaf207763",
    "measurementId": "G-8CV49PCRKX"
}
firebase=pyrebase.initialize_app(firebaseConfig)
db=firebase.database()

urls3 = ["https://www.footgear.co.za/m/footwear-men/page/1/",]
# # selenium get 
driver = webdriver.Chrome(ChromeDriverManager().install())


for url in urls3:
    driver.get(url)
    driver.execute_script('window.scrollBy(0,10000)',"")
    WebDriverWait(driver, 15).until(EC.presence_of_all_elements_located((By.CLASS_NAME , 'astra-shop-thumbnail-wrap')) )
    
    # soup
    html = driver.page_source
    soup = BeautifulSoup(html, "html.parser")

    # Set data to array
    data =[]
    db.remove()

    # Search for main Element in HTML
    jobs = soup.find_all('li', class_ ='type-product')

    # search for job item within jobs (soup)
    for job in jobs:
        try:
            item = {}
            item['ShoeBrand'] =job.find('span', class_ ="yith-wcbr-brands").get_text(strip=True)
            item['ShoeName'] = job.find('h2', class_ ="woocommerce-loop-product__title").get_text()
            item['ShoePrice'] = job.find('bdi').get_text().replace('R ', "").replace(",", "")
            item['ShoeImg'] = job.find('img').get('srcset')
            item['ShoeLink'] = job.find('a', href=True).get('href')
            item['ShoeSex'] = "Male"
            item['ShoeProvider'] = 'Footgear'
            data.append(item)
        except:
            continue

db.child('shoeData').set(data)

driver.close()