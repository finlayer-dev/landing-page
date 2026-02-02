#!/bin/bash
echo "🔄 Initializing Git repository and pushing to GitHub..."

# Di chuyển đến thư mục dự án
cd "$(dirname "$0")"

# Kiểm tra xem đã có Git repository chưa
if [ ! -d ".git" ]; then
    echo "📁 Initializing new Git repository..."
    git init
fi

# Thêm tất cả các tệp
echo "📂 Adding files to Git..."
git add .

# Tạo commit đầu tiên
echo "💾 Creating commit..."
git commit -m "Initial commit"

# Cập nhật URL của remote repository - Thay USERNAME bằng tên người dùng GitHub của bạn
read -p "Enter your GitHub username: " username
git remote remove origin 2>/dev/null
git remote add origin "https://github.com/$username/landing-page.git"

# Push lên GitHub
echo "📤 Pushing to GitHub..."
git push -u origin main || git push -u origin master

echo "✅ Code pushed to GitHub successfully!"
echo "🚀 Now you can run ./deploy-gh-pages.sh to deploy to GitHub Pages"
