
import fetchDrinks from './fetchDrinks.js'
import displayDrinks from './displayDrinks.js'
const showdrinks = async(url)=>{
    const data = await fetchDrinks(url)
    const disp = await displayDrinks(data)
    console.log(data)
   return disp
}



export default showdrinks

 