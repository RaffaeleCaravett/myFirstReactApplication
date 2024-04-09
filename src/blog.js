import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch"

const Blog = () => {

const { id } = useParams()

const {data,isPending,error} = useFetch(`http://localhost:8000/blog/${id}`)
const history= useHistory();

const deleteBlog = ()=>{
    fetch('http://localhost:8000/blog/'+id,
    {
        method:'DELETE',
    })
    .then(res=>{
        if(res){
alert('Blog cancellato')
setTimeout(()=>{
    history.push('/')
})
        }else{
            throw Error('Errore nella rimozione del dato.')
        }
    })
    .catch(error=>{
        alert(error.message)
    })
}

return (
    <div className="blogs">
        <h1>Blog Component</h1>
        <div>
           {!error && <p>Now showing blog with id : {id}</p>} 
           {isPending && <p> Loading ...</p>}
           {error && <p> C'è stato un errore nel recupero del blog</p>}
        </div>
        {data && <div className="blog-preview" key={data.id}>
        <div className="button-delete">
        <button onClick={deleteBlog}> Delete</button>
       </div>
    <h1>{data.title}</h1>
    <p>{data.body}</p><span>{data.author}</span>   
    
</div>}
    </div>
)
}

export default Blog;