// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield"
];

function destructivelyAppendCat (catName) {
cats.push(catName);
}

function destructivelyPrependCat(catName) {
    cats.unshift(catName);
}

function destructivelyRemoveLastCat(catName) {
    cats.pop(catName);
}

function destructivelyRemoveFirstCat(catName) {
    cats.shift(catName);
}

function appendCat(catName) {
   const catsCopy = [...cats, catName];
   return catsCopy;
}

function prependCat(catName) {
   const catsCopy = [catName, ...cats];
   return catsCopy;
}

function removeLastCat (catName) {
    const catsCopy = [...cats];
    return catsCopy.slice(0,-1);
}

function removeFirstCat (catName) {
    const catsCopy = [...cats];
    return catsCopy.slice(1);
}
