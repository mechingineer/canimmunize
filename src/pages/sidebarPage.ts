export class SidebarPage {

    // Define selectors
    //xpaths with variable will be plugged dynamically
    private usersMenuItem = "//li[@id='users-sub-menu']";
    private usersSubMenuItem = "//li[@id='users']";

    public get _usersMenuItem(): string {
        return this.usersMenuItem;
    }

    public get _usersSubMenuItem(): string {
        return this.usersSubMenuItem;
    }

}