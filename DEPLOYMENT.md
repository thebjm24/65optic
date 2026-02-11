# Deployment Guide - 65 OPTIC

## Quick Start

Your 65 OPTIC website is now ready for production deployment on Vercel. Follow these steps to deploy:

## Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial Next.js setup for 65 OPTIC"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Vercel will automatically detect Next.js
   - Click "Deploy"

3. **Done!** Your site will be live at your Vercel URL

## Option 2: Deploy with Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project directory
vercel

# For production deployment
vercel --prod
```

## Environment Variables (Optional)

If you want to add environment variables:

1. Create `.env.local` file (already have `.env.local.example`)
2. Add your variables (see `.env.local.example` for reference)
3. In Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add your variables
   - Redeploy

## Pre-Deployment Checklist

- ✅ Next.js 16 project structure
- ✅ All components created
- ✅ Tailwind CSS configured
- ✅ TypeScript setup complete
- ✅ ESLint configured
- ✅ vercel.json configured
- ✅ SEO metadata added
- ✅ Mobile responsive design
- ✅ Bilingual support (EN/AR)

## Performance Optimizations

The project includes:

- **Image Optimization**: Next.js automatic image optimization
- **Font Optimization**: Google Fonts with display: swap
- **Code Splitting**: Automatic by Next.js
- **Minification**: Automatic production builds
- **CSS Optimization**: Tailwind purging unused styles

## Custom Domain

To add a custom domain:

1. In Vercel Dashboard → Project Settings → Domains
2. Add your domain
3. Follow DNS configuration steps provided by Vercel
4. Update nameservers at your domain registrar

## SSL/HTTPS

Vercel automatically provides free SSL certificates for all domains. No additional configuration needed!

## Monitoring & Analytics

After deployment, you can:

- Monitor build logs in Vercel Dashboard
- Check performance metrics
- View analytics
- Set up alerts for failed deployments

## Support & Troubleshooting

### Build Fails
- Check `vercel.json` configuration
- Ensure all dependencies are in `package.json`
- Check build logs in Vercel Dashboard

### 404 Page
- Verify `app/page.tsx` exists
- Check Next.js routing configuration

### Styling Issues
- Run `npm run build` locally first
- Verify Tailwind CSS is properly configured
- Check `globals.css` imports

## Local Testing Before Deployment

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Test production build locally
npm run build
npm start
```

## Redeployment

To trigger a new deployment:
- Push to main branch (automatic)
- Or manually redeploy from Vercel Dashboard

## Next Steps

1. Deploy to Vercel
2. Test all features on live site
3. Set up analytics (Google Analytics, etc.)
4. Connect contact form to backend service
5. Set up WhatsApp integration
6. Add Google Maps embed
7. Implement online booking system

---

For more information, visit:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
