from bs4 import BeautifulSoup
import requests
import csv


# url = 'https://courseupload.net/advanced-stock-trading-course-strategies-freedow200321/'
# htmlTxt = requests.get(url)
# soup = BeautifulSoup(htmlTxt.text, 'html.parser')

soup = BeautifulSoup('BuildMachineLearningModel_codecademy', 'html.parser')





# this works
# from [stackoverflow](https://stackoverflow.com/questions/5041008/how-to-find-elements-by-class)
# links = []
for x in soup.find_all("a", {"class": "responsiveInfoTable"}):
  print(x['href'])
  # f.write(x['href'])




# with open("./data/downloadThese.txt", "w", encoding='utf-8') as file:
#   file.write(str(links))



#-------------------old---------------------------

# requests is important for getting live HTML data from web rather than analyzing local HTML files (which you never really do in the first place..)

# url = 'https://www.timesjobs.com/candidate/job-search.html?searchType=personalizedSearch&from=submit&txtKeywords=python&txtLocation='
# url = 'https://courseupload.net/advanced-stock-trading-course-strategies-freedow200321/'


# htmlTxt = requests.get(url)
# print(htmlTxt)
# getting <Response [200]>
# [the requst has succeeded](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)

# soup = BeautifulSoup(htmlTxt.text, 'html.parser')
# [element.text for s in soup.find_all('a', {"class": "responsiveInfoTable"}) for element in s.findChildren('href')]


# subcat = soup.find_all('a', {"class": "responsiveInfoTable"})[x].findChildren()
# for i, child in enumerate(subcat):
#     categories = child.text
#     print(categories)

# This actually did something
# job = soup.find_all("a", class_ = 'responsiveInfoTable')
# print(job)

# --------originals---------
# def cattest():
#     subcat = soup.find_all('span', {"class": "zg_hrsr_ladder"})[x].findChildren()
#     for i, child in enumerate(subcat):
#         categories = child.text
#         print(categories)
# res = []
# for s in soup.find_all('a', {"class": "responsiveInfoTable"}):
#   for element in s.findChildren('href'):
#     res.append(element.text)

# print(res)



