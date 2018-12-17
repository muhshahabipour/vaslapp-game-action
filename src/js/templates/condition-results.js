export const getResultsTemplate = (id, i, data, options) => {
    return `
    ${data.length === 0 ? `<div id="resultsdiv-${id}" class="row" style="display: none"></div>`: `
        <div id="resultsdiv-${id}" class="row" style="display: block">
            ${data.map((obj, j) =>
            `<div class="col-xs-12 mb-2" id="createResultDiv-${obj.id}">
                <div class="flexbox">
                    <div style="margin-left: 8px;">
                        <a role="button" href="javascript:void(0)" data-id="${obj.id}" data-type="result" class="remove-section"><span data-ico="global" class="wi wi-minuse-icon"></span></a>
                    </div>
                    <div class="flexbox flexbox-col" style="border-right: 1px solid #dddddd;padding-right: 16px;flex: 1;">
                        <div class="row">
                            <div class="col-xs-12 col-md-6 col-lg-4">
                                <div class="form form-group">
                                    <label for="results-variable-${obj.id}">متغیر </label>
                                    <div class="form-select">
                                        <select class="form-entry variablelist" name="conditions[${i}].results[${j}].variable" id="results-variable-${obj.id}" data-id="${obj.id}" data-type="result" data-name="variable">
                                            <option value="">یک متغیر را انتخاب کنید</option>
                                            ${typeof options.variable !== "undefined" ? options.variable.map(vobj => `<option value="${vobj.name}" ${obj.variable == vobj.name ? `selected="selected"`: ``}>${vobj.title}</option>`).join('') : ``}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-4">
                                <div class="form form-group">
                                    <label for="${obj.type === "DYNAMIC" ? `results-dynamicname-${obj.id}` : `results-value-${obj.id}`}">مقدار</label>
                                    
                                    <div class="radio-inline no-padding">
                                        <input type="radio" name="type-${obj.id}" id="type-dynamic-${obj.id}" value="DYNAMIC" ${obj.type === "DYNAMIC" || (!obj.type.length && typeof obj.dynamicName === "string" && obj.dynamicName.length) || (!obj.dynamicName.length && !obj.value.length) ? `checked="checked"`: ``} data-id="${obj.id}" data-type="result" data-name="type"><label for="type-dynamic-${obj.id}">dynamic</label>
                                    </div>
                                    
                                    <div class="radio-inline">
                                        <input type="radio" name="type-${obj.id}" id="type-static-${obj.id}" value="STATIC" ${obj.type === "STATIC" || (!obj.type.length && typeof obj.value === "string" && obj.value.length) ? `checked="checked"`: ``} data-id="${obj.id}" data-type="result" data-name="type"><label for="type-static-${obj.id}">static</label>
                                    </div>
                                    
                                    ${obj.type == "DYNAMIC" || (!obj.type.length && typeof obj.dynamicName === "string" && obj.dynamicName.length) || (!obj.dynamicName.length && !obj.value.length) ? `<input type="text" class="form-entry" name="conditions[${i}].results[${j}].dynamicName" id="results-dynamicname-${obj.id}" value="${obj.dynamicName}" data-id="${obj.id}" data-type="result" data-name="dynamicName">` : `<input type="text" class="form-entry" name="conditions[${i}].results[${j}].value" id="results-value-${obj.id}" value="${obj.value}" data-id="${obj.id}" data-type="result" data-name="value">`}
                                    
                                    
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-4">
                                <div class="form form-group">
                                    <label for="results-operator-${obj.id}">اپراتور</label> 
                                    <div class="form-select">
                                        <select class="form-entry ltr" name="conditions[${i}].results[${j}].operator" id="results-operator-${obj.id}" data-id="${obj.id}" data-type="result" data-name="operator">
                                            <option value="">یک متغیر را انتخاب کنید</option>
                                            ${typeof options.assignments !== "undefined" ? options.assignments.map(oobj => `<option value="${oobj}" ${obj.operator == oobj ? `selected="selected"`: ``}>${oobj}</option>`).join('') : ``}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`).join('')}
        </div>`
    }`;
}