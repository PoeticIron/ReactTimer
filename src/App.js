import React, { Component } from 'react';
import ReactDOM from 'react-dom';  

class StartButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {tick:false,text:"Start!"};
        this.toggle = this.toggle.bind(this)
    }
    toggle() {
        this.setState({tick: !this.state.tick})
        if(this.state.tick){
            this.setState({text: "Start!"});
        }else{
            this.setState({text: "Stop!"});
        }
    }
    render() {
        return(
        <h1> Simple Timer: <br />
        <Timer tick={this.state.tick}/>
        <input onClick={this.toggle} type="button" value={this.state.text} />
        </h1>)
    }
}
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            ticker: null
        };
        this.ticker = this.ticker.bind(this)
    }
    componentDidMount() {
        this.setState({ticker:setInterval(this.ticker, 10)});
    }
    ticker() {
        if(this.props.tick==true){
            this.setState({time: this.state.time + 1})
        }
    }
    render() {
        return(<h1> 
        {Math.floor(this.state.time / 6000)% 100}
        :{Math.floor(this.state.time / 100)% 60}
        :{this.state.time* 10 % 1000}! 
        </h1>)
    }
}

export default StartButton;
