const puppeteer = require('puppeteer')

async function crawller (moedaInicial, moedaFinal) {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto(`https://www.bing.com/search?q=${moedaInicial}+em+${moedaFinal}`)

  const valor = await page.evaluate('document.getElementById("cc_tdv").value')
  await browser.close()
  return valor
}

module.exports = crawller
