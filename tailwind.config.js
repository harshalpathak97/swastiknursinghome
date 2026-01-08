/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				'neutral-light': '#F8FAFC',
				'neutral-dark': '#374151',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			fontFamily: {
				sans: [
					'Montserrat',
					'sans-serif'
				]
			},
			gridTemplateColumns: {
				auto: 'repeat(auto-fill, minmax(200px, 1fr))'
			},
			keyframes: {
				// Modern fade animations
				fadeIn: {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				fadeInUp: {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				fadeInDown: {
					'0%': {
						opacity: '0',
						transform: 'translateY(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				// Elegant slide animations with subtle movement
				slideInFromLeft: {
					'0%': {
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				slideInFromRight: {
					'0%': {
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				slideInFromTop: {
					'0%': {
						opacity: '0',
						transform: 'translateY(-20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				slideInFromBottom: {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				// Modern scale animations
				scaleIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				bounceIn: {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'60%': {
						opacity: '1',
						transform: 'scale(1.02)'
					},
					'100%': {
						transform: 'scale(1)'
					}
				},
				// Smooth continuous animations
				pulseScale: {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.02)'
					}
				},
				float: {
					'0%, 100%': {
						transform: 'translateY(0)'
					},
					'50%': {
						transform: 'translateY(-6px)'
					}
				},
				// Shimmer effect for loading states
				shimmer: {
					'0%': {
						backgroundPosition: '-200% 0'
					},
					'100%': {
						backgroundPosition: '200% 0'
					}
				},
				// Gentle blur in
				blurIn: {
					'0%': {
						opacity: '0',
						filter: 'blur(10px)'
					},
					'100%': {
						opacity: '1',
						filter: 'blur(0)'
					}
				}
			},
			animation: {
				// Primary animations with smooth cubic-bezier easing
				fadeIn: 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				fadeInUp: 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				fadeInDown: 'fadeInDown 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				// Slide animations
				slideInFromLeft: 'slideInFromLeft 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				slideInFromRight: 'slideInFromRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				slideInFromTop: 'slideInFromTop 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				slideInFromBottom: 'slideInFromBottom 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				// Scale animations
				scaleIn: 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				bounceIn: 'bounceIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
				// Continuous animations
				pulseScale: 'pulseScale 3s ease-in-out infinite',
				float: 'float 4s ease-in-out infinite',
				shimmer: 'shimmer 2s linear infinite',
				blurIn: 'blurIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
}