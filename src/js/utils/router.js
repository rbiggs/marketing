import { Router } from '@composi/router'
import { program } from './program'
import { Msg } from './tagged-union'

// Create instance of Router:
export const router = Router()

// Define paths to use:
router([
  {
    path: "/",
    action: () => {
      program.send(Msg.Home())
    }
  },
  {
    path: "/about",
    action: () => {
      program.send(Msg.About())
    }
  },
  {
    path: "/projects",
    action: () => {
      program.send(Msg.Projects())
    }
  },
  {
    path: '/contact',
    action: () => {
      program.send(Msg.Contact())
    }
  }
])
