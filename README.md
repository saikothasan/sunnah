# Hadith Collections

A modern web application for exploring authentic hadiths from various collections. Built with Next.js 14, TypeScript, and Tailwind CSS.

Live Demo: [al-hadith.pages.dev](https://al-hadith.pages.dev)

## Features

- 📚 Browse multiple hadith collections (Bukhari, Muslim, Abu Dawud, etc.)
- 🔍 Search hadiths by number
- 🌙 Dark mode support
- 📱 Fully responsive design
- ⚡ Fast and optimized performance
- 🔒 Edge runtime for better security and performance

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide Icons](https://lucide.dev/) - Icons
- [React Query](https://tanstack.com/query/latest) - Data fetching
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/saikothasan/sunnah.git
cd sunnah
```

Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js app router pages and layouts
- `components/` - React components
- `lib/` - Utility functions and constants
- `public/` - Static assets

## API

This project uses the Hadith API available at `https://en-hadith-api.vercel.app/`. The API provides access to various hadith collections including:

- Sahih al-Bukhari
- Sahih Muslim
- Sunan Abu Dawud
- Sunan ibn Majah
- Jami at-Tirmidhi

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the creators and maintainers of the Hadith API
- Inspired by various Islamic educational websites and apps
- UI components from shadcn/ui

## Author

- [@saikothasan](https://github.com/saikothasan)
