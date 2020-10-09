import React from 'react'
import { useRouter } from 'next/router'
import PostContainer from '../../components/Post/PostContainer'

const Post = (props) => {
    const router = useRouter()
    const { slug } = router.query

    return (
        <div>
            <PostContainer slugName={slug} />
        </div>
    )
}

Post.getInitialProps = async (context) => {
    // const {data} = await buildClient(context).get(`/posts/${maxLimit}`)
    return {posts: []}
}

export default Post