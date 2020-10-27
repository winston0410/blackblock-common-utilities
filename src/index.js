const slugify = (text) => encodeURIComponent(text).toLowerCase()

export {
  when,
  defaultWhen,
  defaultWhenEmpty,
  valueWhenEmpty,
  showIfValueExist,
  returnIf,
  isNil
} from './_Main.js'

export {
  slugify
}
