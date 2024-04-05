import { useState, useEffect } from "react"
import BlogList from "./blogList"

const Home = () =>{

const [name, setName] = useState('Raffaele')
const [age,setAge] = useState(29)

const[blog,setBlogs] = useState(
    []
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

useEffect(()=>{
    console.log('use effect ran')
    fetch('  http://localhost:8000/blog')
    .then(res=>{
        return res.json();
    })
    .then(data=>{
        setTimeout(()=>{
        setBlogs(data)
        setIsPending(false)
        },1000)
    })
},[])
const handleRestore = (id) => {
    let newBlog = blog;
    cancellati.forEach(blog=>{
        if(blog.id===id){
newBlog.push(blog)
        }
    })
    setBlogs(newBlog);

    let newCancellati=cancellati.filter((c)=> c.id!==id)
    setCancellati(newCancellati)
}

const [isPending,setIsPending] = useState(true)

return (
    <div className="Home">
        <h1 onClick={handleClick}>Home</h1>
        <button onClick={(e)=> {handleClickAgain(name,e)}}>Say hi to me</button>
        <button onClick={changeName}>Change my name</button>
        <div className="div">
            Ciao {name}, you are {age} 
        </div>
        <div>
            {isPending && <div className="loading">Loading ...</div>}
{blog &&<BlogList blog={blog} title="My first website's blogs" handleDelete={handleDelete} cancellati={cancellati}
handleRestore={handleRestore}/>}
</div>
    </div>
);
}

export default Home;