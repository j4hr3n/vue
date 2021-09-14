import { h } from 'vue'

const AccessibleLoading = h('span', { role: 'progressbar', 'aria-valuenow': 0, 'aria-valuetext': 'Laster...', class: 'sr-only' })

export default {
  name: 'fButton',
  props: {
    primary: Boolean,
    secondary: Boolean,
    negative: Boolean,
    utility: Boolean,
    quiet: Boolean,
    small: Boolean,
    link: Boolean,
    pill: Boolean,
    loading: Boolean,
    href: String,
    label: String
  },
  setup: (props, { slots, attrs }) => () => [
    h(props.href ? 'a' : 'button', {
      ...attrs,
      class: {
        'button': true,
        // primary buttons
        'button--primary': props.primary && !props.negative,
        'button--destructive': props.primary && props.negative,
        // quiet
        'button--flat': (props.secondary || (!props.negative && !props.utility)) && props.quiet,
        'button--destructive-flat': props.negative && props.quiet,
        'button--utility-flat': props.utility && props.quiet,
        // others
        'button--small': props.small,
        'button--utility': props.utility && !props.quiet,
        'button--link': props.link,
        'button--pill': props.pill,
        'button--in-progress': props.loading,
        [attrs.class]: true
      },
      href: props.href,
      type: props.href ? undefined : attrs.type || 'button'
    }, props.label || (slots.default && slots.default())),
    props.loading ? AccessibleLoading : null
  ]
}
