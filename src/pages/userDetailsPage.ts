export class UserDetailsPage {

    // Define selectors
    //xpaths with variable will be plugged dynamically
    private userDetailsHeader = "//h4[text()='User Info']";
    private addRoleButton = "//ul[@class='todo-list']//input[@id='todo-input']";
    private activeModal = "//div[@class='ant-modal-header']";
    private addToUserButton = "//span[text()='Add to User']";
    private removeRoleButton = "//div[@class='ant-table-content']//tbody/tr//a[text()=VARIABLE]/../..//span[text()='Remove']";
    private removeRoleConfirmationText = "//div[text()='Are you sure you want to unlink this role?']";
    private confirmRemoveRole = "//div[@class='ant-popover-buttons']//span[text()='Yes']";

    public get _userDetailsHeader(): string {
        return this.userDetailsHeader;
    }

    public get _addRoleButton(): string {
        return this.addRoleButton;
    }

    public get _activeModal(): string {
        return this.activeModal;
    }

    public get _addToUserButton(): string {
        return this.addToUserButton;
    }

    public get _removeRoleButton(): string {
        return this.removeRoleButton;
    }

    public get _removeRoleConfirmationText(): string {
        return this.removeRoleConfirmationText;
    }

    public get _confirmRemoveRole(): string {
        return this.confirmRemoveRole;
    }
}