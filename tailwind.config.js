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
  			fadeIn: {
  				'0%': {
  					opacity: 0
  				},
  				'100%': {
  					opacity: 1
  				}
  			},
  			slideInFromLeft: {
  				'0%': {
  					transform: 'translateX(-100%)',
  					opacity: 0
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: 1
  				}
  			},
  			slideInFromRight: {
  				'0%': {
  					transform: 'translateX(100%)',
  					opacity: 0
  				},
  				'100%': {
  					transform: 'translateX(0)',
  					opacity: 1
  				}
  			},
  			slideInFromTop: {
  				'0%': {
  					transform: 'translateY(-100%)',
  					opacity: 0
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: 1
  				}
  			},
  			slideInFromBottom: {
  				'0%': {
  					transform: 'translateY(100%)',
  					opacity: 0
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: 1
  				}
  			},
  			bounceIn: {
  				'0%': {
  					transform: 'scale(0.8)',
  					opacity: 0
  				},
  				'50%': {
  					transform: 'scale(1.1)',
  					opacity: 1
  				},
  				'100%': {
  					transform: 'scale(1)'
  				}
  			},
  			pulseScale: {
  				'0%, 100%': {
  					transform: 'scale(1)'
  				},
  				'50%': {
  					transform: 'scale(1.03)'
  				}
  			},
  			float: {
  				'0%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				},
  				'100%': {
  					transform: 'translateY(0px)'
  				}
  			}
  		},
  		animation: {
  			fadeIn: 'fadeIn 1s ease-out forwards',
  			slideInFromLeft: 'slideInFromLeft 0.7s ease-out forwards',
  			slideInFromRight: 'slideInFromRight 0.7s ease-out forwards',
  			slideInFromTop: 'slideInFromTop 0.7s ease-out forwards',
  			slideInFromBottom: 'slideInFromBottom 0.7s ease-out forwards',
  			bounceIn: 'bounceIn 0.8s ease-out forwards',
  			pulseScale: 'pulseScale 2s infinite ease-in-out',
  			float: 'float 3s infinite ease-in-out'
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