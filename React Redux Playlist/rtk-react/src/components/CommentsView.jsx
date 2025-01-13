import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "../features/comments/commentSlice";


const CommentsView = () => {
    const comments = useSelector((state) => state.comment)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchComments())
    }, [])

    return (
        <div>
            <h1>Comments - {comments.comments.length}</h1>
        </div>
    );
};

export default CommentsView;