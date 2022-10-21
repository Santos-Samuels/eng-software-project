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
  file: string;
  // file: Blob | MediaSource;
  name: string;
  password: string;
  confirmPassword: string;
  email: string;
};