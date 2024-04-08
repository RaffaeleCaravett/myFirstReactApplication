import { useState } from 'react'

const Create = () =>{
const [title,setTitle] = useState('');
const [body,setBody] = useState('');    
const [author,setAuthor] = useState('');


const sendRequest = (e) => {
    e.preventDefault();
}

    return (
        <div className="formDiv">
            <h1>Add a blog</h1>
<form onSubmit={sendRequest}>
    <label>Inserisci il titolo del blog :</label>
    <input 
    type="text"
    required
    onChange={(e)=>{setTitle(e.target.value)}}
    />
    <label>Inserisci il testo del blog :</label>
    <textarea
    type="text"
    required
    onChange={(e)=>{setBody(e.target.value)}}
    >
    </textarea>
    <label>Inserisci l'autore :</label>
    <input 
    type="text"
    required
    onChange={(e)=>{setAuthor(e.target.value)}}
    />
    <button>Crea blog</button>
</form>
        </div>
    )
}

export default Create;