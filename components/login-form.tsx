"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { AlertCircle, Loader2 } from "lucide-react";
import { AlertDescription } from "./ui/alert";
import { LoginState } from "@/lib/definitions";
import { login } from "@/app/login/actions";

export function LoginForm() {
  const initialLoginState: LoginState = { message: null, errors: {} };
  const [state, formAction, pending] = useActionState(login, initialLoginState);

  return (
    <>
      <form action={formAction}>
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                />
                {state?.errors?.email && (
                  <p className="text-sm text-destructive">
                    {state.errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {/* <Link href="#" className="inline-block ml-auto text-sm underline">
                Forgot your password?
                </Link> */}
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="•••••••••"
                />
                {state?.errors?.password && (
                  <p className="text-sm text-destructive">
                    {state.errors.password}
                  </p>
                )}
              </div>

              {/* Validation */}
              <Button
                type="submit"
                className="w-full"
                disabled={pending}
                aria-disabled={pending}
              >
                {pending && <Loader2 className="animate-spin" />}
                Login
              </Button>
            </div>
          </CardContent>
          {state?.message && (
            <CardFooter className="flex text-destructive">
              <AlertCircle className="w-4 h-4 mr-2" />
              <AlertDescription>{state.message}</AlertDescription>
            </CardFooter>
          )}
        </Card>
      </form>
    </>
  );
}
