import React, {Component} from 'react'
import { IUserMessageItem } from '../../store/mobxStore';
import { observer } from 'mobx-react';

interface MessageBoxProps {
    message: IUserMessageItem
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

@observer
class MessageBox extends Component<MessageBoxProps> {
    render() {
        const {message} = this.props;
        return (
            <div className="message">
                <ul>
                    {message && message.list && message.list.map((item, idx) => <MessageBoxItem key={idx} message={item} target={message.targetInfo} />)}
                </ul>
            </div>
        )
    }
}

export default MessageBox;