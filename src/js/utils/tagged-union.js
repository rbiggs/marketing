import { union } from '@composi/core'



// Create tagged union for actions.
export const Msg = union(['Home', 'About', 'Projects', 'Contact'])
