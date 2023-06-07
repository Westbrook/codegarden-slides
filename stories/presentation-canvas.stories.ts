import { html, TemplateResult } from 'lit';
import '../src/p-canvas.js';
import '../src/p-slide.js';
import { a11y1, a11y2, built, comments, firefly, first, lazy, litReact, locator, microfontends, mweb, owc, psw1, psw2, react, react2, react3, scoped, shadow, shadow1, shadow2, shadow3a, shadow3b, slotted, swc, swc1, swc2, swc3, swc4, swc5, w3c } from './assets.js';

export default {
  title: 'PresentationCanvas',
  component: 'presentation-canvas',
  argTypes: {
    col: { control: 'number' },
    row: { control: 'number' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  col?: number;
  row?: number;
}

const Template: Story<ArgTypes> = ({col = 0, row = 0}: ArgTypes) => html`
  <style>
    :root {
      font-size: 4vh;
    }
    h1, h2, h3, h4, h5, h6 {
        font-weight: 800;
        letter-spacing: 1px;
        margin: 0;
    }
    h3 + h4 {
      line-height: 0.5;
    }
    h4 + h3 {
      margin-block-start: 1em;
    }
    .fixed-width {
      width: 60vw;
    }
    li {
      margin: 0.75em 0;
    }
    li.check::marker {
      content: '✅  ';
    }
    li.warning::marker {
      content: '⚠️  ';
    }
  </style>
  <p-canvas style="--show-col: ${col}; --show-row: ${row};">
    <p-slide style="--col: 0; --row: 0;">
      <h1>Scaling <span style="display: inline-block; translate: 0 -3vh;">up</span> and <span style="display: inline-block; translate: 0 3vh;">down</span> with Web Components</h1>
      <h2>And, sometimes, just the web...</h2>
      <hr style="width: 50%; margin: 1.5em auto 1em;border: 2px solid" />
      <p style="text-align:right">Westbrook Johnson<br/>Sr. Computer Scientist, Adobe</p>
    </p-slide>
    <p-slide style="--col: 0; --row: 1;">
      <div class="fixed-width">
        <h3>Agenda</h3>
        <ol style="line-height: 2">
          <li><strong>Base scale</strong>: app scale or bust
          <li><strong>Scaling down</strong>: quality ingreedients, quality apps
          <li><strong>Scaling up</strong>: measure twice, cut once (for every app)
          <li><strong>Between the apps</strong>: scaling with micro-frontends
          <li><strong>"Full-scale" apps</strong>: shipping outside your company
        </ol>
      </div>
    </p-slide>
    <p-slide style="--col: 1; --row: 0;">
      <h2>Bona fides</h2>
    </p-slide>
    <p-slide style="--col: 1; --row: 1;">
      <h3>Build these "slides" as Web Components</h3>
      <img style="width: 60vw; height: auto;" alt="Code sample for a slide in this presentation" src=${built} />
      <h4>What more could you want?</h4>
    </p-slide>
    <p-slide style="--col: 1; --row: 4;">
      <div class="fixed-width">
        <h3>W3C Web Component Community Group</h3>
        <h4>Chairperson</h4>
      </div>
      <img alt="QR Code linking to the W3C Web Component Community Group GitHub repo" slot="link" src=${w3c} />
    </p-slide>
    <p-slide style="--col: 1; --row: 3;">
      <div class="fixed-width">
        <h3>Open Web Components</h3>
        <h4>Core team memeber</h4>
      </div>
      <img alt="QR Code linking to open-wc.org" slot="link" src=${owc} />
    </p-slide>
    <p-slide style="--col: 1; --row: 2;">
      <div class="fixed-width">
        <h3>Modern Web</h3>
        <h4>Core team memeber</h4>
      </div>
      <img alt="QR Code linking to modern-web.dev" slot="link" src=${mweb} />
    </p-slide>
    <p-slide style="--col: 1; --row: 5;">
      <div class="fixed-width">
        <h3>First web component-centric GitHub commit</h3>
        <h4>Aug 9, 2014; insert naked baby photo here...</h4>
      </div>
      <img alt="QR Code linking to my first web component-centric commit on GitHub" slot="link" src=${first} />
    </p-slide>
    <p-slide style="--col: 1; --row: 6;">
      <div class="fixed-width">
        <h3>Spectrum Web Components</h3>
        <h4>Tech Lead</h4>
        <h4>Adobe</h4>
      </div>
      <img alt="QR Code linking to opesource.adobe.com/spectrum-web-components" slot="link" src=${swc} />
    </p-slide>
    <p-slide style="--col: 2; --row: 0;">
      <h2 style="filter: drop-shadow(0 0 1px #fff);">Photoshop</h2>
    </p-slide>
    <p-slide style="--col: 2; --row: 1;">
      <h2 style="filter: drop-shadow(0 0 1px #fff);">Photoshop Web</h2>
    </p-slide>
    <p-slide style="--col: 2; --row: 2;">
      <h2 style="filter: drop-shadow(0 0 1px #fff);">Photoshop Web</h2>
      <img alt="Screen shot of using Photshop Web" slot="staged" src=${psw1} />
    </p-slide>
    <p-slide style="--col: 2; --row: 3;">
      <div class="fixed-width">
        <h3>Custom Elements Locator</h3>
        <h4>Chrome plugin</h4>
      </div>
      <img alt="QR Code linking to the Custom Elements Locator Chrome plugin" slot="link" src=${locator} />
    </p-slide>
    <p-slide style="--col: 2; --row: 4;">
      <div class="fixed-width">
        <h3>Takeaway</h3>
        <p>You can see the custom elements used on a page with Custom Elements Locator</p>
        <p>🕵🏼</p>
      </div>
    </p-slide>
    <p-slide style="--col: 2; --row: 5;">
      <div class="fixed-width">
        <h3>Custom Elements Located</h3>
        <h4>88 custom elements 😲</h4>
      </div>
      <img alt="Custom Elements Locator display for PSWeb" slot="link" src=${psw2} />
    </p-slide>
    <p-slide style="--col: 2; --row: 6;">
      <ul style="columns: 4; font-size: 0.6em; padding: 0; list-style: none; font-family: monospace; line-height: initial">
        <li>&lt;overlay-trigger&gt;
        <li>&lt;psw-app&gt;
        <li>&lt;psw-app-context&gt;
        <li>&lt;psw-app-navbar&gt;
        <li>&lt;psw-color-picker-trigger&gt;
        <li>&lt;psw-combo-slider&gt;
        <li>&lt;psw-command-center-search&gt;
        <li>&lt;psw-command-center-search-bar&gt;
        <li>&lt;psw-command-center-search-wrapper&gt;
        <li>&lt;psw-custom-accordion-item&gt;
        <li>&lt;psw-custom-action-menu&gt;
        <li>&lt;psw-custom-slider&gt;
        <li>&lt;psw-doc&gt;
        <li>&lt;psw-doc-actions&gt;
        <li>&lt;psw-document-page&gt;
        <li>&lt;psw-feedbackmenu&gt;
        <li>&lt;psw-full-toolbar&gt;
        <li>&lt;psw-layer-actions&gt;
        <li>&lt;psw-layer-actions-arrange&gt;
        <li>&lt;psw-layer-bounds-properties&gt;
        <li>&lt;psw-layer-effects-properties&gt;
        <li>&lt;psw-layer-thumbnail&gt;
        <li>&lt;psw-layers-panel&gt;
        <li>&lt;psw-lazy-loader&gt;
        <li>&lt;psw-learn&gt;
        <li>&lt;psw-left-taskbar&gt;
        <li>&lt;psw-main-menu&gt;
        <li>&lt;psw-move-tool-settings-view&gt;
        <li>&lt;psw-null-actions&gt;
        <li>&lt;psw-panel-container&gt;
        <li>&lt;psw-panel-layer&gt;
        <li>&lt;psw-progress-toast&gt;
        <li>&lt;psw-properties-panel&gt;
        <li>&lt;psw-properties-panel-header&gt;
        <li>&lt;psw-selected-layers-blend-opacity&gt;
        <li>&lt;psw-stage&gt;
        <li>&lt;psw-system-theme&gt;
        <li>&lt;psw-taskbar&gt;
        <li>&lt;psw-toast-container&gt;
        <li>&lt;psw-toolbar-hover-panel&gt;
        <li>&lt;psw-toolsettingsbar&gt;
        <li>&lt;psw-tree-view&gt;
        <li>&lt;psw-tree-view-item&gt;
        <li>&lt;psw-unified-share-menu&gt;
        <li>&lt;psw-utility-nav&gt;
        <li>&lt;psw-video-trigger&gt;
        <li>&lt;psw-zoom-menu&gt;
        <li>&lt;sp-accordion&gt;
        <li>&lt;sp-action-button&gt;
        <li>&lt;sp-action-group&gt;
        <li>&lt;sp-action-menu&gt;
        <li>&lt;sp-avatar&gt;
        <li>&lt;sp-button&gt;
        <li>&lt;sp-divider&gt;
        <li>&lt;sp-field-label&gt;
        <li>&lt;sp-icon&gt;
        <li>&lt;sp-icon-checkmark100&gt;
        <li>&lt;sp-icon-chevron100&gt;
        <li>&lt;sp-icon-close-captions&gt;
        <li>&lt;sp-icon-corner-triangle300&gt;
        <li>&lt;sp-icon-full-screen&gt;
        <li>&lt;sp-icon-more&gt;
        <li>&lt;sp-icon-play&gt;
        <li>&lt;sp-icon-volume-three&gt;
        <li>&lt;sp-icon-web-pages&gt;
        <li>&lt;sp-link&gt;
        <li>&lt;sp-menu&gt;
        <li>&lt;sp-menu-divider&gt;
        <li>&lt;sp-menu-group&gt;
        <li>&lt;sp-menu-item&gt;
        <li>&lt;sp-number-field&gt;
        <li>&lt;sp-picker&gt;
        <li>&lt;sp-popover&gt;
        <li>&lt;sp-slider&gt;
        <li>&lt;sp-switch&gt;
        <li>&lt;sp-tooltip&gt;
        <li>&lt;sp-underlay&gt;
        <li>&lt;ue-account-menu&gt;
        <li>&lt;ue-drawer&gt;
        <li>&lt;ue-header-container&gt;
        <li>&lt;ue-loading-screen&gt;
        <li>&lt;ue-panel-dock&gt;
        <li>&lt;ue-panel-frame&gt;
        <li>&lt;ue-video&gt;
        <li>&lt;ue-video-surface&gt;
        <li>&lt;xue-morebar&gt;
        <li>&lt;xue-morebar-item&gt;
        <li>&lt;xue-morebar-menu&gt;
      </ul>
    </p-slide>
    <p-slide style="--col: 2; --row: 7;">
        <h3 style="font-size: 100px">🤯</h3>
    </p-slide>
    <p-slide style="--col: 2; --row: 8;">
      <div class="fixed-width">
        <h3><code>&lt;psw-*&gt;</code></h3>
        <p>46 Photoshop Web specific elements</p>
        <h3><code>&lt;ue-*&gt;</code> & <code>&lt;xue-*&gt;</code></h3>
        <p>11 higher level organisms*</p>
        <h3><code>&lt;sp-*&gt;</code></h3>
        <p>31 atomic members of the Spectrum design language</p>
      </div>
      <p slot="footnote">*The word "organisms" here comes from Brad Frost's <a href="https://atomicdesign.bradfrost.com/">Atomic Design Methodology</a>.</p>
   </p-slide>
    <p-slide style="--col: 2; --row: 9;">
      <h3>So, about those <code>&lt;sp-*&gt;</code> elements...</h3>
    </p-slide>
    <p-slide style="--col: 3; --row: 0;">
      <h2>Spectrum Web Components</h2>
    </p-slide>
    <p-slide style="--col: 3; --row: 1;">
      <img alt="Screen shot of the Spectrum Web Components documentation site" slot="staged" src=${swc1} />
    </p-slide>
    <p-slide style="--col: 3; --row: 2;">
      <h2>Spectrum Web Components</h2>
      <img style="height: 60vh; margin: 0 auto;" alt="QR Code linking to opesource.adobe.com/spectrum-web-components" src=${swc} />
    </p-slide>
    <p-slide style="--col: 3; --row: 3;">
      <div class="fixed-width">
        <h3>Custom Elements Located</h3>
        <p>11 custom elements</p>
        <p>Say what? 🫤</p>
      </div>
      <img alt="Custom Elements Locator display for the SWC documentation site" slot="link" src=${swc2} />
    </p-slide>
    <p-slide style="--col: 3; --row: 4;">
      <img alt="Screen shot of the Spectrum Web Components documentation site" slot="staged" src=${swc1} />
    </p-slide>
    <p-slide style="--col: 3; --row: 5;">
      <img alt="Screen shot of the Spectrum Web Components documentation site" slot="staged" src=${swc3} />
    </p-slide>
    <p-slide style="--col: 3; --row: 6;">
      <div class="fixed-width">
        <h3>Custom Elements Located</h3>
        <p>11 custom elements, on mobile</p>
        <p>23 on desktop</p>
      </div>
      <img alt="Custom Elements Locator display for the SWC documentation site" slot="link" src=${swc4} />
    </p-slide>
    <p-slide style="--col: 3; --row: 7;">
      <div class="fixed-width">
        <h3>Takeaway</h3>
        <p>Custom elements are great for lazy loading</p>
        <p>😴 ... 🥳</p>
      </div>
      <img alt="Custom Elements Locator display for the SWC documentation site" slot="link" src=${swc2} />
    </p-slide>
    <p-slide style="--col: 3; --row: 8;">
      <div class="fixed-width">
        <h3>Lazily loaded Spectrum button</h3>
        <img style="width: 60vw; height: auto;" alt="Code sample lazily loading a custom element definition" src=${lazy} />
      </div>
    </p-slide>
    <p-slide style="--col: 3; --row: 9;">
      <div class="fixed-width">
        <h3><code>&lt;sp-*&gt;</code></h3>
        <p>83 Spectrum pattern delivering elements</p>
        <h3><code>&lt;sp-icon-*&gt;</code></h3>
        <p>939 public icon elements</p>
      </div>
    </p-slide>
    <p-slide style="--col: 3; --row: 10;">
      <img style="
        position: absolute; object-fit: cover;
        object-position: center;
        width: calc(100vw - 1em + 1px);
        height: calc(100vh - 1em + 1px);
      " alt="Sampling of SWC patterns" src=${swc5} />
    </p-slide>
    <p-slide style="--col: 3; --row: 11;">
      <div class="fixed-width">
        <h3>Browser powered encapsulation</h3>
        <p>Shadow DOM</p>
      </div>
    </p-slide>
    <p-slide style="--col: 3; --row: 12;">
      <img style="height: 90vh; width: auto;" alt="Code sample of creating a Shadow Root" src=${shadow} />
    </p-slide>
    <p-slide style="--col: 3; --row: 13;">
      <div class="fixed-width">
        <h3>Shadow DOM</h3>
        <ul>
          <li>Protects you custom element internals from CSS selectors
          <li style="visibility: hidden">Gives you greater control over your API
          <li style="visibility: hidden">Frees you to make more drastic edits between versions
          <li style="visibility: hidden">Guarantees the work you do in one custom element doesn't effect the work going into others
        </ul>
      </div>
    </p-slide>
    <p-slide style="--col: 3; --row: 14;">
      <img style="height: 90vh; width: auto;" alt="Code sample of a shadow root preventing external selectors" src=${shadow1} />
    </p-slide>
    <p-slide style="--col: 3; --row: 15;">
      <div class="fixed-width">
        <h3>Shadow DOM</h3>
        <ul>
          <li>Protects you custom element internals from CSS selectors
          <li>Gives you greater control over your API
          <li style="visibility: hidden">Frees you to make more drastic edits between versions
          <li style="visibility: hidden">Guarantees the work you do in one custom element doesn't effect the work going into others
        </ul>
      </div>
    </p-slide>
    <p-slide style="--col: 3; --row: 16;">
      <img style="height: 90vh; width: auto;" alt="Code sample of a shadow root giving your control over your API" src=${shadow2} />
    </p-slide>
    <p-slide style="--col: 3; --row: 17;">
      <div class="fixed-width">
        <h3>Shadow DOM</h3>
        <ul>
          <li>Protects you custom element internals from CSS selectors
          <li>Gives you greater control over your API
          <li>Frees you to make more drastic edits between versions
          <li style="visibility: hidden">Guarantees the work you do in one custom element doesn't effect the work going into others
        </ul>
      </div>
    </p-slide>
    <p-slide style="--col: 3; --row: 18;">
      <div style="display: flex; gap: 5vw;">
        <img style="width: 40vw; height: auto;" alt="Code sample of a shadow root easing your version management, v1.0.0" src=${shadow3a} />
        <img style="width: 40vw; height: auto;" alt="Code sample of a shadow root easing your version management, v1.1.0" src=${shadow3b} />
      </div>
    </p-slide>
    <p-slide style="--col: 3; --row: 19;">
      <div class="fixed-width">
        <h3>Shadow DOM</h3>
        <ul>
          <li>Protects you custom element internals from CSS selectors
          <li>Gives you greater control over your API
          <li>Frees you to make more drastic edits between versions
          <li>Lets you decide when one component effects others
        </ul>
      </div>
    </p-slide>
    <p-slide style="--col: 3; --row: 20;">
      <div class="fixed-width">
        <h3>Takeaway</h3>
        <p>Encapsulation via Shadow DOM focuses your work</p>
        <p>🎯</p>
      </div>
    </p-slide>
    <p-slide style="--col: 3; --row: 21;">
      <div class="fixed-width">
        <h3>Great responsibility</h3>
        <ul>
          <li style="visibility: hidden">Know what power you have <em>and don't have</em>
          <li style="visibility: hidden">Actively structure and document your style APIs
          <li style="visibility: hidden">Be aware of your responsibilities around <abbr title="accessibility">a11y</abbr>
        </ul>
      </div>
    </p-slide>
    <p-slide style="--col: 3; --row: 22;">
      <div class="fixed-width">
        <h3>Great responsibility</h3>
        <ul>
          <li>Know what power you have <em>and don't have</em>
          <li style="visibility: hidden">Actively structure and document your style APIs
          <li style="visibility: hidden">Be aware of your responsibilities around <abbr title="accessibility">a11y</abbr>
        </ul>
      </div>
    </p-slide>
    <p-slide style="--col: 3; --row: 23;">
      <img style="height: 90vh; width: auto;" alt="Code sample of slotted styling" src=${slotted} />
    </p-slide>
    <p-slide style="--col: 3; --row: 24;">
      <div class="fixed-width">
        <h3>Great responsibility</h3>
        <ul>
          <li>Know what power you have <em>and don't have</em>
          <li>Actively structure and document your style APIs
          <li style="visibility: hidden">Be aware of your responsibilities around <abbr title="accessibility">a11y</abbr>
        </ul>
      </div>
    </p-slide>
    <p-slide style="--col: 3; --row: 25;">
      <h3>Modifiable Custom Properties (Spectrum Button)</h3>
      <ul style="columns: 3; font-size: 0.6em; padding: 0; list-style: none; font-family: monospace; line-height: initial">
        <li><code>--mod-bold-font-weight</code>
        <li><code>--mod-button-animation-duration</code>
        <li><code>--mod-button-background-color-default</code>
        <li><code>--mod-button-background-color-disabled</code>
        <li><code>--mod-button-background-color-down</code>
        <li><code>--mod-button-background-color-focus</code>
        <li><code>--mod-button-background-color-hover</code>
        <li><code>--mod-button-border-color-default</code>
        <li><code>--mod-button-border-color-disabled</code>
        <li><code>--mod-button-border-color-down</code>
        <li><code>--mod-button-border-color-focus</code>
        <li><code>--mod-button-border-color-hover</code>
        <li><code>--mod-button-border-radius</code>
        <li><code>--mod-button-border-width</code>
        <li><code>--mod-button-bottom-to-text</code>
        <li><code>--mod-button-content-color-default</code>
        <li><code>--mod-button-content-color-disabled</code>
        <li><code>--mod-button-content-color-down</code>
        <li><code>--mod-button-content-color-focus</code>
        <li><code>--mod-button-content-color-hover</code>
        <li><code>--mod-button-edge-to-text</code>
        <li><code>--mod-button-edge-to-visual</code>
        <li><code>--mod-button-edge-to-visual-only</code>
        <li><code>--mod-button-focus-ring-border-radius</code>
        <li><code>--mod-button-focus-ring-color</code>
        <li><code>--mod-button-focus-ring-gap</code>
        <li><code>--mod-button-focus-ring-thickness</code>
        <li><code>--mod-button-font-size</code>
        <li><code>--mod-button-height</code>
        <li><code>--mod-button-line-height</code>
        <li><code>--mod-button-margin-block</code>
        <li><code>--mod-button-margin-left</code>
        <li><code>--mod-button-margin-right</code>
        <li><code>--mod-button-min-width</code>
        <li><code>--mod-button-padding-label-to-icon</code>
        <li><code>--mod-button-top-to-text</code>
        <li><code>--mod-focus-indicator-gap</code>
        <li><code>--mod-static-black-focus-indicator-color</code>
      </ul>
    </p-slide>
    <p-slide style="--col: 3; --row: 26;">
      <div class="fixed-width">
        <h3>Great responsibility</h3>
        <ul>
          <li>Know what power you have <em>and don't have</em>
          <li>Actively structure and document your style APIs
          <li>Be aware of your responsibilities around <abbr title="accessibility">a11y</abbr>
        </ul>
      </div>
    </p-slide>
    <p-slide style="--col: 3; --row: 27;">
      <h3>🙅 Not accessible</h2>
      <img style="width: 50vw; height: auto;" alt="Code sample of bad a11y" src=${a11y1} />
    </p-slide>
    <p-slide style="--col: 3; --row: 28;">
      <h3>🙆 Accessible</h2>
      <img style="width: 50vw; height: auto;" alt="Code sample of better a11y" src=${a11y2} />
    </p-slide>
    <p-slide style="--col: 3; --row: 29;">
      <div class="fixed-width">
        <h3>Takeaway</h3>
        <p>Encapsulation requires extra planning</p>
        <p>📝</p>
      </div>
    </p-slide>
    <p-slide style="--col: 4; --row: 0;">
      <h2>Firefly</h2>
    </p-slide>
    <p-slide style="--col: 4; --row: 1;">
      <img alt="Screen shot of the Firefly generative inpainting app" slot="staged" src=${firefly} />
    </p-slide>
    <p-slide style="--col: 4; --row: 2;">
      <div class="fixed-width">
        <h3>Firefly: things to know</h3>
        <ul>
          <li style="visibility: hidden">It leverages generative AI
          <li style="visibility: hidden">Being built as a partnership across a number of teams
          <li style="visibility: hidden">Requires compliance with Spectrum
          <li style="visibility: hidden">Is built in React
        </ul>
      </div>
    </p-slide>
    <p-slide style="--col: 4; --row: 3;">
      <div class="fixed-width">
        <h3>Firefly: things to know</h3>
        <ul>
          <li>It leverages generative AI
          <li style="visibility: hidden">Being built as a partnership across a number of teams
          <li style="visibility: hidden">Requires compliance with Spectrum
          <li style="visibility: hidden">Is built in React
        </ul>
      </div>
    </p-slide>
    <p-slide style="--col: 4; --row: 4;">
      <div class="fixed-width">
        <h3>Firefly: things to know</h3>
        <ul>
          <li>It leverages generative AI
          <li>Being built as a partnership across a number of teams
          <li style="visibility: hidden">Requires compliance with Spectrum
          <li style="visibility: hidden">Is built in React
        </ul>
      </div>
    </p-slide>
    <p-slide style="--col: 4; --row: 5;">
      <div class="fixed-width">
        <h3>Firefly: things to know</h3>
        <ul>
          <li>It leverages generative AI
          <li>Being built as a partnership across a number of teams
          <li>Requires compliance with Spectrum
          <li style="visibility: hidden">Is built in React
        </ul>
      </div>
    </p-slide>
    <p-slide style="--col: 4; --row: 6;">
      <div class="fixed-width">
        <h3>Firefly: things to know</h3>
        <ul>
          <li>It leverages generative AI
          <li>Being built as a partnership across a number of teams
          <li>Requires compliance with Spectrum
          <li>Is built in React
        </ul>
      </div>
    </p-slide>
    <p-slide style="--col: 4; --row: 7;">
      <div class="fixed-width">
        <h3>Takeaway</h3>
        <p>Custom Elements are interoperable across tools</p>
        <p>🤝</p>
      </div>
    </p-slide>
    <p-slide style="--col: 4; --row: 8;">
      <div class="fixed-width">
        <h3>Custom Elements Everywhere</h3>
        <img style="height: 70vh; width: 800px; object-fit: cover; object-position: top center;" alt="Screen shot of https://custom-elements-everywhere.com/'s results for React" slot="staged" src=${react} />
      </div>
      <img alt="QR Code linking to https://custom-elements-everywhere.com/" slot="link" src=${react2} />
    </p-slide>
    <p-slide style="--col: 4; --row: 9;">
      <div class="fixed-width">
        <img style="height: 90vh; width: auto;" alt="Code sample of a wrapping an SWC component for React" slot="staged" src=${react3} />
      </div>
      <img alt="QR Code linking to documentation for Lit La" slot="link" src=${litReact} />
    </p-slide>
    <p-slide style="--col: 4; --row: 10;">
      <div class="fixed-width">
        <h3>SWCs also appear in</h3>
        <ul style="line-height: 2">
          <li><a href="https://fonts.adobe.com/">Adobe Fonts</a>: an Angular app
          <li><a href="https://edex.adobe.com/">Education Exchange</a>: a Vue.js app
          <li><a href="https://lightroom.adobe.com/">Lightroom Web</a>: an internal FW app
          <li><a href="https://www.adobe.com/express/">Express Beta</a>: a Lit app 
          <li>And, more...
        </ul>
      </div>
    </p-slide>
    <p-slide style="--col: 5; --row: 0;">
      <h2>🎍Between the apps🎍</h2>
    </p-slide>
    <p-slide style="--col: 5; --row: 1;">
      <h2>Not just shared UI,<br>micro-frontends</h2>
      <img slot="link" alt="QR code link to mocro-frontends.org" src=${microfontends} />
    </p-slide>
    <p-slide style="--col: 5; --row: 2;">
      <div class="fixed-width">
        <h3 style="visibility: hidden"><code>&lt;ccx-*&gt;</code></h3>
        <ul>
          <li style="visibility: hidden">Mini-"apps" within many apps
          <li style="visibility: hidden">Comments, document history, sharing, etc.
          <li style="visibility: hidden">Often pre-dates Photoshop Web <em>and</em> SWC
          <li style="visibility: hidden">Built in React
        </ul>
      </div>
      <img slot="link" alt="Screen shot of the Creative Cloud Comments components" src=${comments} />
    </p-slide>
    <p-slide style="--col: 5; --row: 3;">
      <div class="fixed-width">
        <h3><code>&lt;ccx-*&gt;</code></h3>
        <ul>
          <li style="visibility: hidden">Mini-"apps" within many apps
          <li style="visibility: hidden">Comments, document history, sharing, etc.
          <li style="visibility: hidden">Often pre-dates Photoshop Web <em>and</em> SWC
          <li style="visibility: hidden">Built in React
        </ul>
      </div>
      <img slot="link" alt="Screen shot of the Creative Cloud Comments components" src=${comments} />
    </p-slide>
    <p-slide style="--col: 5; --row: 4;">
      <div class="fixed-width">
        <h3><code>&lt;ccx-*&gt;</code></h3>
        <ul>
          <li>Mini-"apps" within many apps
          <li style="visibility: hidden">Comments, document history, sharing, etc.
          <li style="visibility: hidden">Often pre-dates Photoshop Web <em>and</em> SWC
          <li style="visibility: hidden">Built in React
        </ul>
      </div>
      <img slot="link" alt="Screen shot of the Creative Cloud Comments components" src=${comments} />
    </p-slide>
    <p-slide style="--col: 5; --row: 5;">
      <div class="fixed-width">
        <h3><code>&lt;ccx-*&gt;</code></h3>
        <ul>
          <li>Mini-"apps" within many apps
          <li>Comments, document history, sharing, etc.
          <li style="visibility: hidden">Often pre-dates Photoshop Web <em>and</em> SWC
          <li style="visibility: hidden">Built in React
        </ul>
      </div>
      <img slot="link" alt="Screen shot of the Creative Cloud Comments components" src=${comments} />
    </p-slide>
    <p-slide style="--col: 5; --row: 6;">
      <div class="fixed-width">
        <h3><code>&lt;ccx-*&gt;</code></h3>
        <ul>
          <li>Mini-"apps" within many apps
          <li>Comments, document history, sharing, etc.
          <li>Often pre-dates Photoshop Web <em>and</em> SWC
          <li style="visibility: hidden">Built in React
        </ul>
      </div>
      <img slot="link" alt="Screen shot of the Creative Cloud Comments components" src=${comments} />
    </p-slide>
    <p-slide style="--col: 5; --row: 7;">
      <div class="fixed-width">
        <h3><code>&lt;ccx-*&gt;</code></h3>
        <ul>
          <li>Mini-"apps" within many apps
          <li>Comments, document history, sharing, etc.
          <li>Often pre-dates Photoshop Web <em>and</em> SWC
          <li>Built in React
        </ul>
      </div>
      <img slot="link" alt="Screen shot of the Creative Cloud Comments components" src=${comments} />
    </p-slide>
    <p-slide style="--col: 5; --row: 8;">
      <div class="fixed-width">
        <h3>Takeaway</h3>
        <p>Wrap micro-fontends quite nicely</p>
        <p>🎁</p>
      </div>
    </p-slide>
    <p-slide style="--col: 5; --row: 9;">
      <div class="fixed-width">
        <h3><code>&lt;ccx-*&gt;</code> v2</h3>
        <ul>
          <li style="visibility: hidden">Looking to leverage SWC
          <li style="visibility: hidden">Releases on a different schedule than consuming apps
          <li style="visibility: hidden">Tests the narrowest possible dependency ranges
          <li style="visibility: hidden">Scoped Custom Element Registries, not yet available 😥
        </ul>
      </div>
      <img style="visibility: hidden" slot="link" alt="Screen shot of the Chrome Status page for Scope Custom Element Registies" src=${scoped} />
    </p-slide>
    <p-slide style="--col: 5; --row: 10;">
      <div class="fixed-width">
        <h3><code>&lt;ccx-*&gt;</code> v2</h3>
        <ul>
          <li>Looking to leverage SWC
          <li style="visibility: hidden">Releases on a different schedule than consuming apps
          <li style="visibility: hidden">Tests the narrowest possible dependency ranges
          <li style="visibility: hidden">Scoped Custom Element Registries, not yet available 😥
        </ul>
      </div>
      <img style="visibility: hidden" slot="link" alt="Screen shot of the Chrome Status page for Scope Custom Element Registies" src=${scoped} />
    </p-slide>
    <p-slide style="--col: 5; --row: 11;">
      <div class="fixed-width">
        <h3><code>&lt;ccx-*&gt;</code> v2</h3>
        <ul>
          <li>Looking to leverage SWC
          <li>Releases on a different schedule than consuming apps
          <li style="visibility: hidden">Tests the narrowest possible dependency ranges
          <li style="visibility: hidden">Scoped Custom Element Registries, not yet available 😥
        </ul>
      </div>
      <img style="visibility: hidden" slot="link" alt="Screen shot of the Chrome Status page for Scope Custom Element Registies" src=${scoped} />
    </p-slide>
    <p-slide style="--col: 5; --row: 12;">
      <div class="fixed-width">
        <h3><code>&lt;ccx-*&gt;</code> v2</h3>
        <ul>
          <li>Looking to leverage SWC
          <li>Releases on a different schedule than consuming apps
          <li>Tests the narrowest possible dependency ranges
          <li style="visibility: hidden">Scoped Custom Element Registries, not yet available 😥
        </ul>
      </div>
      <img style="visibility: hidden" slot="link" alt="Screen shot of the Chrome Status page for Scope Custom Element Registies" src=${scoped} />
    </p-slide>
    <p-slide style="--col: 5; --row: 13;">
      <div class="fixed-width">
        <h3><code>&lt;ccx-*&gt;</code> v2</h3>
        <ul>
          <li>Looking to leverage SWC
          <li>Releases on a different schedule than consuming apps
          <li>Tests the narrowest possible dependency ranges
          <li>Scoped Custom Element Registries, not yet available 😥
        </ul>
      </div>
      <img slot="link" alt="Screen shot of the Chrome Status page for Scope Custom Element Registies" src=${scoped} />
    </p-slide>
    <p-slide style="--col: 5; --row: 14;">
      <div class="fixed-width">
        <h3>Takeaway</h3>
        <p>Not awesome (yet) <em>in</em> micro-frontends</p>
        <p>⚔️</p>
      </div>
    </p-slide>
    <p-slide style="--col: 6; --row: 0;">
      <h2>Stepping outside</h2>
    </p-slide>
    <p-slide style="--col: 6; --row: 1;">
      <div class="fixed-width">
        <h3>Takeaway</h3>
        <p>Better together</p>
        <p>👨‍👩‍👧‍👧</p>
      </div>
    </p-slide>
    <p-slide style="--col: 7; --row: 0;">
      <div class="fixed-width">
        <h2>Takeaways</h2>
        <ul>
          <li class="check">You can see the custom elements used on a page with Custom Elements Locator; 🕵🏼
          <li class="check">Custom elements are great for lazy loading; 😴 ... 🥳
          <li class="check">Encapsulation via Shadow DOM focuses your work; 🎯
          <li class="warning">Encapsulation requires extra planning; 📝
          <li class="check">Web components are interoperable across tools; 🤝
          <li class="check">Wrap micro-fontends quite nicely; 🎁
          <li class="warning">Not awesome (yet) <em>in</em> micro-frontends; ⚔️
          <li class="check">Better together! 👨‍👩‍👧‍👧
        </ul>
      </div>
    </p-slide>
    <p-slide style="--col: 8; --row: 0;">
      <h1>Fin</h1>
      <img alt="QR Code linking to Westbrook Johnson's website" slot="link" src=${react2} />
    </p-slide>
  </p-canvas>
`;

export const App = Template.bind({});
App.args = {
  row: 0,
  col: 5,
};
