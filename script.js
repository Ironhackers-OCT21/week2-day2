
console.log('Hey Ironhackers!')

//console.log (document )

// -------------------------------------------------------
// -------------------------------------------------------
// DOM SELECTORS 
// -------------------------------------------------------
// -------------------------------------------------------

// .getElementById
/*
let h2Elem = document.getElementById('title2')
console.log(h2Elem)
*/

// -------------------------------------------------------
// QuerySelector ->  returns only the first matching element
// -------------------------------------------------------
/*
// targets the element with id ->  title2
let h2Elem = document.querySelector('#title2')
console.log(h2Elem)

// targets the element with class ->  myInputs
let divElem = document.querySelector('.myInputs')
console.log(divElem)

let inputElem = divElem.querySelector('input')
console.log(inputElem)


let inputElem1 = document.querySelector('.myInputs input')
console.log(inputElem1)
*/
// -------------------------------------------------------
// QuerySelectorAll ->  returns all the matching elements
// -------------------------------------------------------

// finds all matching elements with a class -> paragraph
/*
let allParas1 = document.getElementsByClassName('paragraph')
console.log(allParas1)


let allParas = document.querySelectorAll('.paragraph')
console.log(allParas)

allParas.forEach((singleElement) => {
   console.log(singleElement)
})

*/
// -------------------------------------------------------
// -------------------------------------------------------
// DOM MANIPULATION 
// -------------------------------------------------------
// -------------------------------------------------------

/*
let h1Dom = document.querySelector('h1')

h1Dom.innerText = 'Hey Ironhackers'
*/
/*
let section = document.querySelector('.products')

console.log( section.innerText )
console.log( section.innerHTML )


//section.innerHTML = '<h1>Hello Manish</h1>'

// Setting any attribute to the element
section.setAttribute('id', 'ironhack')
// section.setAttribute('class', 'ironhack')

// change classes
section.classList.add('newClass')
section.classList.remove('products')
section.className = 'manish bootstrap'
*/

// -------------------------------------------------------
// -------------------------------------------------------
// DOM MANIPULATION ACTIVITY SOLUTION 
// -------------------------------------------------------
// -------------------------------------------------------

/*
// 1: Get the node with the  main title

let title = document.querySelector('h1')
console.log(title)
// => <h1>Fruits and veggies</h1>
// ----------------------------------------------

// 2: Get the main title text

console.log(title.innerText)

// => Fruits and veggies
// ----------------------------------------------

// 3: Get all the nodes with the fruit items

let fruits = document.querySelectorAll('.fruit-item')
console.log(fruits)

// => NodeList(4) [li.fruit-item, li.fruit-item, li.fruit-item, li.fruit-item]
// ----------------------------------------------

// 4: Get all the veggie items - the text
// think about loops, innerText vs innerHTML

// let luise = document.querySelector('.veggies')
// console.log(luise.innerText)

let veggies = document.querySelectorAll('.veggie-item')
veggies.forEach((singleVeggie) => {
    console.log(singleVeggie.innerText)
})

// Broccoli Celery Potato Spinach
// ----------------------------------------------

// 5: Add a class 'best-fruit' to the 1st and the 3rd fruit
// think about loops, ways to add classes to an element

fruits.forEach((singleFruit, index) => {
    if (index == 0 || index == 2) {
        singleFruit.classList.add('best-fruit')
    }
})


// => <li class="fruit-item best-fruit">Pear</li>
// => <li class="fruit-item best-fruit">Plum</li>
// ----------------------------------------------

// 6: Remove class 'veggie-item' from 'spinach'
veggies.forEach((singleVeggie) => {
    if (singleVeggie.innerText == 'Spinach') {
        // singleVeggie.classList.remove('veggie-item')
        singleVeggie.className = 'veggie-love' 
    }
})

// => ... <li class="veggie-love">Spinach</li>
*/

// -------------------------------------------------------
// -------------------------------------------------------
//             EVENT LISTENERS
// -------------------------------------------------------
// -------------------------------------------------------

// select the element
/*

let title = document.querySelector('h1')
title.addEventListener('click', (event) => {
    console.log( event ) 
    console.log('See, my title was clicked')
    title.innerText = 'Voilaaaa!!'
    title.style.color = 'blue'
})


let input = document.querySelector('.myInputs input[type="text"]')

input.addEventListener('keydown', (event) => {
    console.log(event.key)
    //console.log(input.value)
})


// IN CLASS EVENT LISTENER ACTIVITY

function createAddListener(){
    let addBtn = document.querySelector('#increment')
    let money = document.querySelector('#counter span')
    addBtn.addEventListener('click', () => {
        //To remove elements from the DOM
        // use the .remove() method in DOM nodes
        let title = document.querySelector('h1')
        title.remove()

        if (Number(money.innerText) < 10) {
            money.innerText++
        }
        // money.innerText = Number(money.innerText) + 1
        // money.innerText = money.innerText - 1 + 2
        // money.innerText = +money.innerText + 1
    })
}

function createSubListener(){
    let subBtn = document.querySelector('#decrement')
    let money = document.querySelector('#counter span')
    subBtn.addEventListener('click', () => {
        if ( Number(money.innerText) > 0 ) {
            money.innerText--
        }
    })
}

function handleForm(){
    // target the form 
    let myform = document.querySelector('#myForm')
    // add an event listener on the form
    myform.addEventListener('submit' , (event) => {
        // prevents the form's default behaviour of sending requests in the url
        event.preventDefault()

        let ageDom = myform.querySelector('#number')
        let nameDom = myform.querySelector('#name')

        let myLi = document.createElement('li')
        //myLi.innerText = `I am ${nameDom.value}, ${ageDom.value} years old`
        
        myLi.innerHTML = `
           <div>
              <p> ${nameDom.value} </p>
           </div>
        `
        
        // myLi.setAttribute('class', 'ironhack')
        
        let ul = document.querySelector('#output')
        ul.appendChild(myLi)

        nameDom.value = ''
        nameDom.setAttribute('placeholder', 'Ennter 2nd name')
        ageDom.value = ''
    })
}


// waiting for images/stylesheets/external files to be ready
window.addEventListener('load', () => {
    handleForm()
    createAddListener()
    createSubListener()
})

*/

// -------------------------------------------------------
// -------------------------------------------------------
//               EVENT LISTENERS ACTIVITY
// -------------------------------------------------------
// -------------------------------------------------------


// check the load eventlistener at the bottom 
function mySubmitEventListener(){
    let myForm  = document.querySelector('#new-task-form')
     myForm.addEventListener('submit', e => {
         e.preventDefault();

         let taskDom = document.querySelector('#task-input')
         let ownerDom = document.querySelector('#owner-input')  

         let li = document.createElement('li')
         li.innerText = `Task is ${taskDom.value} by ${ownerDom.value}`

         let ul = document.querySelector('#tasks-list')
         ul.appendChild(li)

         taskDom.value = ''
         ownerDom.value = ''

     });
}

// ****************************** part 2 ******************************


// 5: bonus: make it so every time you  click on the 'Update gif' button, a different gif (one of these two) appears

function minions(){
    let btn = document.querySelector('#update-button')
    btn.addEventListener('click', () => {
    
        let iframeDOM = document.querySelector('iframe')
        // iframeDOM.src =  'https://giphy.com/embed/1MTLxzwvOnvmE'
        // iframeDOM.setAttribute('src', 'https://giphy.com/embed/1MTLxzwvOnvmE')
        if (iframeDOM.src == 'https://giphy.com/embed/1MTLxzwvOnvmE') {
            iframeDOM.src = 'https://giphy.com/embed/MOWPkhRAUbR7i'
        }    
        else {
            iframeDOM.src = 'https://giphy.com/embed/1MTLxzwvOnvmE'
        }
    })

}


// EVERYTHING STARTS FROM HERE
window.addEventListener('load', () => {
  mySubmitEventListener()
  minions()
});