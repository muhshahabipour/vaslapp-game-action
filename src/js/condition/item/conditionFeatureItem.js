import { extend } from "underscore";

class ConditionFeatureItem {
    constructor(feature) {
        this.feature = extend({
            id: guid(),
            featureId: "",
            value: "",
            operator: ""
        }, feature);
    }

    getFeature() {
        return this.feature;
    }

}


export { ConditionFeatureItem as default}