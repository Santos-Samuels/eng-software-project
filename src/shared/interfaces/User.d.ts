interface IUser {
  id: string;
  avatar?: string;
  name: string;
  email: string;
  password: string;
  token?: string;
  createdAt?: string;
}

interface ILoginForm {
  password: string;
  email: string;
};

interface IRegisterForm {
  file: FileList;
  name: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
  email: string;
};