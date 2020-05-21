import React from 'react';

const Profile = ({user}) => {
    return (
        <div>
            <div >{user.name}</div>
        </div>
    );
};

export default Profile;