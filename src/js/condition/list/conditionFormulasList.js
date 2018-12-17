import { extend } from "underscore";

class ConditionFormulasList {


    constructor(formulas) {
        this.formulas = formulas || [];
    }

    addFormulaItem(formula) {
        this.formulas.push(formula.getFormula())
    }

    removeFormulaItem(idToRemove) {
        this.formulas = this.delNestedFormulaItem(idToRemove, this.formulas);
    };

    getList() {
        return this.formulas;
    }

    delNestedFormulaItem(idToRemove, list) {
        var self = this
        
        var finalList = list.filter(el => {
            if (el.formulas && el.formulas.length) {
                el.formulas = self.delNestedFormulaItem(idToRemove, el.formulas);
            }
            return el.id !== idToRemove; //delete this
        });

        return finalList;
    }
    
    
    // updateValueNestedResult(idToUpdate, name, value, list) {
    //     var self = this
    //     list = list || this.data;
    //     var finalList = each(list, function (item) {
    //         if (item.id == idToUpdate) {
    //             item[name] = value;
    //         } else if (item.data && item.data.length) {
    //             item = self.updateValueNestedResult(idToUpdate, name, value, item.data)
    //         }
    //         return item;
    //     });
    //     return finalList;
    // }

}


export { ConditionFormulasList as default}