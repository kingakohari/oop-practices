function Poem({authorFromWeb, yearFromWeb, titleFromWeb, textFromWeb}) {
    this.author = authorFromWeb
    this.year = yearFromWeb
    this.title = titleFromWeb
    this.text = textFromWeb
    this.makePage = function(){
            console.log(`
            Title: ${this.title}

            ${this.text}

            Author: ${this.author}
            ${this.year} 
            `
            );
    }
}

const poemData = {
    authorFromWeb: "Weöres Sándor",
    yearFromWeb: 1962,   
    titleFromWeb: "Énhasadás",
    textFromWeb:`
    Utcasarkon várok rám,
    félórája is van tán.
    Ám értelmem fölragyog:
    Nem jövök, mert itt vagyok.
    `
}

const favouritePoemOfAndras = new Poem(poemData) 

favouritePoemOfAndras.makePage();