import React, { Component } from 'react'
import Spinner from '../Layout/Spinner'
import Repos  from '../repos/Repos'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class User extends Component {
    componentDidMount() {
        this.props.getUser(this.props.match.params.login)
        this.props.getUserRepos(this.props.match.params.login)
    }

    static propTypes = {
        loading: PropTypes.bool,
        user: PropTypes.object.isRequired,
        repos: PropTypes.array.isRequired,
        getUser: PropTypes.func.isRequired,
        getUserRepos: PropTypes.func.isRequired,
    }
    render() {
        const { name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists } = this.props.user
        const {loading, repos} = this.props;

        if(loading){
            return <Spinner />
        }
        return (
            <>
                <Link to="/" className='btn btn-light'>
                    Back to Search
                </Link>
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} className="round-img" style={{ width: 150}} alt=""/>
                        <h1>{name}</h1>
                        <p>Location: {location} </p>
                    </div>

                <div className="">
                    {bio && (
                        <>
                        <h3>Bio</h3>
                        <p> {bio} </p>
                        </>
                    )}
                    <a href={html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                    <ul>
                        <li>
                            {login && <><strong>UserName:</strong> {login} </>}
                        </li>

                        <li>
                            {company && <><strong>Company:</strong> {company} </>}
                        </li>

                        <li>
                            {blog && <><strong>Website:</strong> {blog} </>}
                        </li>
                    </ul>

                </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-primary">Followers: {followers} </div>
                    <div className="badge badge-success">Following: {following} </div>
                    <div className="badge badge-light">Public Repos: {public_repos} </div>
                    <div className="badge badge-dark">Public Gists: {public_gists} </div>

                </div>
                <Repos repos={repos} />
            </> 
        )
    }
}

export default User
