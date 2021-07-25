import calculatorTip from "./calculatorTip.js";


const calcTip = new calculatorTip(
    "Tip Calculator",
    0.00,
    0.00
)

const content = `
<div class="container">
        <div class="row border m-3">
            <div class="col-12 mt-3">
                <h1><strong>${calcTip.header}</strong></h1>
            </div>
            <div class="col-12 mt-3">
                <label for=""><strong>Amount:</strong> </label>
                <input id="amount" type="number" value=0 min=0.00>

            </div>
            <div class="col-12 mt-3">
                <label for=""><strong>Tip%:</strong> </label>
                <input id="tipPercent" type="number" value=0 min=0.00>
            </div>
            <div class="col-12 mt-3">
          
            <button  id="calculateButton" class="btn btn-danger">Calculate</button>
        </div>
            <div class="col-12 mt-5">
                <span id="tipAmountspan"><strong>Tip Amount: </strong></span>
                <span id="resultTip" class="border border-success">${calcTip.tipAmount}</span>
            </div>
            <div class="col-12 mt-3 mb-3">
                <span id="billAmountspan"><strong>Total Bill Amount: </strong></span>
                <span id="totalResult" class="border border-success">${calcTip.totalBill}</span>
            </div>
        </div> 
     </div>
`

document.body.innerHTML =content;

calculateButton.onclick= function calculateAmount(amount, percentTip) {
    
    amount = parseFloat(document.querySelector("#amount").value);
    percentTip = (parseFloat( document.querySelector("#tipPercent").value)/100.00);

    let totalTip = amount * percentTip;
    let totalBillAmount =  amount + totalTip;
    if(amount >= 0.00 && percentTip >= 0.00){
        document.getElementById("resultTip").innerHTML = totalTip.toFixed(2);
        document.getElementById("totalResult").innerHTML = totalBillAmount.toFixed(2);
    
    }
    else{
        window.alert("Please enter a positive number");
        document.getElementById("amount").value = 0.00;
        document.getElementById("tipPercent").value = 0.00;
        document.getElementById("resultTip").innerHTML = 0.00;
        document.getElementById("totalResult").innerHTML = 0.00;
    
    }
   
 
} ;


