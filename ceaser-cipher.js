function ceaserCipher() {

    // Get user inputs
    let input = document.getElementById("input-text").value.toLowerCase();
    let enDeCode = getSelectedRadioValue("endecode");
    let key = Number(document.getElementById("key").value);
    let rollKey = Number(document.getElementById("rolling-key").value);
    let output = "";

    // Declare alphabet
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Alter key for decode
    if (enDeCode === "decode") {
        key *= -1;
        rollKey *= -1;
    }

    // For each char in the input array apply the offset (key value)
    for (let i = 0; i < input.length; i++) {

        // Only modify letters in the alphabet
        if (alphabet.includes( input[i] )) {
            // Calculate new index value
            var index = alphabet.indexOf( input[i] ) + key;
            key += rollKey;
            // Ensure index doesn't exceed 26
            while (index > 25) {
                index -= 26;
            }
            // Ensure index isn't less than 0
            while (index < 0) {
                index += 26;
            }

            output += alphabet[index].toUpperCase();
        }
        else {
            output += input[i];
        }
    }

    // Set output text
    document.getElementById("output-text").innerHTML = output;

    // TEST CODE

}

/**
 * Returns string of selected radio button values
 * 
 * @param {string} name name of radio buttons
 */
function getSelectedRadioValue(name) {
    // Get list of radio buttons for variable "name"
    let radioBtns = document.getElementsByName(name);

    // Get and return the value of the checked radio button 
    for (let i = 0; i < radioBtns.length; i++) {
        if (radioBtns[i].checked) {
            return radioBtns[i].value;
        }
    }
    // If no radio button is checked reutn zero
    return 0;
}

