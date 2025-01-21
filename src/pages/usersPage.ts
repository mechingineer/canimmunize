export class UsersPage {

    // Define selectors
    //xpaths with variable will be plugged dynamically
    private columnHeader = "//div[@class='ant-table-content']//thead/tr/th[VARIABLE]";
    private columnValues = "//div[@class='ant-table-content']//tbody/tr[2]/td[VARIABLE]";
    private roleOrgColumnValues = "//div[@class='ant-table-content']//tbody/tr[2]/td[VARIABLE]/div/div[INDEX]/span";
    private commonButton = "//span[text()='VARIABLE']";
    private searchInput = "//input[@placeholder='Search']";
    private userRow = "//div[@class='ant-table-content']//tbody/tr[2]";
    private newUserModalHeader = "//div[@class='ant-modal-header']/div[text()='New User']";
    private firstNameInput = "//input[@id='firstName']";
    private lastNameInput = "//input[@id='lastName']";
    private emailInput = "//input[@id='email']";
    private roleDropdown = "//div[@class='ant-modal-content']//span[text()='Select one or more roles']/../..";
    private roleDropdownValue = "//div[@class='rc-virtual-list-holder-inner']/div/div[text()='VARIABLE']";
    private organizationDropdown = "//div[@class='ant-modal-content']//span[text()='Select one or more organizations']/../..";
    private organizationDropdownValue = "//div[@class='rc-virtual-list-holder-inner']/div/div[text()='VARIABLE']";
    private saveButton = "//button[@aria-label='Save' and @aria-disabled='false']";
    private successMessage = "//div[contains(text(),'VARIABLE')]";
    private password = "//div[contains(@class,'mantine-Modal-body')]//span[contains(@class,'mantine-Badge-label')]";
    private backButton = "//div[@class='ant-page-header-back']";

    public get _columnHeader(): string {
        return this.columnHeader;
    }

    public get _columnValues(): string {
        return this.columnValues;
    }

    public get _roleOrgColumnValues(): string {
        return this.roleOrgColumnValues;
    }

    public get _commonButton(): string {
        return this.commonButton;
    }

    public get _searchInput(): string {
        return this.searchInput;
    }

    public get _userRow(): string {
        return this.userRow;
    }

    public get _newUserModalHeader(): string {
        return this.newUserModalHeader;
    }

    public get _firstNameInput(): string {
        return this.firstNameInput;
    }

    public get _lastNameInput(): string {
        return this.lastNameInput;
    }

    public get _emailInput(): string {
        return this.emailInput;
    }

    public get _roleDropdown(): string {
        return this.roleDropdown;
    }

    public get _roleDropdownValue(): string {
        return this.roleDropdownValue;
    }

    public get _organizationDropdown(): string {
        return this.organizationDropdown;
    }

    public get _organizationDropdownValue(): string {
        return this.organizationDropdownValue;
    }

    public get _saveButton(): string {
        return this.saveButton;
    }

    public get _successMessage(): string {
        return this.successMessage;
    }

    public get _password(): string {
        return this.password;
    }

    public get _backButton(): string {
        return this.backButton;
    }
}