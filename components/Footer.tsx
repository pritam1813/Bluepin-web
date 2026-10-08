import Image from "next/image";
import FooterLegalLinks from "./FooterLegalLinks";
import { getLegalDocContent } from "@/lib/legalContent";
import bluepinLogo from "@/public/Bluepin.png";

function getYear() {
  return new Date().getFullYear();
}

export default function Footer() {
  const { terms, privacy } = getLegalDocContent();

  return (
    <footer className="border-t border-theme-border bg-theme-bg">
      <div className="mx-auto max-w-6xl px-6 py-14 md:px-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-2.5">
              <Image
                src={bluepinLogo}
                alt="Bluepin logo"
                className="size-6 object-contain grayscale"
                width={24}
                height={24}
              />
              <span className="font-display text-lg font-semibold tracking-tight">
                Bluepin
              </span>
            </div>
            <p className="mt-4 max-w-md leading-relaxed text-theme-text-sec">
              Your health data is encrypted and stored securely. Bluepin
              helps you keep one calm record of glucose and lab history.
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm text-theme-text-sec">Privacy and security</p>
            <p className="mt-2 text-sm leading-relaxed text-theme-text-sec">
              Encrypted in transit and at rest. Never sold. Export or delete
              your data at any time.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-theme-border pt-6 text-sm text-theme-text-sec sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {getYear()} Bluepin. All rights reserved.</span>
          <FooterLegalLinks termsContent={terms} privacyContent={privacy} />
        </div>
      </div>
    </footer>
  );
}
