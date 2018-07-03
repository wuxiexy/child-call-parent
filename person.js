import React from 'react';
import ChildComponent from './child';


class PersonComponent extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            inp: 1
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(){

    }

    handleClick(){
        this.setState({
            inp: ++this.state.inp
        });
    }


    render(){
        return (
            <div>
                <input type="text" value={this.state.inp} onChange={this.handleChange}/>
                <ChildComponent click={this.handleClick}/>
            </div>
        );
    }

}


export default PersonComponent;


