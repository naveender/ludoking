import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
    const router = useRouter();

    return (
        <div>
            <p className="relative z-10 text-center text-xs text-white px-6 pb-4 leading-tight">
                By proceeding, you agree to our
                <span className="underline"> Terms of Use </span>
                ,
                <span className="underline"> Privacy Policy </span>
                and that you are 18 years or older. You are not playing from Assam, Odisha, Nagaland, Sikkim, Meghalaya, Andhra Pradesh, or Telangana.
            </p>
        </div>
    );
}
export default Footer;