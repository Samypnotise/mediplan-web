"use server";

import { LoginFormSchema, LoginState } from "@/lib/definitions";
import { login as apiLogin } from "@/data/auth";
import { createSession, deleteSession } from "@/lib/session";

export async function login(state: LoginState | undefined, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing or invalid fields, unable to login.",
    };
  }

  const credentials = validatedFields.data;

  const response = await apiLogin(credentials);
  if (!response.success) {
    return {
      message: response.error.title,
    };
  }

  await createSession(response.data.token);
}

export async function logout() {
  await deleteSession();
}
