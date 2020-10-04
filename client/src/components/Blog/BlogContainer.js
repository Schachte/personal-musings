import '../Common/tags.css'
import './blog.css'
import './post.css'

function BlogContainer({children}) {
    return <section className="blog-container">{children}</section>
}

export default BlogContainer
