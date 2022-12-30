/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			"black-900": "#020905",
			"black-100": "#02090580",
			"gray-900": "#f9f9f9",
			"gray-500": "#e8e6e6",
			"green-100": "#00c041",
			"green-800": "#018d30",
			white: "#fff",
		},
		fontFamily: {
			sans: ["League Spartan"],
		},
		fontSize: {
			sm: "0.8rem",
			base: "1rem",
			xl: "1.25rem",
			"1xl": "1.125rem",
			"2xl": "1.5rem",
			"3xl": "1.953rem",
			"4xl": "2.441rem",
			"42px": "2.625rem",
			"5xl": "3rem",
		},
		extend: {
			margin: {
				181: "181px",
			},
			lineHeight: {
				"extra-loose": "2.5",
				12: "3rem",
			},
		},
	},
	plugins: [],
};
