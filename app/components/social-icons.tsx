import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi"

const SocialIcons = () => {
  return (
    <div className="flex flex-row space-x-4 text-white">
      <BiLogoFacebook className="border-2 rounded-full h-8 w-8 p-1" />
      <BiLogoTwitter className="border-2 rounded-full h-8 w-8 p-1" />
      <BiLogoInstagram className="border-2 rounded-full h-8 w-8 p-1" />
    </div>
  )
}

export default SocialIcons
