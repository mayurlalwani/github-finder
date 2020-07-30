import React from 'react';
import PropTypes from 'prop-types';

function UserItem(props) {
    const { avatar_url, login, html_url } = props.user
    return (
        <div className="card text-center">
            <img src={avatar_url} className="round-img" alt="avatar" style={{ width: '60px'}} />
            <h3>{login}</h3>
            <div>
                <a href={html_url} class="btn btn-dark btn-sm my-1">More</a>
            </div>
        </div>
    );
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}
 
export default UserItem;