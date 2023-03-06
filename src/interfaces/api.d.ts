export interface IUserInfo {
  id?: number;
  fullname?: string | null;
  address?: string | null;
  email?: string | null;
  phone_number?: string;
  password?: string;
}

export type ISignUpErrors = { errors: ["email" | null, "phoneNumber" | null] };

export interface IErrorsRender {
  phoneNumber?: string;
  email?: string;
}
