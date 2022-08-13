<p align='center'>
  <img src="src/images/iste_logo_hollow.svg" alt="ISTE LOGO">
  </p>
<h1 align='center'>ISTE NITH</h1>

## Setting Up

- Install `yarn`
  Ubuntu\Debian:
  `sudo apt install yarn`
  Arch:
  `sudo pacman -S yarn nodejs`

- Install Gatsby
  `sudo yarn install gatsby-cli`

- clone this repository
  `https://github.com/istenith/istenith.github.io.git`

- `cd istenith.github.io`

- Install all the dependencies
  `yarn install`

- Run a Development server
  `gatsby develop` or `yarn start`
  the server runs on port:8000 access it from your browser at:
  `https:\\localhost:8000`
  for GraphQl editor:
  `https:\\localhost:8000\__graphql`

## Folder Structure

```
|-- LICENSE
|-- README.md
|-- content           ------>this folder contains the .md files
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

Fork this repository and clone it as mentioned above
Create a new branch whenever you want to add a new feature and file a PR from that branch only. If the PR is accepted then delete that from locally and rebase your master branch with upstream:
in the master branch:
`git pull upstream --rebase master`

## Styling

The project is currently set up to support both CSS ans SASS. It is strongly recommended to use SASS always.
Use inline styling fot components if you can get away with it but feel free to make a separate SASS module and import it into your component.
Try not to duplicate the style properties use the power of inheritance!

Typography.js takes care of the fonts throughout the website see `src/utils/typography.js`. Predefined themes are also available for moe information refer to the [docs](https://kyleamathews.github.io/typography.js/)!

## Troubleshooting

I have not encountered any major error till now except this one
`Internal watch failed: ENOSPC: System limit for number of file watchers reached`

Fix: `sudo echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`

Since this occurred fairly often I made an alias for this in my `.zshrc`

## Tutorials

The [Official Gatsby Documentation](https://www.gatsbyjs.org/tutorial/) is the best resource for getting started with Gatsby and understand the basics.

[The Great Gatsby Boot-Camp](https://www.youtube.com/watch?v=8t0vNu2fCCM&t=11105s)
