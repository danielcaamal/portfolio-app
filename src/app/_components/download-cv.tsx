"use client"

import { Button } from "@nextui-org/button"

export const DownloadCV = () => {

  return (
    <a href="/images/resume.pdf" download>
      <Button className="rounded-md border border-orange-500">
        Download CV
      </Button>
    </a>
  )
}