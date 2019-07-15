import React from 'react';
import { FormComponentProps } from 'antd/es/form';
import {
    Button,
    Input

} from 'antd';

interface thisPros extends  FormComponentProps {
    title: ""
}
export class AddForm extends React.Component<thisPros, any> {
   state = {
        text: "Hello"
    }
    constructor(props:any){
        super(props);
    }
    submit(){
        this.state.text = "Hello"
    }
    componentDidMount(){
        this.state.text = this.props.title
    }
    render() {
        return(
        <div>
            <h1>Hello, {this.state.text}</h1>;
            <Input name="Name">{this.state.text}</Input>
            <Button title="summit" onSubmit={this.submit}/>
        </div>);
    }
}
