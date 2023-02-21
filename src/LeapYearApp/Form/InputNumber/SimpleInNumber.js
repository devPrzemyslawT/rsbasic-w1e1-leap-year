import React from "react";
import "./SimpleInNumber.css";

// import { useState } from "react";

const SimpleInNumber = props => {
	const { placeholderInNumber, onChangeValue } = props;
	// const [inputYear, setInputYear] = useState("");

	// const handleChange = event => {
	// 	setInputYear(event.target.value);

	// 	console.log("value is:", event.target.value);
	// };

	return (
		<div>
			<input
				type='number'
				className='inNumber'
				placeholder={placeholderInNumber}
				onChange={onChangeValue}></input>
		</div>
	);
};

export default SimpleInNumber;
