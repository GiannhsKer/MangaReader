import urllib.request
import requests
from bs4 import BeautifulSoup


def dl_jpg(url,file_path,file_name):
    
    full_path = file_path + file_name + '.jpg'
    urllib.request.urlretrieve(url,full_path)


url = 'https://www.mangareader.net/'
manga_titles = ['jojos-bizarre-adventure-steel-ball-run/1']
titles = ['jojo part 7 - steel ball run']

mnumber=0
page = requests.get(str(url + manga_titles[mnumber]))

                                                                                    
#finding number of pages
soup = BeautifulSoup(page.text,'html.parser')
result = soup.find(id='selectpage')
result = result.text[-2:]

image = "https://i9.mangareader.net/jojos-bizarre-adventure-steel-ball-run/1/jojos-bizarre-adventure-steel-ball-run-1090626.jpg"

dl_jpg(image,'/home/yanes/Documents/manga reader/',"sbr0")

'''
for i in range (int(result)):
    page = str(url + manga_titles[mnumber] + str(i))
    dl_jpg(page,'~/Documents/manga reader',"sbr" + str(i))
'''