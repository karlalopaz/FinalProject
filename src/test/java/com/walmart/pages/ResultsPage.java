package com.walmart.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class ResultsPage extends BasePage
{
    public ResultsPage(WebDriver wd)
    {
        super(wd);
        PageFactory.initElements(wd, this);
    }


}
