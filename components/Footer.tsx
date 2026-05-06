
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-black text-white relative z-10 overflow-hidden min-h-[50vh] flex flex-col justify-between py-10 px-6"
    >
      <div className="absolute inset-x-0 bottom-0 h-full overflow-hidden pointer-events-none">

        <div className="absolute bottom-[-10%] left-[-10%] md:left-[20%] w-[80vw] md:w-[30vw] h-[80vw] md:h-[30vw] bg-orange-600/20 blur-[80px] md:blur-[100px] rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] md:right-[20%] w-[80vw] md:w-[40vw] h-[80vw] md:h-[40vw] bg-red-600/10 blur-[80px] md:blur-[120px] rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 container w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-12 text-center md:text-left pt-10">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-black uppercase tracking-tighters tracking-wide mb-4">Contact</h2>
          <ul className="space-y-3 text-base text-neutral-400 font-manrope">
            <li>info@baliblockchainweeks.com</li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Socials</h2>
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-base text-neutral-400 font-manrope">
            <Link href="https://www.instagram.com/baliblockchainw/" target="_blank" className="hover:text-white transition-colors">
              Instagram
            </Link>
            <Link href="https://x.com/BaliBlockchainW" target="_blank" className="hover:text-white transition-colors">
              X / Twitter
            </Link>
            <Link href="https://t.me/BaliBlockchainW" target="_blank" className="hover:text-white transition-colors">
              Telegram
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-20 text-center">
        <h1 className="text-[7vw] font-black tracking-tighter uppercase leading-none text-white/10 select-none pointer-events-none">
          Bali Blockchain Weeks
        </h1>
        <p className="text-xs text-neutral-600 font-manrope mt-6">
          © 2026 Bali Blockchain Weeks. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
