# [mackenz.tokyo](https://mackenz.tokyo)
Simple site for music stuff built with 11ty/eleventy

## General concept

A website made to present my music in a way that is interesting, which both embraces old ways of web design while also stretching the expectations of a simple website.

How much can be done with simple tweaks to HTML and CSS, in an effort to retain the site's status as a static-hosted site?

## Design approach

Simplicity is the top priority.

One thing I really want to do, after being inspired at a hat shop near my apartment, is to collect some nonsensical English phrases (e.g. "There are better things I can be doing" or "Don't Die Before Triyng [sic]") and stick them on the site's pages like stickers. An early 2000s throwback sort of feeling. If there is a way I can randomize which ones show up on a page without needing the backend server to do a lot of work, that would be even better.

Spontaneous action is also something I want to emphasize on the site. It is meant to be a creative zone and I want to tap that creative energy in the way the site functions. All this while keeping that top priority, the end user should not feel like the site is hard to navigate and it shouldn't be too much of a burden to upkeep.


## Installation & Using Eleventy

[Here is a link to the eleventy docs.](https://www.11ty.dev/docs/)

Initial install:
```sh
npm init -y
npm install @11ty/eleventy
```

Building + serving the site:
```sh
npx eleventy --serve
```

There are some aspects of working with eleventy that are somewhat obscure. Such as deeper customization, using other templating languages, etc. Even though it is quite extensible, you will still need to dig into the docs to figure out the appropriate way to implement these changes.

For now, my big goal is to use TailwindCSS or SCSS to add color and shapes to my site. The docs will be helpful at getting the proper pieces in place for reliably using CSS with the templates.

## Deployment Pipeline

The repo contains `wrangler.toml` and `worker.js` to assist in deploying the site to a Cloudflare Worker.

In Cloudflare, we pull in the GitHub repo and setup the environment. Every update to the repo's `master` branch kicks off a new build in Cloudflare.

`npm run build` - produces the build by using the build command configured in `package.json`
`npx wrangler deploy` - runs wrangler on the Cloudflare deployment pipeline to get the assets where they belong

`worker.js` - tells the Cloudflare worker what its job is (very simple work)

`wrangler.toml` - configures wrangler so it can wrangle the site into a usable form for the worker to serve

## Eleventy plugins

### eleventy-img

I am using this plugin to process images. I'm not sure if I really need it or not, it may be useful in the long term. I can always prune it if I find it to not be very beneficial.