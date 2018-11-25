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
require("./template.css");
var Templates = (function (_super) {
    __extends(Templates, _super);
    function Templates() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // define the JSON of data
        _this.employeesData = [
            { Name: 'Andrew Fuller', Eimg: '7', Designation: 'Team Lead', Country: 'England' },
            { Name: 'Anne Dodsworth', Eimg: '1', Designation: 'Developer', Country: 'USA' },
            { Name: 'Janet Leverling', Eimg: '3', Designation: 'HR', Country: 'USA' },
            { Name: 'Laura Callahan', Eimg: '2', Designation: 'Product Manager', Country: 'USA' },
            { Name: 'Margaret Peacock', Eimg: '6', Designation: 'Developer', Country: 'USA' },
            { Name: 'Michael Suyama', Eimg: '9', Designation: 'Team Lead', Country: 'USA' },
            { Name: 'Nancy Davolio', Eimg: '4', Designation: 'Product Manager', Country: 'USA' },
            { Name: 'Robert King', Eimg: '8', Designation: 'Developer ', Country: 'England' },
            { Name: 'Steven Buchanan', Eimg: '10', Designation: 'CEO', Country: 'England' }
        ];
        // maps the appropriate column to fields property
        _this.fields = { value: 'Name' };
        return _this;
    }
    //set the value to header template
    Templates.prototype.headerTemplate = function (data) {
        return (React.createElement("div", { className: "header" },
            " ",
            React.createElement("span", null, "Photo"),
            " ",
            React.createElement("span", { className: "columnHeader" }, "Employee Info")));
    };
    //set the value to item template
    Templates.prototype.itemTemplate = function (data) {
        return (React.createElement("div", null,
            React.createElement("img", { className: "empImage", src: "src/auto-complete/Employees/" + ("" + data.Eimg) + ".png", alt: "employee" }),
            React.createElement("div", { className: "ename" },
                " ",
                data.Name,
                " "),
            React.createElement("div", { className: "job" },
                " ",
                data.Designation,
                " ")));
    };
    Templates.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { id: 'template' },
                    React.createElement(ej2_react_dropdowns_1.AutoCompleteComponent, { id: "employees", dataSource: this.employeesData, fields: this.fields, placeholder: "e.g. Andrew Fuller", itemTemplate: this.itemTemplate, headerTemplate: this.headerTemplate, popupHeight: "350px" }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the template functionalities of the AutoComplete. Type a character in the autocomplete element and choose an item from the customized list")),
            React.createElement("div", { id: "description" },
                React.createElement("p", null, "The AutoComplete has been provided with several options to customize each list items, group title, header and footer elements."),
                React.createElement("p", null, "This sample uses the following list of templates in AutoComplete"),
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement("code", null, "ItemTemplate"),
                        " - To customize the list item's content."),
                    React.createElement("li", null,
                        React.createElement("code", null, "HeaderTemplate"),
                        " - To customize the header element.")),
                React.createElement("p", null,
                    " More information on the template feature configuration can be found in the",
                    React.createElement("a", { href: "http://ej2.syncfusion.com/react/documentation/auto-complete/templates.html", target: "_blank" }, " documentation section"),
                    "."))));
    };
    return Templates;
}(sample_base_1.SampleBase));
exports.Templates = Templates;
