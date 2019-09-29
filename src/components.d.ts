/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PwcMap {
    'config': Object;
    'map': Object;
  }
}

declare global {


  interface HTMLPwcMapElement extends Components.PwcMap, HTMLStencilElement {}
  var HTMLPwcMapElement: {
    prototype: HTMLPwcMapElement;
    new (): HTMLPwcMapElement;
  };
  interface HTMLElementTagNameMap {
    'pwc-map': HTMLPwcMapElement;
  }
}

declare namespace LocalJSX {
  interface PwcMap {
    'config'?: Object;
    'map'?: Object;
  }

  interface IntrinsicElements {
    'pwc-map': PwcMap;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pwc-map': LocalJSX.PwcMap & JSXBase.HTMLAttributes<HTMLPwcMapElement>;
    }
  }
}


