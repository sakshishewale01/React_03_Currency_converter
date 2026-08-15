# 💱 Currency Converter

A responsive Currency Converter built with **React.js** that uses a currency exchange API to fetch exchange rates and convert one currency into another.

This project helped me understand **React Hooks, Custom Hooks, API integration, state management, and dynamic rendering**.

## 🚀 Features

- 💰 Enter the amount to convert
- 🌎 Select the source currency
- 🌎 Select the target currency
- 💱 Convert currencies using exchange-rate data
- 🌐 Fetch currency data from an external API
- 🪝 Custom Hook for API logic
- ⚛️ Uses React `useState` and `useEffect`
- 📱 Responsive UI
- 🎨 Styled with Tailwind CSS

## 🛠️ Technologies Used

- React.js
- JavaScript
- Vite
- Tailwind CSS
- React Hooks
- Exchange Rate API

## 🧠 React Concepts Used

### useState

`useState` is used to store values that change during the application.

javascript
const [amount, setAmount] = useState(1);
const [from, setFrom] = useState("USD");
const [to, setTo] = useState("INR");
const [convertedAmount, setConvertedAmount] = useState(0);

useEffect

useEffect is used to call the API whenever the selected currency changes.

useEffect(() => {
    fetch(`https://open.er-api.com/v6/latest/${currency}`)
        .then((response) => response.json())
        .then((result) => {
            setData(result.conversion_rates);
        });
}, [currency]);
Custom Hook

A custom hook called useCurrencyInfo is used to keep the API-related logic separate from the UI.

const currencyInfo = useCurrencyInfo(from);

The custom hook:

Receives the selected currency.
Calls the currency API.
Gets the exchange-rate data.
Stores the data using useState.
Returns the data to the component.
🌐 API Integration

The application uses the Exchange Rate API to get currency exchange rates.

Example request:

https://open.er-api.com/v6/latest/USD

The API provides data similar to:

{
  "base_code": "USD",
  "conversion_rates": {
    "INR": 87.50,
    "EUR": 0.86,
    "GBP": 0.74
  }
}

The application uses the conversion_rates object to calculate the converted amount.
