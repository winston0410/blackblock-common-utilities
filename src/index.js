const slugify = (text) => encodeURIComponent(text).toLowerCase()

export {
  when,
  defaultWhen,
  defaultWhenEmpty,
  valueWhenEmpty,
  showIfValueExist,
  slugify
} from './_Main.js'
