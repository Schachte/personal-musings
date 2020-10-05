import Post from './Post'

function PostContainer({posts}) {
    const dateOptions = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}

    // Simple pre-cleanse formatting
    const titleCase = (str) =>
        str
            .split(' ')
            .map((i) => i[0].toUpperCase() + i.substring(1).toLowerCase())
            .join(' ')
    const englishDate = (str) => new Date(str).toLocaleDateString('en-US', dateOptions)

    // Component render
    return posts.map((post) => <Post title={titleCase(`${post.title}`)} date={englishDate(`${post.created_on}`)} />)
}

export default PostContainer
