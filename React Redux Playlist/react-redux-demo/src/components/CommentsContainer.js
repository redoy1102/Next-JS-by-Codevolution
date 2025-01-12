import React, { useEffect } from 'react';
import { fetchComments } from '../redux/comments/commentActions';
import { connect } from 'react-redux';

const CommentsContainer = ({commentsData, fetchComments}) => {
    useEffect(() => {
        fetchComments()
    }, [])

    return commentsData.loading ? (
        <h2>Comments are loading</h2>
    ) : commentsData.error ? (
        <h2>{commentsData.error}</h2>
    ) : (
        <div>
            <h1>Number of comments: {commentsData.comments.length}</h1>
            <div>
                {
                    commentsData && 
                    commentsData.comments && 
                    commentsData.comments.map(comment => (
                        <p>{comment.name}</p>
                    ))
                }
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
        commentsData: state.comments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchComments: () => dispatch(fetchComments())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CommentsContainer);