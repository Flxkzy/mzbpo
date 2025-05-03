"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import { AnimatedShinyTextDemo } from "@/components/demos/animated-shiny-text-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import { CoverDemo } from "@/components/demos/cover-demo";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import NumberTicker from "@/components/magicui/number-ticker";
import { InfiniteMovingLogos } from "@/components/ui/infinite-moving-logos";
import Image from "next/image";
import Link from "next/link";
import { PiCheckBold } from "react-icons/pi";
import { Link as ScrollLink, Element } from "react-scroll";
import { IconStarFilled } from "@tabler/icons-react";
import { FaLinkedin } from "react-icons/fa";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";


const services = [
  {
    icon: "/images/s_6.png",
    title: "Bookkeeping & Accounting Outsourcing",
    description:
      "Comprehensive bookkeeping services with accurate financial records and reporting",
  },
  {
    icon: "/images/s_1.png",
    title: "Payroll Processing",
    description:
      "End-to-end payroll management with compliance and timely processing.",
  },
  {
    icon: "/images/s_3.png",
    title: "Audit Support & Financial Reporting",
    description:
      "Expert assistance for audits and comprehensive financial reporting",
  },
  {
    icon: "/images/s_4.png",
    title: "ERP Implementation & Management",
    description:
      "Seamless ERP solutions to streamline your business operations and financial processes.",
  },
];

const getServiceDetails = (title: string): JSX.Element => {
  switch (title) {
    case "Bookkeeping & Accounting Outsourcing":
      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-600">What’s Included</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>General ledger & double-entry bookkeeping</li>
              <li>Bank & credit card reconciliations</li>
              <li>Accounts payable & receivable tracking</li>
              <li>Monthly management reports</li>
              <li>Sales tax/VAT return support</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Tools We Use</h3>
            <p className="text-gray-700 mt-2">QuickBooks Online, Xero, Excel, custom dashboards</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Why It Works</h3>
            <p className="text-gray-700 mt-2">
              Outsourcing bookkeeping can reduce costs by over 50% while ensuring accuracy,
              timeliness, and audit-readiness.
            </p>
          </div>
        </div>
      );

    case "Payroll Processing":
      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-600">What’s Included</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Salary calculations & payslip generation</li>
              <li>Tax & EOBI/social security deductions</li>
              <li>Direct deposit processing</li>
              <li>Compliance with Pakistan payroll regulations</li>
              <li>Employee onboarding/offboarding records</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Peace of Mind</h3>
            <p className="text-gray-700 mt-2">
              We take care of every aspect of payroll — so you can focus on your team, not tax rules.
            </p>
          </div>
        </div>
      );

    case "Audit Support & Financial Reporting":
      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Audit Assistance</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Preparation of audit working papers</li>
              <li>IFRS/IAS-compliant financial statements</li>
              <li>Supporting schedules & breakdowns</li>
              <li>Responding to auditor queries</li>
              <li>Liaison with statutory auditors</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Why It Matters</h3>
            <p className="text-gray-700 mt-2">
              Proper audit support ensures clean opinions, investor confidence, and regulatory compliance.
            </p>
          </div>
        </div>
      );

    case "ERP Implementation & Management":
      return (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-600">What We Deliver</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>ERP system selection (SAP B1, Odoo, QuickBooks Desktop)</li>
              <li>Business process mapping & data migration</li>
              <li>Chart of accounts & cost center setup</li>
              <li>User training & role-based access control</li>
              <li>Ongoing support, backups, and change requests</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-600">Our Edge</h3>
            <p className="text-gray-700 mt-2">
              As accountants first, we implement ERP with financial accuracy and real-world workflows in mind.
            </p>
          </div>
        </div>
      );

    default:
      return <p className="text-gray-600">More details will be available soon.</p>;
  }
};



export default function Home() {
  return (
<div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#93c5fd_100%)]">
      <Element
        name="top"
        className="rounded-md top-3 sticky z-50 xl:w-4/5 2xl:w-[68%] 
        mx-auto bg-[#fafafa] text-white flex items-center justify-between 
        py-3 px-4 md:px-6"
      >
        <Link href={"/"}>
          <Image
            src={"/logo/mzbpo.png"}
            alt="Logo"
            width={1500}
            height={1500}
            className="w-28"
          />
        </Link>

        <div className="absolute right-1/2 translate-x-1/2 transform">
          <div className="hidden md:flex gap-x-10 items-center text-gray-700 font-medium text-lg cursor-pointer">
            <Link href={"/case-studies"} className="hover:text-blue-500">
              Case Studies
            </Link>

            <ScrollLink
              to="services"
              smooth={true}
              className="hover:text-blue-500"
            >
              Services
            </ScrollLink>

            <ScrollLink
              to="process"
              smooth={true}
              className="hover:text-blue-500"
            >
              Process
            </ScrollLink>

            <ScrollLink
              to="guarentees"
              smooth={true}
              className="hover:text-blue-500"
            >
              Guarentees
            </ScrollLink>
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          <a href="tel:519400200" className="hidden lg:flex">
            <button className="px-4 py-2 rounded-md flex items-center gap-x-3">
              (519)-400-200
            </button>
          </a>

          <Link
            href={"/meeting"}
            className="
  py-3 
  px-6
  text-lg 
  hover:bg-[#abcbff]
  rounded-[6px]
  border-2
  border-black
  text-white
  bg-[#121212]
  transition
  duration-200
     hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Book a call
          </Link>
        </div>
      </Element>

      <main className="md:pb-10">
        <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">

          <h1>
            <CoverDemo />
          </h1>
          <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
          MZBPO | The Outsourcing Arm of Muniff Ziauddin & Co. — Pakistan's Top QCR-Rated Audit Firm
          </p>

          <div
            className="
                 flex 
                  md:justify-center 
                  items-center 
                  gap-x-4
                   "
          >
            <Link
              href="/meeting"
              className="py-3 
            px-10
            md:px-16
      md:text-xl
      hover:bg-[#abcbff] 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
            >
              Book a Call
            </Link>
            <Link
              href={"/case-studies"}
              className="
              bg-white
   py-3 
   px-10
   md:px-16
      md:text-xl
        border-4
        border-black
        rounded-[6px]
        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
            >
              Case Studies
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-grey-700">
                <PiCheckBold className="text-xl text-blue-500" />
                Bookkeeping
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-grey-700">
                <PiCheckBold className="text-xl text-blue-500" />
                Payroll
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-grey-700">
                <PiCheckBold className="text-xl text-blue-500" />
                Audit
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-grey-700">
                <PiCheckBold className="text-xl text-blue-500" />
                ERP
              </p>
            </BoxReveal>
          </div>

          <div className="md:flex items-center justify-between gap-y-4 my-10 gap-x-28 mx-auto">
            <div className="md:w-2/5">
            <h1 className="text-2xl font-medium text-grey-600 w-4/5">
                Trusted by clients worldwide
              </h1>

              <div className="flex my-6 gap-x-5 w-full">
                <div>
                  <h1 className="text-[#FA7268] text-3xl md:text-5xl">
                    <NumberTicker value={300} /> +
                    <p className="text-grey-500 text-sm md:text-md">
                      Clients
                    </p>
                  </h1>
                </div>

                <div className="w-px bg-gray-300 self-stretch"></div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-[#FA7268] text-3xl md:text-5xl whitespace-nowrap overflow-hidden">
                    <NumberTicker value={92} /> %
                    <p className="text-grey-500 text-sm md:text-md">
                      Satisfaction Rate
                    </p>
                  </h1>
                </div>
              </div>
            </div>

            <section className="overflow-hidden mt-10 md:w-4/5">
              <InfiniteMovingLogos
                speed="slow"
                direction="left"
                items={[
                  {
                    logo: "/logo/d.png",
                    name: "dunkin",
                  },
                  {
                    logo: "/logo/k.png",
                    name: "kfc",
                  },
                  {
                    logo: "/logo/kh.png",
                    name: "khaadi",
                  },
                  {
                    logo: "/logo/wwf.png",
                    name: "wwf",
                  },
                  {
                    logo: "/logo/r.png",
                    name: "red creasent",
                  },
                  {
                    logo: "/logo/uni.png",
                    name: "uniliver",
                  },
                  {
                    logo: "/logo/penny.png",
                    name: "penny appeal",
                  },
                  {
                    logo: "/logo/faw.png",
                    name: "faw",
                  },

                ]}
              />
            </section>
          </div>
        </div>
      </main>

      <Element name="services">
  <div className="py-20 bg-gradient-to-b from-white to-gray-50">
    <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      <h1 className="mb-4">
        <WordPullUpDemo />
      </h1>
      <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500 font-light leading-relaxed">
        Every service we offer is built to reduce costs, improve compliance, and give you peace of mind.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">
        {services.map((service) => (
          <Dialog key={service.title}>
            <DialogTrigger asChild>
              <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 cursor-pointer hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-blue-100 opacity-30 scale-105 group-hover:scale-110 transition-transform duration-300"></div>
                    <Image
                      src={service.icon || "/placeholder.svg"}
                      width={72}
                      height={72}
                      className="relative z-10 w-16 h-16 object-contain"
                      alt={service.title}
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-blue-600 font-medium text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More →
                  </div>
                </div>
              </div>
            </DialogTrigger>

            <DialogContent className="max-w-2xl bg-white border-none shadow-2xl rounded-xl p-6">
              <BoxReveal boxColor="#3b82f6" duration={0.6}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>

                  <div className="mt-6 space-y-6">
                    {getServiceDetails(service.title)}
                  </div>

                  <div className="pt-6 mt-8 border-t text-center">
                    <Link
                      href="/meeting"
                      className="inline-block
                        py-2 
                        px-6
                        text-sm
                        font-medium
                        hover:bg-[#abcbff] 
                        rounded-[6px]
                        border-2 
                        border-black 
                        dark:border-white 
                        bg-[#121212] 
                        text-white 
                        transition 
                        duration-200 
                        hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
                        dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
                    >
                      Book a Free Consultation
                    </Link>
                  </div>
                </div>
              </BoxReveal>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  </div>
</Element>


      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <Element name="process">
        <main className="md:px-0 mx-6 md:mx-auto">
        <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
        Our{" "}
            <span className="text-blue-500 flex gap-x-1 items-center">
              {" "}
              <Image
                src={"/icons/squiggle.svg"}
                width={10000}
                height={10000}
                className="w-6"
                alt="image"
              />
              Proven
              <Image
                src={"/icons/star.svg"}
                width={10000}
                height={10000}
                className="w-6 mb-8"
                alt="image"
              />
            </span>{" "}
            Process
          </h1>

          <p className="text-center 
          py-4 md:w-1/2 mx-auto 
          text-xl md:text-2xl text-gray-500">
            Every service we offer is built to reduce costs, improve compliance, and give you peace of mind.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <AnimatedBeamMultipleOutputDemo />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
            <BoxRevealDemo />
          </div>

          </div>

        </main>
      </Element>

      <section>
        <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
          <Image
            src={"/logo/bkrr.png"}
            width={10000}
            height={10000}
            className="w-36 md:w-44 h-auto rounded-md"
            alt="image"
          />
          <div className="flex flex-col gap-y-5 md:w-1/2">
            <h1 className="text-lg md:text-2xl ">
            MZBPO is the outsourcing division of Muniff Ziauddin & Co. a top-rated audit firm in Pakistan. As an independent member of BKR International, we deliver globally aligned bookkeeping, ERP, payroll, and audit support with local expertise and precision.
            </h1>
          </div>
        </main>
      </section>

      <Element name="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </Element>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
      <LetsMakeThingsHappenSection />
      </section>

      <footer className="bg-[#fafafa] py-10 px-6 md:px-0 md:mx-auto border-t">
  <div className="xl:w-4/5 2xl:w-[68%] mx-auto flex flex-col gap-y-6">
    <Image
      src="/logo/mzbpo.png"
      width={10000}
      height={10000}
      alt="MZBPO Logo"
      className="w-40"
    />

    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-4 text-gray-600 text-lg">
      <p>mzcopakistan@gmail.com</p>
      <div className="flex items-center gap-x-6">
        <Link
          href="https://www.linkedin.com/in/hammafarid/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 hover:text-blue-600 transition"
        >
          <FaLinkedin className="text-2xl" />
          <span>LinkedIn</span>
        </Link>
        <Link
          href="https://bkrpakistan.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          Visit BKR Pakistan →
        </Link>
      </div>
    </div>
  </div>

  <div className="flex flex-col md:flex-row justify-center items-center gap-x-4 mt-10 text-gray-500 text-sm">
    <span>© 2025 MZBPO. All Rights Reserved.</span>
    <Link href="/" className="text-blue-500 hover:underline">
      Privacy Policy
    </Link>
  </div>
</footer>
    </div>
  );
}
