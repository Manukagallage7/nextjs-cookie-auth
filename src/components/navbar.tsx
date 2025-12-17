import Link from "next/link";

export default function Navbar() {
return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-blue-600/90 border-b border-blue-400 shadow-lg w-screen">
    <div className="max-w-7xl mx-auto px-6">
        <ul className="flex items-center justify-between h-16">
        
        {/* Logo / Brand */}
        <li className="text-white font-bold text-xl tracking-wide">
            <h1>NextAuth</h1>
        </li>

        {/* Navigation Links */}
        <div className="flex space-x-6">
            {[
            { href: "/", label: "Home" },
            { href: "/premium", label: "Premium" },
            { href: "/profile", label: "Profile" },
            { href: "/login", label: "Login" },
            ].map((link) => (
            <li key={link.href}>
                <Link
                href={link.href}
                className="
                    relative text-white/90 font-medium
                    after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0
                    after:bg-white after:transition-all after:duration-300
                    hover:after:w-full hover:text-white
                "
                >
                {link.label}
                </Link>
            </li>
            ))}
        </div>
        </ul>
    </div>
    </nav>
);
}
