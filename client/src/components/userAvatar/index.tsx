import React from 'react'

const userAvatar: React.FC<UserAvatarProps> = ({user, width = 30}) => {
    return (
        <div>
            <img className="avatar" width={width} height={width} src={user.avatar} alt="用户头像"/>
            <p className="name">{user.name}</p>
        </div>
    )
}

export default userAvatar;