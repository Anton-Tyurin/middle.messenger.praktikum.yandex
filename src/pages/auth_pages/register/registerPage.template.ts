export const register_page_template = `<div class="flexCenterWrapper authWrapper">
    <div class="authForm">
            <div>
                <h2 class="formHeading">{{formHeading}}</h2>
            </div>
            <div class="flexCenterWrapper registerFormFieldsWrapper formFieldsWrapper">
                {{#each inputs}}
                    <div data-component="input" data-key="{{@index}}">{{{this}}}</div>
                {{/each}}
        </div>
        <div class="formButtonsWrapper">
            {{{ submitButton }}}
            {{{ link }}}
        </div>
    </div>
</div>`