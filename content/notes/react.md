---
slug: react
date: 2019-10-28
title: 'React'
published: true
# banner: './banner.png'
categories:
- JavaScript
---

- [awesome-react](https://github.com/enaqx/awesome-react)
- [create-react-app](https://github.com/facebook/create-react-app)
  - [deployment to github pages](https://create-react-app.dev/docs/deployment/#github-pages)
- [react-fns](https://github.com/jaredpalmer/react-fns)
- [react-howto](https://github.com/petehunt/react-howto)
- [The Most Common XSS Vulnerability in React.js Applications](https://medium.com/node-security/the-most-common-xss-vulnerability-in-react-js-applications-2bdffbcc1fa0)

## Conventions

- One-way data flow
- Single state obj
- setState
- render
- handleEvent

## Patterns

### Display loading indicator until child component(s) have rendered

- Include child loading indicator component (render until data is loaded)
- For web, use CSS to hide loading indicator component if is not the only child:

```css
.parent .loading-component:not(:only-child) {
	display: none;
}
```
