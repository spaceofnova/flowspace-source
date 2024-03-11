<script>
// @ts-nocheck

	import { page } from '$app/stores';
	const emojis = {
	420: '🫠', // Error 420: Enhance Your Calm (Rate Limit Exceeded)
	500: '💥', // Error 500: Internal Server Error
	403: '🚫', // Error 403: Forbidden
	404: '🔍', // Error 404: Page Not Found
	502: '🔌', // Error 502: Bad Gateway
	503: '🔧', // Error 503: Service Unavailable
	504: '⏳', // Error 504: Gateway Timeout
	429: '🚦', // Error 429: Too Many Requests
};

const errorNames = {
	420: 'Chill out buddy!',
	500: 'Server issues...',
	403: 'Nuh uh! You didn\'t say the magic word!',
	404: 'We lost this page somewhere...',
	502: 'Gateway issue? 🤔',
	503: 'Server is down! 😱',
	504: 'Gateway issues? again?!?',
	429: 'CHILL BUDDY!',
};

</script>
<div class="w-full h-96 mt-28 grid place-items-center align-center">
	<span class="text-9xl">{emojis[$page.status]}</span>
	<h1 class="text-2xl md:text-4xl">{errorNames[$page.status]}</h1>
</div>
