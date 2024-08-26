export interface NavbarItem {
    id: string,
    name: string,
    // otherElements?: Array<any>, // any html elements
    isLink: boolean; // if item is clicked will open url using id
    children?: Array<NavbarItem>,
}