document.getElementById("depositeBtn").addEventListener("click", function () {
  const addAmount = document.getElementById("deposit-field").value;
  document.getElementById("deposite-amount").innerHTML = addAmount;

  const totalBalance = document.getElementById("totalAmount").innerText;
  document.getElementById("totalAmount").innerHTML =
    parseFloat(totalBalance) + parseFloat(addAmount);
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdraw-field").value;
  document.getElementById("withdrawAmout").innerHTML = withdrawAmount;

  const totalBalance = document.getElementById("totalAmount").innerText;
  if (
    parseFloat(totalBalance) > 0 &&
    parseFloat(totalBalance) > withdrawAmount
  ) {
    document.getElementById("totalAmount").innerHTML =
      parseFloat(totalBalance) - parseFloat(withdrawAmount);
  } else {
    alert("dont withdraw");
  }
});
