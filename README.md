# Expo Linear Gradient Generator

A beautiful gradient generator for React Native and Expo applications. Create linear gradients with real-time preview and copy the generated code directly to your project.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## ✨ Features

- **Real-time gradient preview** - See your gradient changes instantly
- **Customizable gradient direction** - Control start and end points with precision
- **Location control** - Fine-tune color stop positions
- **Preset gradients** - Quick access to beautiful pre-made gradients
- **Code generation** - Copy ready-to-use React Native code
- **Responsive design** - Works on both mobile and tablet layouts
- **Cross-platform** - Runs on iOS, Android, and web

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- Expo CLI
- iOS Simulator / Android Emulator (for mobile testing)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/burhanyilmaz/linear-gradient-generator
cd expoGradientGenerator
```

2. Install dependencies:
```bash
yarn install
# or
npm install
```

3. Start the development server:
```bash
yarn start
# or
npm start
```

4. Run on your preferred platform:
```bash
# iOS
yarn ios

# Android
yarn android

# Web
yarn web
```

## 📱 Usage

1. **Preview**: See your gradient in real-time in the preview section
2. **Colors**: Add, remove, or modify gradient colors using the color picker
3. **Direction**: Adjust gradient direction by modifying start and end coordinates
4. **Locations**: Fine-tune color stop positions along the gradient
5. **Presets**: Choose from beautiful pre-made gradient presets
6. **Copy Code**: Click the copy button to get the generated React Native code

### Generated Code Example

```tsx
import { LinearGradient } from 'expo-linear-gradient';

<LinearGradient
  colors={['#ff0000', '#00ff00', '#0000ff']}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 1 }}
  locations={[0, 0.5, 1]}
  style={{ flex: 1 }}
>
  {/* Your content here */}
</LinearGradient>
```

## 🛠️ Development

### Project Structure

```
├── app/                    # Expo Router app directory
│   ├── index.tsx          # Main gradient generator screen
│   └── _layout.tsx        # Root layout
├── components/            # Reusable UI components
│   ├── ColorInput.tsx     # Individual color input
│   ├── ColorSection.tsx   # Color management section
│   ├── CodeOutput.tsx     # Code generation and copy
│   ├── DirectionSection.tsx # Gradient direction controls
│   ├── GradientPreview.tsx # Live gradient preview
│   ├── InputField.tsx     # Generic input field
│   └── PresetSection.tsx  # Gradient presets
├── hooks/                 # Custom React hooks
├── utils/                 # Utility functions
└── assets/               # Images and other assets
```

### Key Dependencies

- **expo-linear-gradient**: Core gradient functionality
- **expo-router**: File-based navigation
- **expo-clipboard**: Copy functionality
- **react-native-reanimated**: Smooth animations
- **@expo/vector-icons**: Beautiful icons

### Available Scripts

```bash
# Development
yarn start          # Start Expo development server
yarn ios           # Run on iOS simulator
yarn android       # Run on Android emulator
yarn web           # Run on web browser

# Code Quality
yarn lint          # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- Powered by [React Native](https://reactnative.dev/)
- UI inspiration from modern design systems

---

Made with ❤️ for the React Native community
