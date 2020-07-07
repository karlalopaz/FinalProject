package com.walmart.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

public class LandingPage extends BasePage
{
    public LandingPage(WebDriver wd)
    {
        super(wd);
        PageFactory.initElements(wd, this);
    }

    WebElement walmartLogo;
    WebElement searchBar;

}
