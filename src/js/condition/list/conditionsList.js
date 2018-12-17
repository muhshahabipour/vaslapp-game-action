import {
    map,
    each
} from "underscore"
import ConditionItem from "../item/conditionItem";



class ConditionsList {
    constructor(data) {
        this.data = data || [];
    }

    addConditionItem(condition) {
        this.data.push(condition.getCondition())
    }

    removeConditionItem(idToRemove, type) {
        this.data = this.delNestedConditionItem(idToRemove, type, this.data);
    };

    getList() {
        return this.data;
    }

    delNestedConditionItem(idToRemove, type, list) {
        var self = this
        // "condition", "formulas", "results", "features", 

        if (type !== "condition") {
            type += "s";
            list = map(list, (item) => {
                if (typeof item[type] !== "undefined" && item[type] !== null) {
                    item[type] = self.delInnerConditionItem(idToRemove, item[type]);
                }

                return item;
            });

            return list;

        } else {
            list = list.filter(el => {
                return el.id !== idToRemove; //delete this
            });

            return list;
        }
    }

    delInnerConditionItem(idToRemove, list) {
        list = list.filter(el => {
            return el.id !== idToRemove; //delete this
        });
        return list;
    }

    addNestedConditionItem(idToAdd, type) {
        this.data = map(this.data, function (item) {
            if (item.id == idToAdd) {
                var conditionItem = new ConditionItem(item);
                item = conditionItem.addNestedConditionItem(conditionItem.getCondition(), type);
            }
            return item;
        });

        return this.data;
    }


    updateValueNestedConditionItem(idToUpdate, name, type, value) {
        let self = this;
        
        if (type !== "condition") {
            type += "s";
            this.data = map(this.data, (item) => {
                if (typeof item[type] !== "undefined" && item[type] !== null) {
                    item[type] = self.updateInnerConditionItem(idToUpdate, name, value, item[type]);
                }
                return item;
            });

            return this.data;

        } else {
            this.data = each(this.data, function (item) {
                if (item.id == idToUpdate) {
                    item[name] = value;
                }
                return item;
            });

            return this.data;
        }
    }



    updateInnerConditionItem(idToUpdate, name, value, list) {
        list = each(list, function (item) {
            if (item.id == idToUpdate) {
                
                item[name] = value;
            }
            return item;
        });
        return list;
    }
}


export {
    ConditionsList as
    default
}