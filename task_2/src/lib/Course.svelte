<script lang="ts">
    export let rates = {};
    let currency_1, currency_2;
    let value_1 = 1, value_2 = 1;
    let answer = '';
    function refresh_1() {
		value_2 = ((rates[currency_2] / rates[currency_1]) * value_1).toFixed(5);
    }
    function refresh_2() {
		value_1 = ((rates[currency_1] / rates[currency_2]) * value_2).toFixed(5);
    }
</script>
<div>
    <input type="number" bind:value={value_1} min="0" on:input={ refresh_1}/>
    <input type="number" bind:value={value_2} min="0" on:input={ refresh_2 }/>
</div>
<div>
	<select bind:value={currency_1} on:change={ refresh_1 }>
        {#each Object.entries({rates}) as [, value]}
            {#each Object.entries(value) as [key, currency], index (key)}
                <option value={key}>
                    {key}
                </option>
            {/each}
        {/each}
	</select>

	<select bind:value={currency_2} on:change={ refresh_2 }>
        {#each Object.entries({rates}) as [, value]}
            {#each Object.entries(value) as [key, currency], index (key)}
                <option value={key}>
                    {key}
                </option>
            {/each}
        {/each}
	</select>
</div>

