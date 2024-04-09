import { Link } from "react-router-dom"

const BlogList = (props) => {

const blog = props.blog
const title= props.title


return(

<div className="blogs">
    <div className="available">
        <h2>{title}</h2>
    {blog.map((b)=>(
<div className="blog-preview" key={b.id}>
    <div className="button-delete">Delete</div>
    <Link to={`/blogs/${b.id}`} className="links">
    <h1>{b.title}</h1>
    </Link>
    <p>{b.body}</p><span>{b.author}</span>   
    
</div>
    )
    )}
    </div>
    </div>
)
}
export default BlogList;