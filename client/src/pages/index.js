import BlogContainer from '../components/Blog/BlogContainer'
import PostContainer from '../components/Blog/PostContainer'
import ProjectsContainer from '../components/Projects/ProjectsContainer'

import Headline from '../components/Headline/Headline'
import SectionHeader from '../components/Common/SectionHeader'
import LinkPill from '../components/Common/LinkPill'
import React from 'react'

export default class Home extends React.Component {
  componentDidMount() {
    let app = document.getElementsByTagName("BODY")[0];
    app.setAttribute("data-theme", localStorage.schachteTheme || 'light');
  }

  render() {
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
}