class Poem {
    constructor(author, year, title, text, makePage) {
        this.author = author;
        this.year = year;
        this.title = title;
        this.text = text;
        makePage(){
            console.log(`
            Title: ${this.title}

            ${this.text}

            Author: ${this.author}
            Translator: ${this.translator}
            ${this.year} 
            `
        )};
    
    }
}

let poemData = new Poem ("Weöres Sándor", 1962, "Énhasadás", "Utcasarkon várok rám [...]")

console.log(poemData);

console.log(poemData.title);

poemData.makepage()

class ForeignPoem {
    constructor(author, year, title, text, translator) {
        super(author, title, year, text)
        this.translator = translator
    }
}

const poemData2 = new ForeignPoem ("Weöres Sándor", 1962, "Énhasadás", "Utcasarkon várok rám [...]", "Alan Dixon")

poemData2.makePage()
