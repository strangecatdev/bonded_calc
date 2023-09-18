// calcTotal(24, 6.16, 0);
getValues();
document.querySelector("#submitButton").addEventListener("click", getValues);
document.querySelector("html").addEventListener("keypress", function (e) {
	if (e.key === "Enter") {
		getValues();
	}
});

// let numberOfKeys, selfOwned, spendLimit;
// let initSelf, total, price, i, initPrice, keysBought;

function getValues() {
	let numberOfKeys;

	if (!document.querySelector("#initialKeys").value) {
		numberOfKeys = Math.round(
			Math.sqrt(Number(document.querySelector("#priceCalc").value) * 16000)
		);
		// console.log("PRICE CALC WORKS");
	} else {
		numberOfKeys = Number(document.querySelector("#initialKeys").value);
	}

	let selfOwned = Number(document.querySelector("#selfOwned").value);
	let spendLimit = Number(document.querySelector("#spendLimit").value);
	calcTotal(numberOfKeys, spendLimit, selfOwned);
}

// num = Math.sqrt(price * 16000);

function calcTotal(num = 1, limit = 0, self = 0) {
	if (num < self) {
		num = self;
	}
	Let
	let mex = 0;
	let mexMult = 1;
	let mexTotal = 0;
	if (document.querySelector("#mex").checked == true) {
		mex = 0.03;
		mexMult = 0.97345132743;
	}
	initSelf = self;
	let total = 0;
	let price = 0;
	let i = num + 1; // + 1 to calculate the next token value ?????and + 1 to accomodate displayed portfolio value
	let initPrice = (num * num) / 16000;
	price = initPrice;
	let keysBought = 0;
	while (total < limit) {
		price = ((i * i) / 16000) * (1.1 + mex);
		total += price;
		i++;
		self++;
		keysBought++;
	}
	if (total > limit) {
		total = total - price;
		i--;
		self--;
		keysBought--;
		price = (i * i) / 16000;
		// if (document.querySelector("#mex").checked == true) {
			mexTotal = (total *(mex/(1.1 + mex)));
		// }
	}

	document.querySelector("#result").innerHTML =
		`

	You now hold  <b>${self}</b> of these keys<br>
	Their total value is <b>${(price * self).toFixed(3)}Ξ</b><br><br> 

	Total spend is <b>${total.toFixed(3)}Ξ</b> to buy ${keysBought} keys<br>
	` +
		`
	<span>
	${((total - mexTotal) * (1 - 1 / 1.1)).toFixed(3)} of this in fees,
	${((total - mexTotal) * (1 - 1 / 1.1) / 2).toFixed(3)} to you if self-buy
	<span style="display: none" id="fm"><br>${mexTotal.toFixed(3)} to third party</span>
	</span>
	<br>
	<br>` +
		`
	
 	Price Per Key: <b>${price.toFixed(3)}Ξ</b> is per key
	<br>
  Keys total: <b>${i - 1}</b>  keys total
	<br>
	<br>` +
		`<b>Initial Stats</b><br>
  Owned Value: ${(initSelf * initPrice).toFixed(3)}Ξ for ${initSelf} keys<br>
	Price Per Key: ${initPrice.toFixed(3)}Ξ 
	<br>
  Keys Total: ${num}
	<br>  
	<br>
  `;
	if (document.querySelector("#mex").checked == true) {
		document.querySelector("#fm").style.display="inline";
	}

}

// Owned Value: <b>${price * self}Ξ</b> for <b>${self}</b> keys held
// 	<br>

// document.querySelector("#result").innerHTML = `
//   <b>New Values</b><br>
// You now hold  <b>${self}</b> of these keys<br>

// Their total value is <b>${price * self}Ξ</b><br><br>

//   Total spend is <b>${total.toFixed(3)}Ξ</b> to buy ${keysBought} keys<br>
// 	<span>
// 	${(total * 0.0909).toFixed(3)} in fees,
// 	${((total * 0.0909) / 2).toFixed(3)} to you if self-bought
// 	</span>
// 	<br>
// 	<br>
// 	<b>New Stats</b>
// 	<br>
//  	Price Per Key: <b>${price}Ξ</b> is per key
// 	<br>
//   Keys total: <b>${i - 1}</b>  keys total
// 	<br>
// 	<br>
//   <b>Initial Stats</b><br>
//   Owned Value: ${initSelf * initPrice}Ξ for ${initSelf} keys<br>
// 	Price Per Key: ${initPrice}Ξ
// 	<br>
//   Keys Total: ${num}
// 	<br>
//   `;

// ${i} is the new total keys in circulation<br>

// `
// Self-owned Value: ${price*self}
// Self-owned Number: ${self}

// Total keys: ${i}
// Price: ${price}

//   Total Spent: ${total.toFixed(3)}

//   Initial total keys: ${num}
//   Initial Price: ${initPrice}

//   Inital self owned Value: ${initSelf*initPrice}
//   Inital self owned: ${initSelf}
//   `
// `

// New self owned Value: ${price*(i-num+selfHeld)}
// Initial Price: ${initPrice}
// Current Price: ${price}
// Number of tokens held: ${i}

// Total Spent: ${total.toFixed(3)}

// Inital self owned Value: ${selfHeld*initPrice}
// Inital self owned: ${selfHeld}
// `
