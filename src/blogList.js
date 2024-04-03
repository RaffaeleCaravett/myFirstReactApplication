const BlogList = (props) => {

const blog = props.blog
console.log(props)
const title= props.title
return(

<div className="blogs">
    <h2>{title}</h2>
    {blog.map((b)=>(
<div className="blog-preview" key={b.id}>
    <h1>{b.title}</h1>
    <p>{b.body}</p><span>{b.author}</span>   
</div>
    )
    )}
</div>
)
}
export default BlogList;