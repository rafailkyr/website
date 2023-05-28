import React, {useState} from 'react'

import './App.css';
import './index.css';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Post from './pages/Post/Post';

function App() {

  const [page, setPage] = useState('about');
  const [postId, setPostId] = useState(-1);

  const changePage = (pageName) => {
    setPage(pageName);
  }

  const changePostId = (postId) => {
		setPostId(postId);
    console.log(postId)
	}

  return (
    <main>
      <Profile />
      <div className="main-content">

          {postId === -1 ? <Navbar page={page} changePage={changePage} /> : ""}

          { 

            page === 'about' ? <About /> : 
            postId === -1 ? <Blog changePostId={changePostId} changePage={changePage} /> : 
            <Post id={postId} changePostId={changePostId} /> 

          }
       
        </div>
    </main>
  );
}

export default App;
