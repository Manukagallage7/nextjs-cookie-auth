import {SessionOptions} from 'iron-session';

export interface SessionData {
    userId?: string;
    username?: string;
    imgUrl?: string;
    isPro?: boolean;
    isBlocked?: boolean;
    isLoggedIn: boolean;
}

export const defaultSession:SessionData = {
    isLoggedIn: false,
}

export const sessionOptions: SessionOptions = {
    password: process.env.SESSION_PASSWORD || "default-password-that-is-32-characters",
    cookieName: "nextjs-cookie-auth-session",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
    }
}