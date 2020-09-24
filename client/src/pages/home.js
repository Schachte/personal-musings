import React from 'react';
import '../styles/themes/theme.css'
import '../App.css'

import BlogContainer from '../components/Blog/BlogContainer'
import PostContainer from '../components/Blog/PostContainer'
import ProjectsContainer from '../components/Projects/ProjectsContainer'

import Headline from '../components/Headline/Headline'
import SectionHeader from '../components/Common/SectionHeader'
import LinkPill from '../components/Common/LinkPill'

function Home() {
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

export default Home;
