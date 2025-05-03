import Image from "next/image";
import Link from "next/link";

const ShowcaseNavbar = () => {
  return (
    <div
      className="
      overflow-hidden
      p-10
      

    rounded-[6px]
    top-5
    sticky
    md:mx-auto

    transform 
    z-50
xl:w-4/5 
2xl:w-[68%]

   
    bg-white 
    flex 
    items-center
    justify-between py-6
    px-4
    md:px-8
    mx-6
    
    "
    >
      <Link href="/">
      <Image
        src="/logo/mzbpo.png"
        alt="Bird Logo"
        width={1000}
        height={1000}
        className="w-28"
      />
      </Link>

      <div className="absolute right-1/2 translate-x-1/2 transform">
        <div className="hidden md:flex gap-x-10 2xl:gap-x-10 items-center text-gray-700 font-medium text-lg ">
          <Link
            href="/case-studies"
            className="
          hover:text-blue-500
          "
          >
            Case Studies
          </Link>
             <Link href="/" className="hover:text-blue-500">
            Services
          </Link>
          <Link href="/" className="hover:text-blue-500">
        About us
          </Link>
        </div>
      </div>

    </div>
  );
};

export default ShowcaseNavbar;
