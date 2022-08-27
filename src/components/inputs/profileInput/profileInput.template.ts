export const ProfileInputTemplate = `
    <div class="profileFormItem">
        <label>
            <div class="profileFormItemWrapper">
                <div class="profileFormItemLabel">{{label}}</div>
                    {{#if fieldDisabled}}
                        <span class="profileFormItemInput">{{value}}</span>
                    {{else}}
                        <input name={{name}} validation-type={{validationType}} class="profileFormItemInput" data-id={{id}} type={{type}} value={{value}}>
                    {{/if}}
            </div>
            <div class="profileFormUnderline"></div>
            {{#if errorMessage}}
                <div class="formItemErrorProfile hidden">{{errorMessage}}</div>
            {{/if}}
        </label>
    </div>`;
