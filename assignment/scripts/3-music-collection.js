console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
let recordObject = {
    title: title,
    artist: artist,
    yearPublished: yearPublished,
}

collection.push(recordObject);
console.log(collection);
return(recordObject);
}


    
   
addToCollection('Reality', 'CAmera Silens', '1983');
addToCollection('ST', 'Adolescents', '1984');
addToCollection('Prisons Imaginaires', 'Syndrome 81', '2022');
addToCollection('Knives On Both Sides', 'Ex-Cult', '2012');
addToCollection('Static Age', 'Misfits', '1996');
addToCollection('Saraba Nakama', 'Bombardiers', '2011');
console.log(addToCollection('ST', 'Adolescents', '1984'));
console.log(collection);


function showCollection(arrayParam){
//console.log number of items in an array array.length
//loop over array console log each record
//for(record of recordObject)?
let total = 0;
for (let i = 0; i < arrayParam.length; i++) {
console.log(arrayParam[i]);
}


}

showCollection(collection);


const findArtist = [];
function findByArtist(artist, collection) {
    for(let i = 0; i < collection.length; i++)
    if(artist === collection.artist[i]); {

    findArtist.push(collection[i])

    }

}
console.log(findByArtist("The Clash", artist, collection))
