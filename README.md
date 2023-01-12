<!-- Please update value in the {}  -->

<h1 align="center">Generate Random Quote</h1>

<div align="center">
  <h3>
    <a href="https://{https://quote.shipsrest.software/}">
      Demo
    </a>
    <span> | </span>
    <a href="https://{[Repo](https://github.com/SebasttianDaza/randomQuote)}">
      Solution
    </a>
    <span> | </span>
    <a href="https://{https://quote.shipsrest.software/}">
      Website
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Overview](#overview)
  - [Built With](#built-with)
- [How To Use](#how-to-use)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

![screenshot](/public/assest/image/imageRbdomQuo.png)

Website developed with ReactJS, React-Boostrap, Bootstrap, and that does request a API to get a random quote, also download the quote in a image and share in quote in social media too. There are many good practices with React like useCallback, Memo, useMemo and custom Hooks. It uses some Contexts to share state amound components.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

- [React](https://reactjs.org/)
- [CSS](https://developer.mozilla.org/en-US/)
- [Vercel](https://vercel.com/)
- [React Icons](https://react-icons.netlify.com/)
- [Vite](https://vitejs.dev/)
- [React-Bootstrap](https://react-bootstrap.github.io/)
- [Bootstrap](https://getbootstrap.com/)
- [API Quotable](https://github.com/lukePeavey/quotable)
- [html-to-image](https://github.com/bubkoo/html-to-image)


## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Node version v17.7.0 and npm 8.5.2 

# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

# Install environment with docker sebasttiandaza = name volume
# var/www/projects = path project
$ docker volume create --name=sebasttiandaza --opt type=none --opt device=/var/www/projects --opt o=bind
$ docker run --name ubuntusebasttian -it -v sebasttiandaza:/var/www/projects -p 3000:3000  ubuntu bash

# Enter in the container
$ docker exec -it ubuntusebasttian bash

# Look at section Docker Ubuntu and go back here

# Install dependencies
$ npm install

# Run the app
$ npm run dev
```

# Docker Ubuntu
``` bash
  # Update ubuntu
  $ apt update
  $ apt-get update

  # Install dependencies
  $ apt install apt-transport-https build-essential ca-certificates curl libssl-dev wget

  # Install nvm
  $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

  $ export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

  # Install node
  $ nvm install v17.7.0
  $ npm install --unsafe-perm=true --allow-root

  # Give permissions to the project
  $ chown -R root:root .

```

## Contact

- GitHub [@SebasttianDaza](https://github.com/SebasttianDaza)
- Twitter [@SebasttianDaza](https://twitter.com/SebasttianDaza)