<script lang="ts">
	import WeatherFooter from '../components/weather-footer.svelte';
	import WeatherIcon from '../components/weather-icon.svelte';
	import type { WeatherData } from 'src/types/types';

	// this is the data from the function load in the preload
	// always need to be named "data"
	export let data: WeatherData;
	// console.log(data);
</script>

<section>
	<h1>{data?.locationName}</h1>
	<h2>{data?.temperture}°</h2>
	<h3>{data?.conditionText}</h3>
	<WeatherIcon {data} />
	<!-- <img src={data?.conditionIcon} alt="" /> -->
	<!-- <h4>{data?.windSpeed}</h4> -->
</section>

<WeatherFooter />

<style>
	section {
		padding: 16px;
	}
	h1 {
		font-weight: 300;
		color: #333;
		text-transform: uppercase;
		padding: 16px 0 0px 0px;
	}

	h2 {
		font-weight: 300;
		color: #333;
		font-size: 120px;
		text-transform: uppercase;
		padding: 0 0 0px 0px;
	}
	h3 {
		font-weight: 700;
		transform: rotate(-90deg);
		position: absolute;
		top: 56px;
		right: 12px;
	}
</style>
