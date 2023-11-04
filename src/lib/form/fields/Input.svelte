<script>
	export let field;
</script>

<div class="form-floating mt-3">
	<input
		id={field.name}
		name={field.name}
		class="form-control {field.classes}"
		type={field.type}
		value={field.value || null}
	/>

	<label for={field.name} class="form-label">{field.label}</label>
</div>
