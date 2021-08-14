const purchasePrice = document.querySelector("#stock-price");
const quantityStock = document.querySelector("#quantity");
const currentPrice = document.querySelector("#sell-price");
const button = document.querySelector("#check-btn");
const output = document.querySelector("#output");


button.addEventListener('click', function(e){
	e.preventDefault();
	while (output.firstChild) {
		output.removeChild(output.firstChild);
	}

const costPrice = Number(purchasePrice.value);
const numberOfStocks = Number(quantityStock.value);
const currentCost = Number(currentPrice.value);

if (costPrice > 0 && numberOfStocks > 0 && currentCost > 0){
	const oldTotal = (costPrice * numberOfStocks).toFixed(2);
	
	const currentTotal = (currentCost * numberOfStocks).toFixed(2);
	let gain = (currentTotal - oldTotal).toFixed(2);
	

	if (gain > 0) {
		const gainPercent = ((gain * 100) / oldTotal).toFixed(2);
		output.innerText = `Your Profit is ${gainPercent}% or ₹${gain} `;
		document.body.style.backgroundColor = "#d8ff98"


	}else if(gain==0){
		output.innerText="Same to same hai ye to"
		document.body.style.backgroundColor = "#b9edfb"
	}
	else if(gain < 50){
		
		gain = Math.abs(gain);
		const lossPercent = ((gain * 100) / oldTotal).toFixed(2);
		output.innerText = `Your Loss is ${lossPercent}% or ₹${gain}`;
		document.body.style.backgroundColor = "#fcced1"

	}else {
		gain = Math.abs(gain);
		const lossPercent = ((gain * 100) / oldTotal).toFixed(2);
		output.innerText = `Your Loss is ${lossPercent}% or ₹${gain}`;
		document.body.style.backgroundColor = "#fcced1"
	}
} else {
	output.innerText = "Enter numbers which are greater than 0";
}
})