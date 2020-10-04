import BlogContainer from '../components/Blog/BlogContainer'
import PostContainer from '../components/Blog/PostContainer'
import ProjectsContainer from '../components/Projects/ProjectsContainer'

import Headline from '../components/Headline/Headline'
import SectionHeader from '../components/Common/SectionHeader'
import LinkPill from '../components/Common/LinkPill'
import buildClient from '../../api/build-client'

const Home = (props) => {

    return (
      <div>
          <Headline />
          <BlogContainer>
              <SectionHeader sectionHeader={"Latest Musings"}>
                  <LinkPill pillTitle={"Posts"}/>
                  <LinkPill pillTitle={"Articles"}/>
                  <LinkPill pillTitle={"Videos"}/>
              </SectionHeader>
              <PostContainer/>
          </BlogContainer>
          <ProjectsContainer />
      </div>
    );
}

Home.getInitialProps = async (context) => {
    const { data } = await buildClient(context).get('/posts')
    return {}
}

export default Home;