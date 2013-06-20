function Controller() {
    function confirmCB() {
        $.label.setText($.inputText.value);
        $.inputText.setValue("");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        layout: "vertical",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.instructLabel = Ti.UI.createLabel({
        width: "280",
        height: Ti.UI.SIZE,
        color: "#000",
        top: "20",
        text: "Enter in text and press OK to change the label text!",
        id: "instructLabel"
    });
    $.__views.index.add($.__views.instructLabel);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    $.__views.inputText = Ti.UI.createTextField({
        width: "300",
        id: "inputText",
        value: ""
    });
    $.__views.index.add($.__views.inputText);
    $.__views.confirmButton = Ti.UI.createButton({
        title: "OK",
        id: "confirmButton"
    });
    $.__views.index.add($.__views.confirmButton);
    confirmCB ? $.__views.confirmButton.addEventListener("click", confirmCB) : __defers["$.__views.confirmButton!click!confirmCB"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.confirmButton!click!confirmCB"] && $.__views.confirmButton.addEventListener("click", confirmCB);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;