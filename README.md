# Terminal Portfolio - Chayan Ranpara

A retro-inspired terminal-style portfolio website featuring a unique green-on-black aesthetic with interactive command-line interface.


## 🎯 Project Overview

This is an interactive portfolio website styled as a terminal interface, designed to showcase software development skills in a unique and engaging way. The site features a split-screen layout with a profile section and an interactive terminal where visitors can execute commands to learn more about the developer.

## ✨ Features

### 🖥️ Interactive Terminal
- **Command-line Interface**: Fully functional terminal with command execution
- **Typing Animation**: Realistic character-by-character typing effect for command outputs
- **Command History**: Navigate through previous commands using arrow keys (↑/↓)
- **Command Shortcuts**: Quick-access buttons for common commands
- **Custom Commands**: Multiple built-in commands to explore the portfolio

### 🎨 Visual Effects
- **Matrix Effect**: Special Easter egg animation
- **Terminal Glow**: Authentic CRT monitor green glow effect
- **Scanline Animation**: Retro CRT scanline overlay
- **Glitch Effect**: Subtle glitch animation on profile photo
- **Smooth Animations**: Polished transitions and hover effects

### 📱 Responsive Design
- **Desktop-First**: Optimized for desktop viewing
- **Mobile Support**: Adapts to smaller screens with adjusted layouts
- **Grid Layout**: Clean 35/65 split between profile and terminal sections

### 🎭 Profile Section
- Animated profile photo with glowing effects
- Professional title and role descriptions
- Real-time status display
- Vertical role badges with arrow indicators

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript 5.6.2
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui
- **Build Tool**: Vite 5.4.2
- **Routing**: React Router DOM 6.28.0
- **Icons**: Lucide React 0.263.1

## 📁 Project Structure

```
src/
├── components/
│   ├── Terminal.tsx           # Main terminal component
│   ├── TerminalOutput.tsx     # Output rendering with typing effect
│   ├── ProfilePhoto.tsx       # Left profile section
│   ├── MatrixEffect.tsx       # Matrix rain animation
│   └── ui/                    # shadcn/ui components
├── lib/
│   └── commands.ts            # Command parser and handlers
├── pages/
│   ├── Index.tsx              # Main layout page
│   └── NotFound.tsx           # 404 page
├── App.tsx                    # App root with routing
├── index.css                  # Global styles & design system
└── main.tsx                   # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/terminal-portfolio.git
   cd terminal-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎮 Available Commands

The terminal supports various commands to explore the portfolio:

- `help` - Display all available commands
- `about` - Learn about Chayan
- `skills` - View technical skills
- `experience` - See work experience
- `projects` - Browse project portfolio
- `education` - View educational background
- `contact` - Get contact information
- `resume` - View/download resume
- `clear` - Clear terminal screen
- `matrix` - Trigger Matrix effect (Easter egg)

*Note: Commands are case-insensitive*

## 🎨 Design System

### Color Palette
- **Primary**: `hsl(120, 100%, 50%)` - Terminal green
- **Background**: `hsl(0, 0%, 0%)` - Pure black
- **Accent**: `hsl(120, 100%, 40%)` - Dark green
- **Muted**: `hsl(120, 30%, 15%)` - Dim green

### Typography
- **Font Family**: Courier New, Consolas, Monaco (monospace)
- **Terminal Text**: Green glow effect with shadow
- **Headers**: Bold with increased letter spacing

### Effects
- **Terminal Glow**: Multi-layer text shadow for authentic CRT look
- **Scanline**: Animated overlay for retro effect
- **Cursor Blink**: 1s interval block cursor animation

## 🔧 Customization

### Adding New Commands

Edit `src/lib/commands.ts`:

```typescript
export const parseCommand = (input: string) => {
  const command = input.toLowerCase().trim();
  
  switch (command) {
    case 'yourcommand':
      return 'Your command output';
    // ... other commands
  }
};
```

### Modifying Profile Information

Edit `src/components/ProfilePhoto.tsx` to update:
- Name and title
- Role descriptions
- Status information
- Photo/initials

### Changing Color Scheme

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary: 120 100% 50%;      /* Change hue for different color */
  --background: 0 0% 0%;         /* Background color */
  /* ... other variables */
}
```

## 📦 Key Dependencies

```json
{
  "react": "^18.3.1",
  "typescript": "^5.6.2",
  "tailwindcss": "^3.4.17",
  "vite": "^5.4.2",
  "lucide-react": "^0.263.1",
  "@tanstack/react-query": "^5.59.16"
}
```

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel will auto-detect Vite configuration
4. Click Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Deploy site

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/terminal-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Run: `npm run deploy`

## 🤝 Contributing

Suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Development Notes

### Browser Storage Limitation
This project does NOT use `localStorage` or `sessionStorage`. All state is managed in-memory using React state for optimal performance and security.

### Styling Constraints
- Uses only Tailwind's core utility classes
- All animations done with CSS keyframes in index.css
- Maintains consistent design system via CSS variables

### Performance Considerations
- Typing animation is optimized with configurable speed
- Matrix effect auto-terminates after 5 seconds
- Efficient re-rendering with proper React hooks

## 🐛 Known Issues

- Matrix effect may impact performance on lower-end devices
- Mobile keyboard may obscure terminal input on small screens
- Command history limited to current session (no persistence)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Chayan Ranpara**
- Role: Software Developer in Test
- Specialization: Framework Development, Test Strategy
- Portfolio: [Your Website URL]
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
- Inspired by classic terminal interfaces and retro computing aesthetics

## 🌟 Show Your Support

If you like this project, please consider giving it a ⭐ on GitHub!

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**