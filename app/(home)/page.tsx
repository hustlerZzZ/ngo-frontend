import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GiWaterSplash } from "react-icons/gi";
import { Reviews } from "@/components/Reviews";

export default function Home() {
  return (
    <div className="min-h-screen bg-emerald-50">
      <header className="bg-emerald-600 text-white"></header>

      <main>
        <section className="bg-white py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-blue-950">
                  Together, We Can Make a Difference
                </h1>
                <p className="text-md md:text-xl mb-6 text-gray-500">
                  Join us in our mission to create a sustainable future for all
                  children
                </p>
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
                  <Button className="bg-emerald-600 text-white hover:bg-emerald-700 w-full sm:w-auto">
                    Get Involved
                  </Button>
                  <Button
                    variant="outline"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 w-full sm:w-auto"
                  >
                    Donate Now
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <Image
                  src="/hero.jpg"
                  alt="Poor children in need of help"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-emerald-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-950 mb-6 md:mb-8">
              Our Mission
            </h2>
            <p className="text-base md:text-lg text-center text-gray-600 max-w-3xl mx-auto">
              We strive to protect and preserve our planet&apos;s natural
              resources while improving the lives of underprivileged children.
              Through education, community engagement, and sustainable
              practices, we aim to build a greener, cleaner world for future
              generations.
            </p>
            <div className=" my-16 flex gap-16 justify-center">
              <div className="w-72 flex flex-col gap-4 px-6 py-16 rounded-lg items-center hover:bg-emerald-500 bg-slate-50 hover:text-white text-zinc-700  ">
                <GiWaterSplash className="h-20 w-20 bg-emerald-300 text-white transition-all  px-2 py-3 rounded-full" />
                <p className="text-3xl mt-8 font-semibold">Clean Water</p>
                <p className="mt-2 text-center">
                  The sea freight service has grown consider ably in recent
                  years. We spend testing to know your processes to.
                </p>
              </div>
              <div className="w-72 flex flex-col gap-4 px-6 py-16 rounded-lg items-center bg-emerald-500 text-white  ">
                <GiWaterSplash className="h-20 w-20 bg-white text-emerald-400 px-2 py-3 rounded-full" />
                <p className="text-3xl mt-8 font-semibold">Clean Water</p>
                <p className="mt-2 text-center">
                  The sea freight service has grown consider ably in recent
                  years. We spend testing to know your processes to.
                </p>
              </div>
              <div className="w-72 flex flex-col gap-4 px-6 py-16 rounded-lg items-center hover:bg-emerald-500 bg-slate-50 hover:text-white text-zinc-700  ">
                <GiWaterSplash className="h-20 w-20 bg-emerald-300 text-white transition-all  px-2 py-3 rounded-full" />
                <p className="text-3xl mt-8 font-semibold">Clean Water</p>
                <p className="mt-2 text-center">
                  The sea freight service has grown consider ably in recent
                  years. We spend testing to know your processes to.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-950 mb-8 md:mb-12">
              Our Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Child Education",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Clean Water Initiative",
                  image: "/placeholder.svg?height=200&width=300",
                },
                {
                  title: "Sustainable Agriculture",
                  image: "/placeholder.svg?height=200&width=300",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-emerald-50 rounded-lg shadow-md overflow-hidden"
                >
                  add Images
                  <div className="p-4">
                    <h3 className="font-bold text-xl mb-2 text-emerald-700">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base">
                      Our {project.title.toLowerCase()} project aims to improve
                      the lives of children and their communities through
                      sustainable development and education.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white ">
          <div className="container mx-auto px-4 text-center">
            <p className="text-emerald-400 font-semibold mb-10">
              What We Are Doing
            </p>
            <h2 className="text-2xl md:text-3xl text-blue-950 font-bold mb-4 md:mb-6">
              Our Expert Volunteer Always ready
            </h2>
            <div className="flex justify-center gap-8">
              <div className="w-72 flex flex-col justify-between   rounded-lg items-center  bg-slate-50  text-zinc-700  ">
                <div>
                  <Image
                    className="w-64 h-70 bg-cover "
                    src="/team1.jpg"
                    alt="team"
                    height={300}
                    width={300}
                  />
                </div>
                <div>
                  <p className="text-2xl mt-4 font-semibold">Prince Pal</p>
                  <p className="mt-1 text-center">Volunteer Leader</p>
                </div>
              </div>
              <div className="w-72 flex flex-col justify-between   rounded-lg items-center  bg-slate-50  text-zinc-700  ">
                <div>
                  <Image
                    className="w-64 h-70 bg-cover "
                    src="/team1.jpg"
                    alt="team"
                    height={300}
                    width={300}
                  />
                </div>
                <div>
                  <p className="text-2xl mt-4 font-semibold">Prince Pal</p>
                  <p className="mt-1 text-center">Volunteer Leader</p>
                </div>
              </div>
              <div className="w-72 flex flex-col justify-between   rounded-lg items-center  bg-slate-50  text-zinc-700  ">
                <div>
                  <Image
                    className="w-64 h-70 bg-cover "
                    src="/team1.jpg"
                    alt="team"
                    height={300}
                    width={300}
                  />
                </div>
                <div>
                  <p className="text-2xl mt-4 font-semibold">Prince Pal</p>
                  <p className="mt-1 text-center">Volunteer Leader</p>
                </div>
              </div>
              <div className="w-72 flex flex-col justify-between   rounded-lg items-center  bg-slate-50  text-zinc-700  ">
                <div>
                  <Image
                    className="w-64 h-70 bg-cover "
                    src="/team1.jpg"
                    alt="team"
                    height={300}
                    width={300}
                  />
                </div>
                <div>
                  <p className="text-2xl mt-4 font-semibold">Prince Pal</p>
                  <p className="mt-1 text-center">Volunteer Leader</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-4">
          <p className="text-emerald-500 text-2xl font-semibold text-center">
            What people says
          </p>
          <Reviews />
        </section>

        <section className="py-12 md:py-16 bg-emerald-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              Support Our Cause
            </h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Your donation can help us make a lasting impact on children&apos;s
              lives and the environment
            </p>
            <Button className="bg-white text-emerald-600 hover:bg-emerald-100">
              Donate Now
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}