import React, {Component} from 'react';
import './index.css';
import UserAvatar from '../../components/userAvatar'
import UserList from '../../components/userList'
import SearchInput from '../../components/searchInput'
import MessageBox from '../../components/messageBox'
import MessageTextArea from '../../components/messageTextArea'
import { inject, observer } from 'mobx-react';
import { IMobxStore } from '../../store/mobxStore';

interface storeProps {
    mobxStore?: IMobxStore;
}

@inject('mobxStore')
@observer
export default class Main extends Component<storeProps> {
    handleSeachUserList(keyword: string) {
        const {changeSearchKey} = this.props.mobxStore!;
        changeSearchKey(keyword);
    }

    handleSelectUser(id: string) {
        const {selectCurrentUser} = this.props.mobxStore!;
        selectCurrentUser(id);
    }
    
    render() {
        const {currentUser, userMessageMap, user, filterUserList} = this.props.mobxStore!;
        const currentUserId = currentUser.id || '';

        const currentUserMessageMap = userMessageMap[currentUserId] || {};

        return (
            <div id="app">
                <div className="sidebar">
                    <div className="card">
                        <header>
                            <UserAvatar user={user} width={40}/>
                        </header>
                        <footer>
                            <SearchInput onSearch={this.handleSeachUserList.bind(this)}/>
                        </footer>
                    </div>
                    <div className="list">
                        <UserList list={filterUserList} onSelectUser={this.handleSelectUser.bind(this)}/>
                    </div>
                </div>
                <div className="main">
                    <MessageBox message={currentUserMessageMap}/>
                    <MessageTextArea />
                </div>
            </div>
          );
    }
}
