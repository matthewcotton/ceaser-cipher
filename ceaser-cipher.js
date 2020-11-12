/**
 * Encodes or decodes a string based on a key and a rolling key
 */
function ceaserCipher() {
    // Get user inputs
    let input = document.getElementById("input-text").value.toLowerCase();
    let enDeCode = getSelectedRadioValue("endecode");
    let key = Number(document.getElementById("key").value);
    let rollKey = Number(document.getElementById("rolling-key").value);
    let output = ""; // Set empty output variable
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", 
    "v", "w", "x", "y", "z"]; // Declare alphabet
    // Alter keys for decode
    if (enDeCode === "decode") {
        key *= -1;
        rollKey *= -1;
    }
    // Apply the offset (key) and rolling offset (rollKey) to each input char
    for (let i = 0; i < input.length; i++) {
        // Only modify letters in the alphabet
        if (alphabet.includes( input[i] )) {
            
            var index = alphabet.indexOf( input[i] ) + key; // Calc new index value
            key += rollKey; // Calc new rollKey
            // Keep index within range 0 to 25
            while (index > 25) {
                index -= 26;
            }
            while (index < 0) {
                index += 26;
            }
            output += alphabet[index].toUpperCase(); // Add char to output
        }
        // If char is not in the alphabet
        else {
            output += input[i]; // Keep current char
        }
    }
    // Set output text in HTML
    document.getElementById("output-text").innerHTML = output;
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

