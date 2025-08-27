import type { PhrasingContent, Root } from 'mdast'
import { toString as mdastToString } from 'mdast-util-to-string'
import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'
import { h as _h, type Properties } from 'hastscript'
import type { Paragraph as P } from 'mdast'

/** From Astro Starlight: Function that generates an mdast HTML tree ready for conversion to HTML by rehype. */
function h(el: string, attrs: Properties = {}, children: any[] = []): P {
  const { properties, tagName } = _h(el, attrs)
  return {
    children,
    data: { hName: tagName, hProperties: properties },
    type: 'paragraph',
  }
}

const remarkCharacterDialogue: Plugin<[{ characters: Record<string, string> }], Root> =
  (opts) => (tree) => {
    // Type guard to check if a string is a valid character dialogue key
    function isCharacterDialogue(s: string): s is keyof typeof opts.characters {
      return opts.characters.hasOwnProperty(s) && opts.characters[s] !== undefined
    }

    // Do nothing if no characters are defined
    if (!opts.characters || Object.keys(opts.characters).length === 0) {
      return
    }

    visit(tree, (node, index, parent) => {
      if (!parent || index === undefined || node.type !== 'containerDirective') return

      const characterName = node.name
      if (!isCharacterDialogue(characterName)) return

      let title: string = characterName
      let titleNode: PhrasingContent[] = [{ type: 'text', value: title }]

      // Check if there's a custom title
      const firstChild = node.children[0]
      if (
        firstChild?.type === 'paragraph' &&
        firstChild.data &&
        'directiveLabel' in firstChild.data &&
        firstChild.children.length > 0
      ) {
        titleNode = firstChild.children
        title = mdastToString(firstChild.children)
        // The first paragraph contains a custom title, we can safely remove it.
        node.children.splice(0, 1)
      }

      // Do not change prefix to AD, ADM, or similar, adblocks will block the content inside.
      const admonition = h(
        'aside',
        {
          'aria-label': `Character dialogue: ${title}`,
          class: 'character-dialogue',
          'data-character': characterName,
        },
        [
          // h('p', { class: 'admonition-title', 'aria-hidden': 'true' }, [...titleNode]),
          h('img', {
            class: 'character-dialogue-image',
            alt: title,
            loading: 'lazy',
            src: opts.characters[characterName],
            width: 100,
          }),
          h('div', { class: 'character-dialogue-content' }, node.children),
        ],
      )

      parent.children[index] = admonition
    })
  }

export default remarkCharacterDialogue
