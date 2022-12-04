interface IUser {
  id: string;
  avatar?: string;
  name: string;
  email: string;
  password: string;
  token?: string;
  createdAt?: string;
}

interface IUserSection {
  id: string;
  avatar?: string;
  name: string;
  email: string;
}

interface ILoginForm {
  password: string;
  email: string;
}

interface IRegisterForm {
  file: FileList;
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
}

interface IUserAvatar {
  url: string;
}

interface IEditUser {
  file: FileList;
  name: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}
