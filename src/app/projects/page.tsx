import HidableNavbar from "../_components/navbar";


export default function About() {
  return (
    <div className="w-full h-screen flex flew-row">
      <HidableNavbar />
      <div className="flex justify-center w-full py-24">
        <p className="text-3xl">PROJECTS</p>
      </div>
    </div>
  )
}