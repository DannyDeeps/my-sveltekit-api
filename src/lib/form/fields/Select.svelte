<script>
	export let field;
</script>

<div class="form-floating mt-3">
	<select id={field.name} name={field.name} class="form-select {field.classes}">
		{#each field.options as option}
			<option value={option.value}>{option.display}</option>
		{/each}
	</select>

	<label for={field.name} class="form-label">{field.label}</label>
</div>
