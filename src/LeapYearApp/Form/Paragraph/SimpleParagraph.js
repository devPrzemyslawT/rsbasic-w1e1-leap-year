import React from "react";
import "./SimpleParagraph.css";

const SimpleParagraph = props => {
	const { label } = props;

	return <p className='paragraph'>{label}</p>;
};

export default SimpleParagraph;
