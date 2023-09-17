// calcTotal(24, 6.16, 0);

document.querySelector("#submitButton").addEventListener("click", getValues);

// let numberOfKeys, selfOwned, spendLimit;
// let initSelf, total, price, i, initPrice, keysBought;

function getValues(){
  // if Number.isInteger(document.querySelector("#initialKeys").value)
  // let numberOfKeys = Math.round(Math.sqrt(Number(document.querySelector("#initialKeys").value)* 16000));
  let numberOfKeys =Number(document.querySelector("#initialKeys").value);
  
  let selfOwned = Number(document.querySelector("#selfOwned").value);
  let spendLimit = Number(document.querySelector("#spendLimit").value);
  calcTotal(numberOfKeys, spendLimit, selfOwned);
  }
num= Math.sqrt(price*16000)

function calcTotal(num = 1, limit = 0, self = 0) {
	 initSelf = self;
  let total = 0;
	let price = 0;
	let i = num+1; // + 1 to calculate the next token value ?????and + 1 to accomodate displayed portfolio value
  let initPrice = (num)*(num)/16000;
  price = initPrice;
  let keysBought=0;
	while (total < limit) {
		price = (i * i) / 16000;
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
	}

  document.querySelector("#result").innerHTML = `
  You now hold  <b>${self}</b> of these keys<br>
  Their total value is <b>${price*self} Ξ</b><br><br>
  
  Total Spend is <b>${total.toFixed(3)} Ξ</b> to buy ${keysBought} keys<br><br>

  New Price is <b>${price} Ξ</b> is per key<br>
  <b>${i-1}</b>  keys total<br><br>
  
  
  <span>
  Initial Stats<br><br>
  Self-owned Value: ${initSelf*initPrice} Ξ for ${initSelf} keys<br>
    Keys Total: ${num}<br>
    Price: ${initPrice} Ξ <br>
    </span>
    `
}



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