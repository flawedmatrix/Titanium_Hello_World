// The confirmCB controller function
// Sets label text to inputText's value
// Then clears inputText
function confirmCB(e) {  
    $.label.setText($.inputText.value);
    $.inputText.setValue("");
}

$.index.open();
