import Image from "next/image"

import Navbar from "./navbar"
import SocialIcons from "./social-icons"

const Hero = () => {
  return (
    <div className="heroBackground bg-no-repeat ">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-around px-4 md:p-10">
        <div className="w-full md:w-3/5 max-w-4xl">
          <Image
            src="/illustration-mockups.svg"
            alt="illustration-mockups"
            layout="responsive"
            objectFit="contain"
            width={709}
            height={506}
          />
        </div>
        <div className="self-center text-center md:text-left md:w-2/5 max-w-xl text-white space-y-4 mt-6 p-2 md:p-6">
          <div className="text-2xl md:text-3xl font-bold tracking-wider leading-normal">
            Build The Community Your Fans Will Love
          </div>
          <div>
            <p className="mt-2 md:mt-8 text-md">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
          </div>
          <div className="pt-2">
            <button className="bg-white text-violet py-3 px-20 md:px-12 rounded-full hover:bg-soft-magenta hover:text-white drop-shadow-xl">
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center md:justify-end p-4 md:p-10">
        <SocialIcons />
      </div>
    </div>
  )
}

export default Hero
