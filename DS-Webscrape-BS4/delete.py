from bs4 import BeautifulSoup
from selenium import webdriver
import requests
from nerodia.browser import Browser



url = "https://www.codecademy.com/learn/paths/machine-learning"
browser = Browser(browser='Chrome')
browser.goto(url)


from nerodia.browser import Browser
browser = Browser(browser='Chrome')
browser.get(url)
html = browser.page_source
print(html)



# # -----------testing webdriver
browser = webdriver.Chrome()
browser.get(url)
html = browser.page_source
print(html)

# # -----------Scraping function
# html = requests.get(url)
# soup = BeautifulSoup(html.text, 'html.parser')
# for x in soup.find_all("div", {"class": "gamut-1efsrtw-Box ebnwbv90"}):
#   print(x.text)



# ------------notes
# titleNum "div" class = gamut-ic76ur-Box ebnwbv90
# title1 "div" class = gamut-1efsrtw-Box ebnwbv90
# title2 "h4" class = gamut-nyxbiu-Text e8i0p5k0
# moduleType "p" class = gamut-1p9yzoy-Text e8i0p5k0
# moduleTitle "p" class = gamut-8ksv77-Text e8i0p5k0
