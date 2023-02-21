import React from "react";
import "./SimpleInNumber.css";

// import { useState } from "react";

const SimpleInNumber = props => {
	const { placeholderInNumber, onChangeValue } = props;
	
	return (
		
			<input
				type='number'
				className='inNumber'
				placeholder={placeholderInNumber}
				onChange={onChangeValue}></input>
		
	);
};

export default SimpleInNumber;
