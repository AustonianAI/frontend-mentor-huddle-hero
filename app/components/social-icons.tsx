import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi"

const SocialIcons = () => {
  return (
    <div className="flex flex-row space-x-4">
      <BiLogoFacebook className="border-2 rounded-full h-8 w-8 p-1  text-white hover:border-soft-magenta hover:text-soft-magenta" />
      <BiLogoTwitter className="border-2 rounded-full h-8 w-8 p-1  text-white hover:border-soft-magenta hover:text-soft-magenta" />
      <BiLogoInstagram className="border-2 rounded-full h-8 w-8 p-1  text-white hover:border-soft-magenta hover:text-soft-magenta" />
    </div>
  )
}

export default SocialIcons
