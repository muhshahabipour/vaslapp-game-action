import {
    extend,
    has
} from "underscore";
import ConditionsFeaturesList from "../list/conditionFeaturesList";
import ConditionsFormulasList from "../list/conditionFormulasList";
import ConditionsResultsList from "../list/conditionResultsList";
import ConditionFeaturesItem from "./conditionFeatureItem";
import ConditionFormulasItem from "./conditionFormulaItem";
import ConditionResultsItem from "./conditionResultItem";

class ConditionItem {
    constructor(condition) {
        var conditionFeaturesList = new ConditionsFeaturesList();
        var conditionFormulasList = new ConditionsFormulasList();
        var conditionResultsList = new ConditionsResultsList();


        if (has(condition, "features"))
            condition["features"].forEach(function (feature) {
                var item = new ConditionFeaturesItem(feature);
                conditionFeaturesList.addFeatureItem(item);
            })

        if (has(condition, "formulas"))
            condition["formulas"].forEach(function (formula) {
                var item = new ConditionFormulasItem(formula);
                conditionFormulasList.addFormulaItem(item);
            })

        if (has(condition, "results"))
            condition["results"].forEach(function (result) {
                var item = new ConditionResultsItem(result);
                conditionResultsList.addResultsItem(item);
            })


        this.condition = extend({
            id: guid(),
            nextAction: "",
            formulas: [],
            features: [],
            results: [],
        }, condition);


        this.condition.features = conditionFeaturesList.getList();
        this.condition.formulas = conditionFormulasList.getList();
        this.condition.results = conditionResultsList.getList();

    }

    addNestedConditionItem(condition, type) {
        this.condition = condition;

        switch (type) {
            case "formula":
                let formulas = this.condition["formulas"];
                let formulaList = new ConditionsFormulasList(formulas);
                let formulaItem = new ConditionFormulasItem();
                formulaList.addFormulaItem(formulaItem);
                this.condition.formulas = formulaList.getList();
                break;
            case "result":
                let results = this.condition["results"];
                let resultList = new ConditionsResultsList(results);
                let resultItem = new ConditionResultsItem();
                resultList.addResultsItem(resultItem);
                this.condition.results = resultList.getList();
                break;
            case "feature":
                let features = this.condition["features"];
                let featureList = new ConditionsFeaturesList(features);
                let featureItem = new ConditionFeaturesItem();
                featureList.addFeatureItem(featureItem);
                this.condition.features = featureList.getList();
                break;
            default:
                break;
        }
        return this.condition
    }

    getCondition() {
        return this.condition
    }
}


export {
    ConditionItem as
    default
}