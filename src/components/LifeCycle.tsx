import React from "react";

class LifeCycle extends React.Component<any, any> {

    timerId: any = 0;

    constructor(props: any) {
        super(props);
        this.state = {date: new Date()}
        console.log("constructor")
    }

    componentDidMount(): void {
        console.log("componentDidMount");
        this.timerId = setInterval(() => {
            this.updateTime()
        }, 1000)
    }

    componentDidUpdate(): void {
        console.log("componentDidUpdate")
    }

    componentWillUnmount(): void {
        clearInterval(this.timerId);
        console.log("componentWillUnmount")
    }

    updateTime() {
        this.setState ({
            date: new Date()
        })
    }

    render() { 
        console.log("render")
        return ( 
            <div>
                <h1>Hello</h1>
                <div>{this.state.date.toLocaleTimeString()}</div>
            </div>
         );
    }
}
 
export default LifeCycle;