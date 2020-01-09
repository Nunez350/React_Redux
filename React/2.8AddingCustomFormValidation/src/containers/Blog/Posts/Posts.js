import React, { Component } from 'react';
import './Posts.css'
import axios from '../../../axios';
import Post from '../../../components/Post/Post'
import { Link , Route} from 'react-router-dom'
import FullPost from '../FullPost/FullPost'

class Posts extends Component {
    state = {
        posts: []
    }


    
    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 6);
                const updatedPosts = posts.map(post => {
                    return { ...post, author: 'john' }
                });
                this.setState({
                    posts: updatedPosts
                })
                console.log(this.state.posts);
            })
            .catch(error => console.log(error));
    }

    postClickedHandler(id) {
        this.props.history.push('/posts' + id);
    }

    render() {
        let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>
        if (!this.state.error) {
            posts = this.state.posts.map((post) => {
                return (
                    <Link to={'/posts/' + post.id} key={post.id}>
                        <Post
                            title={post.title}
                            author={post.author}
                            clicked={this.postClickedHandler.bind(this, post.id)} />
                    </Link>
                )
            });
        }

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        )
    }
}

export default Posts;