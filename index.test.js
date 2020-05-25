let postcss = require('postcss')

let plugin = require('./')

async function run (input, output, opts) {
  let result = await postcss([plugin(opts)]).process(input, { from: undefined })
  expect(result.css).toEqual(output)
  expect(result.warnings()).toHaveLength(0)
}

it('create multiple properties with the same value', async () => {
  await run(
    'a { top,left,padding: 0; }',
    'a { top: 0; left: 0; padding: 0; }',
    { }
  )
})

it('hadle more than one declaration with different values', async () => {
  await run(
    'a { top,left,padding: 0; margin,bottom: 10px; }',
    'a { top: 0; left: 0; padding: 0; margin: 10px; bottom: 10px; }',
    { }
  )
})

/**
 * Requires custom parser, since the default one is not suited
 * for more than one property name for a declaration

it('hadle whitespace between multiple properties', async () => {
  await run(
    'a { top, left, padding: 0; }',
    'a { top: 0; left: 0; padding: 0; }',
    { }
  )
})

*/
