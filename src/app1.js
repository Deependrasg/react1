// import React, { Component } from 'react';

// // import React from 'react';
// class Show extends Component{
// 	render(){
// 		var myStyle= {
// 			fontSize:10,
// 			color:'#FF0000',
		
// 		}
// 		return(
// 				<h1 style={myStyle}>Hello deependras singh its last message vy app1,</h1>
// 			);
// 	}
// }

// /// ReactDOM.render(<Show />, document.getElementById('root1'));

// class App1 extends React.Component {
//    render() {
//       var i = 1;
//       return (
//          <div>
//             <h1>{i === 1 ? 'True' : 'False'}</h1>
//          </div>
//       );
//    }
// }

// class Data extends React.Component {
//    render() {
//       var i = 1;

//       return (
//          <div>
//             <h1>Here data {i==2 ? 'True':'False'}</h1>
//          </div>
//       );
//    }
// }

// export default Show;

import React from 'react';

class AppData extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
            <Header/>
         </div>
      );
   }
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
         </div>
      );
   }
}
class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}
export default AppData;