var fruits = ["Banana", "Orange", "Apple", "Mango"];

var txt = "";
function item(value){
    txt = value;
    console.log(txt);
}

fruits.forEach(item);