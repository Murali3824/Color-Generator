# Color & Gradient Generator

A React component that generates color palettes and gradient variations from a base color. Built with React and styled using Tailwind CSS.

## Technologies Used

- **Frontend Framework**: React 18
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - Custom CSS for gradient generations
- **UI Components**:
  - Lucide React for icons
  - Shadcn/ui for base components
- **Development Tools**:
  - Vite for build tooling and development server
  - ESLint for code linting
  - Prettier for code formatting

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn package manager

### Clone the Repository

```bash
# Clone the repository
git clone https://github.com/Murali3824/Color-Generator.git

# Navigate to project directory
cd Color-Generator

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

## Features

- Generate color shades from 0-100% based on a selected base color
- Create various gradient combinations using the selected color
- Copy color codes and gradient CSS with a single click
- Responsive grid layout for both colors and gradients
- Real-time color preview
- Modern, clean UI with hover effects and transitions

## Components

### Main Component: `GradientGenerator`

The main component that handles the color generation interface. It consists of:

- Color picker input with hex code display
- Generate button to refresh color variations
- Color shades display grid
- Gradient variations display grid

### Utility Functions

- `generateColorPalette`: Creates a range of color shades
- `generateGradients`: Produces various gradient combinations
- `getDarkerShade`: Calculates darker variations of the base color
- `getLighterShade`: Calculates lighter variations of the base color

## Gradient Types

The generator creates 19 different gradient variations including:

- Double Radial
- Faded Corners
- Linear (Right & Bottom)
- Diagonal variations
- Three-Tone gradients
- Conic gradients
- Repeating patterns (Stripes & Checkerboard)
- Symmetric variations
- Ripple effects

## Project Structure

```
color-gradient-generator/
├── src/
│   ├── components/
│   │   └── GradientGenerator.jsx
│   ├── utils/
│   │   ├── generateGradients.js
│   │   ├── generateColorPalette.js
│   │   └── colorUtils.js
│   └── App.jsx
├── public/
├── package.json
└── README.md
```

## Usage

```jsx
import GradientGenerator from './components/GradientGenerator';

function App() {
  return (
    <div>
      <GradientGenerator />
    </div>
  );
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.