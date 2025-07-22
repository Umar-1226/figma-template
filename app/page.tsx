import { Button } from "@/components/ui/button";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pb-50">
      <section className="grid grid-cols-2 pt-15 gap-5">
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
              className="rounded-md p-2 pl-4 pr-4 mr-10 text-white  text-xl bg-blue-600"
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
          alt="An Iphone"
          width={"500"}
          height={"500"}
        />
      </section>
      <section className="flex p-10 bg-gray-50">
        <div className="flex flex-col items-center  p-4 text-wrap text-center">
          <Image
            src={"/images/RedCircle.png"}
            alt="red circle"
            width={"100"}
            height={"100"}
          />
          <h1 className="text-lg font-bold">Fermentum amet</h1>
          <p>
            Pellentesque quis tincidunt sit sed. Tortor massa sed habitant
            dignissim senectus purus. Consectetur integer id in et pulvinar
            interdum id.
          </p>
        </div>
        <div className="flex flex-col items-center p-4  text-wrap text-center">
          <Image
            src={"/images/YellowCircle.png"}
            alt="red circle"
            width={"100"}
            height={"100"}
          />
          <h1 className="text-lg font-bold">Dignissim quam</h1>
          <p>
            Quam sed neque vitae viverra purus venenatis ac non. Eget sed nunc,
            amet, nibh nulla. Morbi sed risus ullamcorper diam, elit ut non.
          </p>
        </div>
        <div className="flex flex-col p-4 items-center  text-wrap text-center">
          <Image
            src={"/images/BlueCircle.png"}
            alt="red circle"
            width={"100"}
            height={"100"}
          />
          <h1 className="text-lg font-bold">Risus morbi</h1>
          <p>
            Euismod sed pellentesque ut elementum. Accumsan gravida turpis ac
            at. Ullamcorper vitae non est elit odio at augue consequat.
          </p>
        </div>
      </section>
      <section className="mt-10">
        <div>
          <h1 className="text-4xl text-center mb-5 font-bold mt">
            All the essential tools
          </h1>
          <p className=" text-center">
            Odio vulputate cras vel lacinia turpis volutpat adipiscing.
            Sollicitudin at velit, blandit tempus nunc in.
          </p>
        </div>
        <div className="grid grid-cols-2 p-15 mt-8">
          <Image
            src={"/images/IPhone3.png"}
            alt="An IPhone"
            width={"500"}
            height={"700"}
          ></Image>
          <div className="flex-col content-center ">
            <div className="pl-5 border-l-3 border-blue-600 mb-5 text-wrap">
              <h1 className="text-lg font-bold">Sem augue tempus</h1>
              <p>
                Venenatis blandit habitasse nunc, sapien enim elit in. Arcu,
                pharetra, et cursus sit senectus in blandit. Aliquet enim
                fermentum non semper nibh ut neque. Pellentesque ut tincidunt
                vitae arcu bibendum malesuada lorem sapien volutpat.
              </p>
            </div>
            <h1 className="text-lg pl-5 mb-5 border-l-3 border-gray-500 font-bold">
              Habitant integer interdum a
            </h1>
            <h1 className="text-lg pl-5 border-l-3 border-gray-500 font-bold">
              Tempus natoque id
            </h1>
          </div>
        </div>
      </section>
      <section className=" mt-10">
        <div>
          <h1 className="text-4xl text-center mb-5 font-bold mt">
            Focus on what matters
          </h1>
          <p className=" text-center">
            Eget at purus mauris euismod metus vitae eget. Diam massa venenatis
            pellentesque facilisis nunc, varius.
          </p>
        </div>
        <div className="grid grid-cols-2 p-15 mt-8">
          <Image
            src={"/images/IPhone2.png"}
            alt="An IPhone"
            width={"500"}
            height={"700"}
          ></Image>
          <div className="flex-col content-center ">
            <div className="pl-5 border-l-3 border-blue-600 mb-5 text-wrap">
              <h1 className="text-lg font-bold">
                Bibendum gravida dolor egestas aliquam
              </h1>
              <p>
                Egestas tincidunt hendrerit nibh platea sit vivamus aenean
                rhoncus etiam. Tristique amet, sed ac ac dolor habitant. Mauris
                duis neque molestie venenatis nibh hendrerit pharetra. Tortor
                suscipit leo sit tellus ac scelerisque gravida sem.
              </p>
            </div>
            <h1 className="text-lg pl-5 mb-5 border-l-3 border-gray-500 font-bold">
              Egestas lorem eget
            </h1>
            <h1 className="text-lg pl-5 border-l-3 border-gray-500 font-bold">
              Tellus eget feugiat sit
            </h1>
          </div>
        </div>
        <div className="text-center">
          <Button className=" bg-blue-600 p-8text-white text-xl font-bold">
            Get Started
          </Button>
        </div>
      </section>
      <section className="flex items-center  mt-5 bg-gray-100 ">
        <div>
          <ChevronLeftIcon className="h-10 w-10" />
        </div>
        <div className="grid grid-cols-2 p-20">
          <Image
            src={"/images/FingerGun.png"}
            alt="optamistic women"
            width={"500"}
            height={"600"}
          />
          <div className="flex flex-col content-center justify-center p-8">
            <h1 className="text-gray-700 text-lg mb-4">Success Stories</h1>
            <p className="mb-3">
              <span className="text-yellow-500 text-2xl">“</span> Id urna, nisl,
              ut quam. Diam suspendisse fringilla quam arcu mattis est velit in.
              Nibh in purus sit convallis phasellus ut. At vel erat ultricies
              commodo. Neque suspendisse a habitasse commodo.
              <span className=" inline text-red-600 text-2xl">”</span>
            </p>
            <h1 className="text-sm text-gray-700">Marie Poirot,</h1>
            <h1>Bigapp</h1>
          </div>
        </div>
        <div>
          <ChevronRightIcon className="h-10 w-10" />
        </div>
      </section>
      <section>
        <h1 className="text-4xl font-bold text-center m-8">
          Answers to your questions
        </h1>
        <div className="flex flex-col p-10  ml-15 mr-15">
          <div className="flex items-center border-t-3 border-b-3 p-5 border-gray-100 text-blue-500">
            <p>
              Enim sodales consequat adipiscing facilisis massa venenatis, non
              lorem lobortis?
            </p>
            <ChevronDownIcon className="h-5 w-5 ml-auto" />
          </div>
          <div className="flex items-center border-b-3 p-5 border-gray-100 text-blue-500">
            <p>
              Enim sodales consequat adipiscing facilisis massa venenatis, non
              lorem lobortis?
            </p>
            <ChevronDownIcon className="h-5 w-5 ml-auto" />
          </div>
          <div className="flex items-center border-b-3 p-5 border-gray-100 text-blue-500">
            <p>
              Enim sodales consequat adipiscing facilisis massa venenatis, non
              lorem lobortis?
            </p>
            <ChevronDownIcon className="h-5 w-5 ml-auto" />
          </div>
          <div className="flex items-center border-b-3  p-5 border-gray-100 text-blue-500">
            <p>
              Enim sodales consequat adipiscing facilisis massa venenatis, non
              lorem lobortis?
            </p>
            <ChevronDownIcon className="h-5 w-5 ml-auto" />
          </div>
          <div className="flex items-center   p-5 border-gray-100 text-blue-500">
            <p>
              Enim sodales consequat adipiscing facilisis massa venenatis, non
              lorem lobortis?
            </p>
            <ChevronDownIcon className="h-5 w-5 ml-auto" />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 bg-gray-100 p-8 pt-15 gap-5">
        <div className=" text-wrap p-20">
          <h1 className="font-bold text-5xl leading-12 pb-5 ">
            Start now and get the best services
          </h1>
          <p>
            Ac urna elementum purus vulputate tincidunt. Quam maecenas feugiat
            congue orci, eget tellus pellentesque aliquet. Felis fringilla morbi
            dui ac consequat risus pharetra odio pulvinar. Id pellentesque in
            tortor nec nulla cras sapien. Adipiscing nisi tellus quisque aliquet
            sit risus elementum scelerisque.
          </p>
          <div className="flex items-center pt-6">
            <Link
              href={"/"}
              className="rounded-md p-2 pl-4 pr-4  text-white  text-xl bg-blue-600"
            >
              Get Started
            </Link>
          </div>
        </div>
        <Image
          src={"/images/IPhone4.png"}
          alt="An Iphone"
          width={"500"}
          height={"500"}
        />
      </section>
    </main>
  );
}
