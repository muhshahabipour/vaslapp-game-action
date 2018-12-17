export const getFeaturesTemplate = (id, i, data, options) => {
    return `
    ${data.length === 0 ? `<div id="featuresdiv-${id}" class="row" style="display: none"></div>`: `
        <div id="featuresdiv-${id}" class="row" style="display: block">    
            ${data.map((obj, j) =>
            `<div class="col-xs-12 mb-2" id="createFeatureDiv-${obj.id}">
                <div class="flexbox">
                    <div style="margin-left: 8px;">
                        <a role="button" href="javascript:void(0)" data-id="${obj.id}" data-type="feature" class="remove-section"><span data-ico="global" class="wi wi-minuse-icon"></span></a>
                    </div>
                    <div class="flexbox flexbox-col" style="border-right: 1px solid #dddddd;padding-right: 16px;flex: 1;">
                        <div class="row">
                            <div class="col-xs-12 col-md-6 col-lg-4">
                                <div class="form form-group">
                                    <label for="features-featuresid-${obj.id}">امکان</label>
                                    <div class="form-select">
                                        <select class="form-entry featurelist" name="conditions[${i}].features[${j}].featureId" id="features-featuresid-${obj.id}" data-id="${obj.id}" data-type="feature" data-name="featureId">
                                            <option value="">یک امکان را انتخاب کنید</option>
                                            ${typeof options.features !== "undefined" ? options.features.map(fobj => `<option value="${fobj.id}" ${obj.featureId == fobj.id ? `selected="selected"`: ``}>${fobj.title}</option>`).join('') : ``}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-4">
                                <div class="form form-group">
                                    <label for="features-value-${obj.id}">مقدار</label>
                                    <input type="text" class="form-entry" name="conditions[${i}].features[${j}].value" id="features-value-${obj.id}" value="${obj.value}" data-id="${obj.id}" data-type="feature" data-name="value">
                                </div>
                            </div>
                        </div>
        
                        <input type="hidden" name="conditions[${i}].features[${j}].operator" id="features-operator-${obj.id}" value="=">
        
                    </div>
                </div>
            </div>`).join('')}
        </div>`
    }`
}