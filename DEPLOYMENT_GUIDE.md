# 🚀 Deploy Your Zola Blog to GitHub Pages

## Step-by-Step Guide

### 1. **Prepare Your Repository**

Make sure your repository structure looks like this:

```
personal-blog/
├── .github/
│   └── workflows/
│       └── build.yml ✅ (Already configured)
├── blog/             ← Your Zola blog
│   ├── config.toml
│   ├── content/
│   ├── templates/
│   └── static/
└── README.md
```

### 2. **Push to GitHub**

```bash
# Add all files
git add .

# Commit changes
git commit -m "Add Zola blog with GitHub Pages configuration"

# Push to main branch
git push origin main
```

### 3. **Enable GitHub Pages**

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 4. **Configure Custom Domain**

To use `github.erfuuan.io`:

1. **Add CNAME file**:

   ```bash
   echo "github.erfuuan.io" > blog/static/CNAME
   ```

2. **Configure DNS**: Point `github.erfuuan.io` to GitHub Pages:

   - Add CNAME record: `github.erfuuan.io` → `erfuuan.github.io`

3. **Enable HTTPS**: GitHub will automatically provide SSL certificate

### 5. **Deploy**

The deployment will happen automatically when you push to the `main` branch. You can also trigger it manually:

1. Go to **Actions** tab in your repository
2. Click on **Deploy to Pages** workflow
3. Click **Run workflow** button

### 6. **Access Your Blog**

Once deployed, your blog will be available at:

```
https://github.erfuuan.io/
```

## 🔧 Configuration Details

### **GitHub Actions Workflow** (`/.github/workflows/build.yml`)

- ✅ Installs Zola v0.19.2
- ✅ Builds your blog from `blog/` directory
- ✅ Deploys to GitHub Pages
- ✅ Runs on every push to `main` branch

### **Zola Configuration** (`/blog/config.toml`)

- ✅ Base URL set to custom domain
- ✅ Persian language support
- ✅ RSS feeds enabled
- ✅ Tags system configured

## 🎨 Features Included

Your deployed blog will have:

- **Persian Interface**: All text in Farsi
- **Orange/Dark Theme**: Warm, cozy aesthetic
- **Header Image**: Study room photo
- **About Page**: With email and social media links
- **Tags System**: Both Persian and English tags
- **Archive Page**: Beautiful timeline layout
- **System Design Article**: Complete 30-concept guide

## 🔄 Updating Your Blog

To add new content or make changes:

1. **Edit locally**:

   ```bash
   cd blog
   zola serve  # Test locally
   ```

2. **Add new posts**:

   ```bash
   # Create new markdown file in content/
   touch content/my-new-post.md
   ```

3. **Commit and push**:

   ```bash
   git add .
   git commit -m "Add new blog post"
   git push origin main
   ```

4. **Automatic deployment**: GitHub Actions will build and deploy automatically!

## 🛠️ Troubleshooting

### **Build Fails?**

- Check the **Actions** tab for error details
- Ensure all markdown files have proper front matter (`+++`)
- Verify file paths are correct

### **Site Not Loading?**

- Wait 5-10 minutes after deployment
- Check if GitHub Pages is enabled in Settings
- Verify the base URL in `config.toml`
- Check DNS settings for custom domain

### **Styling Issues?**

- Clear browser cache
- Check if static files are in correct locations
- Verify theme files are present

## 📱 Custom Domain Setup

### **DNS Configuration**

Add these DNS records to your domain provider:

```
Type: CNAME
Name: github
Value: erfuuan.github.io
```

### **GitHub Pages Settings**

1. Go to repository **Settings** → **Pages**
2. Under **Custom domain**, enter: `github.erfuuan.io`
3. Check **Enforce HTTPS**
4. Save settings

## 🎯 Next Steps

1. **Push your code** to GitHub
2. **Enable GitHub Pages** in repository settings
3. **Configure DNS** for custom domain
4. **Wait for deployment** (5-10 minutes)
5. **Visit your blog**: `https://github.erfuuan.io/`
6. **Share your blog** with the world! 🌍

---

**Need help?** Check the GitHub Actions logs in the **Actions** tab of your repository.
