import fs from 'fs'
import path from 'path'
import { imageSize } from 'image-size'

// Local replacement for the unmaintained `rehype-img-size` package, which is pinned to the
// vulnerable image-size 1.x. Same behaviour: sets width/height on local <img> elements so the
// layout does not jump while images load. Remote URLs are left alone.
const absolutePathRegex = /^(?:[a-z]+:)?\/\//

function getImageSize(src, dir) {
  if (absolutePathRegex.test(src)) return

  // Treat `/` as a relative path, according to the server
  const shouldJoin = !path.isAbsolute(src) || src.startsWith('/')
  const filePath = dir && shouldJoin ? path.join(dir, src) : src

  return imageSize(fs.readFileSync(filePath))
}

function visit(node, fn) {
  fn(node)
  if (node.children) node.children.forEach((child) => visit(child, fn))
}

export default function rehypeImgSize(options) {
  const dir = (options || {}).dir

  return (tree) => {
    visit(tree, (node) => {
      if (node.type === 'element' && node.tagName === 'img') {
        const dimensions = getImageSize(node.properties.src, dir) || {}
        node.properties.width = dimensions.width
        node.properties.height = dimensions.height
      }
    })
  }
}
