import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/session";

const protectedRoutes = ["/dashboard"];
const publicRoutes = ["/login"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtected = protectedRoutes.includes(path);
  const isPublic = publicRoutes.includes(path);

  if (isProtected) {
    const cookie = (await cookies()).get("session")?.value;
    if (!cookie) return NextResponse.redirect(new URL("/login", req.nextUrl));
    const session = await decrypt(cookie);
    if (!session?.authToken)
      return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  return NextResponse.next();
}
