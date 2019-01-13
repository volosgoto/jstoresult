
function alphabet() {
    let aIndex = "a".charCodeAt(0);
    let aLphabet = "";

    for (let i = 0; i<26; i++) {
        aLphabet += String.fromCharCode(aIndex++);
    }
    return aLphabet;
}

alert (alphabet());
