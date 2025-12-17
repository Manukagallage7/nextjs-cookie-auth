import {getSession} from "@/action"
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function PremiumPage() {

    const session = await getSession();

    if(!session.isLoggedIn) {
        redirect("/")
    }

    if(!session.isPro){
        return (
            <div className="not premium">
                <h1>Only premium users can see the content!</h1>
                <Link href='/profile'>
                    Go to the profile page to upgrade to premium.
                </Link>
            </div>
        )
        }
    return (
        <>
        <div className="premium">
            <h1>Welcome to the Premium Page</h1>
            <p>This content is exclusive to premium users.</p>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Cherry</li>
                <li>Peach</li>
            </ul>
        </div>
        </>
    )
}