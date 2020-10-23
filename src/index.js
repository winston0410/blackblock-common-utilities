const slugify = (text) => encodeURIComponent(text).toLowerCase()

export {
  when,
  defaultWhen,
  defaultWhenEmpty,
  valueWhenEmpty,
  showIfValueExist,
  returnIf
} from './_Main.js'

export {
  slugify
}
