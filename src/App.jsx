import React from 'react';

function App() {
  return (
    <div className="max-w-sm py-2 px-2 shadow-lg rounded-lg bg-purple-400 text-white md:max-w-2xl">
      <div className="flex flex-col justify-center items-center">
        <img
          className="rounded-sm w-50 object-cover"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
          alt="profile"
        />
        <h1 className="text-black font-bold text-2xl uppercase tracking-wider">
          Tailwind
        </h1>
        <p>Software Developer</p>
      </div>
    </div>
  );
}

export default App;
