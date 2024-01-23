export function calcIMC(p,h) {
    let result = (p / (h/100) ** 2).toFixed(2)
    return result
}

export function isnNum(value) {
    return isNaN(value) || value == ""
} 

