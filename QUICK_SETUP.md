# Quick Setup Checklist

## ✅ Automatic Deployment to Hostinger

Follow these steps to enable automatic deployment:

### 1. Get Hostinger FTP Credentials
- Login to Hostinger hPanel
- Go to **FTP Accounts**
- Note down:
  - FTP Server/Host
  - FTP Username
  - FTP Password

### 2. Add GitHub Secrets
1. Go to: https://github.com/harshalpathak97/swastiknursinghome/settings/secrets/actions
2. Click **New repository secret**
3. Add these 3 secrets:

| Secret Name | Value | Where to Find |
|------------|-------|---------------|
| `HOSTINGER_FTP_SERVER` | Your FTP server (e.g., `ftp.yourdomain.com`) | Hostinger hPanel → FTP Accounts |
| `HOSTINGER_FTP_USERNAME` | Your FTP username | Hostinger hPanel → FTP Accounts |
| `HOSTINGER_FTP_PASSWORD` | Your FTP password | Hostinger hPanel → FTP Accounts |

### 3. Push to GitHub
```bash
git add .
git commit -m "Add automatic deployment"
git push origin main
```

### 4. Verify
- Go to GitHub → **Actions** tab
- Watch the workflow run
- Check your Hostinger website in 2-3 minutes

## 🎯 How It Works Now

```
You Push Code → GitHub → Vercel (auto) + Hostinger (auto)
```

Both platforms update automatically! 🚀

## 📝 Need Help?

See `AUTO_DEPLOY_SETUP.md` for detailed instructions.

