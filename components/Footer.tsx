import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/animals", label: "Animals" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1B2A4A] text-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo-source.jpg"
                  alt="Runways and Rescues logo"
                  fill
                  className="object-contain rounded"
                  sizes="40px"
                />
              </div>
              <div>
                <div className="font-bold text-white text-sm">
                  Runways &amp; Rescues
                </div>
                <div className="text-[#F5F0E8]/60 text-xs">501(c)3 Nonprofit</div>
              </div>
            </div>
            <p className="text-[#F5F0E8]/70 text-sm leading-relaxed">
              We don&apos;t just save animals — we give them wings.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F5F0E8]/70 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Donate + Social */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Support the Mission
            </h4>
            <div className="flex flex-col gap-2 mb-5">
              <a href="https://ko-fi.com/runwaysandrescues" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-[#8B1A1A] hover:bg-[#a82020] text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors duration-200 text-center">
                ☕ Ko-fi
              </a>
              <a href="https://cash.app/$runwaysandrescues" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-[#00D54B] hover:bg-[#00bb42] text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors duration-200 text-center">
                💸 Cash App
              </a>
              <a href="https://venmo.com/code?user_id=4524716144460854128&created=1771948345.066403&printed=1" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-[#3D95CE] hover:bg-[#2e80b5] text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors duration-200 text-center">
                💙 Venmo
              </a>
            </div>
            <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wider">Follow Along</h4>
            <div className="flex gap-3 mb-4">
              <a href="https://www.instagram.com/runwaysandrescuesinc" target="_blank" rel="noopener noreferrer"
                className="text-[#F5F0E8]/70 hover:text-white text-sm transition-colors">Instagram</a>
              <span className="text-white/20">·</span>
              <a href="https://www.facebook.com/share/p/1DvX7nYse3/" target="_blank" rel="noopener noreferrer"
                className="text-[#F5F0E8]/70 hover:text-white text-sm transition-colors">Facebook</a>
              <span className="text-white/20">·</span>
              <a href="https://youtu.be/Mv_wIHyNMyI" target="_blank" rel="noopener noreferrer"
                className="text-[#F5F0E8]/70 hover:text-white text-sm transition-colors">News</a>
            </div>
            <p className="text-[#F5F0E8]/60 text-xs leading-relaxed">
              501(c)3 nonprofit — all donations are tax-deductible.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#F5F0E8]/50 text-xs text-center sm:text-left">
            &copy; 2025 Runways and Rescues. All rights reserved.
          </p>
          <p className="text-[#F5F0E8]/50 text-xs text-center sm:text-right">
            501(c)3 Nonprofit &mdash; EIN on file
          </p>
        </div>
      </div>
    </footer>
  );
}
