<script lang="ts">
	import type { PageProps } from './$types';
	import ProductCard from '$lib/components/ProductCard/ProductCard.svelte';
	import { appState } from '$lib/states/state.svelte';
	import { browser } from '$app/environment';

	let dialogElement = $state<HTMLDialogElement>();

	let { data }: PageProps = $props();

	if (browser) {
		dialogElement = document.getElementById(appState.productModalId) as HTMLDialogElement;

		dialogElement.addEventListener('close', () => {
			appState.selectedProduct = {
				id: '',
				title: '',
				brand: '',
				thumbnail: '',
				description: ''
			};
		});
	}

	function selectProduct(product: PageProps['data']['products'][0]) {
		appState.selectedProduct = {
			...product
		};

		dialogElement!.showModal();
	}
</script>

<h1 class="text-center text-5xl font-bold">Premium Products - only for the preem!</h1>

<ul class="grid grid-cols-4 justify-items-center gap-8">
	{#await data}
		<p>Loading...</p>
	{:then data}
		{#each data.products as product}
			<li>
				<ProductCard
					{...product}
					onclick={() => {
						selectProduct(product);
					}}
				/>
			</li>
		{/each}
	{/await}
</ul>
