import backgroundImage from '../../assets/blueflannelinwoods.jpg'

export function Home() {
  return (
    <>
      <div className="relative h-screen w-full">
        <img src={backgroundImage}
          alt="Background Image"
          className="object-cover object-center w-full h-full" />

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Dallin Jackson</h1>
        </div>
      </div>
    </>
  )
}
