import "./App.css";
import { useState } from "react";

import SimpleParagraph from "./LeapYearApp/Form/Paragraph/SimpleParagraph";
import SimpleButton from "./LeapYearApp/Form/Button/SimpleButton";
import SimpleInNumber from "./LeapYearApp/Form/InputNumber/SimpleInNumber";

import { LeapYearCalculation } from "./UtilsFun/UserFunction";

function App() {
	const handleOnClick = event => {
		setCalcYear(LeapYearCalculation(inputYear));
	};

	const handleChange = event => {
		setInputYear(event.target.value);
	};

	const [inputYear, setInputYear] = useState("");
	const [calcYear, setCalcYear] = useState("");

	return (
		<div className='App'>
			<div className='appHeader'>
				<h1>Check year!</h1>
				<div> </div>
			</div>
			<div className='appContainer'>
				<SimpleParagraph
					label={"Enter a year to check if it is a leap year:"}
				/>
				<SimpleInNumber
					placeholderInNumber={"Set new year..."}
					onChangeValue={handleChange}
				/>
				<SimpleButton buttonLabel={"CALCULATE"} handleOnClick={handleOnClick} />
				<SimpleParagraph label={`Result: ${calcYear}`} />
			</div>
		</div>
	);
}

export default App;
