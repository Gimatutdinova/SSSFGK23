<script lang="ts">
    import Course from './lib/Course.svelte'
    const rates = (async () => {
		const response = await fetch('https://open.er-api.com/v6/latest/USD')
        return await response.json()
	})()
</script>

<main>
    {#await rates}
        <p>...waiting</p>
    {:then data}
        <h1>Калькулятор валют</h1>
        <p>{data.time_last_update_utc.slice(0, 16)}</p>
        <div>
            <Course rates={data.rates}/>
        </div>
    {:catch error}
        <p>An error occurred!</p>
    {/await}
   
    <p>{name}</p>
</main>

<style>
  
</style>
