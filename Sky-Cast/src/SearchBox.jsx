// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useState } from 'react';

// export default function SearchBox({ updateInfo }) {
//   let [City, setCity] = useState("");
//   const api_url = "https://api.openweathermap.org/data/2.5/weather";
//   const api_key = "e84464b35a5d33d71a44cf9940c2a275";

//   let getWeatherInfo = async (cityName) => {
//     try {
//       let response = await fetch(`${api_url}?q=${cityName}&appid=${api_key}&units=metric`);
//       let jsonResponse = await response.json();
//       console.log(jsonResponse);

//       // agar galat city hai
//       if (jsonResponse.cod !== 200) {
//         alert("City not found! Please try again.");
//         return null;
//       }

//       let result = {
//         cityName: jsonResponse.name,
//         temp: jsonResponse.main.temp,
//         tempMin: jsonResponse.main.temp_min,
//         tempMax: jsonResponse.main.temp_max,
//         humidity: jsonResponse.main.humidity,
//         feelsLike: jsonResponse.main.feels_like,
//         weather: jsonResponse.weather[0].description,
//       };

//       console.log(result);
//       return result;
//     } catch (error) {
//       console.error("Error fetching weather:", error);
//     }
//   };

//   let handleChange = (event) => {
//     setCity(event.target.value);
//   };

//   let handleSubmit = async (event) => {
//     event.preventDefault();
//     console.log(City);
//     let newInfo = await getWeatherInfo(City);
//     if (newInfo) {
//       updateInfo(newInfo);
//     }
//     setCity(""); // input box reset
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           id="city"
//           label="City Name"
//           variant="outlined"
//           required
//           value={City}
//           onChange={handleChange}
//         />
//         <br />
//         <br />
//         <Button variant="contained" type="submit">
//           Search
//         </Button>
//       </form>
//     </div>
//   );
// }
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const api_url = "https://api.openweathermap.org/data/2.5/weather";
  const api_key = import.meta.env.VITE_WEATHER_API_KEY;


  const getWeatherInfo = async (cityName) => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `${api_url}?q=${cityName}&appid=${api_key}&units=metric`
      );
      const jsonResponse = await response.json();

      if (jsonResponse.cod !== 200) {
        setError("City not found 😕");
        return null;
      }

      return {
        cityName: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
    } catch (err) {
      setError("Something went wrong ⚠️");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    const newInfo = await getWeatherInfo(city);
    if (newInfo) updateInfo(newInfo);

    setCity("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
       <input
  type="text"
  placeholder="Enter city name..."
  value={city}
  onChange={(e) => setCity(e.target.value)}
  required
  className="flex-1 px-4 py-2 rounded-lg bg-slate-900/70 text-slate-100 placeholder-slate-400 outline-none border border-slate-700 focus:ring-1 focus:ring-sky-500"
/>
        <button
  type="submit"
  disabled={loading}
 className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium
hover:bg-indigo-500 shadow-md transition"

>
  {loading ? "..." : "Search"}
</button>

      </form>

      {/* Error message */}
      {error && (
        <p className="text-center text-red-400 mt-2 text-xs">

          {error}
        </p>
      )}
    </div>
  );
}
