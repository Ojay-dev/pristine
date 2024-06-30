function App() {
  return (
    <main>
      <section className="hero-section relative min-h-screen bg-azul-600 pb-28 font-sora text-white lg:min-h-[150vh]">
        <div className="mx-auto w-11/12 pt-9 2xl:max-w-[1440px]">
          <img src="src/assets/svgs/pristine-logo.svg" alt="Pristine logo" />

          <div className="relative z-10 mt-20 grid justify-items-center lg:mt-28 lg:justify-items-start">
            <h1 className="text-center font-sora text-[38px] font-bold leading-tight md:max-w-[800px] md:text-[76px] lg:text-left">
              Convenient, Reliable Cleaning Services at Your Fingertips
            </h1>
            <p className="mx-auto my-[60px] text-center text-xl md:max-w-[539px] md:text-3xl lg:mx-0 lg:text-left">
              Your go-to platform for flexible and reliable cleaning services, tailored to your needs.
            </p>

            <button className="h-[52px] min-w-[223px] rounded-[58px] bg-white px-4 py-2 text-[#161525]">Join Waitlist</button>
          </div>
        </div>

        {/* <div className="absolute top-32 right-16"> <HeroBg /></div> */}
      </section>

      <section className="bg-azul-100 py-24 font-sora md:py-36">
        <div className="mx-auto flex w-11/12 flex-col items-center 2xl:max-w-[1440px]">
          <span className="mb-4 rounded-[33px] bg-[#EA4335] px-6 py-3 text-center text-xs text-white md:px-8 md:text-base">
            Sign Up for Our Exclusive Pre-Launch Waiting List
          </span>
          <h2 className="mb-12 text-center text-[38px] font-bold leading-tight text-black md:text-5xl md:leading-normal">
            Be the First to Experience Pristine
          </h2>
          <p className="mx-auto mb-12 max-w-[728px] text-center text-xl text-black md:text-2xl">
            Don't miss out on the opportunity to be among the first to experience Pristine's revolutionary cleaning services. By joining our
            waiting list, you'll get early access to our platform, exclusive updates, and special offers.{" "}
          </p>

          <div className="mb-12 flex flex-col gap-8 md:flex-row">
            <input type="text" placeholder="Name" className="w-[335px] rounded-lg border border-chaos-black-300 px-4 py-4 text-sm" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-[335px] rounded-lg border border-chaos-black-300 px-4 py-4 text-sm"
            />
          </div>
          <button className="h-[52px] min-w-[223px] rounded-[58px] bg-azul-600 px-4 py-2 text-white">Join Waitlist</button>
        </div>
      </section>

      <section className="mx-auto w-11/12 py-24 font-sora md:py-36 2xl:max-w-[1440px]">
        <h2 className="mb-6 text-center text-[38px] font-bold leading-tight text-black md:text-5xl md:leading-normal">
          Pristine works in 4 easy steps
        </h2>
        <p className="mb-6 text-center text-xl text-black md:text-2xl">
          Get a seamless, on-demand cleaning service that adapts to your diverse needs.
        </p>

        <div className="rounded-[32px] bg-chocobo-feather-200 px-4 py-6">
          <ul>
            <li>Sign Up and Create a Profile</li>
            <li>Book a Cleaning Service</li>
            <li>Get Connected with Professional Cleaners</li>
            <li>Relax and Enjoy a Pristine Space</li>
          </ul>
        </div>
      </section>

      <section className="bg-chocobo-feather-200 font-sora">
        <div className="mx-auto w-11/12 py-24 md:py-36 2xl:max-w-[1440px]">
          <h3 className="mb-6 text-center text-[38px] font-bold leading-tight text-black md:text-5xl md:leading-normal">
            Why Choose Pristine?
          </h3>
          <p className="mb-6 text-center text-xl text-black">Here are the exciting features that makes pristine outstanding</p>

          <div className="mb-8 flex flex-col justify-center gap-6 lg:flex-row">
            <div className="flex gap-x-4 rounded-[18px] bg-white px-4 py-6">
              <div>
                <img src="src/assets/svgs/calendar.svg" alt="calendar icon" />
              </div>
              <div className="grid gap-y-4">
                <h4 className="text-xl font-bold">Convenient Scheduling</h4>
                <p className="max-w-[315px]">
                  Book cleaning services at your convenience, with flexible scheduling options that fit your lifestyle
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 rounded-[18px] bg-white px-4 py-6">
              <div>
                <img src="src/assets/svgs/certified.svg" alt="certified icon" />
              </div>
              <div className="grid gap-y-4">
                <h4 className="text-xl font-bold">Vetted Professionals</h4>
                <p className="max-w-[315px]">
                  All our cleaners undergo rigorous background checks and training to ensure high-quality service.
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 rounded-[18px] bg-white px-4 py-6">
              <div>
                <img src="src/assets/svgs/power-service.svg" alt="power icon" />
              </div>
              <div className="grid gap-y-4">
                <h4 className="text-xl font-bold">Customizable Services</h4>
                <p className="max-w-[315px]">
                  Tailor cleaning packages to your specific needs, whether it's a one-time deep clean or regular maintenance.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 lg:flex-row">
            <div className="flex gap-x-4 rounded-[18px] bg-white px-4 py-6">
              <div>
                <img src="src/assets/svgs/bitcoin-03.svg" alt="coin icon" />
              </div>
              <div className="grid gap-y-4">
                <h4 className="text-xl font-bold">Transparent Pricing</h4>
                <p className="max-w-[315px]">No hidden fees or surprise charges. Know exactly what you're paying for upfront.</p>
              </div>
            </div>

            <div className="flex gap-x-4 rounded-[18px] bg-white px-4 py-6">
              <div>
                <img src="src/assets/svgs/star-face.svg" alt="starface icon" />
              </div>
              <div className="grid gap-y-4">
                <h4 className="text-xl font-bold">User-Friendly App</h4>
                <p className="max-w-[315px]">
                  Our intuitive app makes it easy to book, manage, and track your cleaning services with just a few taps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-11/12 flex-col-reverse items-center justify-center gap-10 py-24 font-sora md:py-36 lg:flex-row lg:justify-between 2xl:max-w-[1440px]">
        <div className="lg:w-1/2">
          <h3 className="mb-6 text-center text-5xl font-bold text-black lg:text-left">Download the App</h3>
          <p className="mb-6 text-center text-2xl text-black sm:w-[463px] lg:text-left">
            Join Over 10 million users who has access to a hassle-free solution to maintain cleanliness and hygiene.
          </p>

          <div className="mb-12 flex flex-col items-center gap-y-8 lg:items-start">
            <input type="text" placeholder="Name" className="w-[335px] rounded-lg border border-chaos-black-300 px-4 py-4 text-sm" />
            <input
              type="email"
              placeholder="Email Address"
              className="w-[335px] rounded-lg border border-chaos-black-300 px-4 py-4 text-sm"
            />
            <button className="h-[52px] min-w-[333px] rounded-[58px] bg-azul-600 px-4 py-2 text-white">Join Waitlist</button>
          </div>
        </div>

        <div
          className="relative hidden h-[780px] w-2/3 overflow-hidden rounded-[32px] bg-azul-600 md:block xl:w-2/5"
          style={{ background: "url(src/assets/svgs/wavy.svg) no-repeat top/cover, #205CE2" }}
        >
          <div className="absolute bottom-0 right-0">
            <img src="src/assets/svgs/holding-iphone.svg" alt="app display" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-11/12 overflow-hidden rounded-[32px] bg-azul-1000 py-[120px] text-white 2xl:max-w-[1440px]">
        <h3 className="mb-6 text-center text-5xl font-bold">What Early Users Are Saying</h3>
        <p className="mb-6 text-center text-xl">See what users from waiting list and social media marketing are saying about our Idea</p>

        <div className="flex items-center justify-center gap-x-6">
          <div className="grid w-[347px] gap-y-4 rounded-[18px] bg-azul-900 px-4 py-6">
            <div className="flex gap-x-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <img src="src/assets/svgs/favourite.svg" alt="favourite icon" key={index} />
              ))}
            </div>
            <p>
              "I can't wait for Pristine to launch! As a property manager, having a reliable and flexible cleaning service at my fingertips
              will be a game-changer."
            </p>

            <span className="text-base font-bold">
              Sarah<span className="ml-2 text-xs font-normal">Pre-Launch User</span>
            </span>
          </div>

          <div className="grid w-[347px] gap-y-4 rounded-[18px] bg-azul-900 px-4 py-6">
            <div className="flex gap-x-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <img src="src/assets/svgs/favourite.svg" alt="favourite icon" key={index} />
              ))}
            </div>
            <p>
              "I've been looking for a convenient way to manage cleaning services for my busy household. Pristine seems like the perfect
              solution!"
            </p>

            <span className="text-base font-bold">
              John<span className="ml-2 text-xs font-normal">Waiting List Mem</span>
            </span>
          </div>

          <div className="grid w-[347px] gap-y-4 rounded-[18px] bg-azul-900 px-4 py-6">
            <div className="flex gap-x-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <img src="src/assets/svgs/favourite.svg" alt="favourite icon" key={index} />
              ))}
            </div>
            <p>
              "The concept of Pristine is fantastic. As someone who struggles to find trustworthy cleaners, knowing that all professionals
              are vetted gives me peace of mind."
            </p>

            <span className="text-base font-bold">
              Jessica<span className="ml-2 text-xs font-normal">Pre-Launch User</span>
            </span>
          </div>

          <div className="grid w-[347px] gap-y-4 rounded-[18px] bg-azul-900 px-4 py-6">
            <div className="flex gap-x-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <img src="src/assets/svgs/favourite.svg" alt="favourite icon" key={index} />
              ))}
            </div>
            <p>
              "Heard about Pristine on social media, and I'm excited to try it out. The app's ease of use and professional cleaners are
              exactly what I need."
            </p>

            <span className="text-base font-bold">
              Lisa<span className="ml-2 text-xs font-normal">Early Adopter</span>
            </span>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-x-6">
          <div className="grid w-[347px] gap-y-4 rounded-[18px] bg-azul-900 px-4 py-6">
            <div className="flex gap-x-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <img src="src/assets/svgs/favourite.svg" alt="favourite icon" key={index} />
              ))}
            </div>
            <p>
              "Pristine's upcoming launch has generated a lot of buzz in our community. I’m thrilled to see how it will revolutionize the
              way we book cleaning services."
            </p>

            <span className="text-base font-bold">
              Jason<span className="ml-2 text-xs font-normal">Small Business Owner</span>
            </span>
          </div>

          <div className="grid w-[347px] gap-y-4 rounded-[18px] bg-azul-900 px-4 py-6">
            <div className="flex gap-x-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <img src="src/assets/svgs/favourite.svg" alt="favourite icon" key={index} />
              ))}
            </div>
            <p>
              "Just signed up on the waiting list for Pristine. The concept sounds amazing, and I can't wait to book my first cleaning
              service."
            </p>

            <span className="text-base font-bold">
              Mike<span className="ml-2 text-xs font-normal">Social Media Follower</span>
            </span>
          </div>

          <div className="grid w-[347px] gap-y-4 rounded-[18px] bg-azul-900 px-4 py-6">
            <div className="flex gap-x-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <img src="src/assets/svgs/favourite.svg" alt="favourite icon" key={index} />
              ))}
            </div>
            <p>
              "I joined the waiting list as soon as I learned about Pristine. The promise of vetted, professional cleaners and transparent
              pricing is too good to pass up. Excited for the launch!"
            </p>

            <span className="text-base font-bold">
              Rachel<span className="ml-2 text-xs font-normal">Homeowner</span>
            </span>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-x-6">
          <div className="grid w-[347px] gap-y-4 rounded-[18px] bg-azul-900 px-4 py-6">
            <div className="flex gap-x-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <img src="src/assets/svgs/favourite.svg" alt="favourite icon" key={index} />
              ))}
            </div>
            <p>
              "As someone who manages multiple properties, I can't wait for Pristine to go live. The concept of a one-stop platform for all
              my cleaning needs is a game-changer."
            </p>

            <span className="text-base font-bold">
              Mark<span className="ml-2 text-xs font-normal">Property Manager</span>
            </span>
          </div>

          <div className="grid w-[347px] gap-y-4 rounded-[18px] bg-azul-900 px-4 py-6">
            <div className="flex gap-x-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <img src="src/assets/svgs/favourite.svg" alt="favourite icon" key={index} />
              ))}
            </div>
            <p>
              "Heard about Pristine on social media and can't wait to try it. Finally, a cleaning service that fits into my busy schedule.
              This is exactly what I need!"
            </p>

            <span className="text-base font-bold">
              Emily<span className="ml-2 text-xs font-normal">Pre-Launch User</span>
            </span>
          </div>

          <div className="grid w-[347px] gap-y-4 rounded-[18px] bg-azul-900 px-4 py-6">
            <div className="flex gap-x-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <img src="src/assets/svgs/favourite.svg" alt="favourite icon" key={index} />
              ))}
            </div>
            <p>
              "I've been eagerly waiting for Pristine to launch ever since I heard about it on social media. The idea of flexible, reliable
              cleaning services is exactly what busy professionals like me need!"
            </p>

            <span className="text-base font-bold">
              Emily<span className="ml-2 text-xs font-normal">Early Supporter</span>
            </span>
          </div>

          <div className="grid w-[347px] gap-y-4 rounded-[18px] bg-azul-900 px-4 py-6">
            <div className="flex gap-x-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <img src="src/assets/svgs/favourite.svg" alt="favourite icon" key={index} />
              ))}
            </div>
            <p>
              "Been following Pristine's development on social media, and I'm excited to see it go live. This app promises to make
              maintaining a clean home so much easier!"
            </p>

            <span className="text-base font-bold">
              Rachel<span className="ml-2 text-xs font-normal">Homeowner</span>
            </span>
          </div>
        </div>
      </section>

      <footer className="mx-auto mt-[250px] grid w-11/12 gap-y-12 pb-12 2xl:max-w-[1440px]">
        <div className="grid items-center gap-y-8 lg:grid-cols-[1.5fr_2fr]">
          <div className="grid gap-y-12">
            <img src="src/assets/svgs/footer-logo.svg" alt="Pristine logo" />

            <ul className="flex gap-x-12">
              <li>
                <a href="#">
                  <img src="src/assets/svgs/linkedin-02.svg" alt="linkedin icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="src/assets/svgs/Instagram.svg" alt="instagram icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="src/assets/svgs/new-twitter.svg" alt="twitter icon" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="src/assets/svgs/facebook-02.svg" alt="facebook icon" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="grid grid-cols-2 gap-y-8">
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Terms and conditions</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-center">© Copyright 2024, All Rights Reserved by Pristine Technologies</p>
      </footer>
    </main>
  );
}

export default App;
