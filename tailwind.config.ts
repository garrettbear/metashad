// import type { Config } from "tailwindcss"
// const { fontFamily } = require("tailwindcss/defaultTheme")

// const config = {
//   darkMode: ["class"],
//   content: [
//     './pages/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//     './src/**/*.{ts,tsx}',
// 	],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       fontFamily: {
//         sans: ["var(--font-sans)", ...fontFamily.sans],
//       },
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config

// export default config

import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const {
  brandColor,
  lightTheme,
  darkTheme,
} = require("@metamask/design-tokens");

const designSystemColors = {
  white: brandColor.white,
  black: brandColor.black,
  red: {
    25: brandColor.red025,
    50: brandColor.red050,
    100: brandColor.red100,
    200: brandColor.red200,
    300: brandColor.red300,
    400: brandColor.red400,
    500: brandColor.red500,
    600: brandColor.red600,
    700: brandColor.red700,
    800: brandColor.red800,
    900: brandColor.red900,
  },
  orange: {
    25: brandColor.orange025,
    50: brandColor.orange050,
    100: brandColor.orange100,
    200: brandColor.orange200,
    300: brandColor.orange300,
    400: brandColor.orange400,
    500: brandColor.orange500,
    600: brandColor.orange600,
    700: brandColor.orange700,
    800: brandColor.orange800,
    900: brandColor.orange900,
  },
  blue: {
    25: brandColor.blue025,
    50: brandColor.blue050,
    100: brandColor.blue100,
    200: brandColor.blue200,
    300: brandColor.blue300,
    400: brandColor.blue400,
    500: brandColor.blue500,
    600: brandColor.blue600,
    700: brandColor.blue700,
    800: brandColor.blue800,
    900: brandColor.blue900,
  },
  green: {
    25: brandColor.green025,
    50: brandColor.green050,
    100: brandColor.green100,
    200: brandColor.green200,
    300: brandColor.green300,
    400: brandColor.green400,
    500: brandColor.green500,
    600: brandColor.green600,
    700: brandColor.green700,
    800: brandColor.green800,
    900: brandColor.green900,
  },
  lime: {
    25: brandColor.lime025,
    50: brandColor.lime050,
    100: brandColor.lime100,
    200: brandColor.lime200,
    300: brandColor.lime300,
    400: brandColor.lime400,
    500: brandColor.lime500,
    600: brandColor.lime600,
    700: brandColor.lime700,
    800: brandColor.lime800,
    900: brandColor.lime900,
  },
  purple: {
    25: brandColor.purple025,
    50: brandColor.purple050,
    100: brandColor.purple100,
    200: brandColor.purple200,
    300: brandColor.purple300,
    400: brandColor.purple400,
    500: brandColor.purple500,
    600: brandColor.purple600,
    700: brandColor.purple700,
    800: brandColor.purple800,
    900: brandColor.purple900,
  },
  gray: {
    25: brandColor.grey025,
    50: brandColor.grey050,
    100: brandColor.grey100,
    200: brandColor.grey200,
    300: brandColor.grey300,
    400: brandColor.grey400,
    500: brandColor.grey500,
    600: brandColor.grey600,
    700: brandColor.grey700,
    800: brandColor.grey800,
    900: brandColor.grey900,
    1000: brandColor.grey1000,
  },
};

const background = {
  default: "var(--color-background-default)",
  "default-hover": "var(--color-background-default-hover)",
  "default-pressed": "var(--color-background-default-pressed)",
  alternative: "var(--color-background-alternative)",
  "alternative-hover": "var(--color-background-alternative-hover)",
  "alternative-pressed": "var(--color-background-alternative-pressed)",
  hover: "var(--color-background-hover)",
  pressed: "var(--color-background-pressed)",
};

const text = {
  default: "var(--color-text-default)",
  alternative: "var(--color-text-alternative)",
  muted: "var(--color-text-muted)",
  foreground: "var(--color-text-foreground)",
};

const icon = {
  default: "var(--color-icon-default)",
  alternative: "var(--color-icon-alternative)",
  muted: "var(--color-icon-muted)",
};

const border = {
  default: "var(--color-border-default)",
  muted: "var(--color-border-muted)",
};

const shadow = {
  default: "var(--color-shadow-default)",
  primary: "var(--color-shadow-primary)",
  error: "var(--color-shadow-error)",
};

const primary = {
  default: "var(--color-primary-default)",
  "default-hover": "var(--color-primary-default-hover)",
  "default-pressed": "var(--color-primary-default-pressed)",
  muted: "var(--color-primary-muted)",
  inverse: "var(--color-primary-inverse)",
};

const error = {
  default: "var(--color-error-default)",
  "default-hover": "var(--color-error-default-hover)",
  "default-pressed": "var(--color-error-default-pressed)",
  muted: "var(--color-error-muted)",
  inverse: "var(--color-error-inverse)",
};

const warning = {
  default: "var(--color-warning-default)",
  "default-hover": "var(--color-warning-default-hover)",
  "default-pressed": "var(--color-warning-default-pressed)",
  muted: "var(--color-warning-muted)",
  inverse: "var(--color-warning-inverse)",
};

const success = {
  default: "var(--color-success-default)",
  "default-hover": "var(--color-success-default-hover)",
  "default-pressed": "var(--color-success-pressed)",
  muted: "var(--color-success-muted)",
  inverse: "var(--color-success-inverse)",
};

const info = {
  default: "var(--color-info-default)",
  muted: "var(--color-info-muted)",
  inverse: "var(--color-info-inverse)",
};

const overlay = {
  default: "var(--color-overlay-default)",
  alternative: "var(--color-overlay-alternative)",
  inverse: "var(--color-overlay-inverse)",
};

const surface = {
  default: {
    light: designSystemColors.white,
    dark: designSystemColors.gray[500],
  },
  inverse: {
    light: designSystemColors.gray[400],
    dark: designSystemColors.white,
  },
};

const keyframes = {
  slideUp20Vh: {
    "0%": { transform: "translate(0, 20vh)" },
    "40%": { transform: "translate(0, 20vh)" },
    "100%": { transform: "translate(0, 0)" },
  },
  slideDown20Vh: {
    "0%": { transform: "translate(0, -20vh)" },
    "40%": { transform: "translate(0, -20vh)" },
    "100%": { transform: "translate(0, 0)" },
  },
  fadeIn: {
    "0%": { opacity: "0%" },
    "40%": { opacity: "0%" },
    "100%": { opacity: "100%" },
  },
};

const animation = {
  "maintenance-page-slide-up": "slideUp20Vh 1.5s",
  "maintenance-page-slide-down": "slideDown20Vh 1.5s",
  "maintenance-page-fade-in": "fadeIn 1.5s",
};

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          ...background,
          DEFAULT: "hsl(var(--background))",
          foreground: "hsl(var(--foreground))",
        },
        primary: {
          ...primary,
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        portfolio: designSystemColors,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        ...keyframes,
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        ...animation,
      },
    },
  },
  plugins: [
      require("tailwindcss-animate"),
      plugin(function ({ addUtilities }: { addUtilities: (utilities: any) => void }) {
        const backgroundSurfaceStyles = Object.entries(surface).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [`.bg-surface-${key}`]: {
              "background-color": value.light,
              ".dark &": {
                "background-color": value.dark,
              },
            },
          }),
          {}
        );
  
        const textForegroundStyles = {
          ".text-foreground": {
            color: "var(--color-text-foreground)",
          },
        };
  
        const noScrollbarStyles = {
          ".no-scrollbar::-webkit-scrollbar": { display: "none" },
          ".no-scrollbar": {
            "-ms-overflow-style": "none",
            "scrollbar-width": "none",
          },
        };
  
        addUtilities({
          ...backgroundSurfaceStyles,
          ...textForegroundStyles,
          ...noScrollbarStyles,
        });
      }),
    ],
};

export default config;
