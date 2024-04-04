const BlogList = (props) => {

const blog = props.blog
const title= props.title
const cancellati = props.cancellati


return(

<div className="blogs">
    <h2>{title}</h2>
    {blog.map((b)=>(
<div className="blog-preview" key={b.id}>
    <h1>{b.title}</h1>
    <p>{b.body}</p><span>{b.author}</span>   
    <button onClick={()=>props.handleDelete(b.id)}>Delete blog</button>
</div>
    )
    )}

    <div className="deleted">
    <h2>Cancellati:</h2>
        {cancellati.map((c)=>(
            <div className="cancellati-preview" key={c.id}>
    <h1>{c.title}</h1>
    <p>{c.body}</p><span>{c.author}</span>   
    <button onClick={()=>props.handleDelete(c.id)}>Delete blog</button>
</div>
        ))}
    </div>
</div>
)
}
export default BlogList;