# ISTE 2020 website

For a detailes list of all the desired features refer to [this discussion](https://github.com/orgs/istenith/teams/web-dev/discussions/1)

## Setting Up
- Install `npm`
    Ubuntu\Debian:
    `sudo apt install npm`
    Arch:
    `sudo pacman -S npm`

- Install Gatsby
    `sudo npm install gatsby`

- clone this repository
    `git clone https://github.com/istenith/website2020-21.git`

- `cd website2020-21`

- Install all the dependencies
    `npm install`

- Run a Development server
    `gatsby develop`
    the server runs on port:8000 access it from your browser at:
    `https:\\localhost:8000`
    for GraphQl editor:
    `https:\\localhost:8000\__graphql`

## Folder Structure
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

## Contributing
Create a new branch whenever you want to add a new feature and file a PR from that branch only. If the PR is accepted then delete that from locally and rebase your master branch with upstream:
in the master branch:
`git pull upstream --rebase master`

## Styling
The project is currently set up to support both CSS ans SASS. It is strongly reccomended to use SASS always.
Use inline styling fot components if you can get away with it but feel free to make a separate SASS module and import it into your component.
Try not to duplicate the style proberties use the power of inheritence!

Typography.js takes care of the fonts throughout the website see `src/utils/typography.js`. Predefined themes are also available for moe informations reffer to the [docs](https://kyleamathews.github.io/typography.js/)!


## Troublshooting
I have not encountered any major error till now except this one
`Internal watch failed: ENOSPC: System limit for number of file watchers reached`

Fix: `sudo echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

Since this occured fairely often I made an alias for this in my `.zshrc`

## Toutorials
The [Official Gatsby Ducumentation](https://www.gatsbyjs.org/tutorial/) is the best resourse for getting started with Gatsby and understand the basics.

[The Great Gatsby Bootcamp](https://www.youtube.com/watch?v=8t0vNu2fCCM&t=11105s)