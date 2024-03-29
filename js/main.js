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
	let wantToBuy = Number(document.querySelector("#wantToBuy").value);
	if (!spendLimit || wantToBuy) {
		spendLimit = (Number(calcSpend(wantToBuy, numberOfKeys)));
		// console.log(spendLimit + "yes");
	}
	//TODO
	// if spend limit is empty or is there is a valur wantToBuy,
	//calculate how much it will cost to buy those keys....
	calcTotal(numberOfKeys, spendLimit, selfOwned);
}

// calcSpend(16, 24);
function calcSpend(wish = 0, num = 0) {
	// friendMex 3%
	wish = wish + num;
	let mex = 0;
	if (document.querySelector("#mex").checked == true) {
		mex = 0.03;
	}
	let price = 0;
	let total = 0;
	let i = num;
	while (i < wish) {
		price = ((i * i) / 16000) * (1.1 + mex);
		total += price;
		i++;
		// console.log(i);
	}
	// console.log(total+'inside');
	return total;
}

// num = Math.sqrt(price * 16000); //calculate number from price

function calcTotal(num = 1, limit = 0, self = 0) {
	// VARIABLES
	// normalize
	if (num < self) {
		num = self;
	}
	// friendMex 3%
	let mex = 0;
	let mexMult = 1;
	let mexTotal = 0;
	if (document.querySelector("#mex").checked == true) {
		mex = 0.03;
		mexMult = 0.97345132743;
	}
	// declare variables
	const initSelf = self; //correction?
	let total = 0;
	let price = 0;
	let i = num; // + 1 to calculate from next token value? (no)
	const initPrice = (num * num) / 16000;
	price = initPrice;
	let keysBought = 0;

	// MATH
	while (total <= limit) {
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
		mexTotal = total * (mex / (1.1 + mex));
	}
	console.log(total +": total spend")
	//RESULT
	document.querySelector("#result").innerHTML =
		`

	You now hold  <b>${self}</b> of these keys<br>
	Their total value is <b>${(price * self).toFixed(3)}Ξ</b><br><br> 

	Total spend is <b>${total.toFixed(3)}Ξ</b> to buy ${keysBought} keys<br>
	` +
		`
	<span>
	${((total - mexTotal) * (1 - 1 / 1.1)).toFixed(3)} of this in fees,
	${(((total - mexTotal) * (1 - 1 / 1.1)) / 2).toFixed(3)} to you if self-buy
	<span style="display: none" id="fm"><br>${mexTotal.toFixed(
		3
	)} to third party</span>
	</span>
	<br>
	<br>` +
		`
	
 	Price Per Key: <b>${price.toFixed(3)}Ξ</b> is per key
	<br>
  Keys total: <b>${i}</b>  keys total
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
		document.querySelector("#fm").style.display = "inline";
	}
}
