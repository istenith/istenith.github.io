<p align="center"><img src="src/static/images/iste-logo.png" width="120px"><h1 align="center"> ISTE-NITH </h1> </p>

## Setting up
1. Install NodeJS & NPM on the system, can refer [this website](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac) for Windows/Mac, on Ubuntu\Debian `sudo apt-get install nodejs npm` and on Arch based distributuions with `sudo pacman -S nodejs npm`
`
2. Go to the project directory with `cd iste-2k23` and install the required dependencies with 
```
npm install
```
3. Run the development server with
```
npm start
```

## Folder Structure
```
.
├── package.json
├── package-lock.json
├── public
│   ├── cards.css
│   ├── events.css
│   ├── home.css
│   ├── index.html
│   ├── navbar.css
│   ├── particles.js
│   └── styles.css
├── README.md
├── src
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── components
│   │   ├── animatedCursor.jsx
│   │   ├── AnimatedRoutes.jsx
│   │   ├── BackgroundParticles.jsx
│   │   ├── ChatBot.jsx
│   │   ├── config
│   │   │   └── particles_config.js
│   │   ├── DarkMode
│   │   │   ├── DarkMode.css
│   │   │   ├── DarkMode.js
│   │   │   ├── Moon.svg
│   │   │   └── Sun.svg
│   │   ├── GalleryPageWrapper.jsx
│   │   ├── graphicAnimation.jsx
│   │   ├── homePageComponents
│   │   │   ├── aboutUs.jsx
│   │   │   ├── domains.jsx
│   │   │   ├── eventBrief.jsx
│   │   │   └── homeIntro.jsx
│   │   ├── ImageGallery.jsx
│   │   ├── navbar.jsx
│   │   └── particlesBackground.jsx
│   ├── CSS
│   │   └── ChatBot.css
│   ├── data
│   │   └── galleryData.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── pages
│   │   ├── blogPage.jsx
│   │   ├── eventsPage.jsx
│   │   ├── home.jsx
│   │   ├── ImageGalleryPage.jsx
│   │   └── membersPage.jsx
│   ├── reportWebVitals.js
│   ├── setupTests.js
│   └── static
│       ├── images
│       │   ├── events-background.jpg
│       │   ├── hult1.JPG
│       │   ├── iste-logo-blue.png
│       │   └── teamiste-jan2k23.webp
│       └── svgs
│           ├── design-animation.json
│           ├── finance-animation.json
│           ├── intro-animation-light.json
│           ├── istelogo.svg
│           ├── pr-animation.json
│           ├── resourceAnimation.json
│           └── tech-animation.json
└── yarn-error.log
```
## Contributing

- Fork the project to your github.

- Clone the Repository.

- Create a seperate ```feature``` branch by `git checkout -b 'featureBranch'`

- Commit your changes by `git commit -m 'amazingfeature'`

- Push the changes by `git push origin featureBranch`

- Wait for reviews :")

