import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string({
      invalid_type_error: "Please enter an email address.",
    })
    .email({
      message: "Please enter a valid email.",
    })
    .trim(),
  password: z
    .string({
      invalid_type_error: "Please enter a password",
    })
    .trim(),
});

export type LoginState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export type AuthToken = {
  token: string;
};

export const initialLoginState: LoginState = { message: null, errors: {} };

export type PaginationMeta = {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  firstPage: number;
  firstPageUrl: string;
  lastPageUrl: string;
  nextPageUrl: string;
  previousPageUrl: string;
};

export type Paginable<T> = {
  meta: PaginationMeta;
  data: T[];
};

export type Error = {
  code: string;
  title: string;
  detail: string;
};

export type UserType = "OFFICE" | "CAREGIVER";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  type: UserType;
  avatar: string;
};

export type Mission = {
  id: string;
  title: string;
  patient: string;
  start: string;
  end: string;
  address: string;
  latitude: number;
  longitude: number;
  assignee: User;
};

export type AddressSearchResult = {
  features: {
    geometry: {
      type: string;
      coordinates: number[];
    };
    properties: {
      label: string;
      score: number;
    };
  }[];
};
