"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ej2_react_dropdowns_1 = require("@syncfusion/ej2-react-dropdowns");
var sample_base_1 = require("../common/sample-base");
require("./icons.css");
var Grouping = (function (_super) {
    __extends(Grouping, _super);
    function Grouping() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // define the JSON of data
        _this.vegetableData = [
            { Vegetable: 'Cabbage', Category: 'Leafy and Salad', Id: 'item1' },
            { Vegetable: 'Chickpea', Category: 'Beans', Id: 'item2' },
            { Vegetable: 'Garlic', Category: 'Bulb and Stem', Id: 'item3' },
            { Vegetable: 'Green bean', Category: 'Beans', Id: 'item4' },
            { Vegetable: 'Horse gram', Category: 'Beans', Id: 'item5' },
            { Vegetable: 'Nopal', Category: 'Bulb and Stem', Id: 'item6' },
            { Vegetable: 'Onion', Category: 'Bulb and Stem', Id: 'item7' },
            { Vegetable: 'Pumpkins', Category: 'Leafy and Salad', Id: 'item8' },
            { Vegetable: 'Spinach', Category: 'Leafy and Salad', Id: 'item9' },
            { Vegetable: 'Wheat grass', Category: 'Leafy and Salad', Id: 'item10' },
            { Vegetable: 'Yarrow', Category: 'Leafy and Salad', Id: 'item11' }
        ];
        // maps the appropriate column to grouping fields property
        _this.groupFields = { groupBy: 'Category', value: 'Vegetable' };
        // define the JSON of data
        _this.socialMediaData = [
            { Class: 'facebook', SocialMedia: 'Facebook', Id: 'media1' },
            { Class: 'google-plus', SocialMedia: 'Google Plus', Id: 'media2' },
            { Class: 'instagram', SocialMedia: 'Instagram', Id: 'media3' },
            { Class: 'linkedin', SocialMedia: 'LinkedIn', Id: 'media4' },
            { Class: 'skype', SocialMedia: 'Skype', Id: 'media5' },
            { Class: 'tumblr', SocialMedia: 'Tumblr', Id: 'media6' },
            { Class: 'twitter', SocialMedia: 'Twitter', Id: 'media7' },
            { Class: 'vimeo', SocialMedia: 'Vimeo', Id: 'media8' },
            { Class: 'whatsapp', SocialMedia: 'WhatsApp', Id: 'media9' },
            { Class: 'youtube', SocialMedia: 'YouTube', Id: 'media10' }
        ];
        // maps the appropriate column to icons fields property
        _this.iconFields = { value: 'SocialMedia', iconCss: 'Class' };
        return _this;
    }
    Grouping.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section', id: 'autoIcon' },
                React.createElement("div", { className: 'col-lg-6' },
                    React.createElement("div", { id: "group" },
                        React.createElement("h4", null, "Grouping"),
                        React.createElement(ej2_react_dropdowns_1.AutoCompleteComponent, { id: "vegetables", showPopupButton: true, dataSource: this.vegetableData, fields: this.groupFields, placeholder: "e.g. Cabbage" }))),
                React.createElement("div", { className: 'col-lg-6' },
                    React.createElement("div", { id: "icon" },
                        React.createElement("h4", null, " Icons"),
                        React.createElement(ej2_react_dropdowns_1.AutoCompleteComponent, { id: "icons", showPopupButton: true, dataSource: this.socialMediaData, fields: this.iconFields, placeholder: "e.g. Facebook" })))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null,
                    "This sample demonstrates the grouping and icons supports of the AutoComplete. Type a character in the autocomplete element and choose an item from the categorized list/icons list. And also enabled the",
                    React.createElement("code", null, "showPopupButton"),
                    " property to show the all suggestion items while clicking on popup button.")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null,
                    "The AutoComplete allows to group the relevant items under a corresponding category by mapping the ",
                    React.createElement("code", null, "groupBy"),
                    " field, and allows to load the list items with icons."),
                React.createElement("p", null, "The grouping sample illustrates how the vegetables are grouped based on its category."),
                React.createElement("p", null,
                    "The 2nd AutoComplete is populated with icons which is rendered by mapping the ",
                    React.createElement("code", null, "iconCss"),
                    " field."),
                React.createElement("p", null,
                    " More information on the grouping feature configuration can be found in the",
                    React.createElement("a", { href: "http://ej2.syncfusion.com/react/documentation/auto-complete/grouping.html", target: "_blank" }, " documentation section"),
                    "."))));
    };
    return Grouping;
}(sample_base_1.SampleBase));
exports.Grouping = Grouping;
