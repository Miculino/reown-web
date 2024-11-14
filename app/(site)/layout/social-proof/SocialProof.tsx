"use client";

// Styles
import styles from "./social-proof.module.scss";

// Constants
import { CUSTOMER_COMPANIES_LIST } from "@/app/constants/customerCompaniesList";

export default function SocialProof() {
  return (
    <section className="mt-2 overflow-hidden rounded-[40px] bg-gray-300">
      <div className={`flex ${styles.customers__container}`}>
        {CUSTOMER_COMPANIES_LIST.map(({ logo: CompanyLogo }, index) => (
          <div
            className="w-52 py-12"
            key={index + CUSTOMER_COMPANIES_LIST.length}
          >
            <CompanyLogo className="w-full h-full" />
          </div>
        ))}
        {CUSTOMER_COMPANIES_LIST.map(({ logo: CompanyLogo }, index) => (
          <div
            className="w-52 py-12"
            key={index + CUSTOMER_COMPANIES_LIST.length}
          >
            <CompanyLogo />
          </div>
        ))}
      </div>
    </section>
  );
}
