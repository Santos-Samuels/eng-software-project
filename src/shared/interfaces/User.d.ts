interface User {
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
  file: File | FormData;
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
};