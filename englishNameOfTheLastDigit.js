function englishNameOfTheLastDigit(number) {

    let numberToString = number.toString();

    for (let index = numberToString.length - 1; index >= 0; index--) {

        let lastNumber = numberToString[index];

        if (lastNumber === '0') {
            console.log('zero');
        }
        if (lastNumber === '1') {
            console.log('one');
        }
        if (lastNumber === '2') {
            console.log('two');
        }
        if (lastNumber === '3') {
            console.log('three');
        }
        if (lastNumber === '4') {
            console.log('four');
        }
        if (lastNumber === '5') {
            console.log('five');
        }
        if (lastNumber === '6') {
            console.log('six');
        }
        if (lastNumber === '7') {
            console.log('seven');
        }
        if (lastNumber === '8') {
            console.log('eight');
        }
        if (lastNumber === '9') {
            console.log('nine');
        }
        break;

    }

}
englishNameOfTheLastDigit(528);
