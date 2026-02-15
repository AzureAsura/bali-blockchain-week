const Footer = () => {
    return (
        <footer className="container  pb-8">

            <div className="h-[1px] w-full bg-white/40 mb-5 md:mb-7 " />

            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-5">

                <div className="text-center md:text-right">
                    <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.2em] leading-relaxed">
                        © 2026 Bali Blockchain Weeks
                        <span className="hidden md:inline"> | </span> 
                        <br className="md:hidden" />
                        All rights reserved.
                    </p>
                </div>
                
     
            </div>


        </footer>
    )
}

export default Footer;