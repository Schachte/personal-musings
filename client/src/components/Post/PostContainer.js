import React from 'react';

function PostContainer(props) {
    return (
        <div>
            <div class="blog-title-container">
                <div class="post-tags blog-post-tags">
                    <span class="tag post-tag-purple">Health</span>
                    <span class="tag post-tag-green">Algorithms</span>
                    <span class="tag post-tag-orange">Java</span>
                    <span class="tag post-tag-red">Databases</span>
                </div>
                <span class="blog-title-main">{props.title}</span>
            </div>

            <div class="blog-post-heading">
                <div class="heading-metacontent">
                    <span>September 20th, 2020</span> <span id="title-sep">/</span>
                    <span>7 minute read</span>
                </div>
                <img
                    src="https://i.ibb.co/hyppXrG/Screen-Shot-2020-09-14-at-10-02-43-PM.png"
                />
            </div>

            <div class="post-container">
                <div class="post-section">
                    <h2 class="post-section-title" id="whatisanindex"><span>What Is An Index?</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quam
                    temporibus, similique optio saepe mollitia dolor ipsam totam
                    impedit, vero autem libero et magni ullam cumque! Vero, dignissimos
                    minus? Earum porro totam consectetur recusandae non deleniti
                    necessitatibus illum asperiores dignissimos sunt incidunt rem harum
            soluta sapiente.</p>
                    <blockquote>
                        <p>Fuck with the cheese, get the wheel</p>
                    </blockquote>
                    <p><div class="emphasize-quote">This is an emphasized quote!</div></p>
                </div>
            </div>
        </div>
    );
}

export default PostContainer;