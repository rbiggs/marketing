import { Msg } from './tagged-union'


// Define actions for program update method.
export function actions(state, msg) {
  return Msg.match(msg, {
    'Home': () => {
      return ['home']
    },
    'About': () => {
      return ['about']
    },
    'Projects': () => {
      return ['projects']
    },
    'Contact': () => {
      return ['contact']
    }
  })
}
