# FinLayer Landing Page

This is a landing page for FinLayer, a specialized Layer 2 blockchain solution for financial transactions with built-in KYC/AML compliance.

## Features

- Responsive design for all device sizes
- Interactive transaction flow simulator
- Modern UI with animations
- Multilingual support (VI/EN)

## Main Components

1. **Header** - Navigation and language selection
2. **Hero Section** - Main call to action with animated blockchain graphic
3. **Transaction Flow Simulator** - Interactive visualization of the FinLayer transaction process
4. **Features Section** - Key features of FinLayer
5. **Architecture Section** - Technical architecture diagram and explanation
6. **Use Cases Section** - Examples of FinLayer applications
7. **Call to Action** - Contact forms and action buttons
8. **Footer** - Company information and links

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/finlayer-landing-page.git
cd finlayer-landing-page
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

## Technology Stack

- React 18
- Tailwind CSS
- GSAP for animations
- D3.js for visualizations
- i18next for localization

## Customization

### Changing Colors

Colors can be modified in the `tailwind.config.js` file:

```js
theme: {
  extend: {
    colors: {
      'primary': '#0066cc',
      'primary-dark': '#003399',
      'secondary': '#00cc66',
      'tertiary': '#f2f8ff',
    },
  },
},
```

### Adding Languages

Languages can be added by expanding the language selector in the Header component and adding translations to the i18n files.

## License

This project is licensed under the MIT License - see the LICENSE file for details
