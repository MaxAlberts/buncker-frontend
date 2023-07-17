// These items are used to create the menu. A new page should be added here
// to make sure it is added to the menu and the router.
export default class PageNavigationItem {
    constructor(linkName, displayName, pageElement) {
      this.linkName = linkName;
      this.displayName = displayName;
      this.pageElement = pageElement;
    }
}