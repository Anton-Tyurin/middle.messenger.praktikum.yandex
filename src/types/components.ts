export type TInput = {
  required?: boolean;
  label: string;
  id?: string;
  type?: string;
  name?: string;
  errorMessage?: string;
  value?: string | number;
  fieldDisabled?: boolean;
  validationType?: string;
};
export type TInputChats = TInput & {
  chatInputWrapperClass: string;
  chatInputClass: string;
};

export type TLink = {
  linkText: string;
};

export type TAsideBacklink = {
  backlink: string;
};

export type TProfileAvatar = {
  profileName?: string;
  avatar: string;
  addMode?: boolean;
};

export type TButton = {
  text: string;
};

export type TChatListItem = {
  id: string;
  name: string;
  message: string;
  avatarEmpty: string;
};
export type TEmptyChat = {
  title: string;
};

export type TChatModalTemplate = {
  chatModalInput: string;
  chatModalOkButton: string;
  chatModalCancelButton: string;
  modalClassName: string;
};
