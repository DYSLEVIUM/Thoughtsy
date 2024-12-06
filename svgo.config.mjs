const preset = [
  'removeDoctype',
  'removeXMLProcInst',
  'removeComments',
  'removeMetadata',
  'removeEditorsNSData',
  'cleanupAttrs',
  'mergeStyles',
  'inlineStyles',
  'minifyStyles',
  'cleanupIds',
  'removeUselessDefs',
  'cleanupNumericValues',
  'convertColors',
  'removeUnknownsAndDefaults',
  'removeNonInheritableGroupAttrs',
  'removeUselessStrokeAndFill',
  'removeDimensions',
  'cleanupEnableBackground',
  'removeHiddenElems',
  'removeEmptyText',
  'convertShapeToPath',
  'convertEllipseToCircle',
  'moveElemsAttrsToGroup',
  'moveGroupAttrsToElems',
  'collapseGroups',
  'convertPathData',
  'convertTransform',
  'removeEmptyAttrs',
  'removeEmptyContainers',
  'removeUnusedNS',
  'mergePaths',
  'sortAttrs',
  'sortDefsChildren',
  'removeTitle',
  'removeDesc',
]

export default {
  plugins: [
    ...preset.map(name => ({
      name,
      params: {
        floatPrecision: 3,
        transformPrecision: 5,
        convertToZ: true,
        removeUseless: true,
      },
    })),
    {
      name: 'addTrailingWhitespace',
      fn() {
        return {
          root: {
            exit(root) {
              root.children.push({type: 'text', value: '\n'})
              return root
            },
          },
        }
      },
    },
  ],
}
