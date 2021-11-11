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
        "https://www.footgear.co.za/m/",
        ]
# # selenium get 
driver = webdriver.Chrome()
driver.implicitly_wait(200)


for url in urls:
    driver.get(url)
    # urls = ["https://tekkietown.co.za/collections/mens-footwear?page"]
    firstButton = driver.find_element_by_xpath("/html/body/div[1]/div[2]/div/div/div/div/div/div/div/div/div/div[2]/div/div/form[1]")
    driver.execute_script("arguments[0].click();", firstButton)

    # soup
    html = driver.page_source
    soup = BeautifulSoup(html, "html.parser")
    # Set data to array
    data = []

    # search for job item within jobs (soup)
    for job in jobs:
        item = {}
        item['ShoeBrand'] =job.find('span', class_ ="yith-wcbr-brands").text.strip()
        item['ShoeName'] = job.h2.text
        item['ShoePrice'] = job.find('bdi').get_text().replace('R ', "").replace(",", "")
        item['ShoeImg'] = job.find('img', class_ ='attachment-woocommerce_thumbnail').get('srcset')
        item['ShoeLink'] = job.find('a', href=True).get('href')
        item['ShoeMale'] = "True"
        item['ShoeProvider'] = 'FG'
        data.append(item)

    # open json file and write the dump
    with open("./shoecheck/src/shoedata/Fmdata.json", "a") as writeJSON:
        json.dump(data, writeJSON, ensure_ascii=False, indent=4)



