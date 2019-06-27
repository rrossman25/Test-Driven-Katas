const wrap = (str, num) => {
    let dividedString = '';
    let strArray = str.split(' ');
    if (!str || !num){
        return str;
    }
    else {
        strArray.forEach(word => {
            for (let i = 0; i < strArray.length ; i++){
                if (i !== 0 && i % num === 0){
                dividedString += '\n';
                dividedString += str[i];

                }
                else {
                    dividedString += str[i];
                }
            }
        })

    }
    return dividedString;
}


module.exports = wrap;
