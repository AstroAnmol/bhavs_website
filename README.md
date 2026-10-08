# Bhavini Jeloka — Academic Portfolio Website

Personal academic portfolio website for Bhavini Jeloka, PhD researcher in Machine Learning at Georgia Institute of Technology.

## 🌐 Live Site
> Deploy to GitHub Pages at `https://[username].github.io`

## 📁 File Structure

```
bhavs_website/
├── index.html           # Homepage (hero, about, news, publications, contact)
├── publications.html    # Full publications list with filters
├── projects.html        # Research projects + collaborators
├── css/
│   ├── style.css        # Shared design system (variables, nav, buttons, etc.)
│   ├── index.css        # Homepage-specific styles
│   ├── publications.css # Publications page styles
│   └── projects.css     # Projects page styles
├── js/
│   └── main.js          # Shared JavaScript (nav, animations, filters)
└── assets/
    ├── avatar.png        # Profile photo (replace with real photo!)
    └── cv.pdf            # CV (add your PDF here)
```

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repo named `[yourusername].github.io`
2. Push all files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial academic portfolio site"
   git remote add origin https://github.com/[username]/[username].github.io.git
   git push -u origin main
   ```
3. Go to **Settings → Pages** → Source: `Deploy from branch`, Branch: `main`, Folder: `/ (root)`
4. Your site will be live at `https://[username].github.io` in ~1 minute!

## ✏️ Customization Checklist

### Must Update
- [ ] Replace `assets/avatar.png` with Bhavini's real photo
- [ ] Add `assets/cv.pdf` (downloadable CV)
- [ ] Update all social links in `index.html` (Scholar, GitHub, LinkedIn, Email)
- [ ] Update Google Scholar profile URL in `publications.html`

### Nice to Update
- [ ] Add real DOI/arXiv/PDF links to each publication
- [ ] Update the About section with the actual undergrad institution
- [ ] Add real project GitHub links
- [ ] Update collaborator details with real profile links

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#FAF8F3` (warm ivory) |
| Accent | `#C4704F` (terracotta) |
| Secondary | `#7A9E7E` (sage green) |
| Text | `#2C2826` (warm charcoal) |
| Serif font | Lora |
| Sans font | Inter |
