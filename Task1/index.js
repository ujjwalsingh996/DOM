// // EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10]);
// document.all[10].textContent = "Hello"
// console.log(document.forms[0]);
// console.log(document.links);

// console.log(document.images);

// // GETELEMENTBYID //

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = "Goodbye";
// headerTitle.innerHTML = '<h3>Hello</h3>'
// headerTitle.style.borderBottom = 'solid 3px #000';
// header.style.borderBottom = 'solid 3px #000';

// // GETELEMENTSBYCLASSNAME  //

// var items = document.getElementsByClassName('title');
// console.log(items);
// items[0].textContent = "ADD ITEMS"
// items[0].style.color = "green";


// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello2';
// items[1].style.fontWeight = 'bold';
// items[2].style.backgroundColor = 'green';
// for(var i = 0; i<items.length; i++)
// {
//     items[i].style.fontWeight = 'bold'
// }

// var li = document.getElementsByTagName('li');
// console.log(li)
// li[4].style.backgroundColor = '#f4f4f4'
// for(var i = 0; i<li.length; i++)
// {
//     li[i].style.fontWeight = 'bold'
// }

// var item = document.querySelector('.list-group-item')

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green'

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.backgroundColor = 'white';
// thirdItem.style.color = 'white';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0;i<odd.length; i++)
{
    odd[i].style.backgroundColor = 'green'
}

var secondli = document.querySelectorAll('li:nth-child(2)');
for(var i = 0; i < secondli.length; i++)
{
    secondli[i].style.color = 'green'
}
