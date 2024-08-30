import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const header = () => {
  return (
    <header className="w-full border-b">Header
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src="/assets/images/logo.svg" width={128} height={38}
          alt="Univent logo"
          />
        </Link>
      </div>
    </header>
  )
}

export default header