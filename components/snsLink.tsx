import Image from 'next/image'
import Link from 'next/link'

const SnsLink = ({ src, href }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
        <Image src={src} alt="" width={50} height={50} />
    </Link>
  )
}

export default SnsLink
