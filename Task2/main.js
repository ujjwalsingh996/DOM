// single element
// console.log(document.getElementById('my-form'))

// console.log(document.querySelector('.container'))

// multiple element

// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('Li'))


// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items')

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello"
// ul.children[1].innerText = "Brad;"
// ul.lastElementChild.innerHTML = "<h1> Hello </h1>"

// const btn = document.querySelector('.btn');
// btn.style.background = 'red'

// const li = document.querySelector('.items');
// li.firstElementChild.textContent = "HELLO"
// li.firstElementChild.style.background = 'green'
// li.children[1].style.background = 'yellow'


// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('click')
//     document.querySelector('#my-form').style.background ="#ccc"
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });
// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background ="#ccc"
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background ="#ccc"
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>'
// });


// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList= document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     if(nameInput.value === '' || emailInput.value === '')
//     {
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter all Fields'

//         setTimeout(() => msg.remove(), 3000);
//     }
//     else
//     {
//         const li = document.createElement('Li');
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)) 
//         userList.appendChild(li);
//         console.log(nameInput.value,emailInput.value)

//         //clearing the fields;
//         nameInput.value = ''    
//         emailInput.value = ''
        
        
//    }
// }

// localStorage.setItem('name', 'Bob')
// localStorage.removeItem('name');

// sessionStorage.setItem('name', 'John');
// // sessionStorage.removeItem('name');
// sessionStorage.setItem('name', 'Bob');

// document.cookie = 'name=Kyle; expires=' + new Date(2024, 0 ,1).toUTCString

// document.cookie = 'lastName=Smith; expires=' + new Date(2024, 0 ,1).toUTCString

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList= document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '')
    {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all Fields'

        setTimeout(() => msg.remove(), 3000);
    }
    else
    {

        //converting details into object
        // var myObj = {
        //     name : nameInput.value,
        //     email : emailInput.value
        // } 

        // //converting the object to string to store in local storage
        // myObj_Serialized = JSON.stringify(myObj)

        // //adding in the local storage on submit
        // localStorage.setItem(emailInput.value, myObj_Serialized)

        // //deserializing the object
        // myObj_Deserialized = JSON.parse(localStorage.getItem(emailInput.value))

        //storing it on the page
        const li = document.createElement('Li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)) 
        userList.appendChild(li);


        //clearing the fields;
        nameInput.value = ''    
        emailInput.value = ''
        
        
   }
}