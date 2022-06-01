import React from "react";
import dateFormat from 'dateformat';

const LoadComments = (props) => {
    return (
        props.dishComment.map(comment => {
            return (
                <div key={comment.id}>
                    <h4>{comment.author}</h4>
                    <p>{comment.comment}</p>
                    <p>{dateFormat(comment.date, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</p>
                </div>
            )
        })
    );
}

export default LoadComments;