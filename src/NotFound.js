import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () =>{
    
    return(

<div className="not-found">
    <h1>Ops ...</h1>
    <p>La pagina che stavi cercando non esiste,</p>
    <Link className="links" to="/">
    <p className="home">Torna alla home.</p>    
    </Link>
</div>


    )
}

export default NotFound;