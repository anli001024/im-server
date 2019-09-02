import React, {Component} from 'react';
import './index.css';
import UserAvatar from '../../components/userAvatar'
import UserList from '../../components/userList'
import SearchInput from '../../components/searchInput'
import MessageBox from '../../components/messageBox'
import { inject, observer } from 'mobx-react';
import store from '../../store';

interface MainProps {
    store: store
}

@observer
export default class Main extends Component<MainProps> {
    constructor(props: MainProps) {
        super(props)
    }

    handleSeachUserList(keyword: string) {
        this.props.store.changeSearchKey(keyword);
    }

    handleSelectUser(id: string) {
        this.props.store.selectCurrentUser(id);
    }
    
    render() {
        const {currentUser, userMessageMap, user, filterUserList} = this.props.store;
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
                    <div className="text">
                        <textarea id="textArea" placeholder="按 Ctrl + Enter 发送"></textarea>
                    </div>
                </div>
            </div>
          );
    }
}
