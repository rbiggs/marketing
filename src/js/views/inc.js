import { h } from '@composi/core'
//  U T I L S
import Footer from "../components/footer";
import Main from "../components/main";
import Navigation from "../components/navigation";




//  H E L P E R

export function IdeasNeverCease({ state }) {

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
