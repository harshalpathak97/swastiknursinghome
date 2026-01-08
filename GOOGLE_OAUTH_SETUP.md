# Google OAuth Setup Guide

## ✨ Google Login Now Available!

Your login page now has a beautiful "Continue with Google" button!

---

## ⚙️ Configure Google OAuth in Supabase (Required)

To make Google login work, you need to enable it in your Supabase dashboard:

### Step 1: Go to Supabase Dashboard

1. Visit [Supabase Dashboard](https://app.supabase.com)
2. Select your project
3. Go to **Authentication** → **Providers**

### Step 2: Enable Google Provider

1. Find **Google** in the list of providers
2. Toggle it **ON**
3. You'll need to configure it with Google OAuth credentials

### Step 3: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Go to **APIs & Services** → **Credentials**
4. Click **Create Credentials** → **OAuth client ID**
5. Configure the OAuth consent screen if prompted:
   - App name: `Swastik Nursing Home`
   - User support email: Your email
   - Developer contact: Your email

6. For **Application type**, select **Web application**
7. Add **Authorized JavaScript origins**:
   ```
   https://xtpurzruyycbkdfdhblr.supabase.co
   ```

8. Add **Authorized redirect URIs**:
   ```
   https://xtpurzruyycbkdfdhblr.supabase.co/auth/v1/callback
   ```

9. Click **Create**
10. Copy the **Client ID** and **Client Secret**

### Step 4: Add to Supabase

Back in Supabase:

1. Paste the **Client ID** 
2. Paste the **Client secret**
3. Click **Save**

### Step 5: Add Production URLs (After deploying)

Once your site is live, add your production URL:

**In Google Cloud Console:**
- Authorized JavaScript origins: `https://your-site.vercel.app`
- Authorized redirect URIs: `https://xtpurzruyycbkdfdhblr.supabase.co/auth/v1/callback`

---

## 🎨 What Was Added

### Login Page Features:

1. **Google Sign-In Button**
   - Official Google branding
   - Hover effects
   - Loading states

2. **"OR" Divider**
   - Clean separation between OAuth and email/password

3. **Seamless Experience**
   - One-click Google login
   - Auto-redirect after authentication
   - Works with existing email/password flow

### Code Changes:

1. **AuthContext** - Added `loginWithGoogle()` function
2. **Login.jsx** - Added Google button with proper UX
3. **User metadata** - Supports Google profile names

---

## 🧪 Testing Google Login

1. **Local Testing:**
   ```bash
   npm run dev
   ```
   - Go to `http://localhost:5173/login`
   - Click "Continue with Google"
   - Select your Google account
   - Should redirect back to home page logged in

2. **Production Testing:**
   - Deploy to Vercel
   - Add production URL to Google Cloud Console
   - Test the same flow

---

## 🔒 Security Notes

- Google OAuth is more secure than password login
- No passwords to remember or store
- Two-factor authentication supported by Google
- Users can revoke access anytime from Google account settings

---

## 💡 User Experience

**For New Users:**
1. Click "Continue with Google"
2. Select Google account
3. Grant permissions
4. Logged in instantly!

**For Returning Users:**
1. Click "Continue with Google"
2. Instantly logged in (no account selection needed)

---

## 🐛 Troubleshooting

### "Access denied" error:
- Verify Google OAuth is enabled in Supabase
- Check Client ID and Secret are correct
- Ensure redirect URIs match exactly

### Redirect not working:
- Verify redirect URI in Google Console matches Supabase callback URL
- Check for trailing slashes (must match exactly)

### "App not verified" warning:
- Normal for apps in development
- Click "Advanced" → "Go to Swastik Nursing Home (unsafe)"
- For production, submit for Google verification

---

## 📊 Analytics

Track Google login usage in Supabase:
- Go to **Authentication** → **Users**
- Filter by provider: `google`
- See signup trends and user info

---

## ✅ Next Steps

1. Configure Google OAuth (5-10 minutes)
2. Test locally
3. Deploy to production  
4. Add production URL to Google Console
5. Test in production

Your users can now login with one click! 🎉
