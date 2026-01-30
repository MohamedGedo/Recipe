export async function getAllCategory(){

try{
const res =await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
return res.json()
}
catch(error){
console.log(error);

}



}