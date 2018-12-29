import { h, render } from '@composi/core'
import { IdeasNeverCease } from '../views/inc'
import { actions } from './actions'

// Initial state for program.
const state = 'home'

//  P R O G R A M
export const program = {
  init() {
    return [state];
  },
  view(state, send) {
    return render(<IdeasNeverCease {...{ state, send }} />, document.body);
  },
  update(state, msg) {
    return actions(state, msg)
  }
};
