# Hostinger Deployment Guide

## Prerequisites
- Hostinger hosting account with cPanel access
- FTP credentials (or File Manager access)
- Domain name configured

## Deployment Steps

### Method 1: Using File Manager (Recommended)

1. **Build the project** (already done):
   ```bash
   npm run build
   ```

2. **Login to Hostinger cPanel**:
   - Go to your Hostinger account
   - Navigate to hPanel or cPanel
   - Open File Manager

3. **Navigate to public_html**:
   - Go to `public_html` folder (or your domain's root folder)
   - Delete all existing files (or backup if needed)

4. **Upload files**:
   - Upload ALL contents from the `dist` folder
   - Make sure to upload:
     - `index.html`
     - `.htaccess` file
     - `assets` folder (with all files inside)
     - `vite.svg` (if needed)

5. **Set permissions**:
   - Ensure `.htaccess` has proper permissions (644 or 644)
   - Ensure folders have 755 permissions
   - Ensure files have 644 permissions

6. **Verify**:
   - Visit your domain
   - Test all routes (Home, About, Doctors, etc.)

### Method 2: Using FTP

1. **Get FTP credentials**:
   - From Hostinger hPanel → FTP Accounts
   - Note: FTP host, username, password, port

2. **Connect via FTP client**:
   - Use FileZilla, WinSCP, or any FTP client
   - Connect to your Hostinger FTP server

3. **Navigate to public_html**:
   - Go to `public_html` directory

4. **Upload files**:
   - Upload all contents from `dist` folder
   - Maintain folder structure

5. **Verify**:
   - Visit your domain
   - Test all routes

### Method 3: Using Git (if SSH access available)

1. **SSH into your server**:
   ```bash
   ssh username@your-server-ip
   ```

2. **Navigate to public_html**:
   ```bash
   cd public_html
   ```

3. **Clone or pull from GitHub**:
   ```bash
   git clone https://github.com/harshalpathak97/swastiknursinghome.git
   cd swastiknursinghome
   ```

4. **Build and deploy**:
   ```bash
   npm install
   npm run build
   cp -r dist/* ../public_html/
   ```

## Important Notes

- **React Router**: The `.htaccess` file ensures all routes work correctly
- **Build before upload**: Always run `npm run build` before uploading
- **Asset paths**: All assets are in the `assets` folder with hashed names
- **HTTPS**: Ensure SSL certificate is enabled in Hostinger

## Troubleshooting

### Routes not working (404 errors)
- Ensure `.htaccess` file is uploaded
- Check if `mod_rewrite` is enabled on Apache
- Verify file permissions

### Assets not loading
- Check if `assets` folder is uploaded completely
- Verify file paths in browser console
- Check if files have correct permissions (644)

### Build errors
- Run `npm install` before building
- Clear `node_modules` and reinstall if needed
- Check Node.js version compatibility

## Quick Deploy Script

You can create a script to automate the build and prepare files:

```bash
npm run build
# Then upload dist folder contents to Hostinger
```

## Post-Deployment Checklist

- [ ] All routes work correctly
- [ ] Images and assets load properly
- [ ] Forms and interactive elements work
- [ ] Mobile responsiveness verified
- [ ] SSL certificate active (HTTPS)
- [ ] Performance optimized

