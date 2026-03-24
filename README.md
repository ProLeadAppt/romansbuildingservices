# Roman Building Services

Heritage restoration, masonry repairs and structural remedial work across Sydney.

## How to Start the Development Server

**Easiest way:** Double-click `START.bat` in the project folder.

**Or use the command line:**
```sh
npm run dev
```

The server will automatically:
- Start on **http://localhost:5173**
- Open your browser automatically
- Allow connections from localhost, 127.0.0.1, and your local network IP

If port 5173 is busy, Vite will automatically use the next available port (5174, 5175, etc.) - check the console output for the actual URL.

### Troubleshooting

If the browser doesn't open automatically:
1. Manually navigate to **http://localhost:5173** or **http://127.0.0.1:5173**
2. If you see cached content, clear your browser cache (Ctrl+Shift+Delete) or use private/incognito mode
3. Make sure no firewall is blocking port 5173

## Getting Started

### Prerequisites

- Node.js (v18 or higher) - [Download Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Setup

1. Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd "Roman Building Services"
```

2. Install dependencies:
```sh
npm install
```

3. Start the development server:
```sh
npm run dev
# OR just double-click START.bat
```

The application will open automatically in your browser at `http://localhost:5173`

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn-ui** - Component library
- **Tailwind CSS** - Utility-first CSS framework

## Development

- The development server supports hot module replacement (HMR)
- Changes to files will automatically reload in the browser
- Press `Ctrl+C` in the terminal to stop the server

## Building for Production

```sh
npm run build
```

The production build will be created in the `dist` folder.

## Deployment

The project is configured to deploy to Netlify. Push changes to the main branch to trigger automatic deployments.
