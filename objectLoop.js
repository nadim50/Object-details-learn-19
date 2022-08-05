//// declare object

let university = {
    name: 'ice',
    id: 385,
    dep: 5,
    teacher: 15,
    student: 300,
    address: 'khulna'
}

let keys = Object.keys(university);

/// for loop using called object
for (let i = 0; i < keys.length; i++) {

    let details = keys[i];
    let detailValue = university[details];
    console.log(details, detailValue);

}


console.log('another way called object')


/// for in loop using called object 
for (let propertyName in university) {
    let propertyValue = university[propertyName];
    console.log(propertyName, propertyValue);
}