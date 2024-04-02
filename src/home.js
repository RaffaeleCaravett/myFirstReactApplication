import { useState } from "react"

const Home = () =>{

const [name, setName] = useState('Raffaele')
const [age,setAge] = useState(29)

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
return (
    <div className="Home">
        <h1 onClick={handleClick}>Home</h1>
        <button onClick={(e)=> {handleClickAgain(name,e)}}>Say hi to me</button>
        <button onClick={changeName}>Change my name</button>
        <div className="div">
            Ciao {name}, you are {age} 
        </div>
    </div>
);
}

export default Home;