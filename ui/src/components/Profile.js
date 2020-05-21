import React from 'react';

const Profile = ({user}) => {
    return (
        <div>
            <div className="title">{user.name}</div>
        </div>
    );
};

export default Profile;