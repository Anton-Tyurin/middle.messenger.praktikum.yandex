export const profile_change_password_page_template = `
    <main class="wrapper">
        <div class="profilePageWrapper">
            {{{ asideBacklink }}}
            <div class="profilePageMainContent">

                {{{ avatar }}}
                <div class="profilePageForm">
                    {{#each inputs}}
                        <div data-component="input" data-key="{{@index}}">{{{this}}}</div>
                    {{/each}}
                </div>
                <div class="profilePasswordChangeSubmitButtonWrapper">
                    {{{submitBtn}}}
                </div>
            </div>
        </div>
    </main>`;
