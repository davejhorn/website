# Dave Horn Professional Website

A responsive, single-page professional portfolio designed for GitHub Pages.

## Files

- `index.html`: website content and structure
- `styles.css`: layout, responsive design, colors, and typography
- `script.js`: mobile navigation, current year, and subtle reveal animation
- `.nojekyll`: tells GitHub Pages to publish the files as-is

## Publish with GitHub Pages

1. Sign in to GitHub and create a new **public** repository. A good name is `dave-horn` or `professional-site`.
2. Extract the downloaded ZIP file.
3. In the new repository, select **Add file > Upload files**.
4. Upload `index.html`, `styles.css`, `script.js`, and `.nojekyll`. These files must be at the top level of the repository, not inside another folder.
5. Select **Commit changes**.
6. Open **Settings > Pages**.
7. Under **Build and deployment**, select **Deploy from a branch**.
8. Select the `main` branch and the `/ (root)` folder, then save.
9. GitHub will display the published site address in the Pages settings after deployment completes.

## Edit the site

- Change text in `index.html`.
- Change colors at the top of `styles.css` under `:root`.
- Replace the email address in both `mailto:` links if desired.
- To add a downloadable resume, place a PDF named `Dave-Horn-Resume.pdf` beside `index.html`, then add this link where desired:

```html
<a class="button button-secondary" href="Dave-Horn-Resume.pdf" download>Download resume</a>
```

## Recommended before publishing

- Review every metric and date for accuracy.
- Decide whether you want your public email address visible.
- Keep your street address and phone number off the public site unless you have a specific reason to publish them.
- Add a professional headshot later if desired. The current monogram is intentional and works without one.
- Export your resume as PDF before adding it. Do not publish the editable Word version.

## Optional custom domain

Once the site is published, GitHub Pages settings also provides a **Custom domain** field. Purchase a domain from a registrar, follow that registrar's DNS instructions for GitHub Pages, and enter the domain in the Pages settings.
