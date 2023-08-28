import Image from "next/image"

import Logo from "./logo"
import Navbar from "./navbar"
import SocialIcons from "./social-icons"

const Hero = () => {
  return (
    <div className="heroBackground bg-no-repeat w-full h-screen px-8">
      <Navbar />
      <div className="flex flex-col items-start md:items-center md:space-x-8 md:flex-row md:justify-start">
        <div className="w-full md:w-1/2 h-96 relative">
          <Image
            src="/illustration-mockups.svg"
            alt="illustration-mockups"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="text-center md:text-left md:w-1/2 max-w-lg mt-6 md:mt-0 text-white space-y-4 leading-relaxed">
          <div className="text-3xl font-semibold ">
            Build The Community Your Fans Will Love
          </div>
          <div>
            <p className="pt-2 text-xl">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
          </div>
          <div className="pt-4">
            <button className="bg-white text-violet py-2 px-8 rounded-full hover:bg-soft-magenta hover:text-white">
              Register
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <SocialIcons />
      </div>
    </div>
  )
}

export default Hero
