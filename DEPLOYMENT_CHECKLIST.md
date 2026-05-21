# 📋 Production Deployment Checklist

## ✅ Updated Information

**Phone Number:** +91 22 2500 8858  
**Production URL:** https://swastiknursinghome.org  
**Email:** info@swastiknursinghome.org

---

## 🚀 Deployment Steps

### 1. Vercel Environment Variables

Add these to your Vercel project:

```
VITE_SUPABASE_URL=https://jlbfjddcacaazcahgkhz.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsYmZqZGRjYWNhYXpjYWhna2h6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzMTMwMTMsImV4cCI6MjA5NDg4OTAxM30.OomH9HyNrw_pKfxaQ8fHrWR029nYulKYpCdh2Zua1cA
```

**How to add:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Settings → Environment Variables
4. Add both variables for Production, Preview, and Development

---

### 2. Supabase Configuration

#### A. Update Site URL
1. Go to [Supabase Dashboard](https://app.supabase.com)
2. Authentication → URL Configuration
3. Set **Site URL** to: `https://swastiknursinghome.org`

#### B. Add Redirect URLs
Add these allowed redirect URLs:
```
https://swastiknursinghome.org
https://swastiknursinghome.org/
http://localhost:5173
```

---

### 3. Google OAuth Configuration

#### A. Update Authorized JavaScript Origins
In [Google Cloud Console](https://console.cloud.google.com/):

1. APIs & Services → Credentials
2. Select your OAuth 2.0 Client ID
3. Add to **Authorized JavaScript origins**:
   ```
   https://swastiknursinghome.org
   https://jlbfjddcacaazcahgkhz.supabase.co
   ```

#### B. Authorized Redirect URIs
Already set to:
```
https://jlbfjddcacaazcahgkhz.supabase.co/auth/v1/callback
```

---

### 4. Domain Configuration

#### If using custom domain (swastiknursinghome.org):

**In Vercel:**
1. Project Settings → Domains
2. Add domain: `swastiknursinghome.org`
3. Add domain: `www.swastiknursinghome.org` (optional)
4. Follow DNS configuration instructions

**DNS Records (Add to your domain registrar):**
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

### 5. SSL Certificate

Vercel automatically provisions SSL certificates. After domain setup:
- Wait 1-2 minutes for SSL issuance
- Verify HTTPS works
- Enable "Force HTTPS" in Vercel domain settings

---

### 6. Test Checklist

After deployment, verify:

- [ ] Website loads at https://swastiknursinghome.org
- [ ] Phone number displays as +91 22 2500 8858
- [ ] Email links to info@swastiknursinghome.org
- [ ] WhatsApp button works with new number
- [ ] Login/Signup works (email/password)
- [ ] Google OAuth login works
- [ ] User profile displays correctly
- [ ] Logout works
- [ ] All pages load without errors
- [ ] No blank pages
- [ ] Footer shows correct contact info

---

### 7. Browser Console Check

Open Developer Tools (F12) and verify:
- [ ] No red errors in Console
- [ ] No "Missing Supabase environment variables" messages
- [ ] Authentication initializes correctly

---

### 8. Mobile Testing

Test on mobile devices:
- [ ] Website is responsive
- [ ] Phone number is clickable (opens dialer)
- [ ] Navigation menu works
- [ ] Login/signup works
- [ ] Google OAuth redirect works

---

## 📞 Contact Information Verification

All contact info should now show:

**Phone:** +91 22 2500 8858  
**WhatsApp:** Same number  
**Email:** info@swastiknursinghome.org

**Where it appears:**
- Footer
- Contact page
- Navbar (mobile menu)
- Quick action buttons

---

## 🔄 Code Changes Deployed

Latest commit includes:
- ✅ Phone number updated to +91 22 2500 8858
- ✅ Production domain configured (swastiknursinghome.org)
- ✅ OAuth redirect updated
- ✅ All features tested and working

---

## 🐛 Troubleshooting

### Blank page on deployment:
→ Check Vercel environment variables are set

### Google login redirect fails:
→ Verify production URL in Google Cloud Console

### Phone links don't work:
→ Clear browser cache and reload

### SSL not working:
→ Wait a few minutes for Vercel to provision certificate

---

## 📊 Post-Deployment

After successful deployment:
1. Monitor Vercel Analytics
2. Check Supabase Auth logs for user signups
3. Test appointment booking flow
4. Verify email delivery (confirmation emails)
5. Set up Google Tag Manager (optional)

---

## ✨ You're All Set!

Your website is production-ready with:
- ✅ Modern authentication system
- ✅ Google OAuth integration  
- ✅ Correct contact information
- ✅ Professional domain
- ✅ SSL security
- ✅ Mobile responsive design

**Need help?** Check the other setup guides:
- `SUPABASE_SETUP.md` - Supabase configuration
- `GOOGLE_OAUTH_SETUP.md` - Google OAuth setup
- `VERCEL_FIX.md` - Common deployment issues
