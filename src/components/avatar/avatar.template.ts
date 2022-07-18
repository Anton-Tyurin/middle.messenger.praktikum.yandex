export const avatar_template = `
    <div>
        <a class="userAvatar" href="./profileEdit">
            <div class="userAvatarWrapper">
                <img src={{avatar}} width="130" height="130" alt="userAvatar">
            </div>
        </a>
        {{#if profileName}}
            <span class="userAvatarName">{{profileName}}</span>
        {{/if}}
    </div>`