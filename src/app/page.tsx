import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Home() {
  return (
      <main className="flex justify-center items-center relative bg-gray-950 overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full h-full flex flex-col space-y-48 overflow-hidden">

              <SpeedInsights />
          </div>
      </main>
  )
}
