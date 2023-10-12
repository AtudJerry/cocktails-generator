import presentDrinks from "./presentDrinks.js"


    const form= document.querySelector(".form")
    const nam = document.querySelector('[name="drink"]')

    form.addEventListener('keyup',(e)=>{
        e.preventDefault()
        console.log(nam.value)
    })
const formm = document.querySelector(".form")
const input = document.querySelector("[name = 'drink']")
formm.addEventListener('keyup', (e)=>{
    e.preventDefault()
    if(!input.value){
        return
    }else{
        presentDrinks(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`)
    }
    console.log(input.value)
})