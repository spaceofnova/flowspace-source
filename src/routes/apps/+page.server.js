// @ts-nocheck
import { error } from '@sveltejs/kit';
let gameList = [];
export async function load() {
	try {
		const res = await fetch('https://api.flowspace.app/get/games').then((r) => r.json());
		gameList = res.map((game) => {
			return {
				id: game.id,
				name: game.name,
				img: game.img,
				description: game.description
			};
		});
	}catch(e){
		console.log(e);
	}
	
}
