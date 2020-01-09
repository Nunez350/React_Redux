import React, { Component, lazy, Suspense } from 'react';
import './Blog.css';
import Posts from './Posts/Posts'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
// import NewPost from '../Blog/NewPost/NewPost'
const NewPost = lazy(() => import('../Blog/NewPost/NewPost'));



class Blog extends Component {

    render() {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts'
                                exact
                                activeClassName='active'
                                activeStyle={{
                                    color: 'orangered'
                                }}>Posts</NavLink> </li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink> </li>
                        </ul>
                    </nav>
                </header>
                <Switch>

                    <Route path='/new-post' exact render={() => {
                       return <Suspense fallback={<div>Loading...</div>}>
                            <NewPost />
                        </Suspense>
                    }} />
                    <Route path='/posts' component={Posts} />
                    <Redirect from='/' to='/posts' />
                </Switch>

            </div>
        );
    }
}

export default Blog;