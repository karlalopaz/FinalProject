package com.walmart.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class SearchPage extends BasePage
{
    public SearchPage(WebDriver wd)
    {
        super(wd);
        PageFactory.initElements(wd, this);
    }

}
