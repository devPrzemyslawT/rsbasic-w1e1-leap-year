import "./App.css";
import "./LeapYearApp/Form/Paragraph/SimpleParagraph";
import SimpleParagraph from "./LeapYearApp/Form/Paragraph/SimpleParagraph";
import SimpleButton from "./LeapYearApp/Form/Button/SimpleButton";


function App() {
  const handleOnClick = event => {
    console.log("click");
  };
  
	return (
		<div className='App'>
			<SimpleParagraph label={"Set new year to calculate:"} />
			<SimpleButton buttonLabel={"CALCULATE"} handleOnClick={handleOnClick} />
			<SimpleParagraph label={"Result:"} />
		</div>
	);
}

export default App;
