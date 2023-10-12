

const displayDrinks = async( {drinks})=>{
    const title = document.querySelector(".heading")
    const section = document.querySelector(".cards")
    if(!drinks){
        title.textContent = "sorry no such cocktails"
        section.innerHTML = null

    }else{
        const newdrinks = drinks.map( (drink)=>{
            return `  
      
            <img src="${drink.strDrinkThumb}">`


        }).join('')
        title.textContent = "COCKTAILS API"
        section.innerHTML = newdrinks
        return section
    }

}
export default displayDrinks