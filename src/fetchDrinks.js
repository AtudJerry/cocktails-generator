const fetchDrinks = async(url)=>{
    try{
    const drinks = await fetch(url)
    const data = await drinks.json()
    return data
    }
    catch (error){
        console.log(error)

    }

}
export default fetchDrinks