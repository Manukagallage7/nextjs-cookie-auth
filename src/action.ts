"use server";

import { sessionOptions, SessionData, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

let username = "manuka";
let isPro = true;
const isBlocked = true;

export const getSession = async () => {
    const cookieStore = await cookies();
    const session = await getIronSession<SessionData>(cookieStore, sessionOptions);

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    }

    // CHECK THE USER IN THE DB
    session.isBlocked = isBlocked;
    session.isPro = isPro;

    return session;
};

export const login = async (
    prevState: { error: undefined | string },
    formData: FormData
) => {
    const session = await getSession();

    const fromUsername = formData.get("username") as string;
    const fromPassword = formData.get("password") as string;

    if (fromUsername !== username) {
        return { error: "Wrong Credentials!" };
    }

    session.userId = "1";
    session.username = fromUsername;
    session.isPro = isPro;
    session.isLoggedIn = true;

    await session.save();
    redirect("/");
};

export const logout = async () => {
    const session = await getSession();
    session.destroy();
    redirect("/");
};

export const changePremium = async () => {
    const session = await getSession();

    isPro = !session.isPro;
    session.isPro = isPro;

    await session.save();
    revalidatePath("/profile");
};

export const changeUsername = async (formData: FormData) => {
    const session = await getSession();

    const newUsername = formData.get("username") as string;

    username = newUsername;

    session.username = newUsername;

    await session.save();
    revalidatePath("/profile");
};

export const login = async (formData: FormData) => {
  const fromUsername = formData.get("username");
  const fromPassword = formData.get("password");

  if (fromUsername !== username) {
    return { error: "Invalid credentials" };
  }

  const session = await getSession();
  session.isLoggedIn = true;
  session.username = fromUsername;
  session.isPro = isPro;

  await session.save();
  redirect("/profile");
};