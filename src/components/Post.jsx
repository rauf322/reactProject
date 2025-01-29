import React from 'react';

const Post = ({title, desc,number}) => {
    return (
    <div className = "post">
        <div className="post__content">
          <strong>
            {number} {title}
          </strong>
          <div>
            {desc}
          </div>
        </div>
        <div className="post__btns">
          <button> Delete </button>
        </div>
    </div>
    );
};

export default Post;