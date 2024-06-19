import { HeroBg, Logo } from "./assets/svgs"

function App() {


  return (
    <main>

      <section className="bg-azul-600 font-sora min-h-[150vh] text-white relative" style={{ background: 'url(src/assets/svgs/hero-bg.svg) no-repeat top/cover, #205CE2' }}>
      <div className="w-11/12 2xl:max-w-[1440px] mx-auto pt-9">
        <Logo />

         <div className="mt-28 relative z-10">
            <h1 className="font-sora text-[76px] font-bold max-w-[800px] leading-tight">Convenient, Reliable Cleaning Services at Your Fingertips</h1>
            <p className="text-3xl max-w-[539px] my-[60px]">Your go-to platform for flexible and reliable cleaning services, tailored to your needs.</p>
    
            <button className="bg-white text-[#161525] px-4 py-2 rounded-[58px] min-w-[223px] h-[52px]">Join Waitlist</button>
         </div>
      </div>

     {/* <div className="absolute top-32 right-16"> <HeroBg /></div> */}
      </section>

      <section className="bg-azul-100 py-36 font-sora">
      <div className="w-11/12 2xl:max-w-[1440px] mx-auto flex flex-col items-center">
        <span className="bg-[#EA4335] text-white px-8 py-3 rounded-[33px] mb-4">Sign Up for Our Exclusive Pre-Launch Waiting List</span>
          <h2 className="text-center text-black font-bold text-5xl mb-12">Be the First to Experience Pristine</h2>
          <p className="text-center text-black text-2xl max-w-[728px] mx-auto mb-12">Don't miss out on the opportunity to be among the first to experience Pristine's revolutionary cleaning services. By joining our waiting list, you'll get early access to our platform, exclusive updates, and special offers. </p>
     
     <div className="flex gap-x-8 mb-12">
      <input type="text" placeholder="Name" className="border border-chaos-black-300 rounded-lg text-sm px-4 py-4 w-[335px]"/>
      <input type="email" placeholder="Email Address" className="border border-chaos-black-300 rounded-lg text-sm px-4 py-4 w-[335px]"/>
     </div>
          <button className="bg-azul-600 text-white px-4 py-2 rounded-[58px] min-w-[223px] h-[52px]">Join Waitlist</button>
      </div>
      </section>

      <section className="w-11/12 2xl:max-w-[1440px] mx-auto py-36">
      <h2 className="text-center text-black font-bold text-5xl mb-6">Pristine works in 4 easy steps</h2>
          <p className="text-center text-black text-2xl mb-6">Get a seamless, on-demand cleaning service that adapts to your diverse needs.</p>

      </section>

    </main>
  )
}

export default App
