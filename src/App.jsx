import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const currencyOptions = Object.keys(currencyInfo);

  const convert = () => {
    if (!amount) return;

    const rate = currencyInfo[to.toLowerCase()];

    if (!rate) return;

    setConvertedAmount((amount * rate).toFixed(2));
  };

  const swapCurrencies = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center p-4">

      <div className="w-full max-w-md">

        {/* Main Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-7">

          {/* Header */}
          <div className="text-center mb-8">

            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg mb-4">
              <span className="text-3xl">💱</span>
            </div>

            <h1 className="text-3xl font-extrabold text-gray-900">
              Currency Converter
            </h1>

            <p className="text-gray-500 mt-2">
              Convert currencies quickly and easily
            </p>

          </div>

          {/* Amount */}
          <div className="mb-5">

            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Amount
            </label>

            <div className="relative">

              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                💰
              </span>

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl py-4 pl-12 pr-4 text-lg font-semibold outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition"
                placeholder="Enter amount"
              />

            </div>

          </div>

          {/* Currency Section */}
          <div className="relative">

            <div className="grid grid-cols-2 gap-4">

              {/* From */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  From
                </label>

                <select
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-4 font-bold text-gray-800 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition cursor-pointer"
                >
                  {currencyOptions.map((currency) => (
                    <option key={currency} value={currency.toUpperCase()}>
                      {currency.toUpperCase()}
                    </option>
                  ))}
                </select>

              </div>

              {/* To */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  To
                </label>

                <select
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-4 font-bold text-gray-800 outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition cursor-pointer"
                >
                  {currencyOptions.map((currency) => (
                    <option key={currency} value={currency.toUpperCase()}>
                      {currency.toUpperCase()}
                    </option>
                  ))}
                </select>

              </div>

            </div>

            {/* Swap Button */}
            <button
              onClick={swapCurrencies}
              className="absolute left-1/2 -translate-x-1/2 top-[52px] w-11 h-11 bg-white border-4 border-gray-100 rounded-full shadow-lg flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition duration-300 z-10"
              title="Swap currencies"
            >
              ⇄
            </button>

          </div>

          {/* Convert Button */}
          <button
            onClick={convert}
            className="w-full mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition duration-200"
          >
            Convert 💱
          </button>

          {/* Result */}
          <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-5 text-center">

            <p className="text-sm text-gray-500 mb-2">
              Converted Amount
            </p>

            <h2 className="text-2xl font-extrabold text-gray-900">
              {amount || 0} {from}
              <span className="text-indigo-500 mx-2">=</span>
              {convertedAmount || 0} {to}
            </h2>

          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400 mt-5">
            🌐 Exchange rates powered by Currency API
          </p>

        </div>

      </div>

    </div>
  );
}

export default App;