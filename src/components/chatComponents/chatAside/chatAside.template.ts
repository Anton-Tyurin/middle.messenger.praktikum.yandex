export const chat_aside_template = `
      <div class="chatAside">
            <div class="profileLinkWrapper">
                {{{chatProfileLink}}}
            </div>
            <div class="searchInputWrapper">
                {{{searchInput}}}
            </div>
            <ul class="chatList">
            {{#each listItems}}
                {{{this}}}
            {{/each}}
            </ul>
        </div>

    </div>
    `