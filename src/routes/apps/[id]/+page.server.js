// @ts-nocheck
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const gameResponse = await fetch(`https://api.flowspace.app/get/game/${params.id}`);
	if (!gameResponse.ok) throw error(gameResponse.status);
	const game = await gameResponse.json();
	let isLoading = false
	if (!game) throw error(404);

	return {
		isLoading,
		game
	};
}
