const addComma = (num) => {
    const n = Number(num)
    const formattedNum = n.toLocaleString("en-IN")
    return formattedNum;
}


export default addComma;