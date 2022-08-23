export const LoginInputTemplate = `<div class="formItem">
    <label class="formItemLabelWrapper" for={{name}}>
        <div class="formItemLabel">{{label}}</div>
        <input placeholder={{label}} class="formItemInput" name={{name}} validation-type={{validationType}} data-id={{id}} type={{type}} >
        <div class="formUnderline"></div>
        {{#if errorMessage}}
            <div class="formItemError hidden">{{errorMessage}}</div>
        {{/if}}
    </label>
</div>`;
