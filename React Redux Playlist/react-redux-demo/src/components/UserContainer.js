import React, { useEffect } from 'react';
import { fetchUsers } from '../redux/user/userActions';
import { connect } from 'react-redux';

const UserContainer = ({ userData, fetchUsers }) => {
    useEffect(() => {
        fetchUsers()
    }, [])
    
    return userData.loading ? (
        <h2>Users are loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
        <div>
            <h1>User List - {userData.users.length}</h1>
            <div>
                {
                    userData && 
                    userData.users && 
                    userData.users.map(user => <p key={user.id}>{user.name}</p>)
                }
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        userData: state.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UserContainer);

// 1. Connect will be called first.
// 2. Then the useEffect hook will be called as the empty dependency is here. 
// 3. fetchUsers() of useEffect will be called
// 4. dispatch(fetchUsers())