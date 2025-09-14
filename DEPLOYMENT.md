# Deployment Guide

## Prerequisites
- A Vercel account
- Access to all required service accounts (Supabase, Stripe, Resend, Slack, etc.)
- Domain name (if using a custom domain)

## Environment Variables
Set up the following environment variables in your Vercel project settings:

### Database (Supabase)
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### Authentication
```
NEXTAUTH_URL=your_app_url
NEXTAUTH_SECRET=your_nextauth_secret
```

### Payment Processing (Stripe)
```
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### Email (Resend)
```
RESEND_API_KEY=your_resend_api_key
```

### Slack Integration
```
SLACK_BOT_TOKEN=your_slack_bot_token
SLACK_SIGNING_SECRET=your_slack_signing_secret
```

### Analytics (Optional)
```
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_key
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id
```

## Pre-deployment Checklist

### 1. Database Setup
- [ ] Run all Supabase migrations
- [ ] Set up database policies
- [ ] Create necessary indexes
- [ ] Set up backups

### 2. Authentication
- [ ] Configure OAuth providers in Supabase
- [ ] Set up email templates for auth flows
- [ ] Test auth flows in staging

### 3. Payment Integration
- [ ] Configure Stripe webhooks
- [ ] Set up products and price IDs
- [ ] Test payment flows in test mode

### 4. Email Configuration
- [ ] Verify sending domain in Resend
- [ ] Test all email templates
- [ ] Set up email monitoring

### 5. Slack Integration
- [ ] Configure Slack app permissions
- [ ] Set up slash commands
- [ ] Test webhook endpoints

### 6. Performance
- [ ] Enable caching where appropriate
- [ ] Optimize images and assets
- [ ] Set up CDN configuration

### 7. Monitoring
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Configure performance monitoring
- [ ] Set up uptime monitoring

## Deployment Steps

1. **Prepare Your Repository**
   ```bash
   # Install dependencies
   npm install

   # Build the project locally to test
   npm run build

   # Run tests
   npm run test
   ```

2. **Connect to Vercel**
   - Connect your GitHub repository to Vercel
   - Configure build settings:
     - Build Command: `npm run build`
     - Output Directory: `.next`
     - Install Command: `npm install`

3. **Environment Setup**
   - Copy all environment variables to Vercel
   - Set `NODE_ENV` to `production`

4. **Domain Configuration**
   - Add your custom domain in Vercel
   - Configure DNS settings
   - Set up SSL certificate

5. **Post-Deployment Verification**
   - [ ] Test all authentication flows
   - [ ] Verify Stripe integration
   - [ ] Check email sending
   - [ ] Test Slack integration
   - [ ] Verify analytics tracking
   - [ ] Check performance metrics
   - [ ] Test all main user flows

## Monitoring and Maintenance

### Regular Checks
- Monitor error logs daily
- Check performance metrics
- Review security alerts
- Monitor database performance
- Track API usage and limits

### Backup Strategy
- Database backups (automated via Supabase)
- Environment variables backup
- Regular configuration backups

## Troubleshooting

### Common Issues
1. **Database Connection Issues**
   - Check Supabase connection string
   - Verify IP allowlist
   - Check database policies

2. **Authentication Problems**
   - Verify NextAuth configuration
   - Check OAuth provider settings
   - Validate JWT settings

3. **Payment Processing Issues**
   - Verify Stripe webhook configuration
   - Check API key permissions
   - Monitor webhook logs

4. **Email Delivery Problems**
   - Check Resend API key
   - Verify sending domain
   - Monitor email logs

## Security Considerations

1. **API Security**
   - Use rate limiting
   - Implement request validation
   - Set up CORS properly

2. **Data Protection**
   - Enable row level security
   - Use encrypted connections
   - Regular security audits

3. **Access Control**
   - Review admin access regularly
   - Monitor auth logs
   - Implement MFA where possible

## Support and Resources

- Vercel Documentation: https://vercel.com/docs
- Supabase Documentation: https://supabase.com/docs
- Stripe Documentation: https://stripe.com/docs
- Resend Documentation: https://resend.com/docs
- Next.js Documentation: https://nextjs.org/docs
