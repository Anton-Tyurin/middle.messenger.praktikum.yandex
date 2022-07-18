export const profile_input_template = `
    <div class="profileFormItem">
        <label for={{name}}>
            <div class="profileFormItemWrapper">
                <div class="profileFormItemLabel">{{label}}</div>
                    {{#if fieldDisabled}}
                        <span class="profileFormItemInput">{{value}}</span>
                    {{else}}
                        <input placeholder={{value}} class="profileFormItemInput" id={{id}} type={{type}} value={{value}}>
                    {{/if}}
            </div>
            <div class="profileFormUnderline"></div>
        </label>
    </div>`