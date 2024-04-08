const Create = () =>{

    

    return (
        <div className="formDiv">
            <h1>Add a blog</h1>
<form>
    <label>Inserisci il titolo del blog :</label>
    <input 
    type="text"
    required/>
    <label>Inserisci il testo del blog :</label>
    <input 
    type="text"
    required/>
    <label>Inserisci l'autore :</label>
    <input 
    type="text"
    required/>
</form>
        </div>
    )
}

export default Create;