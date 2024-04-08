import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Blog = () => {

const { id } = useParams()

return (
    <div className="blogs">
        <h1>Blog Component</h1>
        <div>
           <p>Now showing blog with id : {id}</p> 
        </div>
    </div>
)
}

export default Blog;