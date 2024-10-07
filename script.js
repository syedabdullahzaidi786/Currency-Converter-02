document.getElementById('convertBtn').addEventListener('click', function() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (amount === '' || isNaN(amount)) {
        alert('Please enter a valid amount.');
        return;
    }

    // For now, we'll use static conversion rates (in a real app, you would fetch these from an API)
    const conversionRates = {
        'USD': { 'EUR': 0.85, 'PKR': 277.50 },
        'EUR': { 'USD': 1.18, 'PKR': 325.70 },
        'PKR': { 'USD': 0.0036, 'EUR': 0.0031 }
    };

    const convertedAmount = (amount * conversionRates[fromCurrency][toCurrency]).toFixed(2);

    document.getElementById('convertedAmount').textContent = convertedAmount;
});
