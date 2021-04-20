const puppeteer = require('puppeteer')

async function crawller (moeda) {
  const browser = await puppeteer.launch({
    headless: true
  })
  const page = await browser.newPage()

  await page.goto(`https://pt.m.wikipedia.org/wiki/${moeda}`)

  const valor = await page.evaluate(() => {
    return document.querySelectorAll('p')[0].innerText
  })
  await browser.close()
  return valor
}

module.exports = crawller
