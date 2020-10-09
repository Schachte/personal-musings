import React from 'react'
import ProjectsContainer from '../Projects/ProjectsContainer'
const showdown = require('showdown')
const Parser = require('html-react-parser')

const classReplace = {
    type: 'output',
    regex: new RegExp(`\<([^\si]+).*\>\\[\.(.*)\\]`, 'g'),
    replace: `<$1 class="$2">`,
}

const converter = new showdown.Converter({
    extensions: [classReplace],
})

const text = `
##[.post-section-title] What is an index?

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quam
temporibus, similique optio saepe mollitia dolor ipsam totam
impedit, vero autem libero et magni ullam cumque! Vero, dignissimos
minus? Earum porro totam consectetur recusandae non deleniti
necessitatibus illum asperiores dignissimos sunt incidunt rem harum
soluta sapiente.

> Fuck with the cheese, get the wheel

[.emphasize-quote]this is a test!

##[.post-section-title] How can we uwefwefwefwefnderstand?

test

> This is another cool block test!

`

function PostContainer(props) {
    return (
        <div>
            <div className="blog-title-container">
                <div className="post-tags blog-post-tags">
                    <span className="tag post-tag-purple">Health</span>
                    <span className="tag post-tag-green">Algorithms</span>
                    <span className="tag post-tag-orange">Java</span>
                    <span className="tag post-tag-red">Databases</span>
                </div>
                <span className="blog-title-main">{props.slugName}</span>
            </div>

            <div className="blog-post-heading">
                <div className="heading-metacontent">
                    <span>September 20th, 2020</span> <span id="title-sep">/</span>
                    <span>7 minute read</span>
                </div>
                <img src="/images/blogpost.png" />
            </div>

            <div className="post-container">
                <div className="post-section">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: converter.makeHtml(text),
                        }}></div>
                </div>
            </div>
        </div>
    )
}

export default PostContainer
