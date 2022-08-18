import * as Handlebars from 'handlebars';
import { TProfilePage } from '../../../types/pages';
import { AsideBacklink } from '../../../components/asideBacklink';
import backlink from '../../../../static/img/backLink/backLink.svg';
import { profile_edit_page_template } from './profileEditPage.template';
import { Avatar } from '../../../components/avatar';
import avatarImg from '../../../../static/img/avatar/avatar.svg';
import { ProfileInput } from '../../../components/inputs';
import { SubmitButton } from '../../../components/submitButton';
import { checkValidation, getFormData } from '../../../core/validate';
import { Block } from '../../../core/Block';
import { router } from '../../../router';
import { UserController } from '../../../controllers/userController';
import { getAvatar, getUserData } from '../utils';
import { ROUTES } from '../../../constants/routes';

const userController = new UserController();

function profileEdit() {
  const template = Handlebars.compile(profile_edit_page_template);
  const {
    first_name, second_name, login, email, phone
  } = getUserData() || {};
  const avatarIcon = getAvatar();
  const asideBackLink = new AsideBacklink(
    { backlink },
    {
      click: () => {
        router.go(ROUTES.PROFILE);
      }
    }
  );
  const userAvatar = new Avatar(
    { avatar: avatarIcon || avatarImg, addMode: true },
    {
      change: async () => {
        const input = document.getElementById(
          'avatarUploader'
        ) as HTMLInputElement;
        if (input) {
          const image = document.getElementById(
            'userAvatar'
          ) as HTMLImageElement;
          const file = input.files[0];
          console.log(file, image);
          if (file && image) {
            await userController.changeUserAvatar(file, image);
          }
        }
      }
    }
  );

  const emailField = new ProfileInput(
    {
      label: 'Почта',
      name: 'email',
      value: email || '',
      type: 'text'
    },
    {
      focus: (event: Event) => {
        checkValidation({ event });
      },
      blur: (event: Event) => {
        checkValidation({ event });
      }
    }
  );
  const loginField = new ProfileInput(
    {
      label: 'Логин',
      type: 'text',
      name: 'login',
      value: login || ''
    },
    {
      focus: (event: Event) => {
        checkValidation({ event });
      },
      blur: (event: Event) => {
        checkValidation({ event });
      }
    }
  );
  const firstNameField = new ProfileInput(
    {
      label: 'Имя',
      type: 'text',
      name: 'first_name',
      value: first_name || ''
    },
    {
      focus: (event: Event) => {
        checkValidation({ event });
      },
      blur: (event: Event) => {
        checkValidation({ event });
      }
    }
  );
  const secondNameField = new ProfileInput(
    {
      label: 'Фамилия',
      type: 'text',
      name: 'second_name',
      value: second_name || ''
    },
    {
      focus: (event: Event) => {
        checkValidation({ event });
      },
      blur: (event: Event) => {
        checkValidation({ event });
      }
    }
  );
  const phoneField = new ProfileInput(
    {
      label: 'Телефон',
      type: 'text',
      name: 'phone',
      value: phone || ''
    },
    {
      focus: (event: Event) => {
        checkValidation({ event });
      },
      blur: (event: Event) => {
        checkValidation({ event });
      }
    }
  );
  const saveChangesButton = new SubmitButton(
    {
      text: 'Сохранить'
    },
    {
      click: (event: Event) => {
        getFormData(event)
          .then((data: any) => userController.changeUserProfile({
            ...data,
            display_name: `${first_name} ${second_name}`
          }))
          .then((result) => {
            if (result.success) {
              router.go(ROUTES.PROFILE);
            }
          })
          .catch((e) => console.log(e));
      }
    }
  );

  const context: TProfilePage = {
    asideBacklink: asideBackLink.transformToString(),
    avatar: userAvatar.transformToString(),
    inputs: [
      emailField.transformToString(),
      loginField.transformToString(),
      firstNameField.transformToString(),
      secondNameField.transformToString(),
      phoneField.transformToString()
    ],
    submitBtn: saveChangesButton.transformToString()
  };
  return template(context);
}
export class ProfileEditPage extends Block {
  constructor(context: any, events = {}) {
    super('div', {
      context: {
        ...context
      },
      template: profileEdit(),
      events
    });
  }
}
