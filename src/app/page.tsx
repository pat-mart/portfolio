import Hero from '@/app/components/hero/hero'

export default function Home() {
  return (
      <main className="flex justify-center items-center relative bg-gray-950 overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full flex flex-col space-y-48">
            <Hero/>
        </div>
      </main>
  )
}
