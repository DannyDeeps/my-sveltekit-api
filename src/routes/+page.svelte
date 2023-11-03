<h1>Available Resources</h1>

{#each [{name: 'forms', url: '/forms'}] as res}
    <a href={res.url}>{res.name}</a>
{/each}