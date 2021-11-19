import React from 'react';
import { connect } from "react-redux"
import './App.css';

function App({dispatch, clicks}) {
	let handleOnClick = () => {
		dispatch({
		  type: 'INCREASE_COUNT',
		});
	}

	
  return (
    <div className="App">
      <button onClick={handleOnClick}>Click</button>
      <p>{clicks}</p>
    </div>
  );
}

const mapStateToProps = ({clicks}) => {
  return {clicks: clicks}
}


export default connect(mapStateToProps)(App);
