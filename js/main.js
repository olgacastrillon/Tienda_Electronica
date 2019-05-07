/**
 * main.js
 * Carlos Tamayo
 * v0.1
 *
 */
var calcProductValue, calcProductProfit, calcResultPrice, calcResultProfit, calcResultTax, calcResultTotal, calcProductAlert, calcResultSubtotal, calcResistancesFirstBand, calcResistancesSecondBand, calcResistancesThirdBand, calcResistancesResult, calcResistancesResultValue
const TAXES = 0.19

calcProductValue = document.getElementById('calc__product--value')
calcProductProfit = document.getElementById('calc__product--profit')
calcResultPrice = document.getElementById('calc__result--price')
calcResultProfit = document.getElementById('calc__result--profit')
calcResultTax = document.getElementById('calc__result--tax')
calcResultTotal = document.getElementById('calc__result--total')
calcResultSubtotal = document.getElementById('calc__result--subtotal')
calcResultTable = document.getElementById('calc__result')
calcProductAlert = document.getElementById('calc__product--alert')

calcResistancesFirstBand = document.getElementById('calc__resistances--firstBand')
calcResistancesSecondBand = document.getElementById('calc__resistances--secondBand')
calcResistancesThirdBand = document.getElementById('calc__resistances--thirdBand')
calcResistancesResult = document.getElementById('calc__resistances--result')
calcResistancesResultValue = document.getElementById('calc__resistances--resultValue')

const calcTax = (price) => price * TAXES
const calcProfit = (price, profit) => price * (profit / 100)
const calcTotal = (price, tax) => price + tax

const profitValid = (profit) => {
	if (profit >= 0 && profit <= 99) {
		return true
	}
	else {
		return false
	}
}

function calcProduct() {

	var calcProduct = { 
	    'price' : parseInt(calcProductValue.value),
	    'profit' : calcProductProfit.value
	}

	if (!isNaN(calcProduct.price) && profitValid(calcProduct.profit)) {
		calcProduct.totalProfit = calcProfit(calcProduct.price, calcProduct.profit)
		calcProduct.subtotal = calcProduct.price + calcProduct.totalProfit
		calcProduct.totalTax = calcTax(calcProduct.subtotal)

		const formatter = new Intl.NumberFormat('es-COP', {
		  style: 'currency',
		  currency: 'COP',
		  minimumFractionDigits: 0,
		  maximumFractionDigits: 0
		})

		calcProduct.total = formatter.format(calcTotal(calcProduct.subtotal, calcProduct.totalTax))

		calcResultPrice.textContent = formatter.format(calcProduct.price)
		calcResultProfit.textContent = formatter.format(calcProduct.totalProfit) 
		calcResultSubtotal.textContent = formatter.format(calcProduct.subtotal)
		calcResultTax.textContent = formatter.format(calcProduct.totalTax)
		calcResultTotal.textContent = calcProduct.total

		calcResultTable.classList.remove('invisible');
		calcResultTable.classList.add('visible');
		calcProductAlert.classList.add('d-none');
		calcProductAlert.classList.remove('d-block');
	}
	else {
		calcProductAlert.classList.remove('d-none');
		calcProductAlert.classList.add('d-block');
	}

}

function calcResistances() {

	if (calcResistancesFirstBand.value === 'Seleccione un color...' || calcResistancesSecondBand.value === 'Seleccione un color...' || calcResistancesThirdBand.value === 'Seleccione un color...') {
		calcProductAlert.classList.remove('d-none');
		calcProductAlert.classList.add('d-block');	
	}
	else {
		const RESISTANCES = { 
		    'firstBand' : {
		    	'black' : 0,
		    	'brown' : 1,
		    	'red' : 2,
		    	'orange' : 3,
		    	'yellow' : 4,
		    	'green' : 5,
		    	'blue' : 6,
		    	'violet' : 7,
		    	'gray' : 8,
		    	'white' : 9,
		    },
		    'thirdBand' : {
		    	'black' : {
		    		'value' : 1,
		    		'label' : 'Ω'
		    	},
		    	'brown' : {
		    		'value' : 10,
		    		'label' : 'Ω'
		    	},
		    	'red' : {
		    		'value' : 100,
		    		'label' : 'Ω'
		    	},
		    	'orange' : {
		    		'value' : 1,
		    		'label' : 'kΩ'
		    	},
		    	'yellow' : {
		    		'value' : 10,
		    		'label' : 'kΩ'
		    	},
		    	'green' : {
		    		'value' : 100,
		    		'label' : 'kΩ'
		    	},
		    	'blue' : {
		    		'value' : 1,
		    		'label' : 'MΩ'
		    	},
		    	'violet' : {
		    		'value' : 10,
		    		'label' : 'MΩ'
		    	},
		    	'gray' : {
		    		'value' : 100,
		    		'label' : 'MΩ'
		    	},
		    	'white' : {
		    		'value' : 1,
		    		'label' : 'GΩ'
		    	},
		    }
		}

		resistancesFirstBand = parseInt(calcResistancesFirstBand.value)
		resistancesSecondBand = parseInt(calcResistancesSecondBand.value)
		resistancesThirdBand = parseInt(calcResistancesThirdBand.value)

		resistanceValue = resistancesFirstBand + resistancesSecondBand

		// resistancesFirstBand
		if (resistancesFirstBand === 0) {

			resistanceValue = resistancesSecondBand

		}else {
			var numbersAsString = `${resistancesFirstBand}${resistancesSecondBand}`
			resistanceValue = parseInt(numbersAsString)
		}

		switch (resistancesThirdBand) {
		  case 0:
		  	resistanceValue = (resistanceValue * RESISTANCES.thirdBand.black.value) + RESISTANCES.thirdBand.black.label
		    break;
		  case 1:
		    resistanceValue = (resistanceValue * RESISTANCES.thirdBand.brown.value) + RESISTANCES.thirdBand.brown.label
		    break;
		  case 2:
		    resistanceValue = (resistanceValue * RESISTANCES.thirdBand.red.value) + RESISTANCES.thirdBand.red.label
		    break;
		  case 3:
		    resistanceValue = (resistanceValue * RESISTANCES.thirdBand.orange.value) + RESISTANCES.thirdBand.orange.label
		    break;
		  case 4:
		    resistanceValue = (resistanceValue * RESISTANCES.thirdBand.yellow.value) + RESISTANCES.thirdBand.yellow.label
		    break;
		  case 5:
		    resistanceValue = (resistanceValue * RESISTANCES.thirdBand.green.value) + RESISTANCES.thirdBand.green.label
		    break;
		  case 6:
		    resistanceValue = (resistanceValue * RESISTANCES.thirdBand.blue.value) + RESISTANCES.thirdBand.blue.label
		    break;		    		    
		  case 7:
		    resistanceValue = (resistanceValue * RESISTANCES.thirdBand.violet.value) + RESISTANCES.thirdBand.violet.label
		    break;
		  case 8:
		    resistanceValue = (resistanceValue * RESISTANCES.thirdBand.gray.value) + RESISTANCES.thirdBand.gray.label
		    break;
		  case 9:
		    resistanceValue = (resistanceValue * RESISTANCES.thirdBand.white.value) + RESISTANCES.thirdBand.white.label
		    break;
		}

		// resistancesThirdBand
		// if (resistancesThirdBand === 0) {
		// 	resistanceValue = (resistanceValue * RESISTANCES.thirdBand.black.value) + RESISTANCES.thirdBand.black.label
		// }else if (resistancesThirdBand === 1) {
		// 	resistanceValue = (resistanceValue * RESISTANCES.thirdBand.brown.value) + RESISTANCES.thirdBand.brown.label
		// }else if (resistancesThirdBand === 2) {
		// 	resistanceValue = (resistanceValue * RESISTANCES.thirdBand.red.value) + RESISTANCES.thirdBand.red.label
		// }else if (resistancesThirdBand === 3) {
		// 	resistanceValue = (resistanceValue * RESISTANCES.thirdBand.orange.value) + RESISTANCES.thirdBand.orange.label
		// }else if (resistancesThirdBand === 4) {
		// 	resistanceValue = (resistanceValue * RESISTANCES.thirdBand.yellow.value) + RESISTANCES.thirdBand.yellow.label
		// }else if (resistancesThirdBand === 5) {
		// 	resistanceValue = (resistanceValue * RESISTANCES.thirdBand.green.value) + RESISTANCES.thirdBand.green.label
		// }else if (resistancesThirdBand === 6) {
		// 	resistanceValue = (resistanceValue * RESISTANCES.thirdBand.blue.value) + RESISTANCES.thirdBand.blue.label
		// }else if (resistancesThirdBand === 7) {
		// 	resistanceValue = (resistanceValue * RESISTANCES.thirdBand.violet.value) + RESISTANCES.thirdBand.violet.label
		// }else if (resistancesThirdBand === 8) {
		// 	resistanceValue = (resistanceValue * RESISTANCES.thirdBand.gray.value) + RESISTANCES.thirdBand.gray.label
		// }else if (resistancesThirdBand === 9) {
		// 	resistanceValue = (resistanceValue * RESISTANCES.thirdBand.white.value) + RESISTANCES.thirdBand.white.label
		// }

		calcResistancesResultValue.textContent = resistanceValue
		calcResistancesResult.classList.remove('invisible');
		calcResistancesResult.classList.add('visible');
		
		calcProductAlert.classList.add('d-none');
		calcProductAlert.classList.remove('d-block');	
	}

}

//console.log(`Los Valores capturados son: ${calcProfit(calcProductValue.value, calcProductProfit.value)}`)
//console.log(`Los Valores capturados son: ${calcTax(calcProductValue.value)}`)