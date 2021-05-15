export default function formatCurrency(num){
    return  "\u20A6" + Number(num.toFixed(1)).toLocaleString() + " "
} 