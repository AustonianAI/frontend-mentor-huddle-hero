import Image from "next/image"

const Logo = () => {
  return (
    <div className="relative max-w-xl w-full h-10">
      <Image src="/logo.svg" alt="logo" layout="fill" objectFit="contain" />
    </div>
  )
}

export default Logo
