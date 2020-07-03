const axios = require('axios');
const cheerio = require('cheerio');

const functions = {

  scraper : function(title){
    
    //const ftitle = this.title;
    const url = "https://manganelo.com/search/" + title.replace(/\s/g, '_');

    const titles = [];
    const covers_urls = []
    axios(url)
      .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        
        const mangas = $('.item-img', html);
        const covers = $('.item-img > .img-loading ', html);
        for (let i = 0; i < mangas.length; i++) {
          titles.push($(mangas)[i].attribs.title);
          covers_urls.push($(covers)[i].attribs.src);
        }    
        console.log(titles , covers_urls);
        
        
      })
      .catch(console.error);
  }
}

module.exports = functions;