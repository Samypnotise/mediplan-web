import "server-only";
import { JWTPayload, jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

const key = new TextEncoder().encode(process.env.AUTH_SECRET);

const cookie: {
  name: string;
  options: Partial<ResponseCookie>;
  duration: number;
} = {
  name: "session",
  options: { httpOnly: true, secure: true, sameSite: "lax", path: "/" },
  duration: 24 * 60 * 60 * 1000,
};

export async function encrypt(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1day")
    .sign(key);
}

export async function decrypt(token: string | Uint8Array) {
  try {
    const { payload } = await jwtVerify(token, key, {
      algorithms: ["HS256"],
    });
    return payload;
  } catch {
    return null;
  }
}

export async function createSession(authToken: string) {
  const expires = new Date(Date.now() + cookie.duration);
  const session = await encrypt({ authToken, expires });

  const cookieStore = await cookies();
  cookieStore.set(cookie.name, session, { ...cookie.options });

  redirect("/dashboard");
}

export async function verifySession() {
  const cookieStore = await cookies();
  const cookieData = cookieStore.get(cookie.name)?.value;
  // Cookie does not exist
  if (!cookieData) redirect("/login");
  const session = await decrypt(cookieData);
  // Cookie payload is invalid
  if (!session?.authToken) {
    redirect("/login");
  }

  return { authToken: session.authToken };
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(cookie.name);
}
