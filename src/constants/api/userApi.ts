export const defaultUserUrl = '/user';

export type TPasswordData = {
    oldPassword: string;
    newPassword: string;
}

export enum USER_API {
    PROFILE = '/profile',
    PROFILE_AVATAR = '/profile/avatar',
    PASSWORD = '/password',
}
