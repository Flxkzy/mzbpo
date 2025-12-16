import React from "react";
import Image from "next/image";
import Link from "next/link";

function LetsMakeThingsHappenSection() {
  return (
    <section
      className="
        my-10 md:py-20 md:mx-auto
        bg-brand-navy rounded-[40px] p-10 md:p-16 relative
        text-brand-white shadow-soft
      "
    >
      <div className="md:pr-[22rem]">
        <p className="text-3xl font-display font-semibold text-brand-teal">
          Let&apos;s Make It Work — Together
        </p>

        <p className="my-8 text-lg md:text-xl text-white/80 leading-relaxed">
          Contact us today for a free consultation and discover how our
          outsourced finance, ERP, and audit support can streamline your
          operations and cut unnecessary costs.
        </p>

        <Link
          href="/meeting"
          className="
            inline-block py-3 px-6 rounded-2xl font-semibold
            bg-brand-teal text-brand-navy shadow-soft
            hover:opacity-90 transition
          "
        >
          Book a Free Consultation
        </Link>
      </div>

      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src="/images/tt.svg"
          alt="proposal illustration"
          width={260}
          height={260}
          className="drop-shadow-lg"
        />
      </div>
    </section>
  );
}

export default LetsMakeThingsHappenSection;
