import React, { Component } from 'react'
import { inject, observer } from 'mobx-react';
import { IMobxStore } from '../../store/mobxStore';

interface MessageTextAreaState {
    text: string
}


@inject('mobxStore')
@observer
export default class MessageTextArea extends Component<{
    mobxStore?: IMobxStore;
}, MessageTextAreaState> {
    textAreaRef: React.RefObject<HTMLTextAreaElement>;

    constructor(props:{}) {
        super(props)

        this.state = {
            text: ''
        }

        this.textAreaRef = React.createRef();
    }

    handleTextAreaChange(e:React.ChangeEvent<HTMLTextAreaElement>):void {
        this.setState({
            text: e.target.value
        })
    }

    handleTextAreaKeyDown(e:React.KeyboardEvent<HTMLTextAreaElement>) {
        let isCommond = e.metaKey;
        let isEnter = e.keyCode === 13;
        let isCtrl = e.ctrlKey;

        let isSubmit = (isCommond && isEnter) || (isCtrl && isEnter);

        if(isSubmit && !!this.state.text) {
            this.props.mobxStore!.sendMessage(this.state.text);
            this.setState({
                text: ''
            })
        }
    }
    
    render() {
        return (
            <div className="text">
                <textarea 
                    ref={this.textAreaRef} 
                    id="textArea" 
                    value={this.state.text} 
                    onChange={this.handleTextAreaChange.bind(this)} 
                    onKeyDown={this.handleTextAreaKeyDown.bind(this)}
                    placeholder="按 Ctrl + Enter 发送"></textarea>
            </div>
        )
    }
}
