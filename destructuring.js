const poemData = {
    authorFromWeb: "Weöres Sándor",
    yearFromWeb: 1962,   
    titelFromWeb: "Énhasadás",
    textFromWeb: `Utcasarkon várok rám,
    félórája is van tán.
    Ám értelmem fölragyog:
    Nem jövök, mert itt vagyok.`
}

/* console.log(poemData.authorFromWeb); */
 
const pdafw = poemData.authorFromWeb
const pdyfw =poemData.yearFromWeb

/* console.log(pdafw);
console.log(pdyfw);

const {yearFromWeb, authorFromWeb} = poemData

console.log(yearFromWeb);
console.log(authorFromWeb); */

function funPoemData({yearFromWeb, authorFromWeb}){
    console.log(yearFromWeb);
    console.log(authorFromWeb);
}

funPoemData(poemData)

const arr = ["hi", "hello", "wassup", function() {
    console.log("Ciao");
},"bye"]

const firstItem = arr[0]
const secondItem = arr[1]

const [firstItemX, secondItemX, ...elseX] = arr

console.log(firstItemX === firstItem); // true

console.log(elseX); // [wassup, bye]

console.log(arr[arr.length-1]); // utolsó elem (bye)

const [,,, ourFun] = arr // függvény elem

ourFun() //Ciao



