import React from 'react'
import Image from 'next/image'
import cvimage from '../cv/cv.jpg'
import Header from '../header/header.js'


 
export default function Page() {
  return (
    <main>
      <Header></Header>
        <Image
          src={cvimage}
          width={700}
          height={700}
          alt="CV"
        />
    </main>
  );
}




