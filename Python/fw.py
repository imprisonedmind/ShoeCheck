from bs4 import BeautifulSoup
import requests
import json

# scrape local file
with open("./html/w-f.html") as html_text:
    soup = BeautifulSoup(html_text, 'html.parser')


# Search for main Element in HTML
jobs = soup.find_all('li', class_ ='product')

# data is array
data = []

# get rid of price tags

price_tags = soup.find_all("span", class_="woocommerce-Price-currencySymbol")

for tag in price_tags:
    tag.replace_with("")

# Set data to array

# search for job item within jobs (soup)
for job in jobs:
    item = {}
    item['ShoeBrand'] =job.find('span', class_ ="yith-wcbr-brands").text.strip()
    item['ShoeName'] = job.h2.text
    item['ShoePrice'] = job.find('bdi').get_text(strip=True)
    item['ShoeImg'] = job.find('img', class_ ='attachment-woocommerce_thumbnail').get('srcset')
    item['ShoeLink'] = job.find('a', href=True).get('href')
    item['ShoeMale'] = "False"
    item['ShoeProvider'] = 'FG'
    data.append(item)

# open json file and write the dump
with open("./shoecheck/src/shoedata/FWdata.json", "a") as file:
    json.dump(data, file, ensure_ascii=False, indent=4)



