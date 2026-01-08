# Supabase Authentication Setup Guide

## 🎉 Supabase Integration Complete!

Your Swastik Nursing Home website now has a fully functional authentication system powered by Supabase.

---

## 🔧 What Was Set Up

### 1. **Supabase Client** (`src/lib/supabase.js`)
- Configured Supabase client with your credentials
- Auto-refresh tokens enabled
- Persistent sessions across page reloads

### 2. **Updated AuthContext** (`src/context/AuthContext.jsx`)
- Real Supabase authentication (no more mocks!)
- Sign up with email/password
- Login with email/password
- Auto logout
- Session management
- Auth state listeners

### 3. **Enhanced Login Page** (`src/pages/Login.jsx`)
- Email confirmation messaging for new users
- Improved loading states
- Better error handling
- Success notifications
- Supabase branding

### 4. **Environment Variables** (`.env`)
- Secure credential storage
- Added to `.gitignore` for security

---

## 🔐 Current Features

✅ **User Registration** - Create new accounts with email/password  
✅ **Email Verification** - Supabase sends confirmation emails  
✅ **Login/Logout** - Secure authentication  
✅ **Session Persistence** - Stay logged in across page reloads  
✅ **Protected Routes** - Profile and appointments require login  
✅ **User Profile Display** - Show user info in navbar  

---

## ⚙️ Supabase Dashboard Setup (IMPORTANT!)

You need to configure your Supabase project for this to work:

### 1. **Email Authentication Settings**

Go to: `Authentication > Providers > Email` in your Supabase dashboard

Configure:
- ✅ Enable Email provider
- ✅ Enable "Confirm email" (recommended for production)
- For development, you can disable email confirmation temporarily

### 2. **Email Templates**

Go to: `Authentication > Email Templates`

Customize these templates:
- **Confirm Signup** - Sent when users register
- **Magic Link** - For passwordless login (optional)
- **Change Email Address** - When users update email
- **Reset Password** - For password recovery

**Recommended customization:**
```
Hi {{ .Name or "there" }},

Thank you for registering with Swastik Nursing Home!

Please confirm your email by clicking the link below:
{{ .ConfirmationURL }}

Best regards,
Swastik Nursing Home Team
```

### 3. **Site URL Configuration**

Go to: `Authentication > URL Configuration`

Set:
- **Site URL:** Your production URL (e.g., `https://swastiknursinghome.com`)
- **Redirect URLs:** Add your deployment URLs

For local development: `http://localhost:5173`

### 4. **Auth Policies (Optional but Recommended)**

Go to: `Authentication > Policies`

Configure:
- Password strength requirements
- Rate limiting
- Session timeout duration

---

## 🧪 Testing the Integration

### Test User Registration:
1. Navigate to `/login`
2. Click "Click here" to create account
3. Fill in name, email, and password (min 6 characters)
4. Click "Create Account"
5. Check email for confirmation link
6. Click confirmation link
7. Login with credentials

### Test Login:
1. Navigate to `/login`
2. Enter email and password
3. Click "Login"
4. Should redirect to home page
5. Profile icon should appear in navbar

### Test Logout:
1. Click profile icon in navbar
2. Click "Logout"
3. Should clear session and show "Create Account" button

---

## 📊 Database Schema (Auto-created by Supabase)

Supabase automatically creates these tables:

```sql
-- auth.users table (managed by Supabase)
- id (uuid)
- email (text)
- encrypted_password (text)
- email_confirmed_at (timestamp)
- user_metadata (jsonb) -- Contains name and other custom data
- created_at (timestamp)
- updated_at (timestamp)
```

---

## 🚀 Deploy to Production

### Vercel Deployment:

1. Go to your Vercel project settings
2. Add Environment Variables:
   ```
   VITE_SUPABASE_URL=https://xtpurzruyycbkdfdhblr.supabase.co
   VITE_SUPABASE_ANON_KEY=sb_publishable_xWMVsh8pKNwqhujP2Hr3Gg_b5v3wGkF
   ```
3. Redeploy

### Update Supabase Redirect URLs:
Add your production URL to Supabase:
```
https://your-site.vercel.app
```

---

## 🔒 Security Best Practices

✅ **Never commit `.env` file** - Already in `.gitignore`  
✅ **Use environment variables** - Credentials not in code  
✅ **ANON key is safe to expose** - It's public-facing  
✅ **Enable RLS policies** - Restrict database access  
✅ **Enable email confirmation** - Prevent fake accounts  

---

## 📝 Next Steps (Optional Enhancements)

### 1. **Password Reset**
Add forgot password functionality:
```javascript
const resetPassword = async (email) => {
  const { error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) throw error;
};
```

### 2. **Social Login**
Enable Google/Facebook login in Supabase dashboard

### 3. **User Profiles Table**
Create a custom profiles table for additional user data:
```sql
create table profiles (
  id uuid references auth.users on delete cascade,
  name text,
  phone text,
  created_at timestamp default now(),
  primary key (id)
);
```

### 4. **Appointments Table**
Store user appointments:
```sql
create table appointments (
  id uuid default uuid_generate_v4(),
  user_id uuid references auth.users,
  doctor_id text,
  appointment_date timestamp,
  status text,
  created_at timestamp default now(),
  primary key (id)
);
```

---

## 🐛 Troubleshooting

### "Invalid login credentials"
- Check email is confirmed
- Verify password is correct
- Check Supabase auth logs

### "Email not confirmed"
- Check spam folder
- Resend confirmation email
- Temporarily disable email confirmation in Supabase

### "CORS error"
- Add your domain to Supabase allowed origins
- Update Site URL in Supabase settings

---

## 📞 Support

For Supabase issues:
- 📖 [Supabase Docs](https://supabase.com/docs/guides/auth)
- 💬 [Supabase Discord](https://discord.supabase.com)
- 🐛 [GitHub Issues](https://github.com/supabase/supabase/issues)

---

## ✨ Summary

Your authentication system is now production-ready with:
- ✅ Real database-backed authentication
- ✅ Email verification
- ✅ Secure session management
- ✅ User profile data
- ✅ Protected routes
- ✅ Environment-based configuration

Just configure your Supabase dashboard settings and you're good to go! 🚀
