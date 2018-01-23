import React,{Component} from 'react';
// npm install react-images --save
import ReactDOM from 'react-dom';
import './index.css';
import App,{First,Second} from './App';
// import Show from './app1';
import AppData,{Header,Content} from './app1';
import App2 from './app2';


import registerServiceWorker from './registerServiceWorker';
// import  from './app1';
// import app1 from './app1';


 
class MyComponent extends Component {
 
  render() {
    return (
    	<div>
      <img src={'https://images.unsplash.com/photo-1471101173712-b9884175254e?dpr=2&auto=format&w=1024&h=1024'} alt={'Picture'}/> 
      <img src={'https://lh3.googleusercontent.com/U6_Snity8NZP3JHEv2oQqfiu-YuZNtaeJ8Z2SE_9Y-BOwluRCIKdYaN32oTBzPhaqf1-a72URAcyJf-mbEuIUy3a10DnuK5_uWhgIbCBeYZbu-VkMHHKPPsux2V9X7flofFfROhPDcF2y3iazj9t5oRVu_BD8UrxgywPIs8Zi7OMQh3_O5h1oNG-XkBcWp9zWNPb_Aa2z-i9VD61iqlOd3C141aMuLghKVlQE-29U7OK0M3_Uznhra4XtFgR6paPVwgMKpzI2dgrv2T24tM9EbndF9hp5yuPl5perN1g6VgD_xZnS2pyJ010tVcrcHgdFHohjC5E0o_npRgVYr0-BJItU_pRTBbhR5XTkI6mDve9Jy4i8xuc6xhh1ZsDDsaRPuFHQ8fRkrm4ARTizrBZ8qcQceqwqjNGc_WaRE4vcylx9vZC6nLQqITbXIgQcjHRK_gFjb4pGXa5Y6lF4Bv94NRqqYGXDot63Sh9qGtGQMUv5o0wgDNMEUr5oJmOSbiSmS-aZTM9RSPsmeyM0D-kRTbJ7B_Y3iJEZ_vzismCoBHzSZ66jxOpjmgm8Br1FLfitnqE6h1ulOitEzeYpIGiJanuFBWJRyx7szWFxJ4=w623-h399-no'} alt={'Picture'}/> 
    </div>
    );
  } 
}//



ReactDOM.render(<MyComponent />, document.getElementById('root5'));
ReactDOM.render(<App headerProp="{hello im HeaderPros }" contentProp="{hello in contentProp}" />, document.getElementById('root'));
registerServiceWorker();
ReactDOM.render(<Second />, document.getElementById('root1'));
ReactDOM.render(<First />, document.getElementById('root2'));
ReactDOM.render(<AppData />, document.getElementById('root3'));
ReactDOM.render(<App2 />, document.getElementById('root4'));
// ReactDOM.render(<Content />, document.getElementById('root5'));


// registerServiceWorker();
