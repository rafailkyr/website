import React from 'react'
import './Post.css'
import '../../index.css'
import posts from '../../utils/posts.js'

function Post(props) {
    
    const changePostId = (postId) => {
		props.changePostId(postId);
	}

    const id = props.id;

    return (

        <article className="about active" data-page="about">

            <header className="h2 back-arrow" onClick={() => changePostId(-1)}>
                <ion-icon name="arrow-back-outline"/>
            </header>
            
            <header className='post-title'>
                <h2 className='h2'>{posts[id].title}</h2>
            </header>

            <img alt='post-image' src={posts[id].image} className='post-image'/>

            <section className="post-text">
                <td dangerouslySetInnerHTML={{__html: posts[id].text}} />
            </section>

        </article>
    )
}

export default Post