# node-server

> Node.js makes it easy to create a folder-based web server using JavaScript

## Links

- [Demo](https://node-server-563.herokuapp.com/) - Heroku, not GitHub Pages
- [Source](https://github.com/profcase/node-server)

## Requirements

- A browser (e.g., Chrome)
- A text editor (e.g., VS Code, or Notepad++, or Chrome)

## Benefits

- Folder-based
- Easy to write
- More practice with JavaScript
- Node.js non-blocking event loop supports many concurrent requests

## Recommended Install Option For Windows Users

- Add ["Open PowerShell here as Administrator"](https://www.tenforums.com/tutorials/60177-add-open-powershell-window-here-administrator-windows-10-a.html).
- Install [Chocolatey](https://chocolatey.org/) windows package manager

```Powershell
choco install nodejs -y
choco upgrade all -y
```

## OR Install Node.js the traditional way

1. Install the lastest LTS version from the Node.js website
2. Verify installation. Open Powershell in your working folder and run:

```PowerShell
node -v
npm -v
```

## Start your Server

Start your Server. See the package.json for configuring npm scripts.

```PowerShell
node server.js
```

## Open a Browser Client

Open a web browser and go to the URL: <http://127.0.0.1:3000/> or <http://localhost:3000/>.

## Modify and Restart

Make changes to the server logic. Use CTRL-C, CTRL-C to stop your server. Restart the server to see your changes.

## Optional: Install Nodemon to enable live updates

Install nodemon locally - this can be very helpful later. In the project folder, open PowerShell here as Administrator, install and check the version, and start with nodemon instead.

```PowerShell
npm install nodemon
nodemon -v
nodemon server.js
```

## Optional: Create a server from scratch

1. Create a folder for server-side code.
1. In the folder, create a file named server.js.
1. In the folder, open PowerShell and run npm init to generate a package.json with app information.

## Demo site hosted with Heroku web hosting service (free tier)

- [Heroku](https://www.heroku.com/)
- Create free account
- New / Create new app / enter a name / create app.
- Under app Deploy / Deployment method / select GitHub master branch to deploy when a new commit is pushed to master. Then "Enable Automatic Deploys".

## Terms

- Node.js platform
- npm (Node package manager)
- package.json
- <http://localhost:3002/> (<http://127.0.0.1:3002>)
- host
- port
- URI
- URL
- web server
- web service
- web client
- web request
- web response
- template literals (in JavaScript)
- embedded expressions (in template literals)

## Reference

- [About Node.js](https://nodejs.org/en/about/)

## See Also

- [More App Examples](https://profcase.github.io/web-apps-list/)
