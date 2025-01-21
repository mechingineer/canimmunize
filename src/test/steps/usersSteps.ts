import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { UsersPage } from '../../pages/usersPage'
import { UserDetailsPage } from '../../pages/userDetailsPage'
import { SidebarPage } from '../../pages/sidebarPage'
import { utils } from '../../helper/utils'
import { Page } from 'playwright';

let usersPage: UsersPage;
let userDetailsPage: UserDetailsPage;
let sidebarPage: SidebarPage;
let Utils: utils;
let page: Page;
let map = new Map<string, string>();



Given('User navigates to the test application', async function () {
  page = this.page;
  Utils = new utils(page);
  await Utils.navigate();
});

Then('User logs into the application', async function () {
  await Utils.login();
});

Given('User navigates to the Users page', async function () {
  sidebarPage = new SidebarPage();
  let ele: string = sidebarPage._usersMenuItem;
  await this.page.locator(ele).click();
  ele = sidebarPage._usersSubMenuItem;
  await this.page.locator(ele).click();
});

Given('User redirects to Users page', async function () {
  await this.page.goto('https://novascotia.flow.qa.canimmunize.dev/orgadminusers');
});

Given('User searches for the user with email {string}', async function (email) {
  usersPage = new UsersPage();
  if (email.includes('FromMap')) {
    await this.page.fill(usersPage._searchInput, '');
    await this.page.fill(usersPage._searchInput, map.get('username'));
  }
  else {
    await this.page.fill(usersPage._searchInput, '');
    await this.page.fill(usersPage._searchInput, email);
  }

});

Then('User validates table header', async function (dataTable) {
  usersPage = new UsersPage();
  const dataObject = dataTable.rowsHash();
  for (const k in dataObject) {
    let ele: string = usersPage._columnHeader;
    ele = ele.replace('VARIABLE', k);
    await expect(this.page.locator(ele)).toHaveText(dataObject[k].trim());
  }
});

Then('User validates table values', async function (dataTable) {
  usersPage = new UsersPage();
  const dataObject = dataTable.rowsHash();
  for (const k in dataObject) {
    if (dataObject[k].includes(',')) {
      let tokens = dataObject[k].split(',');
      for (let i = 0; i < tokens.length; i++) {
        let ele: string = usersPage._roleOrgColumnValues;
        ele = ele.replace('VARIABLE', k);
        ele = ele.replace('INDEX', (i + 1).toString());
        await expect(this.page.locator(ele)).toHaveText(tokens[i].trim());
      }
    }
    else {
      if (dataObject[k].trim().includes('FromMap')) {
        let ele: string = usersPage._columnValues;
        ele = ele.replace('VARIABLE', k);
        await expect(this.page.locator(ele)).toHaveText(map.get('username'));
      }
      else {
        let ele: string = usersPage._columnValues;
        ele = ele.replace('VARIABLE', k);

        await expect(this.page.locator(ele)).toHaveText(dataObject[k].trim());
      }

    }

  }
});

Then('User clicks the {string} button', async function (buttonName) {
  usersPage = new UsersPage();
  let ele: string = usersPage._commonButton;
  ele = ele.replace('VARIABLE', buttonName);
  await this.page.locator(ele).click();
});

Then('User enters the new user details', async function (dataTable) {
  usersPage = new UsersPage();
  const dataObject = dataTable.rowsHash();
  for (const k in dataObject) {
    if (k.includes('First Name')) {
      let ele: string = usersPage._firstNameInput;
      await this.page.fill(ele, dataObject[k]);
    }
    else if (k.includes('Last Name')) {
      let ele: string = usersPage._lastNameInput;
      await this.page.fill(ele, dataObject[k]);
    }
    else if (k.includes('Email')) {
      let ele: string = usersPage._emailInput;
      let email = 'testing+' + (Math.random()).toString(36).substring(7) + '@canimmunize.ca';
      map.set('username', email);
      await this.page.fill(ele, email);
    }
    else if (k.includes('Role')) {
      if (dataObject[k].includes(',')) {

        let tokens = dataObject[k].split(',');
        for (let i = 0; i < tokens.length; i++) {
          let ele: string = usersPage._roleDropdown;
          await this.page.locator(ele).click();
          ele = usersPage._roleDropdownValue;
          ele = ele.replace('VARIABLE', tokens[i].trim());
          await this.page.locator(ele).click();
        }
      }
      else {
        let ele: string = usersPage._roleDropdown;
        await this.page.locator(ele).click();
        ele = usersPage._roleDropdownValue;
        ele = ele.replace('VARIABLE', dataObject[k])
        await this.page.locator(ele).click();
      }

    } else if (k.includes('Organization')) {
      if (dataObject[k].includes(',')) {
        let tokens = dataObject[k].split(',');
        for (let i = 0; i < tokens.length; i++) {
          let ele: string = usersPage._organizationDropdown;
          await this.page.locator(ele).click();
          ele = usersPage._organizationDropdownValue;
          ele = ele.replace('VARIABLE', tokens[i].trim())
          await this.page.locator(ele).click();
        }
      }
      else {
        let ele: string = usersPage._organizationDropdown;
        await this.page.locator(ele).click();
        ele = usersPage._organizationDropdownValue;
        ele = ele.replace('VARIABLE', dataObject[k])
        await this.page.locator(ele).click();
      }

    }

  }

});

Then('User clicks the Save button', async function () {
  usersPage = new UsersPage();
  let ele: string = usersPage._saveButton;
  await this.page.locator(ele).click();

});

Then('User validates the success message {string}', async function (message) {
  usersPage = new UsersPage();
  let ele: string = usersPage._successMessage;
  ele = ele.replace('VARIABLE', message)
  await expect(this.page.locator(ele)).toContainText(message);
});

Then('User stores the password', async function () {
  usersPage = new UsersPage();
  let ele: string = usersPage._password;
  let pwd: string = await this.page.locator(ele).textContent();
  map.set('password', pwd);
});

Then('User clicks the back button', async function () {
  usersPage = new UsersPage();
  let ele: string = usersPage._backButton;
  await this.page.locator(ele).click();
  await new Promise(resolve => setTimeout(resolve, 3000));

});

Then('User clicks on the user from the search results', async function () {
  usersPage = new UsersPage();
  let ele: string = usersPage._userRow;
  await this.page.locator(ele).click();
});

Then('User Details page is displayed', async function () {
  userDetailsPage = new UserDetailsPage();
  let ele: string = userDetailsPage._userDetailsHeader;
  await expect(this.page.locator(ele)).toBeVisible();
});

Then('User updates the details', async function (dataTable) {
  usersPage = new UsersPage();
  userDetailsPage = new UserDetailsPage();
  const dataObject = dataTable.rowsHash();
  for (const k in dataObject) {
    if (k.includes('First Name')) {
      let ele: string = usersPage._firstNameInput;
      await this.page.fill(ele, '');
      await this.page.fill(ele, dataObject[k]);
    }
    else if (k.includes('Last Name')) {
      let ele: string = usersPage._lastNameInput;
      await this.page.fill(ele, '');
      await this.page.fill(ele, dataObject[k]);
    }
  }
});

Then('User validates active modal', async function () {
  userDetailsPage = new UserDetailsPage();
  let ele: string = userDetailsPage._activeModal;
  await expect(this.page.locator(ele)).toBeVisible();
});

Then('User search for a role {string}', async function (role) {
  usersPage = new UsersPage();
  let ele: string = usersPage._searchInput;
  await this.page.fill(ele, '');
  await this.page.fill(ele, role);
});

When('User removes the role {}', async function (role) {
  userDetailsPage = new UserDetailsPage();
  let ele: string = userDetailsPage._removeRoleButton;
  ele = ele.replace('VARIABLE', role);
  await this.page.locator(ele).click();
  ele = userDetailsPage._removeRoleConfirmationText;
  await expect(this.page.locator(ele)).toBeVisible();
  ele = userDetailsPage._confirmRemoveRole;
  await this.page.locator(ele).click();
});