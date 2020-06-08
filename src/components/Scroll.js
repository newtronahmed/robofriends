import React from 'react'
const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', border: '5px solid black ', height: '500px'}}>
			{props.children}

		</div>


	)
}
export default Scroll;





// App is the big parent
// import What u will use
// components come here import them her;
// json placeholder for the list of users 
	// componentDidMount is a react method = no function
	// this.setState is for event handlers and server side response
	// use this to refer to the state of the app
	// fetch >> then >> setState