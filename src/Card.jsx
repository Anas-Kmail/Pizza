import { useEffect, useState } from "react";
import  './Card.module.css'

export default function Card(){
    const [prodects,setproduct]=useState([]);


    async function getproducts(){

const response=await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
const resluts=  await response.json();
const data=resluts.recipes;
setproduct(data);
console.log(data);



}
useEffect(()=>{

getproducts();

},[]);



return(
 


<div className="container row-x">
 { prodects.map(product=>
 
  <div className="parent-1">

<div className="child-1">
<img src={product.image_url} className='img-fluid'/>

</div>
<div>
<h2>Title is :{product.title}</h2>
<span>social_rank:{product.social_rank}</span>

</div>

<div>

<a href={product.source_url}> More Details</a>
</div>





</div>







)





}

</div>


)



}