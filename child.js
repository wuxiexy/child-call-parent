import React from 'react';

class ChildComponent extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.click();
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick}>click</button>
            </div>
        );
    }

}

export default ChildComponent;

