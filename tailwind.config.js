/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#171824'
			},
			button: {
				primary: {
					'primary-gradient-start': '#1473FB',
					'primary-gradient-stop': '#3B4B92',
					'text-color': '#fff'
				}
			}
		}
	},
	plugins: []
};
