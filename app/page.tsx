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
    icon: "/images/book.svg",
    title: "Bookkeeping & Accounting Outsourcing",
    description:
      "Comprehensive bookkeeping services with accurate financial records and reporting",
  },
  {
    icon: "/images/payroll.svg",
    title: "Payroll Processing",
    description:
      "End-to-end payroll management with compliance and timely processing.",
  },
  {
    icon: "/images/audit.svg",
    title: "Audit Support & Financial Reporting",
    description:
      "Expert assistance for audits and comprehensive financial reporting",
  },
  {
    icon: "/images/erp.avif",
    title: "ERP Implementation & Management",
    description:
      "Seamless ERP solutions to streamline your business operations and financial processes.",
  },
];

const getServiceDetails = (title: string): JSX.Element => {
  switch (title) {

    case "Bookkeeping & Accounting Outsourcing":
      return (
        <div className="space-y-6 text-gray-700">
          <h3 className="text-lg font-semibold text-[#FA7268]">Focus on growth—we’ll handle the numbers.</h3>
          <p>
            Our outsourced bookkeeping and accounting services give you accurate, timely, and audit-ready financials without the overhead of an in-house team.
          </p>
          <p>
            We work as an extension of your business, managing everything from daily entries and reconciliations to financial reporting and month-end closings. Whether you’re a startup, scaling company, or multi-entity operation, our team adapts to your needs using industry-standard tools and custom workflows.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>✅ Real-time reporting</li>
            <li>✅ Seamless integration with existing systems</li>
            <li>✅ Scalable support from 1 to 1000+ hours/month</li>
          </ul>
          <p>
            Get full financial clarity—without full-time cost.
          </p>
        </div>
      );

    case "Payroll Processing":
      return (
        <div className="space-y-6 text-gray-700">
          <h3 className="text-lg font-semibold text-[#FA7268]">Accurate, compliant, and stress-free payroll—every single cycle.</h3>
          <p>
            We take the complexity out of payroll by managing everything from salary calculations and tax deductions to payslip generation and compliance filings. Our payroll solutions are tailored to your structure, whether you run a lean team or a large workforce.
          </p>
          <p>
            You get reliable, confidential payroll support—on time, every time—without needing an in-house HR or finance department.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>✅ Monthly & biweekly payroll cycles</li>
            <li>✅ Customized reports & employee summaries</li>
            <li>✅ Secure employee payslip distribution</li>
            <li>✅ Integration with your accounting systems</li>
          </ul>
          <p>
            Let us handle the backend, so you can focus on your people.
          </p>
        </div>
      );

    case "Audit Support & Financial Reporting":
      return (
        <div className="space-y-6 text-gray-700">
          <h3 className="text-lg font-semibold text-[#FA7268]">
            Ongoing financial clarity—built for accuracy, trust, and control.
          </h3>
          <p>
            We help businesses stay audit-ready year-round with structured monthly internal reviews and clean, compliant financial reporting. Whether you’re preparing for an external audit, reporting to investors, or simply want stronger control over your books, we ensure your financials are accurate, organized, and insightful.
          </p>
          <p>
            Our team works as an extension of yours—identifying red flags, tightening controls, and supporting you through every stage of the audit cycle.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>✅ Monthly internal audits to detect errors, risks, and fraud early</li>
            <li>✅ Full audit support and file preparation</li>
            <li>✅ Liaison with external auditors or investors</li>
            <li>✅ Financial statements (P&L, balance sheet, cash flow)</li>
            <li>✅ IFRS/local GAAP-compliant reporting</li>
            <li>✅ Actionable recommendations to strengthen controls</li>
          </ul>
          <p>
            Don’t wait for year-end surprises—stay ahead with proactive audits and clear financial visibility.
          </p>
        </div>
      );

    case "ERP Implementation & Management":
      return (
        <div className="space-y-6 text-gray-700">
          <h3 className="text-lg font-semibold text-[#FA7268]">
            Streamline your operations with the right systems—implemented the right way.
          </h3>
          <p>
            We help growing businesses select, implement, and manage ERP systems that align with their workflows, financial structure, and long-term goals. Whether you’re moving from spreadsheets or upgrading a legacy setup, our team ensures a smooth, tailored transition with minimal disruption.
          </p>
          <p>
            From SAP Business One to Zoho, Odoo, and beyond—we bring both technical and financial expertise to ensure your ERP drives efficiency, not complexity.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>✅ End-to-end ERP setup & configuration</li>
            <li>✅ Data migration & system integration</li>
            <li>✅ Staff training & user onboarding</li>
            <li>✅ Ongoing system management & support</li>
            <li>✅ ERP platforms: SAP B1, SAP B/4 HANA, Odoo, Zoho, Oracle NetSuite & more</li>
          </ul>
          <p>
            Build a system that grows with your business—without the usual ERP headaches.
          </p>
        </div>
      );

    default:
      return <p className="text-gray-600">More details will be available soon.</p>;
  }
};

export default function Home() {
  return (
<div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#93c5fd_100%)] sm:[background:radial-gradient(100%_100%_at_50%_20%,#ffffff_40%,#93c5fd_100%)] md:[background:radial-gradient(100%_100%_at_50%_30%,#ffffff_40%,#93c5fd_100%)]">
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
              About us
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
  href="/meeting"
  className="
    py-2
    px-4
    text-base
    hover:bg-[#abcbff]
    rounded-[6px]
    border-2
    border-black
    text-white
    bg-[#FA7268]
    transition
    duration-200
    hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
    dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]
  "
>
  Book a Free Consultation
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
  className="
    py-2.5
    px-5
    text-base
    hover:bg-[#abcbff]
    rounded-[6px]
    border-2
    border-black
    text-white
    bg-[#FA7268]
    transition
    duration-200
    hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
    dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]
  "
>
  Book a Free Consultation
</Link>


<Link
  href="/case-studies"
  className="
    bg-white
    py-2.5
    px-5
    text-base
    border-2
    border-black
    rounded-[6px]
    hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] 
    dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]
  "
>
  Case Studies
</Link>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-grey-700">
                <PiCheckBold className="text-xl text-[#FA7268]" />
                Bookkeeping
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-grey-700">
                <PiCheckBold className="text-xl text-[#FA7268]" />
                Payroll
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-grey-700">
                <PiCheckBold className="text-xl text-[#FA7268]" />
                Audit
              </p>
            </BoxReveal>
            <BoxReveal boxColor={"#3b82f6"} duration={0.5}>
              <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center text-grey-700">
                <PiCheckBold className="text-xl text-[#FA7268]" />
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
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-[#FA7268] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="text-[#FA7268] font-medium text-sm tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn More →
                  </div>
                </div>
              </div>
            </DialogTrigger>

            <DialogContent className="w-[90vw] max-w-2xl bg-white border-none shadow-2xl rounded-xl p-4 sm:p-6 overflow-y-auto max-h-[90vh]">
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
                        bg-[#FA7268] 
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
