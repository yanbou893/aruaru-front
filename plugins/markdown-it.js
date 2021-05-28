const Prism = require('prismjs')
require('prismjs/components/prism-typescript')  // ※1
require('prismjs/components/prism-diff')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-json')
require('prismjs/components/prism-graphql')

const md = require('markdown-it')({
  html: true,
  linkify: true,
  breaks: true,
  typography: true,
  highlight (str, lang) { // ※2
    if (lang && Prism.languages[lang]) {
      try {
        return `<pre class="language-${lang}"><code>${Prism.highlight(str, Prism.languages[lang], lang)}</code></pre>`
      } catch (e) {}
    }
    return `<pre class="language-plain"><code>${md.utils.escapeHtml(str)}</code></pre>`
  }
})

export default (_context, inject) => {
  const defaultRender = md.renderer.rules.link_open || function (tokens, idx, options, _env, self) {
    return self.renderToken(tokens, idx, options)
  }

  md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
    if (tokens[idx].attrs[0][1].match('http')) {
      const tIdx = tokens[idx].attrIndex('target')
      if (tIdx < 0) {
        tokens[idx].attrPush(['target', '_blank'])
      } else {
        tokens[idx].attrs[tIdx][1] = '_blank'
      }

      const rIdx = tokens[idx].attrIndex('rel')
      if (rIdx < 0) {
        tokens[idx].attrPush(['rel', 'noopener noreferrer'])
      } else {
        tokens[idx].attrs[rIdx][1] = 'noopener noreferrer'
      }
    }
    return defaultRender(tokens, idx, options, env, self)
  }

  inject('md', md)
}