const prefix = Date.now().toString(36).slice(5, 7) + Math.random().toString(36).slice(2, 5)

export const id = { default: () => 'f-' + prefix }
export const absentProp = Symbol()
export { default as fClickable } from './f-clickable'
