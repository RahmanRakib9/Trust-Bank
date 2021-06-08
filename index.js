//key press
document.getElementById('input').addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
        document.getElementById("login-area").style.display = 'none';

        const transactionArea = document.getElementById('transaction-area');
        transactionArea.style.display = 'block';

    }
});


//handle Deposit Button
document.getElementById('addDeposit').addEventListener('click', function () {
    const depositInput = document.getElementById('depositAmount').value;
    const depositNum = parseFloat(depositInput);
    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNum = parseFloat(currentDeposit);
    const totalDeposit = depositNum + currentDepositNum;
    document.getElementById('currentDeposit').innerText = totalDeposit;
    //add balance
    const currentBalance = document.getElementById("current-balance").innerText;
    const currentBalanceNum = parseFloat(currentBalance);
    const totalBalance = currentBalanceNum + depositNum;
    document.getElementById("current-balance").innerText = totalBalance;

    document.getElementById('depositAmount').value = '';
});


//handle withdraw Button
document.getElementById('addWithdraw').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdrawAmount').value;
    const withdrawNum = parseFloat(withdrawInput);
    const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    const currentWithdrawNum = parseFloat(currentWithdraw);
    const totalWithdraw = withdrawNum + currentWithdrawNum;
    document.getElementById('currentWithdraw').innerText = totalWithdraw;

    document.getElementById('withdrawAmount').value = '';
});
