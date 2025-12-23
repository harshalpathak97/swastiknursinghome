# Automatic Deployment Setup Guide

This guide will help you set up automatic deployment to Hostinger whenever you push code to GitHub (which also triggers Vercel deployment).

## How It Works

1. **You push code to GitHub** → Triggers GitHub Actions
2. **GitHub Actions builds your project** → Creates production-ready files
3. **Automatically deploys to Hostinger** → Updates your live website
4. **Vercel also deploys automatically** → Your Vercel site updates too

## Setup Instructions

### Step 1: Choose Your Deployment Method

You have two workflow files:
- **`deploy-hostinger.yml`** - Uses FTP (easier, works with most Hostinger plans)
- **`deploy-hostinger-ssh.yml`** - Uses SSH (faster, requires SSH access)

### Step 2: Configure GitHub Secrets

1. Go to your GitHub repository: https://github.com/harshalpathak97/swastiknursinghome
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Add the following secrets based on your chosen method:

#### For FTP Deployment (deploy-hostinger.yml)

Add these secrets:

- **`HOSTINGER_FTP_SERVER`**
  - Value: Your FTP server (e.g., `ftp.yourdomain.com` or IP address)
  - Find in: Hostinger hPanel → FTP Accounts

- **`HOSTINGER_FTP_USERNAME`**
  - Value: Your FTP username
  - Find in: Hostinger hPanel → FTP Accounts

- **`HOSTINGER_FTP_PASSWORD`**
  - Value: Your FTP password
  - Find in: Hostinger hPanel → FTP Accounts

#### For SSH Deployment (deploy-hostinger-ssh.yml)

Add these secrets:

- **`HOSTINGER_SSH_HOST`**
  - Value: Your SSH host (e.g., `yourdomain.com` or IP)
  - Find in: Hostinger hPanel → SSH Access

- **`HOSTINGER_SSH_USERNAME`**
  - Value: Your SSH username
  - Find in: Hostinger hPanel → SSH Access

- **`HOSTINGER_SSH_KEY`**
  - Value: Your private SSH key content
  - Find in: Hostinger hPanel → SSH Access → Generate/View Key

- **`HOSTINGER_SSH_PORT`** (optional)
  - Value: SSH port (usually `22` or `2222`)
  - Default: `22` if not provided

### Step 3: Enable the Workflow

1. **For FTP**: The workflow `deploy-hostinger.yml` is already set up
2. **For SSH**: Rename `deploy-hostinger-ssh.yml` to `deploy-hostinger.yml` (or disable the FTP one)

To disable a workflow, delete or rename the file in `.github/workflows/`

### Step 4: Test the Deployment

1. Make a small change to your code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Test automatic deployment"
   git push origin main
   ```
3. Go to GitHub → **Actions** tab
4. Watch the workflow run
5. Check your Hostinger website after 2-3 minutes

## Workflow Features

- ✅ **Automatic builds** on every push to main/master
- ✅ **Manual trigger** available (workflow_dispatch)
- ✅ **Only deploys from main/master** branch
- ✅ **Preserves .htaccess** file
- ✅ **Cleans old files** before deployment

## Troubleshooting

### Workflow fails with FTP errors
- Verify FTP credentials in GitHub Secrets
- Check if FTP is enabled in Hostinger
- Ensure server path is correct (`/public_html/`)

### Workflow fails with SSH errors
- Verify SSH key is correct (include full key with headers)
- Check SSH access is enabled in Hostinger
- Verify port number (some use 2222 instead of 22)

### Files not updating on website
- Check workflow logs in GitHub Actions
- Verify deployment completed successfully
- Clear browser cache
- Check file permissions on Hostinger

### Build fails
- Check Node.js version compatibility
- Verify all dependencies are in package.json
- Review build logs in GitHub Actions

## Manual Deployment

If automatic deployment fails, you can still deploy manually:

```bash
npm run build
# Then upload dist folder contents to Hostinger
```

Or use the deployment script:
```bash
./deploy-hostinger.sh
```

## Security Notes

- ⚠️ **Never commit secrets** to your repository
- ✅ **Use GitHub Secrets** for all sensitive data
- ✅ **Rotate credentials** periodically
- ✅ **Review workflow logs** regularly

## Current Setup

- **Vercel**: Auto-deploys on push ✅
- **Hostinger**: Auto-deploys on push (after setup) ⚙️
- **GitHub**: Source of truth ✅

## Next Steps

1. Add GitHub Secrets (Step 2 above)
2. Push a test commit
3. Monitor GitHub Actions
4. Verify deployment on Hostinger

Your website will now update automatically whenever you push to GitHub! 🚀

