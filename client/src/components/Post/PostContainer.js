import React from 'react'

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
                <span className="blog-title-main">{props.title}</span>
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
                    <h2 className="post-section-title" id="whatisanindex">
                        <span>What Is An Index?</span>
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quam temporibus, similique optio
                        saepe mollitia dolor ipsam totam impedit, vero autem libero et magni ullam cumque! Vero,
                        dignissimos minus? Earum porro totam consectetur recusandae non deleniti necessitatibus illum
                        asperiores dignissimos sunt incidunt rem harum soluta sapiente.
                    </p>
                    <blockquote>
                        <p>Fuck with the cheese, get the wheel</p>
                    </blockquote>
                    <p>
                        <div className="emphasize-quote">This is an emphasized quote!</div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PostContainer
