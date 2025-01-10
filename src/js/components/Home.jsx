import React from 'react';
import { useState } from 'react';

const Home = () => {
    const colors = ["red","yellow","green"]
    const [lit, setLit] = useState("");

    return (
		<>
		<div className="box2"></div>
        <div className="box">
			{colors.map((color) => {
				return (
					<div className={`light ${color == lit ? "lit" : ""}`} style={{backgroundColor: color}} onClick={() => setLit(color)}>
					</div>
				)
			})}			
		</div>
		</>
    );
};
 
export default Home;