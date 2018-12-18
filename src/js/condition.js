'use strict'

import $ from "jquery";
import notie from "notie";
import ConditionsList from "./condition/list/conditionsList";
import ConditionItem from "./condition/item/conditionItem";
import { getEmptyTemplate } from "./templates/condition-empty";
import { getAddConditionTemplate } from "./templates/condition-add-button";
import { getConditionWrapperTemplate } from "./templates/condition-wrapper";
import { getConditionTemplate } from "./templates/condition-item";

import "../scss/style.scss";

// var guid = function () {
//     return '_' + Math.random().toString(36).substr(2, 9);
// };


// Singleton design pattern
var condition = (function () {

    var options = {
        features: [],
        variable: [],
        operators: [],
        assignments: [],
        featureAssignments: [],
        levels: []
    };

    var conditionsList = new ConditionsList();


    var setData = function (data) {
        data.forEach(function (conditionItem) {
            var item = new ConditionItem(conditionItem);
            conditionsList.addConditionItem(item);
        })
        renderItems();
    };


    // ================================================================================================================================================


    var setOptions = function (data) {
        options = Object.assign({}, options, data)
    };

    var changeEventListener = function () {

        $('select').on("change", function (event) {
            var $item = $(event.currentTarget);

            conditionsList.updateValueNestedConditionItem($item.data("id"), $item.data("name"), $item.data("type"), $item.val());

            if ($item.hasClass("conditions-formula-select")) {
                renderItems();
            }
        })

        $(".action-condition-wrapper input[type=text]").off("input");
        $(".action-condition-wrapper input[type=text]").on("input", function (event) {
            var $item = $(event.currentTarget);
            conditionsList.updateValueNestedConditionItem($item.data("id"), $item.data("name"), $item.data("type"), $item.val());
        });

        $(".action-condition-wrapper input[type=radio]").off("change");
        $(".action-condition-wrapper input[type=radio]").on("change", function (event) {
            var $item = $(event.currentTarget);
            conditionsList.updateValueNestedConditionItem($item.data("id"), $item.data("name"), $item.data("type"), $item.val());
            renderItems();
        });

    };


    // ================================================================================================================================================



    var deleteEventListener = function () {
        $(".remove-section").off("click");
        $(".remove-section").on("click", function (event) {
            var elm = $(event.currentTarget);
            deleteConfirm(elm.data("id"), elm.data("type"));
        });
    };

    var addSubItemEventListener = function () {
        $(".add-section").off("click");
        $(".add-section").on("click", function (event) {
            var elm = $(event.currentTarget);
            addSubItem(elm.data());
        })
    };

    var addItemEventListener = function () {
        $("#add-new-condition").off("click");
        $("#add-new-condition").on("click", function () {
            addItem();
        })
    };


    // ================================================================================================================================================


    var deleteConfirm = function (id, type) {
        notie.confirm({
            text: "آیا مایل به حذف این مورد هستید؟",
            submitText: "بله",
            cancelText: "خیر",
            submitCallback: function () {
                conditionsList.removeConditionItem(id, type);
                renderItems();
            }
        });
    };

    var addSubItem = function (data) {
        if (data && typeof data.id !== "undefined" && typeof data.type !== "undefined") {
            conditionsList.addNestedConditionItem(data.id, data.type);
            renderItems();
        }
    };

    var addItem = function () {
        var conditionItem = new ConditionItem();
        conditionsList.addConditionItem(conditionItem);
        renderItems();
    }

    // ================================================================================================================================================



    var renderItems = function () {

        $('.action-wrapper').html("");
        var conditionWrarpperTemplate = getConditionWrapperTemplate();
        $('.action-wrapper').append(conditionWrarpperTemplate);

        var addConditionTemplate = getAddConditionTemplate();
        $('.action-wrapper').append(addConditionTemplate);


        $('.action-condition-wrapper').html("");
        var list = conditionsList.getList();



        if (list.length) {
            var rendered = getConditionTemplate(options, list);
            $('.action-condition-wrapper').append(rendered);
        } else {
            var emptySection = getEmptyTemplate();
            $('.action-condition-wrapper').append(emptySection);
        }


        deleteEventListener();
        addSubItemEventListener();
        addItemEventListener();
        changeEventListener();
    };


    // ================================================================================================================================================


    var getData = function () {
        return conditionsList.getList();
    }

    // ================================================================================================================================================


    deleteEventListener();
    addSubItemEventListener();
    addItemEventListener();
    changeEventListener();
    renderItems();


    return {
        addItem: addItem,
        setData: setData,
        getData: getData,
        setOptions: setOptions
    };


})();



export default condition;




// var a = {
//     variable: [{
//         name: "$LEVEL_5b5c12b78201b400064f27ca",
//         title: "سطح - سطح امتیاز بازی"
//     }, {
//         name: "$LEVEL_5b964be12ced29000745650b",
//         title: "سطح - قهرمانان"
//     }, {
//         name: "$LEVEL_5b975a4c3b2d8d00079378be",
//         title: "سطح - lgxpGroups"
//     }, {
//         name: "$LEVEL_5b98a1c63b2d8d00079378c4",
//         title: "سطح - سطح 1"
//     }, {
//         name: "$XP_5b5d9f446009270007434167",
//         title: "امتیازبندی بازی"
//     }, {
//         name: "$RP_5b964b342ced29000745650a",
//         title: "gem"
//     }, {
//         name: "$XP_5b975a273b2d8d00079378bd",
//         title: "lgXP"
//     }, {
//         name: "$XP_5ba61de2e0371700066d45df",
//         title: "gem"
//     }, {
//         name: "$RP_5bb1e81eb6addd0007d9cb85",
//         title: "exir"
//     }, {
//         name: "$XP_5bb8b8998fcc2c000747e41e",
//         title: "Overal"
//     }, {
//         name: "$XP_5bb9a2308fcc2c000747e41f",
//         title: "inc10points"
//     }, {
//         name: "$RP_5bbddfe5f8b38c00077a9c68",
//         title: "gem"
//     }, {
//         name: "$XP_5bbde09df8b38c00077a9c69",
//         title: "question xp point"
//     }, {
//         name: "$XP_5bc5891418be4900060becc3",
//         title: "fee"
//     }],
//     features: [{
//         id: "5b5c12a18201b400064f27c9",
//         title: "پیکان"
//     }, {
//         id: "5b5d9ffb600927000743416b",
//         title: "دوچرخه"
//     }, {
//         id: "5b975e673b2d8d00079378c2",
//         title: "مدال طلا"
//     }],
//     operators: [">", ">=", "<", "<=", "==", "!="],
//     assignments: ["=","+=","-=","*=","/=","%="],
//     featureAssignments: ["="],
//     levels: [
//         {
//           "id": "$LEVEL_5b5c12db8201b400064f27cc",
//           "title": "سطح بازی 1",
//           "levelcat": "5b5c12b78201b400064f27ca"
//         },
//         {
//           "id": "$LEVEL_5b5c12eb8201b400064f27cd",
//           "title": "سطح بازی 2",
//           "levelcat": "5b5c12b78201b400064f27ca"
//         },
//         {
//           "id": "$LEVEL_5b5c16888201b400064f27ce",
//           "title": "سطح 3",
//           "levelcat": "5b5c12b78201b400064f27ca"
//         },
//         {
//           "id": "$LEVEL_5b964c652ced29000745650c",
//           "title": "سطح یک قهرمانان",
//           "levelcat": "5b964be12ced29000745650b"
//         },
//         {
//           "id": "$LEVEL_5b975a623b2d8d00079378bf",
//           "title": "lgxp1",
//           "levelcat": "5b975a4c3b2d8d00079378be"
//         },
//         {
//           "id": "$LEVEL_5b975a733b2d8d00079378c0",
//           "title": "lgxp2",
//           "levelcat": "5b975a4c3b2d8d00079378be"
//         },
//         {
//           "id": "$LEVEL_5b964d842ced29000745650d",
//           "title": "سطح 2 قهرمانان",
//           "levelcat": "5b964be12ced29000745650b"
//         },
//         {
//           "id": "$LEVEL_5b964d9e2ced29000745650e",
//           "title": "سطح 3 قهرمانان",
//           "levelcat": "5b964be12ced29000745650b"
//         }
//       ]
// }

// condition.setOptions(a);

// var b = {
//     title: "name",
//     conditions: [{
//         nextAction: "fgdfgdhgdhfg",
//         formulas: [{
//             x: "$LEVEL_5b964be12ced29000745650b",
//             operator: ">=",
//             y: "$LEVEL_5b964c652ced29000745650c"
//         }],
//         results: [{
//             variable: "$RP_5b964b342ced29000745650a",
//             value: "10",
//             operator: "-="
//         }, {
//             variable: "$RP_5b964b342ced29000745650a",
//             dynamicName: "eric",
//             operator: "-="
//         }],
//         features: [{
//             value: "2",
//             featureId: "5b5d9ffb600927000743416b",
//             operator: "="
//         }, {
//             value: "3",
//             featureId: "5b975e673b2d8d00079378c2",
//             operator: "="
//         }]
//     }]
// }


// condition.setData(b.conditions)