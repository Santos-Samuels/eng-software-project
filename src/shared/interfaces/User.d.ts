interface User {
  id: string;
  avatar: string;
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
  avatar: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  email: string;
};