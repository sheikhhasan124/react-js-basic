import React from 'react';

const User = ({render}) => {
    return (
        <div>
            <h3>{render(true)}</h3>
        </div>
    );
};

export default User;