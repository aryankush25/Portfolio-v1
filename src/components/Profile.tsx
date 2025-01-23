import { CONTACT_LINKS } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { RiTwitterXFill, RiLinkedinFill, RiGithubFill } from "react-icons/ri";

export default function Profile() {
  return (
    <div className="top-8 sticky bg-white rounded-3xl w-[400px] h-[70dvh]">
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="relative mt-10 w-[320px] h-[360px]">
          <Image
            src="/images/profile.jpeg"
            alt="Yash Sharma"
            className="rounded-2xl"
            fill
            objectFit="cover"
          />
        </div>
        <div className="space-y-12 max-w-72 text-center">
          <h1 className="font-semibold text-4xl text-black">YASH SHARMA</h1>
          <p className="text-gray-500 text-xl">
            A software engineer developed seamless user experiences.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={CONTACT_LINKS.twitter}
            className="text-2xl hover:text-blue-400 transition-colors"
          >
            <RiTwitterXFill color="black" />
          </Link>
          <Link
            href={CONTACT_LINKS.linkedin}
            className="text-2xl hover:text-blue-600 transition-colors"
          >
            <RiLinkedinFill color="black" />
          </Link>
          <Link
            href={CONTACT_LINKS.github}
            className="text-2xl hover:text-gray-600 transition-colors"
          >
            <RiGithubFill color="black" />
          </Link>
        </div>
      </div>
    </div>
  );
}
