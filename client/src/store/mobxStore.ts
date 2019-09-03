import {observable, action, computed} from 'mobx';

import {userInfo, userList, userMessageMap} from '../mock';

export interface IUserMessageMap { 
    [id: string]: IUserMessageItem
}

export interface IUserMessageItem { 
    targetInfo: UserProps;
    list: Array<{
        target: string;
        time: string,
        text: string
    }>
}

export interface IMobxStore {
    currentUser: UserProps,
    userMessageMap: IUserMessageMap,
    user: UserProps,
    filterUserList: Array<UserProps>,
    changeSearchKey: Function,
    selectCurrentUser: Function,
    sendMessage: Function
}

const DEFAULT_USER:UserProps = {
    id: '',
    name: '',
    avatar: ''
}

export class mobxStore implements IMobxStore {
    @observable 
    user:UserProps = userInfo || DEFAULT_USER;
    
    @observable 
    userList:Array<UserProps> = userList;

    @observable 
    userMessageMap:IUserMessageMap = userMessageMap;

    @observable
    searchKeyword:string = '';

    @computed get filterUserList() {
        if (!this.searchKeyword) return this.userList;
        return this.userList.filter(item => item.name.indexOf(this.searchKeyword) !== -1);
    }

    @computed get currentUser() {
        return this.userList.find(item => !!item.active) || DEFAULT_USER;
    }

    @action.bound
    selectCurrentUser(id:string) {
        let userList = this.userList

        userList.forEach(item => {
            if (item.id === id) {
                item.active = true;
            } else {
                item.active = false;
            }
        })

        this.userList = userList;
    }

    @action.bound
    changeSearchKey(text:string) {
        this.searchKeyword = text;
    }

    @action.bound
    sendMessage(text:string) {
        let currentMessage = this.userMessageMap[this.currentUser.id];

        if (currentMessage) {
            let message = {
                target: 'self',
                time: String(new Date()),
                text
            }
            currentMessage.list.push(message)
            this.userMessageMap[this.currentUser.id] = currentMessage;
        }
    }
}
