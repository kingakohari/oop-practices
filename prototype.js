function Poem({authorFromWeb, yearFromWeb, titleFromWeb, textFromWeb}) {
    this.author = authorFromWeb
    this.year = yearFromWeb
    this.title = titleFromWeb
    this.text = textFromWeb
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

Poem.prototype.lang = "Hungarian"

const favePoemOfAndras = new Poem(poemData) // példányosítás

/* console.log(favePoemOfAndras.favBy); //undefined, nem adódott hozzá az új kulcs az eredeti object constructor-hoz

console.log(favePoemOfAndras.author);

favePoemOfAndras.favBy = "András Ránki"


console.log(Poem);  */

console.log(favePoemOfAndras.lang);

console.log(favePoemOfAndras.__proto__);

console.log(Poem.prototype);  // ugyanaz, mint a felette lévő

