import React from 'react';
import '../src/styles/themes/theme.css'
import "./App.css"

import BlogContainer from './components/Blog/BlogContainer'
import PostContainer from './components/Blog/PostContainer'
import ProjectsContainer from './components/Projects/ProjectsContainer'

import Headline from './components/Headline/Headline'
import Navigation from './components/Navigation/Navigation'
import SectionHeader from './components/Common/SectionHeader'
import Post from './components/Blog/Post'
import Footer from './components/Footer/Footer'
import LinkPill from './components/Common/LinkPill'

function RootWrapper({children}) {
  return (
    <div className="main-container">
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Navigation/>
      <RootWrapper>
          <Headline imgLink={'https://i.ibb.co/z5Gqz0Q/Screen-Shot-2020-09-14-at-11-04-31-AM.png'} />
            <BlogContainer>
                <SectionHeader sectionHeader={"Latest Musings"}>
                    <LinkPill pillTitle={"Posts"}/>
                    <LinkPill pillTitle={"Articles"}/>
                    <LinkPill pillTitle={"Videos"}/>
                </SectionHeader>
                <PostContainer/>
            </BlogContainer>
            <ProjectsContainer />
            <Footer/>
        </RootWrapper>
    </div>
  );
}

export default App;
