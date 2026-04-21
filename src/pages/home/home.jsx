import backgroundImage from '../../assets/blueflannelinwoods.jpg'

export function Home() {
  return (
    <>
      <div className="relative h-[calc(100vh-4rem)] w-full overflow-hidden">
        <img src={backgroundImage}
          alt="Background Image"
          className="absolute inset-0 object-cover object-center w-full h-full" />
          
        {/* Subtle dark gradient overlay to ensure text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/40 to-slate-900/80 backdrop-blur-[2px]"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <h1 className="text-5xl sm:text-7xl text-white font-extrabold tracking-tight drop-shadow-xl">
            Dallin Jackson
          </h1>
          <div className="h-1 w-24 bg-blue-500 rounded-full mt-6 mb-4 opacity-80"></div>
          <p className="text-xl sm:text-2xl text-slate-200 font-medium tracking-wide drop-shadow-md">
            Software Engineer
          </p>
        </div>
      </div>
    </>
  )
}
