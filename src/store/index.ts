import {observable, action, computed} from 'mobx';

import {userInfo, userList, userMessageMap} from '../mock';


const DEFAULT_USER:UserProps = {
    id: '',
    name: '',
    avatar: ''
}

class Store {
    @observable 
    user:UserProps = userInfo || DEFAULT_USER;
    
    @observable 
    userList:Array<UserProps> = userList;

    @observable 
    userMessageMap:any = userMessageMap;

    @observable
    searchKeyword:string = '';

    @computed get filterUserList() {
        if (!this.searchKeyword) return this.userList;
        return this.userList.filter(item => item.name.indexOf(this.searchKeyword) !== -1);
    }

    @computed get currentUser() {
        return this.userList.find(item => !!item.active) || DEFAULT_USER;
    }

    @action
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

    @action
    changeSearchKey(text:string) {
        this.searchKeyword = text;
    }
}

export default Store;