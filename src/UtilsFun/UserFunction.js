export const LeapYearsConst = 4;

export const LeapYearCalculation = year => {
	// console.log("inside LeapYearCalculation");
	let result;
	if (year <= 0) {
		result = "Enter correct year!";
	} else {
		result =
			year % LeapYearsConst === 0 ? "It's leap year!" : "It's not leap year!";
	}
	return result;
};
