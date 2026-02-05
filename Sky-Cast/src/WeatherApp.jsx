import WeatherApp from "./WeatherApp";

export default function App() {
  return (
    <div className="w-[360px] bg-white/5 backdrop-blur-xl rounded-2xl
shadow-[0_30px_80px_rgba(0,0,0,0.9)]
p-6 text-slate-100 border border-white/10">

      {/* Center content */}
      <div className="flex-1 flex items-center justify-center">
        <WeatherApp />
      </div>

      {/* Footer */}
      <footer className="py-4 text-center text-xs text-slate-500">
        Crafted with <span className="text-rose-500">❤️</span> by{" "}
        <span className="text-slate-300 font-medium">Vansh</span>
      </footer>

    </div>
  );
}
