export const login_input_template = `<div class="formItem">
    <label class="formItemLabelWrapper" for={{name}}>
        <div class="formItemLabel">{{label}}</div>
        <input placeholder={{label}} class="formItemInput" id={{id}} type={{type}} >
        <div class="formUnderline"></div>
    </label>
    {{#if errorMessage}}
        <div class="formItemError">{{errorMessage}}</div>
    {{/if}}
</div>`