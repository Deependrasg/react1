import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         header: "Header form this.props. data and show data",
         content: "Content from props...",
         deep:'Deep is my name '
      }
   }
   render() {
      return (
         <div>
            <Header headerProp = {this.state.header}/>
            <Content contentProp = {this.state.content}/>
            <Deep deepprops = {this.state.deep}/>

         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h6>{this.props.headerProp}</h6>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h6>{this.props.contentProp}</h6>
         </div>
      );
   }
}
class Deep extends React.Component{
	render(){
		return (
			<div>
				<h5>{this.props.deepprops}</h5>
			</div>
		);
	}
} 
export default App;