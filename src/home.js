const Home = () =>{

const handleClick = (e) => {
    console.log('hi')
}

const handleClickAgain = (name,e) => {
    console.log('hi' + ' ' + name,e)
}

return (
    <div className="Home">
        <h1 onClick={handleClick}>Home</h1>
        <button onClick={(e)=> {handleClickAgain('Raffaele',e)}}>Say hi to me</button>
    </div>
);
}

export default Home;