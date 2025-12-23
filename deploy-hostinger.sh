#!/bin/bash

echo "🚀 Building project for Hostinger deployment..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📦 Files ready for upload in 'dist' folder:"
    echo "   - index.html"
    echo "   - .htaccess (for React Router)"
    echo "   - assets/ (all static files)"
    echo ""
    echo "📋 Next steps:"
    echo "   1. Login to Hostinger hPanel/cPanel"
    echo "   2. Open File Manager"
    echo "   3. Navigate to public_html folder"
    echo "   4. Upload ALL contents from the 'dist' folder"
    echo "   5. Ensure .htaccess file is uploaded"
    echo "   6. Visit your domain to verify"
    echo ""
    echo "💡 Tip: You can also use FTP to upload the dist folder contents"
else
    echo "❌ Build failed! Please check errors above."
    exit 1
fi

