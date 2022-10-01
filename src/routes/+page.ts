import type { WeatherResponse } from 'src/types/WeatherResponse';
import type { WeatherData } from 'src/types/types';
import type { Load } from '@sveltejs/kit';
// all this is in server side
export const load: Load = async ({ url, fetch }): Promise<WeatherData> => {
	const query = url.searchParams.get('q') ?? 'Lima';
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '3ac60883ecmsh7d43a1c34661767p1e4050jsn9acd49387476',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};

	const resp = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(query)}`,
		options
	);
	const weatherData: WeatherResponse = await resp.json();

	const { location, current } = weatherData as WeatherResponse;
	const { country, localtime, name } = location;
	const { condition, humidity, feelslike_c, temp_c, wind_dir, is_day, wind_kph } = current;
	const { icon, text } = condition;

	return {
		conditionIcon: icon,
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
