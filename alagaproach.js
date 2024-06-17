function printUniqueOccurrenceCharacters(arr) {
    let uniqueChars = arr.filter((char) => {
            return arr.indexOf(char) === arr.lastIndexOf(char); 
    });


    console.log("Characters that occurred only once:", uniqueChars.join(""));
}

let arr = ("hellothere").toLowerCase().split("")
printUniqueOccurrenceCharacters(arr);
