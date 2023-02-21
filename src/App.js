import "./App.css";
import "./LeapYearApp/Form/Paragraph/SimpleParagraph";
import SimpleParagraph from "./LeapYearApp/Form/Paragraph/SimpleParagraph";

function App() {
	return (
		<div className='App'>
			<SimpleParagraph label={"Set new year to calculate:"}/>
			<SimpleParagraph label={"Result:"}/>
		</div>
	);
}

export default App;
