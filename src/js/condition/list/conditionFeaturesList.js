import { extend } from "underscore";

class ConditionFeaturesList {


    constructor(features) {
        this.features = features || [];
    }

    addFeatureItem(feature) {
        this.features.push(feature.getFeature())
    }

    removeFeatureItem(idToRemove) {
        this.features = this.delNestedFeatureItem(idToRemove, this.features);
    };

    getList() {
        return this.features;
    }

    delNestedFeatureItem(idToRemove, list) {
        var self = this
        
        var finalList = list.filter(el => {
            if (el.features && el.features.length) {
                el.features = self.delNestedFeatureItem(idToRemove, el.features);
            }
            return el.id !== idToRemove; //delete this
        });

        return finalList;
    }

    // updateValueNestedResult(idToUpdate, name, value, list) {
    //     var self = this
    //     list = list || this.features;
    //     var finalList = each(list, function (item) {
    //         if (item.id == idToUpdate) {
    //             item[name] = value;
    //         } else if (item.features && item.features.length) {
    //             item = self.updateValueNestedResult(idToUpdate, name, value, item.features)
    //         }
    //         return item;
    //     });
    //     return finalList;
    // }

}


export { ConditionFeaturesList as default}