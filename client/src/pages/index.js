import BlogContainer from '../components/Blog/BlogContainer'
import PostContainer from '../components/Blog/PostContainer'
import ProjectsContainer from '../components/Projects/ProjectsContainer'

import Headline from '../components/Headline/Headline'
import SectionHeader from '../components/Common/SectionHeader'
import LinkPill from '../components/Common/LinkPill'
import buildClient from '../../api/build-client'

// Limit max number of blog posts to show on homepage
const maxLimit = 4

const Home = (props) => {
    return (
        <div>
            <Headline />
            <BlogContainer>
                <SectionHeader sectionHeader={'Latest Musings'}>
                    <LinkPill pillTitle={'Posts'} />
                    <LinkPill pillTitle={'Articles'} />
                    <LinkPill pillTitle={'Videos'} />
                </SectionHeader>
                <PostContainer posts={props.posts} />
            </BlogContainer>
            <ProjectsContainer />
        </div>
    )
}

Home.getInitialProps = async (context) => {
    const { data } = await buildClient(context).get(`/posts/${maxLimit}`)
    return { posts: data }
}

export default Home
