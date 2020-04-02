import { ReactNode } from "react";

export interface ITabs {
  menuItem?: String;
  render?: () => ReactNode;
}

class Tabs {
  constructor(menuitem?: String, ren?: () => ReactNode) {
    this.menuItem = menuitem;
    this.render = ren;
  }
  menuItem?: String;
  render?: () => ReactNode;
}

export default Tabs;
