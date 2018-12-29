import { h, render, run, union } from '@composi/core'
import { Router } from '@composi/router'



//  U T I L S
import Footer from "./components/footer";
import Main from "./components/main";
import Navigation from "./components/navigation";




//  H E L P E R

function IdeasNeverCease({ state }) {

  return (
    <main id="app">
      <header class="header">
        <div class="inner-wrap">
          <h1 class="header__logo">
            <a href="/" title="Ideas Never Cease homepage">Ideas Never Cease</a>
          </h1>

          <Navigation {...{ state }} />
        </div>
      </header>

      <Main {...{ state }} />

      <Footer />
    </main>
  );
}

// Create tagged union for actions.
const Msg = union(['Home', 'About', 'Projects', 'Contact'])

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

// Initial state for program.
const state = 'home'

//  P R O G R A M
const program = {
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

run(program);




// Create instance of Router:
const router = Router()

// Define paths to use:
export default router([
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
