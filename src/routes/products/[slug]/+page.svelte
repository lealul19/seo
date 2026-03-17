<script>
	export let data;
</script>

<svelte:head>
	<title>{data.product.name} - Lea's Webshop</title>
	<meta name="description" content={data.product.description} />
</svelte:head>

<main class="p-10 max-w-5xl mx-auto">
	<div class="grid md:grid-cols-2 gap-10">
		<div class="w-full aspect-[16/9] overflow-hidden rounded bg-gray-100">
			<img
				src={data.product.image_url}
				alt={data.product.name}
				class="w-full h-full object-cover"
			/>
		</div>

		<div>
			<h1 class="text-3xl font-bold mb-4">{data.product.name}</h1>
			<p class="text-gray-600 mb-6">{data.product.description}</p>
			<p class="text-2xl font-semibold text-blue-600 mb-6">${data.product.price}</p>

			<a href="/" class="text-blue-500 underline">← Back to products</a>
		</div>
	</div>
</main>