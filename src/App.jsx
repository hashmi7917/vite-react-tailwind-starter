import React from 'react';

function App() {
  return (
    <div
      className="py-8 px-8
	max-w-sm
	mx-auto
	rounded-xl
	shadow-lg
	space-y-2
	sm:py-4
	sm:items-center
	sm:space-y-0
	sm:space-x-6"
    >
      <img
        className="block mx-auto h-24 rounded-full sm:shrink-0"
        src="https://randomuser.me/api/portraits/men/19.jpg"
        alt="profile"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">Mark Jamey</p>
          <p className="text-slate-500 font-medium">Product Enginner</p>
        </div>
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent">
          Message
        </button>
      </div>
    </div>
  );
}

export default App;
