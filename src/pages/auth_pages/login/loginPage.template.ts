export const login_page_template = `
    <main class="wrapper">
        <div class="flexCenterWrapper authWrapper">
            <div class="authForm loginForm">
                <div>
                    <h2 class="formHeading">{{formHeading}}</h2>
                </div>
                <div class="flexCenterWrapper loginFormFieldsWrapper formFieldsWrapper">
                    {{#each inputs}}
                        <div data-component="input" data-key="{{@index}}">{{{this}}}</div>
                    {{/each}}
                </div>
                <div class="formButtonsWrapper">
                    {{{ submitButton }}}
                    {{{  link }}}
                </div>
            </div>
        </div>
    </main>`