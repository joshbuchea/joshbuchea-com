# egghead.io creator MDX Blog Starter Project

This is based on Robin Wieruch's https://github.com/rwieruch/gatsby-mdx-blog-starter-project

Lots of nice pieces are also borrowed from Jason Lengstorf https://github.com/jlengstorf/lengstorf.com

A starter project in [Gatsby.js](https://www.gatsbyjs.org/) with [MDX](https://github.com/mdx-js/mdx).

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/eggheadio/gatsby-starter-egghead-blog)

## TODO

- [ ] Verify ALL THE THINGS
  - [ ] all posts/pages
  - [ ] all urls look good
  - [ ] no broken pages
- [ ] Link to domain joshbuchea.com ***
- [ ] Update newsletter form field placeholders
- [ ] Verify metadata
- [ ] Verify config
- [ ] Prepare repo (remove unused files, final edits, reset history, etc.)
- [ ] Maybe delete frontmatter placeholder
- [ ] Update blog theme colors?
- [ ] Add Edit on GitHub link
- [ ] Add konami code hook
- [ ] Maybe teach gatsby to read markdown files from `pages` directory?
- [ ] Open PRs on parent repo
  - [ ] Use google analytics id from config file in `gatsby-config.js`
  - [ ] Add `0.5rem` to submit button in footer form to resolve display issue (firefox only?)
- [x] Deploy to Netlify
- [x] Verify form works and cross-domain error is non-issue in production
- [x] Add google analytics id
- [x] Delete test post
- [x] Disable service worker
- [x] Generate icons/favicons (https://realfavicongenerator.net/)
- [x] Migrate all posts
- [x] Add Amazon disclosure statement to footer
- [x] Remove share article from pages
- [x] Create index page with notes grouped by category
- [x] Replace all instances of "blog" with "notes" (move posts from `blog` to `notes`)
  - [x] Rename directory `content/blog` to `content/notes`
  - [x] Replace any remaining mentions of "blog"
- [x] Update subscribe form to use mailchimp (TODO: verify it works)
- [x] Migrate images
- [x] Migrate all pages
- [x] Read markdown files from `content/pages` directory
- [x] Fix form vertical alignment display issue (button hangs below input fields)
- [x] Remove contact link from header nav
- [x] Remove facebook share link

## Features

- MDX: JavaScript/React in Markdown
- Prism.js: Syntax Highlighting
- Pagination
- Emotion
- Typography.js
- Self-hosted fonts ([Inter UI](https://rsms.me/inter/))
- Social media share buttons
- Site & Theme config files
- ConvertKit subscribe form (Formik and Yup)
- Placeholder illustrations by [Katerina Limpitsouni](https://twitter.com/ninalimpi) from [undraw.co](https://undraw.co/)

## [➞ Demo](https://egghead-gatsby-starter.netlify.com/)

## Setup

- `git clone git@github.com:eggheadio/gatsby-starter-egghead-blog.git`
- `cd gatsby-starter-egghead-blog`
- `yarn`
- `gatsby develop`
- visit http://localhost:8000

## Setup via Gatsby CLI

- `gatsby new gatsby-starter-egghead-blog git@github.com:eggheadio/gatsby-starter-egghead-blog.git`
- `cd gatsby-starter-egghead-blog`
- `yarn`
- `gatsby develop`
- visit http://localhost:8000
