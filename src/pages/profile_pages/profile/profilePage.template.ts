export const ProfilePageTemplate = `
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
                <div class="profileLinksBlock">
                    {{#each links}}
                        {{{this}}}
                        <div class="profileFormUnderline"></div>
                    {{/each}}
                </div>
            </div>
        </div>
    </main>`;
