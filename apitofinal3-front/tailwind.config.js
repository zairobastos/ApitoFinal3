/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			black: {
				900: "#020905",
				100: "#02090580",
				300: "#3c3c3c",
			},
			gray: {
				900: "#f9f9f9",
				700: "#7c7c7c",
				650: "#959FA8",
				600: "#e6e6e6",
				500: "#e8e6e6",
				400: "#a2a2a2",
				300: "#FBFCFF",
			},
			green: {
				100: "#00c041",
				800: "#018d30",
			},
			"red-800": "#f54a48",
			white: "#fff",
			transparent: "transparent",
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
			"42xl": "2.25rem",
			"42px": "2.625rem",
			"5xl": "3rem",
			"6xl": "4rem",
		},
		extend: {
			margin: {
				181: "181px",
			},
			lineHeight: {
				"extra-loose": "2.5",
				12: "3rem",
			},
			boxShadow: {
				"3xl": "0px 2px 25px rgba(169, 169, 169, 0.2)",
			},
		},
	},
	plugins: [],
};
