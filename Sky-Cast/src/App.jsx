import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col
      bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
      from-slate-800 via-slate-950 to-black"
    >
      {/* Center Content */}
      <div className="flex-1 flex items-center justify-center">
        <div
          className="w-[360px] bg-white/5 backdrop-blur-xl rounded-2xl
          shadow-[0_30px_80px_rgba(0,0,0,0.9)]
          p-6 text-slate-100 border border-white/10"
        >
          <h1 className="text-2xl font-semibold text-center mb-4">
            🌤️ Weather App
          </h1>

          <SearchBox updateInfo={updateInfo} />

          {weatherInfo ? (
            <InfoBox info={weatherInfo} />
          ) : (
            <p className="text-center text-slate-400 mt-4 text-sm">
              Enter a city to get weather details
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-slate-500">
        Crafted with <span className="text-rose-500">❤️</span> by{" "}
        <span className="text-slate-300 font-medium">Vanshh</span>
      </footer>
    </div>
  );
}
