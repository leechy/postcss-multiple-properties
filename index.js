let postcss = require('postcss')

module.exports = postcss.plugin('postcss-multiple-properties', () => {
  return root => {
    root.walkRules(rule => {
      rule.walkDecls(/,/, decl => {
        decl.prop.split(',')
          .forEach(prop => rule.insertBefore(
            decl,
            decl.clone({ prop: prop.trim() })
          ))
        decl.remove()
      })
    })
  }
})
