import React from 'react';
import Greeting from "./Greeting/Greeting";

class Main extends React.Component {

    render() {
        return (
            <section>
                <Greeting name="World" />
                <Greeting name="Ivan"/>
                <Greeting name="All">All you need is love</Greeting> {/*Comments*/}
                <Greeting name="Someone">I'm free now!!!</Greeting>
            </section>
        )
    }
}

export default Main;