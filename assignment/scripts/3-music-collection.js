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
addToCollection('Reality', 'CAmera Silens', '1983');
addToCollection('ST', 'Adolescents', '1984');
addToCollection('Reality', 'CAmera Silens', '1983');
console.log(addToCollection('ST', 'Adolescents', '1984'));

function showCollection(arrayParam){
//console.log number of items in an array array.length
//loop over array console log each record
//for(record of recordObject)?
}
showCollection(collection);