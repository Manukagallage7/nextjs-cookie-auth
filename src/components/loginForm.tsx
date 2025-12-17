"use client";

import { login } from "@/action";
import Link from "next/link";
import { useActionState } from "react";

export default function LoginForm() {
  const [state, fromAction] = useActionState<any, FormData>(login, undefined);

  return (
    <form action={fromAction}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
      {state?.error && <p>{state.error}</p>}      import Link from "next/link";
      
      export default function Navigation() {
        return (
          <nav>
            <Link href="/profile">Go to Profile</Link>
            <Link href="/premium">Go to Premium</Link>
          </nav>
        );
      }
    </form>
  );
}