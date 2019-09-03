import React, { Component } from 'react'

interface InputProps {
    onSearch: Function
}
interface InputState {
    text: string
}

export default class SearchInput extends Component<InputProps, InputState> {
    textInput: React.RefObject<HTMLInputElement>;
    
    constructor(props: InputProps) {
        super(props)
    
        this.state = {
            text: ''
        }

        this.textInput = React.createRef();
    }

    handleSearchChange(event:React.ChangeEvent<HTMLInputElement>):void {
        const value = event.target.value;
        this.setState({
            text: value
        })

        this.props.onSearch(value);
    }
    
    render() {
        return (
            <input ref={this.textInput} value={this.state.text} className="search" type="text" placeholder="search user..." onChange={this.handleSearchChange.bind(this)} />
        )
    }
}

