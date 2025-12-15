import BlurFade from "@/components/magicui/blur-fade";
import Image from "next/image";
import Link from "next/link";

const works = [
  { background: "bg-brand-grey", imageUrl: "/images/business.webp", title: "Rubbish Brothers",               link: "https://www.rubbishbrothers.com" },
  { background: "bg-brand-grey", imageUrl: "/images/business.webp", title: "Atlas Massage",                   link: "https://www.atlasmassage.ca" },
  { background: "bg-brand-grey", imageUrl: "/images/business.webp", title: "Canadian Security Solutions",     link: "https://www.canadiansecuritysolutions.com" },
  { background: "bg-brand-grey", imageUrl: "/images/business.webp", title: "Flight 9",                        link: "https://www.flight9.art" },
];

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="grid md:grid-cols-2 gap-8 mt-10 justify-items-center">
        {works.map(({ imageUrl, title, link }, idx) => (
          <BlurFade
            key={title}
            delay={0.25 + idx * 0.05}
            inView
            className={`rounded-2xl ${works[idx].background} p-4 text-brand-navy`}
          >
            <Link href={link} target="_blank" rel="noreferrer" className="block">
              <Image
                height={1200}
                width={1600}
                className="h-5/6 w-full object-cover rounded-xl"
                src={imageUrl}
                alt={title}
              />
              <h3 className="text-lg font-semibold p-4 hover:text-brand-teal transition-colors">
                {title}
              </h3>
            </Link>
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
