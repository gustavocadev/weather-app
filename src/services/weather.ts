import type { WeatherResponse } from 'src/types/WeatherResponse';
// This is in client side
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3ac60883ecmsh7d43a1c34661767p1e4050jsn9acd49387476',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export const getWeatherFrom = async (query: string) => {
	const resp = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
		options
	);
	const data: WeatherResponse = await resp.json();

	const { location, current } = data as WeatherResponse;
	const { country, localtime, name } = location;
	const { condition, humidity, feelslike_c, temp_c, wind_dir, is_day, wind_kph } = current;
	const { code, text } = condition;

	return {
		condition: code,
		conditionText: text,
		country,
		localtime,
		locationName: name,
		humidity,
		isDay: is_day,
		feelsLike: feelslike_c,
		temperture: temp_c,
		windSpeed: wind_kph,
		windDirection: wind_dir
	};
};
