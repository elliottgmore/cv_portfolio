# Welcome to your project

## How can I edit this code?

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?
### Deploy to GitHub Pages
This project is configured for GitHub Pages deployment using "Deploy from a branch":

1. **Make changes** to your code
2. **Build the project**: `npm run build`
3. **Copy built files to docs**: `cp -r dist/* docs/`
4. **Commit all changes** including the updated `dist` and `docs` folders: `git add . && git commit -m "Update site"`
5. **Push to main branch**: `git push origin main`
6. **GitHub Pages automatically serves** the updated site from the `docs` folder

**Configuration**: 
- The project includes the correct base path (`/cv_portfolio/`) for GitHub Pages
- The `.nojekyll` file prevents Jekyll processing
- The `docs` folder contains a copy of built files for GitHub Pages deployment
