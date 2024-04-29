import Image from 'next/image'
import React from 'react'

export const ErrorConnect = () => {
  return (
    <div className=" flex flex-col items-center gap-3">
            <Image
              className="mb-5"
              src="/404-page-not-found.png"
              alt="project_image"
              width={500}
              height={500}
            ></Image>
            <h1 className=" text-6xl font-semibold">Oops...</h1>
            <p className=" text-6xl">Something When Wrong </p>
            <p>Click for refresh </p>
          </div>
  )
}
