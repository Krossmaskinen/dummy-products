<script lang="ts">
	import { appState } from '$lib/states/state.svelte';
	import { browser } from '$app/environment';

	let { title, brand, thumbnail, description, reviews } = $props();
	let isReviewsShowing = $state(false);

	if (browser) {
		const dialogElement = document.getElementById(appState.productModalId) as HTMLDialogElement;

		dialogElement.addEventListener('close', () => {
			isReviewsShowing = false;
		});
	}

	function showReviews() {
		isReviewsShowing = true;
	}

	function hideReviews() {
		isReviewsShowing = false;
	}
</script>

<dialog id={appState.productModalId} class="modal">
	<div class="modal-box flex flex-col gap-4">
		<div class="modal-action absolute top-4 right-4 mt-0">
			<form method="dialog">
				<button class="hover:bg-base-200 cursor-pointer p-4 leading-none">X</button>
			</form>
		</div>

		<div class="flex justify-center">
			<img src={thumbnail} alt={title} />
		</div>

		<div class="prose">
			<h2 class="">{title}</h2>

			<h3>{brand}</h3>

			<p>{description}</p>

			<h4 class="inline">Reviews</h4>
			{#if isReviewsShowing}
				<button class="btn btn-link" onclick={() => hideReviews()}>Hide Reviews</button>
			{:else}
				<button class="btn btn-link" onclick={() => showReviews()}>Show Reviews</button>
			{/if}

			{#if isReviewsShowing}
				<section class="reviews">
					<ul>
						{#each reviews as review}
							<li>
								<h3>{review.rating} - {review.reviewerName}</h3>
								<blockquote>
									{review.comment}
								</blockquote>
							</li>
						{/each}
					</ul>
				</section>
			{/if}
		</div>

		<button class="btn btn-success">Buy Now!</button>
	</div>
</dialog>
