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
          <button class="
        group
        p-5
        cursor-pointer 
        relative  
        text-xl 
        font-bold 
        border-0 
        flex 
        items-center 
        justify-center
        bg-transparent
         text-red-500 
         h-auto  
         w-[170px]  
         overflow-hidden   
         transition-all
         duration-100">
            <span class="
        group-hover:w-full
        absolute 
        left-0 
        h-full 
        w-5 
        border-y
        border-l
         border-red-500
           transition-all
         duration-500">
            </span>

            <p class="group-hover:opacity-0 group-hover:translate-x-[-100%] absolute translate-x-0 transition-all
         duration-200">Work With Me</p>

            <span class="group-hover:translate-x-0  group-hover:opacity-100 absolute  translate-x-full opacity-0  transition-all duration-200">
              -{'>'}
            </span>

            <span
              class="group-hover:w-full absolute right-0 h-full w-5  border-y border-r  border-red-500 transition-all duration-500">
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
