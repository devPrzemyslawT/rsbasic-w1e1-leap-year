export const LeapYearsConst = 4;

export const LeapYearCalculation = year => {
	// console.log("inside LeapYearCalculation");
	return year % LeapYearsConst;
};
