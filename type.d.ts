declare module "locomotive-scroll" {
  interface LocomotiveScrollOptions {
    el: HTMLElement | null;
    smooth?: boolean;
    smoothMobile?: boolean;
    inertia?: number;
    multiplier?: number;
    getDirection?: boolean;
    tablet?: {
      smooth?: boolean;
    };
    smartphone?: {
      smooth?: boolean;
    };
  }

  export default class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    on(event: string, callback: (args: any) => void): void;
    scrollTo(target: string | HTMLElement | number, options?: any): void;
    destroy(): void;
    update(): void;
  }
}
