import { extend } from "underscore";

class ConditionFormulaItem {
    constructor(formula) {
        this.formula = extend({
            id: guid(),
            x: "",
            y: "",
            operator: ""
        }, formula)
    }

    getFormula() {
        return this.formula;
    }

}


export { ConditionFormulaItem as default}