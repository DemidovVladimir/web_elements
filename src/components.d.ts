/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}


import {
  MyComponent as MyComponent
} from './components/my-component/my-component';

declare global {
  interface HTMLMyComponentElement extends MyComponent, HTMLStencilElement {
  }
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    "my-component": HTMLMyComponentElement;
  }
  interface ElementTagNameMap {
    "my-component": HTMLMyComponentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "my-component": JSXElements.MyComponentAttributes;
    }
  }
  namespace JSXElements {
    export interface MyComponentAttributes extends HTMLAttributes {
      max?: number;
      min?: number;
      start?: number;
      step?: number;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
