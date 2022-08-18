export const getUserData = () => {
  const item = localStorage.getItem('user');
  let user;
  if (item) {
    user = JSON.parse(item);
  }
  return user;
};
export const getAvatar = () => localStorage.getItem('avatarIcon');
