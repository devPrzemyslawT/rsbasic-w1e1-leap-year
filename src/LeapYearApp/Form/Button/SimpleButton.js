import React from "react";
import "./SimpleButton.css";

const SimpleButton = props => {
	const { buttonLabel ,handleOnClick} = props;

	

	return (
		<button className='button' onClick={handleOnClick}>
			{buttonLabel}
		</button>
	);
};

export default SimpleButton;
