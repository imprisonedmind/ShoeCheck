from bs4 import BeautifulSoup
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

# urls
urls =[
        "https://tekkietown.co.za/collections/mens-footwear",
        ]
# # selenium get 
driver = webdriver.Chrome(ChromeDriverManager().install())


for url in urls:
    driver.get(url)
    # urls = ["https://tekkietown.co.za/collections/mens-footwear?page"]
    driver.execute_script('window.scrollBy(0,10000)',"")
    WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.XPATH , '/html/body/div[5]/div/div/div/div/div[2]/div[4]/div[1]/div[375]/div/div[1]/a/img[1]')) )

    # soup
    html = driver.page_source
    soup = BeautifulSoup(html, "html.parser")

    f=open("./src/shoedata/data.json", "r" ) 
    data = json.load(f)
    print(type(data))

    # Set data to array
    # data = []

    # Search for main Element in HTML
    jobs = soup.find_all('div', class_ ='bc-sf-filter-product-item')

    # search for job item within jobs (soup)
    for job in jobs:
        try:
            item = {}
            item['ShoeName'] =job.find('a', class_ ="bc-sf-filter-product-item-title").get_text(strip=True)
            item['ShoeBrand'] = job.find('p', class_ ="bc-sf-filter-product-item-vendor").get_text(strip=True)
            item['ShoePrice'] = job.find('span', class_ ="bc-sf-filter-product-item-regular-price").get_text().replace("R ", "").replace(",", "")
            item['ShoeImg'] = job.find('img', class_ ='bc-sf-filter-product-item-main-image').get('src')
            item['ShoeLink'] = "http://tekkietown.co.za" + job.find('a', class_ ="bc-sf-filter-product-item-image-link", href=True).get('href')
            item['ShoeSex'] = "Male"
            item['ShoeProvider'] = 'T'
            data.append(item)
        except:
            continue

    db.push(data)
    # # open json file and write the dump
    # with open("./src/shoedata/data.json", "w") as writeJSON:
    #     json.dump(data, writeJSON, ensure_ascii=False, indent=4)

    driver.close()




