import React from 'react'


interface MessageBoxProps {
    message: {
        target: object,
        list: Array<userMessage>
    }
}

const MessageBoxItem: React.FC<{message: userMessage, target: any}> = ({target, message}) => {
    const isSelft = message.target === 'self';
    const avatarSrc = isSelft ? 'https://makapicture.oss-cn-beijing.aliyuncs.com/cdn/smc/release/aaa/an-l_avatar.png' : target.avatar; 

    return (
        <li className={isSelft ? 'self' : ''}>
            <p className="time">
                <span>{message.time}</span>
            </p>
            <div className="main">
                <img className="avatar" width="30" height="30" src={avatarSrc} alt="用户头像"/>
                <div className="text">{message.text}</div>
            </div>
        </li>
    )
}

const MessageBox: React.FC<MessageBoxProps> = ({message}) => {
    return (
        <div className="message">
            <ul>
                {message && message.list && message.list.map((item, idx) => <MessageBoxItem key={idx} message={item} target={message.target} />)}
            </ul>
        </div>
    )
}

export default MessageBox;