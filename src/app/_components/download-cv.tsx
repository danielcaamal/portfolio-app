"use client"

import { Button } from "@nextui-org/button"

export const DownloadCV = () => {

  return (
    <a href="/files/Resume_Daniel_Caamal.pdf" download>
      <Button className="rounded-md border border-orange-500 w-64 h-12 text-2xl hover:bg-orange-500 hover:text-white">
        Download CV
      </Button>
    </a>
  )
}