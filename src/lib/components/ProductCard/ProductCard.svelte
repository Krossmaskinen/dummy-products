<script lang="ts">
	let { onclick = $bindable(), title, brand, thumbnail, id, ...props } = $props();
</script>

<div class="card bg-base-200 shadow-sm">
	<div class="card-body flex flex-col gap-8">
		<button class="cursor-pointer" {onclick}>
			<div>
				<img src={thumbnail} alt={title} />
			</div>

			<h2 class="card-title">{title}</h2>

			<h3>{brand}</h3>
		</button>

		<div class="card-actions justify-end">
			<button class="btn btn-primary">Buy Now</button>
		</div>
	</div>
</div>
