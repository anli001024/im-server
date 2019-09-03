import React, { Component } from 'react'
import UserAvatar from '../userAvatar';
import { observer } from 'mobx-react';

interface selfListProps {
    list: Array<UserProps>,
    onSelectUser: Function
}

interface UsetItem extends UserAvatarProps {
    onSelectUser: Function,
}

@observer
class UserItem extends Component<UsetItem> {
    render() {
        const {user, onSelectUser} = this.props;
        return (
            <li onClick={() => onSelectUser(user.id)} className={user.active ? 'active' : ''}>
                <UserAvatar user={user} width={30}/>
            </li>
        )
    }
}

@observer
class userList extends Component<selfListProps> {
    render() {
        return (
            <ul>
            {this.props.list.map((item, index) => <UserItem key={index} user={item} onSelectUser={this.props.onSelectUser} />)}
        </ul>
        )
    }
}


export default userList;