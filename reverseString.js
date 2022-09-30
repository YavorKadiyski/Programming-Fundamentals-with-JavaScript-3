function reverseString(string) {

    let rezult = "";

    for (let index = string.length - 1; index >= 0; index--) {

        rezult += `${string[index]}`;

    }
    console.log(rezult);

}
reverseString('SoftUni');