export const footerLinks = [
    { label: "Privacy Policy", link: "#" },
    { label: "Terms of Use", link: "#" },
    { label: "Sales Policy", link: "#" },
    { label: "Legal", link: "#" },
    { label: "Site Map", link: "#" },
];

const Footer = () => {
    return (
        <footer className="container py-7">
            
            <hr className="my-7 text-[#424245]"/>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between max-lg:mt-5 gap-5 text-sm">
                <p>Copyright © 2026 Bali Blockchain Weeks. All rights reserved.</p>

                <ul className="lg:divide-x flex flex-col lg:flex-row gap-2.5">
                    {footerLinks.map(({label, link }) => (
                        <li key={label} className="lg:px-5 cursor-pointer hover:text-white transition-all duration-300 ease-in-out">
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer