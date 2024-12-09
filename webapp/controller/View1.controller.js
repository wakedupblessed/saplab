sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], (Controller) => {
    "use strict";

    return Controller.extend("sap.btp.helloworldui5.controller.View1", {
        onInit() {
        },
        onPress: function () {
            MessageBox.alert("You have been alerted!");
        }
    });
});