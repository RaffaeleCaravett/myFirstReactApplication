import { useEffect, useState } from "react"
import BlogList from "./blogList"
import useFetch from "./useFetch"

const Home = () =>{

const [name, setName] = useState('Raffaele')
const [age,setAge] = useState(29)


let show =true

const handleClickAgain = (name,e) => {
    console.log('hi ' + name,e)
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





const {data,isPending,error} = useFetch('http://localhost:8000/blog')

useEffect(()=>{
})
return (
    <div className="Home">
        <h1>Home</h1>
        <button onClick={(e)=> {handleClickAgain(name,e)}}>Say hi to me</button>
        <button onClick={changeName}>Change my name</button>
        <div className="div">
            Ciao {name}, you are {age} 
        </div>
        <div>
            {isPending && <div className="loading">Loading ...</div>}
            {error && <div className="loading">{error}</div>}
{data && <BlogList blog={data} title="My first website's blogs"/>}
</div>
    </div>
);
}

export default Home;