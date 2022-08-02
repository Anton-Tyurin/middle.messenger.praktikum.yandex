export type TErrorScheme = {
    code: string;
    title: string;
    errorMessage: string;
    link: string
}

export type TLoginScheme = {
    formHeading: string
    submitButton: string,
    link: string,
    inputs: string[]
}
export type TProfilePage = {
    asideBacklink: string
    avatar: string,
    inputs: string[]
    links?: string[]
    submitBtn?: string
}
export type TMainChat = {
    chatAside: string,
    chatMessageBlock: () => string
    createChatModal: string
}
