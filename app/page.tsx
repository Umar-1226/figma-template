import { PlayIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 pt-15 gap-5">
        <div className="w-full text-wrap h-full p-20">
          <h1 className="font-bold text-6xl leading-18 pb-5 ">
            Building Apps Just Got Easier
          </h1>
          <p>
            Aliquam vel platea curabitur sit vestibulum egestas sit id lorem.
            Aliquet neque, dui sed eget scelerisque. Non at at venenatis tortor
            amet feugiat ullamcorper in. Odio vulputate cras vel lacinia turpis
            volutpat adipiscing. Sollicitudin at velit, blandit tempus nunc in.
          </p>
          <div className="flex items-center pt-6">
            <Link
              href={"/"}
              className="rounded-md p-2 pl-3 pr-3 mr-10 text-white font-bold text-xl bg-blue-600"
            >
              Get Started
            </Link>
            <Link href={"/"} className="text-blue-700 text-md ">
              <PlayIcon className="h-6 w-6 mr-2 inline " />
              Watch Vedio
            </Link>
          </div>
        </div>
        <Image
          src={"/images/IPhone.png"}
          alt="hello I am moto"
          width={"500"}
          height={"500"}
        ></Image>
      </div>
    </div>
  );
}
