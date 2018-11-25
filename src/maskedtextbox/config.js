"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaskedTextBoxOrder = [
    { 'path': 'maskedtextbox/default', 'component': 'Default', 'name': 'Default Functionalities', 'order': '01', 'category': 'MaskedTextBox', 'description': 'The Masked Textbox allows the user to enter only the valid input based on the provided mask format. The mask format can be any Phone number, Country ISO code, Date, Time, Social security number, product key and so on.', 'api': '{"MaskedTextBoxComponent":["mask"] }' },
    { 'path': 'maskedtextbox/custom-mask', 'component': 'CustomMask', 'name': 'Custom Mask', 'order': '01', 'category': 'MaskedTextBox', 'description': 'The custom mask can be done by using custom characters as mask elements and using regular expressions. In this demo the time format and IP address fields are achieved by using the custom mask literals and regex.', 'api': '{"MaskedTextBoxComponent":["mask","customCharacters","floatLabelType"] }' },
    { 'path': 'maskedtextbox/formats', 'component': 'Formats', 'name': 'Formats', 'order': '01', 'category': 'MaskedTextBox', 'description': 'This sample demonstrates the usage of different mask formats through the properties panel. You can also get the value and raw value of the masked textbox.', 'api': '{"MaskedTextBoxComponent":["mask","floatLabelType","change","promptChar","getMaskedValue","value"] }' }
];
