# Testing if I can run python in markdown files
works, but creates another file you have to close

```python
from bs4 import BeautifulSoup
from selenium import webdriver
import requests

url = 'https://www.codecademy.com/learn/paths/machine-learning'

# # -----------testing webdriver
browser = webdriver.Chrome()
browser(url)
print(browser)

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

```

- old file

```python
from bs4 import BeautifulSoup
from selenium import webdriver
import requests

url = 'https://www.codecademy.com/learn/paths/machine-learning'

# -----------Scraping function
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
```


---


- forget this.  I'm just going to save the HTML file after `for (let i in asdf){asdf[i].click())}` then parse it that way
- [refer to this](https://pytutorial.com/parse-html-file-beautifulsoup)

```python
from bs4 import BeautifulSoup

 with open('files/file1.html') as f:
    #read File
    content = f.read()
    #parse HTML
    soup = BeautifulSoup(content, 'html.parser')
    #print Title tag
    print(soup.title)
```

- applied to my case

```python
from bs4 import BeautifulSoup

with open('./BuildMachineLearningModel_codecademy.html') as f:
   #read File
   content = f.read()
   #parse HTML
   soup = BeautifulSoup(content, 'html.parser')
   #print Title tag
```

- this works

```python
from bs4 import BeautifulSoup

with open('./BuildMachineLearningModel_codecademy.html') as f:
   #read File
   content = f.read()
   #parse HTML
   soup = BeautifulSoup(content, 'html.parser')
   for x in soup.find_all("div", {"class": "gamut-1efsrtw-Box ebnwbv90"}):
     print(x.text)
```

- getting title elements works
```python
from bs4 import BeautifulSoup

with open('./BuildMachineLearningModel_codecademy.html') as f:
   #read File
   content = f.read()
   #parse HTML
   soup = BeautifulSoup(content, 'html.parser')
   for x in soup.find_all("div", {"class": "gamut-1efsrtw-Box ebnwbv90"}):
     print(x.text)
```

- time for the full blown app

```python
# ------------notes
# titleNum "div" class = gamut-ic76ur-Box ebnwbv90
# title1 "div" class = gamut-1efsrtw-Box ebnwbv90
# title2 "h4" class = gamut-nyxbiu-Text e8i0p5k0
# moduleType "p" class = gamut-1p9yzoy-Text e8i0p5k0
# moduleTitle "p" class = gamut-8ksv77-Text e8i0p5k0

from bs4 import BeautifulSoup

with open('./BuildMachineLearningModel_codecademy.html') as f:
  #read File
  content = f.read()
  #parse HTML
  soup = BeautifulSoup(content, 'html.parser')
  for title1 in soup.find_all("h3", {"class": "gamut-btgy85-Text e8i0p5k0"}):
    title1 = title1.text
  for title2 in soup.find_all("h4", {"class": "gamut-nyxbiu-Text e8i0p5k0"}):
    title2 = title2.text
  for moduleType in soup.find_all("p", {"class": "gamut-1p9yzoy-Text e8i0p5k0"}):
    moduleType = moduleType.text
  for moduleTitle in soup.find_all("p", {"class": "gamut-8ksv77-Text e8i0p5k0"}):
    moduleTitle = moduleTitle.text
    print(moduleType)




print(title1)
print("\n")
print(title2)

```

- Can't figure out how to have the nested text elements organized according to original document,
- going to prettify the output with BS4, and just perl parse it..

```python

from bs4 import BeautifulSoup

with open('./BuildMachineLearningModel_codecademy.html') as f:
  #read File
  content = f.read()
  #parse HTML
  soup = BeautifulSoup(content, 'html.parser')
  with open('out.txt', 'w') as f:
    print('Filename:', soup.prettify(), file=f)
```

- perl script
```perl

```