
// const nums =["1","2","3","4","5"]
// nums.foreach((num)=>{
//     const heading= document.getElement("h3");
//     heading.innerHTML = num;
//     document.body.appendChild(heading);
// })
const dataProduct=async()={
    const data=await fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{return json})
}
data.forEach(element>={
    const heading =document.createElement('h2');
    heading.innerHTML=element.title;
    document.body.appendChild(heading)
});
dataProduct();