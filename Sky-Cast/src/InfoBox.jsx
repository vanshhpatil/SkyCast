// import Card from "@mui/material/Card";
// // import CardActions from '@mui/material/CardActions';
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// // import Button from '@mui/material/Button';
// import Typography from "@mui/material/Typography";
// import "./InfoBox.css";

// export default function InfoBox({ info }) {
//   const Init_img =
//     "https://media.istockphoto.com/id/1419733957/photo/dark-sky-and-heavy-rain-thunder-storm-over-a-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=82JEGYWgYZK2fgMnktg9UEhhzF8FYF4Eu0FXaIF2wIw=";

// let Hot_Url ="https://images.unsplash.com/photo-1632652507598-a6773059c6fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
// let Cold_Url="https://images.unsplash.com/photo-1706013466042-333b260b6b85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbGQlMjB3ZXRoZXIlMjB3ZWF0aGVyfGVufDB8fDB8fHww"
// let Rain_Url="https://media.istockphoto.com/id/1503488794/photo/panorama-of-beautiful-clouds-background-of-a-grey-sky-and-cloud.webp?a=1&b=1&s=612x612&w=0&k=20&c=TArP2nSSUkkYKxtnkChWFN45YOixiCfyNAmsjh3kznA="
//   return (
//     <div className="infoBox">
//       <h1>Weather Info - {info.weather}</h1>
//       <div className="Card">
//         <Card sx={{ maxWidth: 345 }}>
//           <CardMedia sx={{ height: 140 }} image={info.humidity>80 ? Rain_Url : info.temp >15 ? Hot_Url : Cold_Url} title="Weather" />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {info.cityName}
//             </Typography>
//             <Typography variant="body2" sx={{ color: "text.secondary" }}>
//               <div>🌡️ Temperature = {info.temp}&deg;C</div>
//               <div>🤒 Feels Like = {info.feelsLike}&deg;C</div>
//               <div>💧 Humidity = {info.humidity}%</div>
//               <div>⬇️ Minimum Temperature = {info.tempMin}&deg;C</div>
//               <div>⬆️ Maximum Temperature = {info.tempMax}&deg;C</div>
//               <div>
//                 ⛅ Weather can be described as <b>{info.weather}</b> and feels
//                 like <b>{info.feelsLike}&deg;C</b>
//               </div>
//             </Typography>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }
export default function InfoBox({ info }) {
  // 🎨 Dynamic background
  const getBg = () => {
    if (info.humidity > 80)
      return "from-indigo-950 via-slate-900 to-black";
    if (info.temp > 25)
      return "from-rose-950 via-orange-900 to-black";
    return "from-indigo-950 via-indigo-900 to-slate-950";
  };

  // 🌤️ Emoji
  const getEmoji = () => {
    if (info.humidity > 80) return "🌧️";
    if (info.temp > 25) return "☀️";
    return "❄️";
  };

  return (
    <div
      className={`mt-4 rounded-2xl p-6 bg-gradient-to-br ${getBg()}
      shadow-[inset_0_1px_0_rgba(255,255,255,0.05),_0_20px_50px_rgba(0,0,0,0.8)]
      border border-white/10`}
    >
      {/* City & Weather */}
      <div className="text-center mb-5">
        <h2 className="text-2xl font-semibold text-slate-100">
          {info.cityName}
        </h2>
        <p className="text-sm uppercase tracking-wide text-slate-400 mt-1">
          {getEmoji()} {info.weather}
        </p>
      </div>

      {/* Temperature */}
      <div className="text-center mb-6">
        <p className="text-[52px] font-bold tracking-tight text-white">
          {info.temp}°C
        </p>
        <p className="text-xs uppercase tracking-widest text-slate-400 mt-1">
          Feels like {info.feelsLike}°C
        </p>
      </div>

      {/* Details */}
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10 text-slate-200">
          💧 Humidity
          <div className="font-semibold mt-1">{info.humidity}%</div>
        </div>

        <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10 text-slate-200">
          🌡️ Min Temp
          <div className="font-semibold mt-1">{info.tempMin}°C</div>
        </div>

        <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10 text-slate-200">
          🔥 Max Temp
          <div className="font-semibold mt-1">{info.tempMax}°C</div>
        </div>

        <div className="bg-white/5 rounded-xl p-3 text-center border border-white/10 text-slate-200">
          🌬️ Feels Like
          <div className="font-semibold mt-1">{info.feelsLike}°C</div>
        </div>
      </div>
    </div>
  );
}
