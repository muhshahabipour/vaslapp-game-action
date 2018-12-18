  // TODO input incorect
  export const getFormulasTemplate = (id, i, data, options) => {
    return `
    ${data.length === 0 ? `<div id="formulasdiv-${id}" class="row" style="display: none"></div>`: `
        <div id="formulasdiv-${id}" class="row" style="display: block">
            ${data.map((obj, j) => 
            `<div class="col-xs-12 mb-2" id="createFormulaDiv-${obj.id}">
                <div class="flexbox">
                    <div style="margin-left: 8px;">
                        <a role="button" href="javascript:void(0)" data-id="${obj.id}" data-type="formula" class="remove-section"><span data-ico="global" class="wi wi-minuse-icon"></span></a>
                    </div>
                    <div class="flexbox flexbox-col" style="border-right: 1px solid #dddddd;padding-right: 16px;flex: 1;">
                        <div class="row">
                            <div class="col-xs-12 col-md-6 col-lg-4">
                                <div class="form form-group">
                                    <label for="formulas-x-${obj.id}">مقدار X</label>
                                    <div class="form-select">
                                        <select class="form-entry conditions-formula-select" name="conditions[${i}].formulas[${j}].x" id="formulas-x-${obj.id}" data-id="${obj.id}" data-type="formula" data-name="x">
                                            <option value="">یک متغیر را انتخاب کنید</option>
                                            ${typeof options.variable !== "undefined" ? options.variable.map(xobj => `<option value="${xobj.name}" ${obj.x == xobj.name ? `selected="selected"`: ``}>${xobj.title}</option>`).join('') : ``}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-4">
                                <div class="form form-group">
                                    <label for="formulas-operator-${obj.id}">اپراتور</label>
                                    <div class="form-select">
                                        <select class="form-entry ltr" name="conditions[${i}].formulas[${j}].operator" id="formulas-operator-${obj.id}" data-id="${obj.id}" data-type="formula" data-name="operator">
                                            <option value="">یک متغیر را انتخاب کنید</option>
                                            ${typeof options.operators !== "undefined" ? options.operators.map(oobj => `<option value="${oobj === "+=" ? `${encodeURIComponent(oobj)}` : `${oobj}`}" ${(obj.operator == "+=" ? encodeURIComponent(obj.operator) : obj.operator) == (oobj == "+=" ? encodeURIComponent(oobj) : oobj) ? `selected="selected"`: ``}>${oobj}</option>`).join('') : ``}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xs-12 col-md-6 col-lg-4">
                                <div class="form form-group">
                                    
                                    <label for="formulas-y-select-${obj.id}">مقدار Y</label>
                                    
                                    ${typeof obj.x !== "undefined" && (obj.x).includes("$LEVEL") ? 
                                    `<div id="formulas-y-div-${obj.id}">
                                        <div class="form-select">
                                            <select class="form-entry" id="formulas-y-select-${obj.id}" name="conditions[${i}].formulas[${j}].y"  data-id="${obj.id}" data-type="formula" data-name="y">
                                                <option value="" >یک مورد را انتخاب کنید</option>
                                                ${typeof options.levels !== "undefined" ? options.levels.map(lobj => (`$LEVEL_` + lobj.levelcat) === obj.x ? `<option value="${lobj.id}" ${obj.y == lobj.id ? `selected="selected"`: ``}>${lobj.title}</option>` : ``).join('') : ``}
                                            </select>
                                        </div>
                                    </div>` : `<div id="formulas-y-input-div-${obj.id}"><input type="text" class="form-entry ltr" id="formulas-y-input-${obj.id}" name="conditions[${i}].formulas[${j}].y" value="${typeof obj.y !== "undefined" && !(obj.y).includes("$LEVEL_") ? `${obj.y}` : ``}" data-id="${obj.id}" data-type="formula" data-name="y"></div>`}
                                    
                                    
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`).join('')}
        </div>`
    }`
}