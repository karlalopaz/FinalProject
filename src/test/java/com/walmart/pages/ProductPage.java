package com.walmart.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class ProductPage extends BasePage
{
    public ProductPage(WebDriver wd)
    {
        super(wd);
        PageFactory.initElements(wd, this);
    }

}
