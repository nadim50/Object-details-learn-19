/// declare object

var phone = {
    name: 'infinix',
    model: 'hot10i',
    color: 'black',
    processor: 'i20',
    price: 8500
}

console.log(phone);
console.log(phone.color);
phone.color = 'red';
console.log(phone);

////

console.log('Other method');
phone['price'] = '12,000';







var k = Object.keys(phone);
var i = Object.values(phone);
console.log(k, i);