const Algorithmia = require("algorithmia");
const apiKey = require('../../apiKey.json').apiKey

async function wikipedia (pesquisa) {
    const client = Algorithmia.client(apiKey)
    const wikiAlgorit = client.algo("web/WikipediaParser/0.1.2")
    const WikiResp = await wikiAlgorit.pipe(pesquisa)
    const wikiContent = WikiResp.get()
    return wikiContent
}

module.exports = wikipedia