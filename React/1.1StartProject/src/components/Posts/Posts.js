// import React, { Component } from 'react';
// // import post from '../components/Post/Post';

// class Posts extends Component {
//     state = {
//         posts: [],
//         // author: "Roy",
//         // selectedPostId: null,
//         // newPost: null
//     }

//     render () {
//         let posts = <p style ={{textAlign: 'center'}}> Something went wrong</p>
//         if(!this.state.error){
//             posts = this.state.posts.map(post => {
//                 return <Post 
//                     key={post.id}
//                     title={post.title}
//                     author={post.author}
//                     clicked={() => this.postSelectedHandler(post.id)}
//             });
//         }
//         return (
//             <section className="posts">
//                 {posts}
//             </section>
//         )
//     }
// }