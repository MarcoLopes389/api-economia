var Algorithmia = require("algorithmia");

async function wikipedia (pesquisa) {
    const client = Algorithmia.client("simvPp/4lEsjy9ctgzIKMZAI6Hs1")
    const wikiAlgorit = client.algo("web/WikipediaParser/0.1.2")
    const WikiResp = await wikiAlgorit.pipe(pesquisa)
    const wikiContent = WikiResp.get()
    return wikiContent
}

module.exports = wikipedia