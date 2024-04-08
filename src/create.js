import { useState } from 'react'

const Create = () =>{

const [title,setTitle] = useState('');
const [body,setBody] = useState('');    
const [author,setAuthor] = useState('');
const [error,setError] = useState(false);
const [isPending,setIsPending] = useState(false);
const [saved,setSaved] = useState(false);


const sendRequest = (e) => {
    e.preventDefault();
const blog = {title,body,author}
setSaved(false)
setIsPending(true)
setError(false)
fetch('http://localhost:8000/blog',{
    method:'POST',
    headers: {"Content-Type":"application/json" },
    body: JSON.stringify(blog)
}).then(res=>{
       console.log(res)
    if(res){ 
        setIsPending(true)
        setTimeout(()=>{
        setError(false)
        setIsPending(false)
        setSaved(true)
        },1000)
       
    }else if(!res.ok){
        throw Error('Errore nel salvataggio')
    }
}).catch(err=>{
    setIsPending(true)
    setTimeout(()=>{
        setIsPending(false)
        setError(err.message)
    setSaved(false)
    },1000)
}).finally(f=>{
    setTitle('')
    setBody('')
    setAuthor('')
}
    
)

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
{isPending && <p>Loading ...</p>}
{saved && <p>Blog salvato</p>}
{error && <p>{error||"Qualcosa è andato storto nel salvataggio"}</p>}
        </div>
    )
}

export default Create;