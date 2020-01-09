import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        author: "Roy",
        selectedPostId: null,
        newPost: null
    }

    componentDidMount () {
        Axios.get('Http://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data.slice(0,9);
            const updatedPosts = posts.map(posts => {
                return {                    
                    ...posts,
                    author: "Roy"
                }
            })
             this.setState({posts: updatedPosts})
            console.log(response);
        })
        .catch(error => this.setState({error: true}));
    }

    clickHandler (id){
            this.setState({clickHandler :id})
    }

   

    postDataHandler = (data) => {
        this.setState(() => {
            
        }
        )
    }

    render () {
        // let data = null;
        const posts = this.state.posts.map(post => {
            return <Post 
                key ={post.id} 
                title = {post.title} 
                author ={post.author}
                clicked={() => this.clickHandler(post.id)}/>
        });
      
        return (
            <div className="Blog">
                <header >
                    <nav>
                        <ul>
                           <li> <a href="/" >Home </a></li> 
                           <li> <a href="/new-post" >New Post</a></li> 
                        </ul>
                    </nav>
                </header>
                <section className="Posts">            
                    {posts}
               </section>
                <section>
                    <FullPost id={this.state.clickHandler}/>
                </section>
                <section>
                    <NewPost postData={this.postDataHandler}/>
                </section>
            </div>
        );
    }
}

export default Blog;


