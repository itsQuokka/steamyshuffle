import Link from "next/link";
import { Input } from "./ui/input";
import { RiInstagramFill, RiTiktokFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-24 bg-primary text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="capitalize leading-tight mb-2">
              Subscribe to our newsletter!
            </h2>
            <p className="text-white/60">
              Be the first to get the latest releases on fun couples games!
            </p>
          </div>
          {/* Form */}
          <form className="flex flex-col xl:flex-row items-center w-full max-w-[720px] mx-auto gap-5">
            <Input placeholder="Your Email Address" />
            <button className="btn w-full xl:max-w-[150px] h-[60px] btn-accent">
              Join
            </button>
          </form>
          <div className="flex gap-8 mx-auto text-[20px] text-white/60 mb-20">
            <Link href="http://www.instagram.com/steamyshuffleca">
              <RiInstagramFill />
            </Link>
            <Link href="">
              <RiTiktokFill />
            </Link>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="py-6 border-t border-white/5 text-white/60">
        Copyright &copy; 2024 Steamy Shuffle. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
