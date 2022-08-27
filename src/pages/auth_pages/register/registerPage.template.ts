export const RegisterPageTemplate = `<div class="flexCenterWrapper authWrapper">
    <form class="authForm">
            <div>
                <h1 class="formHeading">{{formHeading}}</h1>
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
    </form>
</div>`;
