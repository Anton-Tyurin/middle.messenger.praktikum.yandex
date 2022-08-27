export const defaultUserUrl = '/user';

export type TPasswordData = {
  oldPassword: string;
  newPassword: string;
};

export enum UserApiRoutes {
  PROFILE = '/profile',
  PROFILE_AVATAR = '/profile/avatar',
  PASSWORD = '/password',
}
