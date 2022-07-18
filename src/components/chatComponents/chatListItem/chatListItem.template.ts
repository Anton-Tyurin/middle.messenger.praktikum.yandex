

export const chat_list_item_template =
    `<a class="chatProfileLink" href="/mainChat/activeDialog">
        <li class="chatListItem">
            <div class="chatListItemAvatarWrapper">
                <img src="{{avatarEmpty}}" class="chatListItemAvatar">
            </div>
            <div class="chatListItemDataWrapper">
                <div class="chatListItemDataName">{{this.name}}</div>
                <div class="chatListItemDataMessage">{{this.message}}</div>
            </div>
        </li>
    </a>`