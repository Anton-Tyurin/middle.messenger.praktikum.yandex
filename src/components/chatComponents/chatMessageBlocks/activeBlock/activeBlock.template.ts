export const active_block_template = `<div class="activeChatBlockSelected">
        <div class="activeChatHeading">
            <div class="activeChatHeadingImageWrapper">
                <img src="{{avatarEmpty}}" class="activeChatHeadingImage">
            </div>
            <div class="activeChatName">{{chatTitle}}</div>
            <div class="activeChatSettingsWrapper">
                <img src="{{chatParameters}}" class="activeChatSettingsImage">
            </div>
        </div>
        <div class="activeChatMainContent"></div>
        <form class="activeChatFooter">
            <div class="activeChatAddButtonWrapper">
                <img src="{{addFile}}" class="activeChatAddButtonImage">
            </div>
            <div class="activeChatInput">
                {{{message}}}
            </div>
            <div class="activeChatSendWrapper">
                <img src="{{forwardLink}}" class="activeChatSendImage">
            </div>
        </form>
    </div>`;
