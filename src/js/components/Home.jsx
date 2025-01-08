import React, { useState } from "react";

const Home = () => {
	const [Red, setRed] = useState('Red')
	console.log('rojo');
	
	const [Yellow, setYellow] = useState('Yellow')
	const [Green, setGreen] = useState('Green')

	return (
		<div>
			<div className="redLight">
				<button onClick={Red}>Red</button>
			</div>
			<div className="redLight">
				<button onClick={Yellow}>Yellow</button>
			</div>
			<div className="redLight">
				<button onClick={Green}>Green</button>
			</div>
		</div>
	);
};

export default Home;