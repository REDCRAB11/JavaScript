const testimonials = [
    {
        name:"Brittan Q",
        photoUrl:"https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
        text:"I don't always clop, but when I do, it's because of animal. I STRONGLY recommend animal to EVERYONE interested in running a successful online business! Animal has completely surpassed our expectations. I like animal more and more each day because it makes my life a lot easier"
    },
    {
        name:"Nikki B",
        photoUrl:"https://images.unsplash.com/photo-1543946207-39bd91e70ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
        text:"Your company is truly upstanding and is behind its product 100%"
    },
    {
        name:"Redford O",
        photoUrl:"https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
        text:"It's really wonderful. We were treated like royalty."
    },
];

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx = 0;

updateTestmonial();

function updateTestmonial(){
const{name, photoUrl, text} =
testimonials[idx]
imgEl.src = photoUrl;
textEl.innerText = text;
usernameEl.innerText = name;
idx++ 
if(idx === testimonials.length){
    idx=0;
}
setTimeout(()=>{
    updateTestmonial()
},10000)
}