from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import requests
import simplejson as json   

# urls

# # selenium get 
driver = webdriver.Chrome()
driver.implicitly_wait(10)
wait = WebDriverWait(driver, 10)
urls = ["https://tekkietown.co.za/collections/mens-footwear?page="]

data = []

# loop urls
for url in urls:
    for page in range(1, 18):
        driver.get(url + str(page))
        html = driver.page_source

        # soup
        soup = BeautifulSoup(html, "html.parser")

        # Set data to array
        
        # Search for main Element in HTML
        jobs = soup.find_all('div', class_ ='bc-sf-filter-product-item')
        # wait
        # wait.until(EC.visibility_of_element_located((By.CSS_SELECTOR, "bc-sf-filter-product-item-image")))

        # search for job item within jobs (soup)
        for job in jobs:
                item = {}
                item['ShoeBrand'] =job.find('div', class_ ="bc-sf-filter-product-bottom bc-sf-product-info-align-center").get_text(strip=True)
                item['ShoeName'] = job.find('a', class_ ="bc-sf-filter-product-item-title").get_text(strip=True)
                item['ShoePrice'] = job.find('span', class_ ="bc-sf-filter-product-item-regular-price").get_text(strip=True)
                item['ShoeImg'] = job.find('img', class_ ='bc-sf-filter-product-item-main-image').get('src')
                item['ShoeLink'] = "http://tekkietown.co.za" + job.find('a', class_ ="bc-sf-filter-product-item-image-link", href=True).get('href')
                item['ShoeSex'] = "Male"
                item['ShoeProvider'] = 'T'
                data.append(item)
                # open json file and write the dump
                with open("./shoecheck/src/shoedata/FGdata.json", "a") as writeJSON:
                    json.dump(data, writeJSON, ensure_ascii=False, indent=4)

driver.close()




