# Nexus AI Agent

Modern AI chat interface with math, conversation, and web search capabilities.

## Features

- 🎨 Two beautiful themes (Light & Dark) with animated gradients
- 🌍 10 languages support (EN, RU, FR, AR, ZH, JA, KO, ES, IT, RO)
- 🔍 Web search integration
- 🎯 4 temperature modes (Precise 0.0, Balanced 0.5, Creative 0.7, Extreme 1.0)
- ⚡ Real-time model status
- 📱 Responsive design with max-w-7xl layout
- ✨ Animated UI with glow effects and smooth transitions

## Tech Stack

- React 18 + TypeScript
- Zustand (state management)
- TanStack Query (data fetching)
- Tailwind CSS v3
- React Router
- i18next (internationalization)
- Lucide React (icons)

## Architecture

Project follows **Feature-Sliced Design (FSD)** methodology:

```
src/
├── app/                 # Application initialization
│   ├── App.tsx
│   └── index.css
├── widgets/             # Complex UI blocks
│   ├── header/
│   ├── footer/
│   └── chat/
├── features/            # User interactions
│   └── chat/
│       ├── api/
│       └── ui/
├── entities/            # Business entities
│   └── chat/
│       ├── model/
│       └── ui/
└── shared/              # Reusable code
    ├── api/
    ├── config/
    └── types/
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Themes

### Light Theme
- White background (#FFFFFF)
- Pink (#EC4899) & purple (#A855F7) gradient accents
- Clean, modern design

### Dark Theme
- Near-black background (#0A0A0B)
- Cyan (#06B6D4), lime (#84CC16) & blue (#3B82F6) gradient accents
- Eye-friendly dark mode

## API

Backend: `https://ai-agent-backend-chat-production.up.railway.app`

Endpoints:
- `GET /health` - Model status
- `POST /chat` - Send message

## License

MIT
