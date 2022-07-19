export type TInput = {
    required?: boolean
    label: string,
    id?: string,
    type?: string,
    name?: string,
    errorMessage?: string
    value?: string
    fieldDisabled?: boolean
    validationType?: string
}
export type TInputChats = TInput & {
    chatInputWrapperClass: string,
    chatInputClass: string
}

export type TLink = {
    linkHref?: string,
    linkText: string
}

export type TAsideBacklink = {
    linkHref: string,
    backlink: string
}

export type TProfileAvatar = {
    profileName?: string,
    avatar: string
}

export type TButton = {
    text: string;
}

export type TChatListItem = {
    id: string,
    name: string,
    message: string,
    avatarEmpty: string
}
export type TEmptyChat = {
    title: string
}
