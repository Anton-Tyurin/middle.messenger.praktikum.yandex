export type TErrorScheme = {
    code: string;
    title: string;
    linkText: string;
    errorMessage: string;
    linkPath: string;
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
