import { getProducts } from '$lib/server/ProductService';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { products } = await getProducts();

	return {
		products
	};
};
