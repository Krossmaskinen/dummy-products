<script lang="ts">
	import ProductModal from '$lib/components/ProductModal/ProductModal.svelte';
	import '../app.css';

	import { appState } from '$lib/states/state.svelte';

	let { children } = $props();
</script>

<ProductModal {...appState.selectedProduct} />

<div class="box-border flex flex-col gap-8 px-8 py-8">
	{@render children()}
</div>
