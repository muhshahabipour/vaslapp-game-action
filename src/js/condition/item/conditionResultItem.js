import {
    extend
} from "underscore";

class ConditionResultItem {
    constructor(result) {
        this.result = extend({
            id: guid(),
            variable: "",
            value: "",
            operator: "",
            dynamicName: "",
            type: "" // DYNAMIC, STATIC
        }, result);
    }

    getResult() {
        return this.result;
    }

}


export { ConditionResultItem as default }