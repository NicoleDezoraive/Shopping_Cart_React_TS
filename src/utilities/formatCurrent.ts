const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", { currency: "USD", style: "currency",currencySign: "standard"})

const formatCurrency = (number: number) => {
    return ( 
        CURRENCY_FORMATTER.format(number)
     );
}
 
export default formatCurrency;