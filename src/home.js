import { useState } from "react"

const Home = () =>{

const [name, setName] = useState('Raffaele')
const [age,setAge] = useState(29)

const[blog,setBlogs] = useState(
    [
    {title:'ahaishfisdj', body:'fgsauoifhasdo',author:'iasufhdilsus'},
    {title:'ahaishfisdj', body:'fgsauoifhasdo',author:'iasufhdilsus'},
    {title:'ahaishfisdj', body:'fgsauoifhasdo',author:'iasufhdilsus'},
    {title:'ahaishfisdj', body:'fgsauoifhasdo',author:'iasufhdilsus'}
    ]
    )

const handleClick = (e) => {
    console.log('hi')
}
let show =true

const handleClickAgain = (name,e) => {
    console.log('hi' + ' ' + name,e)
   let div = document.getElementsByClassName('div')[0]
show=!show
if(show){
    if(div!==undefined && div!== null){
div.classList.add('hide')
}
}else{
    if(div!==undefined && div!== null){
        div.classList.remove('hide')
        }  
}

}

const changeName = () =>{
    console.log(name)
    setName('Raffo')
    setAge("29, but you feel 19")
    console.log(name)
}
let showBlogsBoolean = false

const showBlogs = () =>{
     let div = document.getElementsByClassName('blogs')[0]
     let button = document.getElementsByClassName("blogsButton")[0]

if(!showBlogsBoolean){
       
div.innerHTML=''
    for(let b of blog){
        div.innerHTML+=`<div>Title : ${b.title} , author : ${b.author} , body : ${b.body} </div>`
    }
    showBlogsBoolean=!showBlogsBoolean

button.textContent="Hide blogs"
}else{
    div.innerHTML=''
    button.textContent="Show blogs"
    showBlogsBoolean=!showBlogsBoolean

}
}
return (
    <div className="Home">
        <h1 onClick={handleClick}>Home</h1>
        <button onClick={(e)=> {handleClickAgain(name,e)}}>Say hi to me</button>
        <button onClick={changeName}>Change my name</button>
        <div className="div">
            Ciao {name}, you are {age} 
        </div>
        <div>
<button onClick={showBlogs} class="blogsButton">Show blogs</button>
<div className="blogs"></div>
</div>
    </div>
);
}

export default Home;