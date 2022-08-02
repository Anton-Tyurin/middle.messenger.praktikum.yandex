export const chat_list_item_template = `<a data-id={{id}} class="chatProfileLink">
        <li data-id={{id}} class="chatListItem">
            <div data-id={{id}}  class="chatListItemAvatarWrapper">
                <img data-id={{id}} src="{{avatar}}" class="chatListItemAvatar">
            </div>
            <div data-id={{id}} class="chatListItemDataWrapper">
                <div data-id={{id}}  class="chatListItemDataName">{{title}}</div>
                <div data-id={{id}} class="chatListItemDataMessage">{{last_message}}</div>
            </div>
        </li>
    </a>`;
