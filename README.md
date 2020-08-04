#ISTE 2020 website

For a detailes list of all the desired features refer to [this discussion](https://github.com/orgs/istenith/teams/web-dev/discussions/1)

##Setting Up
- Install `npm`
    Ubuntu\Debian:
    `sudo apt install npm`
    Arch:
    `sudo pacman -S npm`

- Install Gatsby
    `sudo npm install gatsby`

- clone this repository
    `git clone `

- `cd `

- Install all the dependencies
    `npm install`

- Run a Development server
    `gatsby develop`
    the server runs on port:8000 access it from your browser at:
    `https:\\localhost:8000`
    for GraphQl editor:
    `https:\\localhost:8000\__graphql`

##Folder Structure
```
|-- LICENSE
|-- README.md
|-- content           ------>this folder containst the .md files
|   |-- about.md
|   |-- media
|   |   |-- horses.jpg
|   |   `-- meme.jpg
|   `-- projects
|       |-- graphics-card.md
|       `-- lost-lander.md
|-- gatsby-browser.js
|-- gatsby-config.js  ------>main Gatsby config file define ur plugins here
|-- gatsby-node.js    ------>Gatsby Node API for making slugs and linking Templates  
|-- gatsby-ssr.js
|-- package-lock.json
|-- package.json
`-- src
    |-- components    ------>Folder to contain all the react components
    |   |-- header.js
    |   |-- header.module.scss
    |   |-- layout.js
    |   |-- projects.js
    |   `-- seo.js
    |-- images        ------>For images to be used in the website
    |   `-- iste-logo-blue.png
    |-- pages         ------>Put all the pages you define here  
    |   |-- 404.js
    |   |-- index.js
    |   `-- page-2.js
    |-- templates     ------>Template for rendering the .md files
    |   `-- project.js
    `-- utils         ------>Typography library settings
        `-- typography.js
```

##Trouble Shooting
I have not encountered any major error till now except this one
`Internal watch failed: ENOSPC: System limit for number of file watchers reached`

Fix: `sudo echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

Since this occured fairely often I made an alias for this in my `.zshrc`

