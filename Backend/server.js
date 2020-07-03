const scraper = require('./scraper')
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// const title ;
// scraper.scraper(title);
