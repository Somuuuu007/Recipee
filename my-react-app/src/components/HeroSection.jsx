export default function HeroSection() {
    return (
      <section className="bg-[#2c384a] text-white p-10 rounded-3xl mx-4 my-8 relative">
        <div className="grid grid-cols-2 gap-6 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-4xl font-bold leading-snug mb-4">
              Discover Simple,<br />
              Delicious, And<br />
              <span className="text-pink-500">Fast Recipes!</span>
            </h2>
            <p className="text-gray-300 mb-6">
              A recipe is soulless. The essence of the recipe must come from you, the cook.
            </p>
            <button className="bg-white text-black font-semibold px-6 py-2 rounded-full flex items-center gap-2">
              Read More <span>↗</span>
            </button>
            <div className="flex items-center gap-2 mt-6">
              {/* Replace with real thumbnails */}
              {[1, 2, 3, 4].map((_, idx) => (
                <div key={idx} className="h-10 w-10 bg-white rounded-full border-2 border-pink-400" />
              ))}
              <p className="ml-3 text-gray-300">500+ Recipes</p>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="relative flex flex-col items-center">
            <img
              src="/chef.png"
              alt="Chef"
              className="w-64 object-cover z-10"
            />
            <div className="absolute top-4 right-6 bg-[#354052] px-4 py-2 rounded-full border-2 border-white">
              Best Recipes
            </div>
          </div>
        </div>
      </section>
    );
  }
  