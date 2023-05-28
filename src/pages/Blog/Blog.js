import React from 'react'
import posts from '../../utils/posts.js'

import './Blog.css'

function Blog(props) {

	const changePostId = (postId) => {
		//props.changePostId(postId);
	}

	return (
		<article className="portfolio active" data-page="portfolio">

			<header>
				<h2 className="h2 article-title">Blog</h2>
			</header>

			<section className="projects">

				<ul className="project-list">

					{ posts.map((post, i) =>

						<li className="project-item  active" >

							<a className='post' onClick={() => changePostId(i)}>

								<figure className="project-img">
									<div className="project-item-icon-box">
										<div className='soon'>
											Coming soon
										</div>
										{/*<ion-icon name="eye-outline"></ion-icon>*/}
									</div>
									<img src={post.image} alt={post.title} loading="lazy"/>
								</figure>

								<h3 className="project-title">{post.title}</h3>
								<p className="project-category">{post.tag}</p>

							</a>

						</li>

					)}

				</ul>

			</section>
		</article>
	)
}

export default Blog
