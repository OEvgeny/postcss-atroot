module.exports = () => {
  return {
    postcssPlugin: 'postcss-atroot',
    AtRule: {
      'at-root': function (rule) {
        // Find first node from root to move child nodes after it
        let p = rule
        while (p && p.parent && p.parent.type !== 'root') {
          p = p.parent
        }

        rule.root().insertBefore(p, rule.nodes)
        rule.remove()
      }
    }
  }
}

module.exports.postcss = true
