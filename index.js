function mathCalculation(method, firstNumber, secondNumber) {
	const decimalX = 10 ** (String(firstNumber).length - String(firstNumber).indexOf(".") - 1);
	const decimalY = 10 ** (String(secondNumber).length - String(secondNumber).indexOf(".") - 1);
	const pow = Math.max(decimalX, decimalY);
	const newFirstNumber = firstNumber * pow;
	const newSecondNumber = secondNumber * pow;

	switch (method) {
		case "+":
			return (newFirstNumber + newSecondNumber) / pow;
		case "-":
			return (newFirstNumber - newSecondNumber) / pow;
		case "*":
			return (newFirstNumber * newSecondNumber) / (pow * pow);
		case "/":
			return newFirstNumber / newSecondNumber;
		default:
			return null;
	}
};

module.exports = mathCalculation