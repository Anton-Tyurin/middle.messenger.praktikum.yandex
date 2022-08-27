export const AvatarTemplate = `
    <div>
        <a class="userAvatar" >
            <div class="userAvatarWrapper">
                <img id="userAvatar"  class="userAvatarImg" src={{avatar}} alt="userAvatar">
                {{#if addMode}}
                <input data-id={{id}} id="avatarUploader" type="file" class="userAvatarInput" />
                {{/if}}
            </div>
        </a>
        {{#if profileName}}
            <span class="userAvatarName">{{profileName}}</span>
        {{/if}}
    </div>`;
