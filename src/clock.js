import React,{Component} from 'react';
// npm install react-images --save
import ReactDOM from 'react-dom'; 


function FormattedDate(props) {
  return <small>{props.date.toLocaleTimeString()}.</small>;
}
//
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}//

function App() {
  return (
    <div>
      <Clock />
    </div>
  );
}//

ReactDOM.render(<App />, document.getElementById('root2'));

  