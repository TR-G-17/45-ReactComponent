import React from 'react';
import './Greeting.css';

const styles = {
    color: 'red',
    fontStyle: 'italic'
}

class Greeting extends React.Component {

    constructor(props) {
        super(props);
        // this.hello = 'Privet';
        this.state = {
            greet: 'Hello',
            isDone: false
        }
    }

    renderChildren() {
        return (
            this.props.children ? <p>{this.props.children}</p> : null
        )
    }

    handleBye = (event) => {
        event.preventDefault();
        // this.changeState()
        // this.changeAbra()


        // this.state.greet = 'Ups...';
        this.setState({isDone: true,greet: 'Bye'})
    }

    // changeAbra = () => {
    //     this.hello = 'Abracadabra'
    // }
    //
    // changeState = () => {
    //     this.setState({isDone: true,greet: 'Bye'})
    // }

    renderButton() {
        return (this.state.isDone ? null : <button onClick={this.handleBye}>Bye</button>)
    }


    render() {
        return (
            <div>
                {/*{ this.hello }*/}
                <h1 className="greeting-h1" style={styles}>{this.state.greet}, {this.props.name}!</h1>
                { this.renderButton() }
                { this.renderChildren() }
            </div>

        )
    }
}

export default Greeting