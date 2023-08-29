import Image from "next/image"

const Logo = () => {
  return (
    <div className="relative w-36 md:w-48">
      <Image src="/logo.svg" alt="logo" fill />
    </div>
  )
}

export default Logo
