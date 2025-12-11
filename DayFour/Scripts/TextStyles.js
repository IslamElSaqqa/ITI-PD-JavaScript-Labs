// Function to apply styles based on selected radio button
function applyTextStyles() {
    const paragraph = document.getElementById("sampleParagraph");

    // Get the selected font family
    const fontFamily = document.querySelector('input[name="fontFamily"]:checked');
    if (fontFamily) {
        paragraph.style.fontFamily = fontFamily.value;
    }

    // Get the selected text alignment
    const textAlign = document.querySelector('input[name="textAlign"]:checked');
    if (textAlign) {
        paragraph.style.textAlign = textAlign.value;
    }

    // Get the selected line height
    const lineHeight = document.querySelector('input[name="lineHeight"]:checked');
    if (lineHeight) {
        paragraph.style.lineHeight = lineHeight.value;
    }

    // Get the selected letter spacing
    const letterSpacing = document.querySelector('input[name="letterSpacing"]:checked');
    if (letterSpacing) {
        paragraph.style.letterSpacing = letterSpacing.value;
    }

    // Get the selected text indent
    const textIndent = document.querySelector('input[name="textIndent"]:checked');
    if (textIndent) {
        paragraph.style.textIndent = textIndent.value;
    }

    // Get the selected text transform
    const textTransform = document.querySelector('input[name="textTransform"]:checked');
    if (textTransform) {
        paragraph.style.textTransform = textTransform.value;
    }

    // Get the selected text decoration
    const textDecoration = document.querySelector('input[name="textDecoration"]:checked');
    if (textDecoration) {
        paragraph.style.textDecoration = textDecoration.value;
    }
}

// Attach the applyTextStyles function to each radio button change event
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(button => {
    button.addEventListener("change", applyTextStyles);
});
