import Link from "next/link";
import LogoutForm from "./logoutForm";
import {getSession} from "@/action";

export default async function Navbar() {
    const session = await getSession();

    return (
        <>
        <nav className="bg-blue-600 p-4 shadow-md w-screen">
            <ul className="flex space-x-4">
                <li>
                    <Link href="/" className="text-white hover:text-gray-200">HomePage</Link>
                </li>
                <li>
                    <Link href="/premium" className="text-white hover:text-gray-200">Premium</Link>
                </li>
                <li>
                    <Link href="/login" className="text-white hover:text-gray-200">LoginPage</Link>
                </li>
                <li>
                    <Link href="/profile" className="text-white hover:text-gray-200">ProfilePage</Link>
                </li>
                <li>
                    {session.isLoggedIn && <LogoutForm /> }
                </li>
            </ul>
        </nav>
        </>
    )
}