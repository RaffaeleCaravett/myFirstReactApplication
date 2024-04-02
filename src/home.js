const Home = () =>{

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

return (
    <div className="Home">
        <h1 onClick={handleClick}>Home</h1>
        <button onClick={(e)=> {handleClickAgain('Raffaele',e)}}>Say hi to me</button>
        <div className="div">
            Ciao
        </div>
    </div>
);
}

export default Home;