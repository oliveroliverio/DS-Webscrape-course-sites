from bs4 import BeautifulSoup
import requests

# requests is important for getting live HTML data from web rather than analyzing local HTML files (which you never really do in the first place..)

# htmlTxt = requests.get("https://app.datacamp.com/learn/skill-tracks/sql-server-fundamentals")
# print(htmlTxt)
# getting a <response [503]> service unavaiable error



htmlTxt = requests.get("https://www.timesjobs.com/candidate/job-search.html?searchType=personalizedSearch&from=submit&txtKeywords=python&txtLocation=")
# print(htmlTxt)
# getting <Response [200]>
# [the requst has succeeded](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
soup = BeautifulSoup(htmlTxt.text, 'html.parser')
job = soup.find("li", class_ = 'joblist-comp-name')
print(job)

