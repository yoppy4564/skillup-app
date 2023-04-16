import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

type SnsLinkProps = {
src: string
href: string
}

const SnsLink: FC<SnsLinkProps> = ({ src, href }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Image src={src} alt="" width={50} height={50} />
    </Link>
)
}

export default SnsLink