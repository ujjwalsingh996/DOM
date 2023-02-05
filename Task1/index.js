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

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i = 0;i<odd.length; i++)
// {
//     odd[i].style.backgroundColor = 'green'
// }

// var secondli = document.querySelectorAll('li:nth-child(2)');
// for(var i = 0; i < secondli.length; i++)
// {
//     secondli[i].style.color = 'green'
// }

//traversing the dom

// var itemList = document.querySelector('#items');

// // parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4'

// // parentElement

// console.log(itemList.parentElement);

// // childNodes

// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow'

// //firstChild

// console.log(itemList.firstChild);

// //firstElementChild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'hello 1'

// //lastChild

// console.log(itemList.lastChild);

// //lastElementChild

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'hello4'


// // nextSibling

// console.log(itemList.nextSibling);

// //nextElementSibling

// console.log(itemList.nextElementSibling);

// // previousSibling

// console.log(itemList.previousSibling);

// //previousElementSibling

// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color = 'green'


// //createElement

// //create a div

// var newDiv = document.createElement('div');
// //add class 

// newDiv.className = 'hello'

// //add id

// newDiv.id = 'hello1'

// //add attribute

// newDiv.setAttribute('title', 'hello div');

// //create a text node

// var newDivText = document.createTextNode('Hello World');

// //add text to div

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');


// console.log(newDiv)

// newDiv.style.fontSize ='30px'


// container.insertBefore(newDiv, h1)

// var newDiv2 = document.createElement('div')
// newDiv2.className = 'hi'
// newDiv2.id = 'hii'
// newDiv2.setAttribute('title', 'hello hi');
// var newDiv2Text = document.createTextNode('Hello World')

// newDiv2.appendChild(newDiv2Text);
// var container1 = document.querySelector('.list-group');
// var ul = document.querySelector('li:nth-child(1)');

// container1.insertBefore(newDiv2, ul)

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')

//filter event
filter.addEventListener('keyup', filterItems);

//form submit event
form.addEventListener('submit', addItem);
 

//delete event
itemList.addEventListener('click', removeItem);

//create an edit button
var editbtn = document.createElement('button');

//add classes to delete btn
editbtn.className = 'btn btn-sm float-right'

//append text node
editbtn.appendChild(document.createTextNode('EDIT'));


li1 = document.getElementsByTagName('li')

//append edit button to li
for(i=0;i<li1.length;i++)
{
    li1[i].appendChild(editbtn.cloneNode(true))
}
//remove item
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are You Sure?'))
        {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
//Add item
function addItem(e)
{
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    //get input value of description
    var newItem2 = document.getElementById('description');
    var newItem3 = " " + newItem2.value

    //create new Li element
    var li = document.createElement('li');
    
    //add class
    li.className = 'list-group-item';

    // var lineBreak = document.createElement('br')
    
    //add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // li.appendChild(document.createTextNode(lineBreak));

    //add text node with input value description
    li.appendChild(document.createTextNode(newItem3));

    //create delete button element
    var deleteBtn = document.createElement('button');

    //add classes to delete btn
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));


    //append button to li
    li.appendChild(deleteBtn)

    //create an edit button
    var editbtn = document.createElement('button');

    //add classes to delete btn
    editbtn.className = 'btn btn-sm float-right'

    //append text node
    editbtn.appendChild(document.createTextNode('EDIT'));

    //append edit button to li
    li.appendChild(editbtn)
    
    //append li to list
    itemList.appendChild(li);
}


//filter items
function filterItems(e)
{
    //convert text to lowercase
    var text = e.target.value.toLowerCase();

    //Get list
    var items = itemList.getElementsByTagName('li');
    
    //convert to an array
    Array.from(items).forEach(function(item)
    {
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display = 'block'
        }
        else
        {
            item.style.display = 'none'
        }
    })
    Array.from(items).forEach(function(description)
    {
        var itemName1 = description.childNodes[1].textContent;

        if(itemName1.toLowerCase().indexOf(text) != -1)
        {
            description.style.display = 'block'
        }
        else
        {
            description.style.display = 'none'
        }
    })
}

 