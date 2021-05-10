import React from 'react';
import './Greeting.css';

const styles = {
    color: 'red',
    fontStyle: 'italic'
}

class Greeting extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    renderChildren() {
        return (
            this.props.children ? <p>{this.props.children}</p> : null
        )
    }


    render() {
        return (
            <div>
                <h1 className="greeting-h1" style={styles}>Hello, {this.props.name}!</h1>
                { this.renderChildren() }
            </div>

        )

    }
}

export default Greeting