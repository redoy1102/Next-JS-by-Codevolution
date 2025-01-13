import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../features/user/userSlice";


const UserView = () => {
    const user = useSelector((state) => state.user)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div>
            <h1>Users - {user.users.length}</h1>

            {user.loading && <div>Loading...</div>}
            {user.error && <div>Error: {user.error}</div>}
            {!user.loading && user.users.length ? (
                <ul>
                    {
                        user.users.map((user, id) => <li key={id}>{user.name}</li> )
                    }
                </ul>
            ) : null }
        </div>
    );
};

export default UserView;