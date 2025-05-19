const baseUrl = 'https://dummyjson.com';

export async function getProducts() {
	return fetch(`${baseUrl}/products`).then((response) => response.json());
}
