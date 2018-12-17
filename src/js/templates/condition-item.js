
import {getFeaturesTemplate} from "./condition-features";
import {getResultsTemplate} from "./condition-results";
import {getFormulasTemplate} from "./condition-formulas";


export const getConditionTemplate = function (options, data) {
    return `${data.map((obj, i) => 
            `<div class="col-xs-12" id="createConditionDiv-${obj.id}" data-index="${i}">
                <div class="panel panel-white" style="box-shadow: 0 3px 9px 0 rgba(0,0,0,.03);">
                    <div class="panel-body">
                        <div class="flexbox">
                            <div style="margin-left: 8px;">
                                <a role="button" href="javascript:void(0)" data-id="${obj.id}" data-type="condition" class="remove-section"><span data-ico="global" class="wi wi-minuse-icon"></span></a>
                            </div>
                            <div class="flexbox flexbox-col" style="border-right: 1px solid #dddddd;padding-right: 16px;flex: 1;">
                                <div class="row">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="form form-group">
                                            <label for="nextAction">حرکت بعدی</label>
                                            <input type="text" class="form-entry" name="conditions[${i}].nextAction" id="nextAction" value="${obj.nextAction}" data-id="${obj.id}" data-type="condition" data-name="nextAction">
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix">&nbsp;</div>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            ${getFormulasTemplate(obj.id, i, obj.formulas, options)}
                                            <div class="add-link no-padding">
                                                <a role="button" data-id="${obj.id}" data-index="${i}" data-type="formula" class="add-section"><span class="wi wi-pluss-icon" data-ico="global" style="margin-left: 8px"></span><label>افزودن فرمول</label></a>
                                            </div>
                                        </div>
                                        <div style="border-bottom: 1px solid #ddd;"></div>
                                    </div>
                                </div>
                                <div class="clearfix">&nbsp;</div>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            ${getResultsTemplate(obj.id, i, obj.results, options)}
                                            <div class="add-link no-padding">
                                                <a role="button" data-id="${obj.id}" data-index="${i}" data-type="result" class="add-section"><span class="wi wi-pluss-icon" data-ico="global" style="margin-left: 8px"></span><label>افزودن نتایج</label></a>
                                            </div>
                                        </div>
                                        <div style="border-bottom: 1px solid #ddd;"></div>
                                    </div>
                                </div>
                                <div class="clearfix">&nbsp;</div>
                                <div class="row">
                                    <div class="col-xs-12">
                                        <div class="form-group">
                                            ${getFeaturesTemplate(obj.id, i, obj.features, options)}
                                            <div class="add-link no-padding">
                                                <a role="button" data-id="${obj.id}" data-index="${i}" data-type="feature" class="add-section"><span class="wi wi-pluss-icon" data-ico="global" style="margin-left: 8px"></span><label>افزودن امکانات</label></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
    ).join('')}`
}