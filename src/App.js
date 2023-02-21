import "./App.css";
import "./LeapYearApp/Form/Paragraph/SimpleParagraph";
import SimpleParagraph from "./LeapYearApp/Form/Paragraph/SimpleParagraph";
import SimpleButton from "./LeapYearApp/Form/Button/SimpleButton";
import SimpleInNumber from "./LeapYearApp/Form/InputNumber/SimpleInNumber";
import { useState } from "react";
function App() {
	const handleOnClick = event => {
		if (inputYear <= 0) {
			console.log("Set value >0 ");
		} else {
			if (inputYear % 4 === 0) {
				console.log("Leap year");
			} else {
				console.log("Not leap year");
			}
		}
	};

	const [inputYear, setInputYear] = useState("");

	const handleChange = event => {
		setInputYear(event.target.value);

		console.log("value is:", event.target.value);
	};

	return (
		<div className='App'>
			<SimpleParagraph label={"Set new year to calculate:"} />
			<SimpleInNumber
				placeholderInNumber={"Set new year..."}
				onChangeValue={handleChange}
			/>
			<SimpleButton buttonLabel={"CALCULATE"} handleOnClick={handleOnClick} />
			<SimpleParagraph label={"Result:"} />
			<SimpleParagraph label={inputYear} />
		</div>
	);
}

export default App;
