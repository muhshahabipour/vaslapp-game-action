import { extend } from "underscore";

class ConditionResultsList {



    constructor(results) {
        this.results = results || [];
    }

    addResultsItem(result) {
        this.results.push(result.getResult())
    }

    removeResultsItem(idToRemove) {
        this.results = this.delNestedResultsItem(idToRemove, this.results);
    };

    getList() {
        return this.results;
    }

    delNestedResultsItem(idToRemove, list) {
        var self = this
        
        var finalList = list.filter(el => {
            if (el.results && el.results.length) {
                el.results = self.delNestedResultsItem(idToRemove, el.results);
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


export { ConditionResultsList as default}