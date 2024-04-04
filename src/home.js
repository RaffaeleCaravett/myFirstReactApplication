import { useState } from "react"
import BlogList from "./blogList"

const Home = () =>{

const [name, setName] = useState('Raffaele')
const [age,setAge] = useState(29)

const[blog,setBlogs] = useState(
    [
    {title:'ahaishfisdj', body:'fgsauoifhasdo',author:'Mario',id:1},
    {title:'ahaishfisdj', body:'fgsauoifhasdo',author:'Mario',id:2},
    {title:'ahaishfisdj', body:'fgsauoifhasdo',author:'Raffaele',id:3},
    {title:'ahaishfisdj', body:'fgsauoifhasdo',author:'Me',id:4}
    ]
    )
    const [cancellati,setCancellati]=useState([])

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
    setName('Raffo')
    setAge("29, but you feel 19")
}
const handleDelete = (id) => {
    let newCancellati = cancellati;
blog.forEach(b=>{
    if(b.id===id){
    newCancellati.push(b)
    }
})
setCancellati(newCancellati)
const newBlog= blog.filter((bl)=>
bl.id!==id)
setBlogs(newBlog)
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
<BlogList blog={blog} title="My first website's blogs" handleDelete={handleDelete} cancellati={cancellati}/>
<BlogList blog={blog.filter((b)=>b.author==='Mario')} title="Mario's blogs" handleDelete={handleDelete} cancellati={cancellati}/>
</div>
    </div>
);
}

export default Home;