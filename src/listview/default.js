"use strict";
/**
 * ListView Default Sample
 */
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
var ej2_react_lists_1 = require("@syncfusion/ej2-react-lists");
var sample_base_1 = require("../common/sample-base");
require("./listview.css");
var Default = (function (_super) {
    __extends(Default, _super);
    function Default() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //Define an array of JSON data
        _this.data = [
            { text: 'Hennessey Venom', id: 'list-01' },
            { text: 'Bugatti Chiron', id: 'list-02' },
            { text: 'Bugatti Veyron Super Sport', id: 'list-03' },
            { text: 'SSC Ultimate Aero', id: 'list-04' },
            { text: 'Koenigsegg CCR', id: 'list-05' },
            { text: 'McLaren F1', id: 'list-06' },
            { text: 'Aston Martin One- 77', id: 'list-07' },
            { text: 'Jaguar XJ220', id: 'list-08' },
            { text: 'McLaren P1', id: 'list-09' },
            { text: 'Ferrari LaFerrari', id: 'list-10' },
        ];
        //Define an array of JSON data
        _this.groupData = [
            {
                'text': 'Audi A4',
                'id': '9bdb',
                'category': 'Audi'
            },
            {
                'text': 'Audi A5',
                'id': '4589',
                'category': 'Audi'
            },
            {
                'text': 'Audi A6',
                'id': 'e807',
                'category': 'Audi'
            },
            {
                'text': 'Audi A7',
                'id': 'a0cc',
                'category': 'Audi'
            },
            {
                'text': 'Audi A8',
                'id': '5e26',
                'category': 'Audi'
            },
            {
                'text': 'BMW 501',
                'id': 'f849',
                'category': 'BMW'
            },
            {
                'text': 'BMW 502',
                'id': '7aff',
                'category': 'BMW'
            },
            {
                'text': 'BMW 503',
                'id': 'b1da',
                'category': 'BMW'
            },
            {
                'text': 'BMW 507',
                'id': 'de2f',
                'category': 'BMW'
            },
            {
                'text': 'BMW 3200',
                'id': 'b2b1',
                'category': 'BMW'
            }
        ];
        //Map the appropriate columns to fields property
        _this.fields = { groupBy: 'category' };
        return _this;
    }
    Default.prototype.render = function () {
        return (React.createElement("div", { className: 'control-pane' },
            React.createElement("div", { className: 'control-section' },
                React.createElement("div", { id: "flat-list" },
                    React.createElement("h4", null, "Flat List"),
                    React.createElement(ej2_react_lists_1.ListViewComponent, { id: "sample-list-flat", dataSource: this.data })),
                React.createElement("div", { id: "group-list" },
                    React.createElement("h4", null, "Group List"),
                    React.createElement(ej2_react_lists_1.ListViewComponent, { id: "sample-list-group", dataSource: this.groupData, fields: this.fields }))),
            React.createElement("div", { id: "action-description" },
                React.createElement("p", null, "This sample demonstrates the default functionalities of the ListView. Click any list item to select and highlight an item.")),
            React.createElement("div", { id: "description", className: "descriptionLayout" },
                React.createElement("p", null, "ListView component represent data in interactive hierarchical structure interface across different layouts or views, that also has the features of data-binding, template rendering, and grouping."),
                React.createElement("p", null,
                    "The group list allows to group the relevant items under a logical category by mapping the ",
                    React.createElement("code", null, "groupBy"),
                    " field."),
                React.createElement("p", null,
                    "In this sample, ",
                    React.createElement("b", null, "Cars"),
                    " are grouped based on their ",
                    React.createElement("b", null, "category"),
                    "."))));
    };
    return Default;
}(sample_base_1.SampleBase));
exports.Default = Default;
