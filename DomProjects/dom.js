// console.log('hello');
// console.log('hello world');
// console.log(document.URL);
// console.log(document.head);
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

/*let itemslist = document.getElementsByClassName('list-group-item');
console.log(itemslist);
itemslist[2].style.backgroundColor='Green';

for (let i =0; i <itemslist.length; i++){
    itemslist[i].style.fontWeight='bold';
}

itemslist = document.querySelector('li'); // select the li element
itemslist.classList.add('list-group-item');*/


/*let secondItemInList=document.querySelector('.list-group-item:nth-child(2)');
console.log(secondItemInList);
secondItemInList.style.backgroundColor='green'*/


/*let odd = document.querySelectorAll('li:nth-child(odd');
for(let i=0; i<odd.length; i++){
    odd[i].style.backgroundColor='green';
}*/


//traversing the DOM
//parentnode
let itemlist = document.querySelector('#items');
/*itemlist.parentNode.style.backgroundColor = 'grey';
console.log(itemlist.parentNode);*/

//parentelement
/*let itemlist = document.querySelector('#items');
itemlist.parentElement.parentElement.style.backgroundColor = 'grey';
console.log(itemlist.parentElement.parentElement.parentElement);*/

//childnode
//console.log(itemlist.childNodes);

//childrens
/*console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor='green';*/

//firstchild
/*console.log(itemlist.firstChild);*/

//firstelementchild
/*console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent='Hello 1';*/

//lastchild
/*console.log(itemlist.lastchild);*/

//lastelementchild
/*console.log(itemlist.lastElementChild);
itemlist.lastElementChild.textContent='Hello 4';*/

//nextsibling
// console.log(itemlist.nextSibling);

//nextelementsibling
// console.log(itemlist.nextElementSibling);


//previousSibling
// console.log(itemlist.previousSibling);

// previousElementSibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.backgroundColor = 'green';


//createElement
let newDiv = document.createElement('div');
console.log(newDiv);
//add class
newDiv.className='hello';
//add id
newDiv.id ='hello 1';
//add attributes
newDiv.setAttribute('title','hello Div')
//create text node
let newDivText = document.createTextNode('HEllo ');
//add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv,h1);
newDiv.style.fontSize='30px';

let firstItem = document.querySelector('#items li');
let newItem = document.createElement('li');
newItem.className = 'list-group-item';
newItem.textContent='HEllo';
firstItem.parentNode.insertBefore(newItem, firstItem);
