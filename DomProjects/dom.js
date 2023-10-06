// console.log('hello');
console.log('hello world');
// console.log(document.URL);
console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// var headerTitle = document.getElementById('header-title');
// // console.log(headerTitle);
// headerTitle.style.borderBottom = 'solis 3px #000'
// var addItems= document.getElementsByClassName('list-group-item');
// console.log(addItems);
// addItems[1].textContent = 'hello'
// addItems[1].style.fontWeight = 'bold';
// var items = document.getElementsByClassName('title');
// items[0].style.fontWeight='bold';
// addItems[0].style.backgroundColor='yellow';
// items[0].style.color='yellow';
// items[0].style.backgroundColor='grey';
// items[0].style.color='green';
var listItems = document.getElementsByClassName('list-group-item');
console.log(listItems);
listItems[2].style.backgroundColor = 'green';
for(var i =0; i<listItems.length; i++){
    listItems[i].style.fontWeight ='bold';
}