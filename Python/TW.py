from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import requests
import simplejson as json   
# urls
urls =[
        "https://tekkietown.co.za/collections/mens-footwear",
        ]
# # selenium get 
driver = webdriver.Chrome()
driver.implicitly_wait(200)


for url in urls:
    driver.get(url)
    # urls = ["https://tekkietown.co.za/collections/mens-footwear?page"]
    driver.execute_script('window.scrollBy(0,10000)',"")
    WebDriverWait(driver, 10).until(EC.presence_of_all_elements_located((By.XPATH , '//*[@id="collectionsmens-footwearproducts2750-cotu-_-168352-_-white-17"]/div')) )

    # soup
    html = driver.page_source
    soup = BeautifulSoup(html, "html.parser")

    # Set data to array
    data = []

    # Search for main Element in HTML
    jobs = soup.find_all('div', class_ ='bc-sf-filter-product-item')

    # search for job item within jobs (soup)
    for job in jobs:
        try:
            item = {}
            item['ShoeBrand'] =job.find('a', class_ ="bc-sf-filter-product-item-title").get_text(strip=True)
            item['ShoeName'] = job.find('p', class_ ="bc-sf-filter-product-item-vendor").get_text(strip=True)
            item['ShoePrice'] = job.find('span', class_ ="bc-sf-filter-product-item-regular-price").get_text().replace("R ", "").replace(",", "")
            item['ShoeImg'] = job.find('img', class_ ='bc-sf-filter-product-item-main-image').get('src')
            item['ShoeLink'] = "http://tekkietown.co.za" + job.find('a', class_ ="bc-sf-filter-product-item-image-link", href=True).get('href')
            item['ShoeSex'] = "Male"
            item['ShoeProvider'] = 'T'
            data.append(item)
        except:
            continue

    # open json file and write the dump
    with open("./shoecheck/src/shoedata/FGdata.json", "a") as writeJSON:
        json.dump(data, writeJSON, ensure_ascii=False, indent=4)

    driver.close()




