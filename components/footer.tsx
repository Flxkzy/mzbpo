import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-brand-navy border-t border-white/10 text-brand-white">
      <div className="px-6 md:px-0 py-12 xl:w-4/5 2xl:w-[68%] mx-auto">
        <Image
          src="/logo/mzbp.png"
          width={10000}
          height={10000}
          alt="MZBPO Logo"
          className="w-40"
        />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4 text-base">
          <p className="text-muted">mzcopakistan@gmail.com</p>
          <div className="flex items-center gap-x-6">
            <Link
              href="https://www.linkedin.com/in/hammafarid/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-teal transition"
            >
              LinkedIn
            </Link>
            <Link
              href="https://bkrpakistan.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-teal transition"
            >
              Visit BKR Pakistan →
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-muted">
          <span>© 2025 MZBPO. All Rights Reserved.</span>
          <Link href="/" className="text-brand-teal hover:opacity-80">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
export default Footer
