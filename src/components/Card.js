import React from 'react'
const Card =( {name,email,id})=>{
	// const {name,email,id}=props;
	return (
		
		<div className="bg-light-green dib br3 pa2 grow ma2 bw2 shadow-5 tc ">
			<img src={`https://robohash.org/${id}?200x200`} alt="robo"/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	) 
}
export default Card;