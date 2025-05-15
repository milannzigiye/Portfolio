# Portfolio Deployment Guide

This guide will help you deploy your portfolio to various hosting platforms.

## Prerequisites

1. Make sure you have all dependencies installed:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

## Deployment Options

### 1. Vercel (Recommended)

1. Create an account at [Vercel](https://vercel.com)
2. Install Vercel CLI:
```bash
npm i -g vercel
```

3. Deploy:
```bash
vercel
```

### 2. Netlify

1. Create an account at [Netlify](https://netlify.com)
2. Install Netlify CLI:
```bash
npm i -g netlify-cli
```

3. Deploy:
```bash
netlify deploy
```

### 3. GitHub Pages

1. Add this to your `package.json`:
```json
{
  "scripts": {
    "export": "next build && next export",
    "deploy": "npm run export && touch out/.nojekyll && gh-pages -d out"
  }
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Deploy:
```bash
npm run deploy
```

## Environment Variables

Create a `.env.local` file with any required environment variables:

```env
NEXT_PUBLIC_GITHUB_TOKEN=your_github_token
```

## Custom Domain Setup

1. Purchase a domain from a provider like Namecheap or GoDaddy
2. Add DNS records as per your hosting provider's instructions
3. Configure SSL certificates (usually automatic with Vercel/Netlify)

## Post-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Verify images are loading correctly
- [ ] Check mobile responsiveness
- [ ] Test contact form functionality
- [ ] Verify GitHub integration
- [ ] Check loading states and animations
- [ ] Test error boundaries
- [ ] Verify SEO meta tags
- [ ] Check performance using Lighthouse

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check for TypeScript errors
   - Verify all dependencies are installed
   - Check for missing environment variables

2. **Images Not Loading**
   - Verify image domains in `next.config.js`
   - Check image paths in components
   - Ensure proper image optimization settings

3. **404 Errors**
   - Check routing configuration
   - Verify all links are correct
   - Check for case sensitivity in paths

### Getting Help

If you encounter any issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Search for similar issues on [GitHub](https://github.com/vercel/next.js/issues)
3. Ask for help in the [Next.js Discord](https://discord.gg/nextjs) 