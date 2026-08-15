function CurrencyInput({
  label,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
  currencyOptions,
  amountDisabled = false,
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <label className="text-gray-600 font-medium">
          {label}
        </label>

        <select
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          className="bg-gray-100 px-3 py-2 rounded-md font-semibold outline-none"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <input
        type="number"
        value={amount}
        disabled={amountDisabled}
        onChange={(e) => onAmountChange(e.target.value)}
        placeholder="Enter amount"
        className="w-full text-2xl font-semibold outline-none border-b-2 border-gray-200 py-2"
      />
    </div>
  );
}

export default CurrencyInput;