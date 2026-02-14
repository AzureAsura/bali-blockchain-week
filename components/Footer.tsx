export const footerLinks = [
    { label: "Privacy Policy", link: "#" },
    { label: "Terms of Use", link: "#" },
    { label: "Sales Policy", link: "#" },
    { label: "Legal", link: "#" },
    { label: "Site Map", link: "#" },
];

const Footer = () => {
    return (
        <footer className="container  pb-8">

            <div className="h-[1px] w-full bg-white/10 mb-10 " />

            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-5">

                <div className="text-center md:text-right">
                    <p className="text-gray-500 text-[10px] md:text-xs uppercase tracking-[0.2em] leading-relaxed">
                        © 2026Bali Blockchain Weeks
                        <span className="hidden md:inline"> | </span> 
                        <br className="md:hidden" />
                        All rights reserved.
                    </p>
                </div>
                
                <nav className="w-full md:w-auto">
                    <ul className="grid grid-cols-2 gap-y-4 gap-x-8 md:flex md:flex-row md:gap-x-6">
                        {footerLinks.map(({ label, link }) => (
                            <li key={label} className="text-center md:text-left">
                                <a 
                                    href={link} 
                                    className="text-gray-400 text-xs uppercase tracking-widest hover:text-orange-500 transition-all duration-300 font-bold"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>


            </div>


        </footer>
    )
}

export default Footer;