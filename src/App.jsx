import React from 'react';

function App() {
  return <Card />;
}

function Card() {
  return (
    <div className="max-w-sm bg-slate-50 rounded-2xl hover:shadow-xl">
      <div className="max-w-sm p-4 shadow-2xl rounded-2xl">
        <img
          className="w-6/24 rounded-2xl"
          src="https://hashmi7917.github.io/Frontend-Menoter-QR-Challenge-Completed/images/image-qr-code.png"
          alt="qr-image"
        />
        <div className="h-52 flex flex-col justify-between text-center p-6">
          <h1 className="text-2xl font-bold text-slate-950">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-slate-500 text-lg">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
