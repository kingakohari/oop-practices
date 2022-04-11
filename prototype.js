function Poem({authorFromWeb, yearFromWeb, titleFromWeb, textFromWeb, makePage}) {
    this.author = authorFromWeb
    this.year = yearFromWeb
    this.title = titleFromWeb
    this.text = textFromWeb
    makePage = function(){
            console.log(`
            Title: ${this.titleFromWeb}

            ${this.textFromWeb}

            Author: ${this.authorFromWeb}
            ${this.yearFromWeb} 
            `
            );
    }
}

const poemData = {
    authorFromWeb: "Weöres Sándor",
    yearFromWeb: 1962,   
    titleFromWeb: "Énhasadás",
    textFromWeb: `Utcasarkon várok rám,
    félórája is van tán.
    Ám értelmem fölragyog:
    Nem jövök, mert itt vagyok.`
}

poemData.makePage();