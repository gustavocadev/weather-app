<script lang="ts">
	import type { WeatherData } from 'src/types/types';

	export let data: WeatherData;
</script>

<img src={data.conditionIcon} alt={data.conditionText} />

<style>
	img {
		width: 100px;
		height: auto;
	}
</style>
