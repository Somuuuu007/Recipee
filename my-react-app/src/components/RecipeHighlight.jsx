export default function RecipeHighlight() {
    return (
      <div className="flex justify-between items-center bg-[#2c384a] text-white rounded-3xl mx-4 px-10 py-6 -mt-16 relative z-20">
        <div className="space-y-2">
          <h3 className="text-xl font-bold">Top Recipes</h3>
          <p className="text-gray-300 max-w-xs">
            A recipe is soulless. The essence of the recipe must come from you, the cook.
          </p>
          <button className="bg-white text-black font-semibold px-6 py-2 rounded-full flex items-center gap-2 mt-2">
            Check Our Recipe <span>↗</span>
          </button>
        </div>
        <div>
          <img
            src="/cooking.jpg"
            alt="Cooking"
            className="w-56 h-32 object-cover rounded-xl border-2 border-white"
          />
        </div>
      </div>
    );
  }
  