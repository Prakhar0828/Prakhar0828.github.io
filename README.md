# My GitHub Pages Website

A beautiful, responsive static website designed for GitHub Pages hosting. Features modern design, smooth animations, and mobile-first responsive layout.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Loading**: Optimized for performance and quick page loads
- **Contact Form**: Interactive contact form with validation
- **Smooth Scrolling**: Enhanced navigation experience
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Cross-browser Compatible**: Works on all modern browsers

## 📁 File Structure

```
github_pages_demo/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🛠️ Setup Instructions

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
3. Make it public

### 2. Upload Your Files

**Option A: Using GitHub Web Interface**
1. Clone or download this repository to your local machine
2. Go to your new GitHub repository
3. Click "Add file" → "Upload files"
4. Drag and drop all the files (`index.html`, `styles.css`, `script.js`)
5. Commit the changes

**Option B: Using Git Command Line**
```bash
# Clone your repository
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io

# Copy the website files to this directory
# (Copy index.html, styles.css, script.js from this project)

# Add and commit files
git add .
git commit -m "Initial website setup"
git push origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section (in the left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### 4. Access Your Website

Your website will be available at: `https://yourusername.github.io`

It may take a few minutes for the changes to appear.

## 🎨 Customization

### Updating Content

1. **Title and Branding**: Edit the `<title>` tag and logo text in `index.html`
2. **Hero Section**: Update the main heading and subtitle in the hero section
3. **About Section**: Modify the description and features list
4. **Projects**: Replace the placeholder projects with your actual projects
5. **Contact Information**: Update email, GitHub, and LinkedIn links

### Changing Colors

The website uses a blue color scheme. To change colors, edit the CSS variables in `styles.css`:

```css
/* Primary colors */
--primary-color: #2563eb;
--secondary-color: #667eea;
--accent-color: #764ba2;
```

### Adding New Sections

1. Add the HTML structure in `index.html`
2. Add corresponding CSS styles in `styles.css`
3. Add any JavaScript functionality in `script.js`

### Adding Images

1. Create an `images/` folder in your repository
2. Upload your images to this folder
3. Reference them in your HTML: `<img src="images/your-image.jpg" alt="Description">`

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized typography for small screens
- Fast loading on mobile networks

## 🔧 Advanced Features

### Form Handling

The contact form currently shows a success message. To make it functional:

1. **Using Formspree** (Free service):
   ```html
   <form action="https://formspree.io/f/your-form-id" method="POST">
   ```

2. **Using Netlify Forms** (if hosting on Netlify):
   ```html
   <form name="contact" netlify>
   ```

3. **Custom Backend**: Replace the form handling in `script.js` with your own API calls

### Analytics

Add Google Analytics by including this code in the `<head>` section of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### SEO Optimization

1. Update the `<title>` and `<meta>` tags in `index.html`
2. Add Open Graph tags for social media sharing
3. Create a `sitemap.xml` file
4. Add structured data markup

## 🐛 Troubleshooting

### Website Not Loading
- Check that your repository is public
- Ensure the repository name matches `yourusername.github.io`
- Wait a few minutes for GitHub Pages to build

### Styling Issues
- Clear your browser cache
- Check that all CSS files are properly linked
- Verify file paths are correct

### Form Not Working
- Check browser console for JavaScript errors
- Ensure all required fields are filled
- Verify form validation is working

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

If you need help setting up your GitHub Pages website, check out:
- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub Pages Help](https://help.github.com/categories/github-pages-basics/)

---

**Happy coding! 🎉** 