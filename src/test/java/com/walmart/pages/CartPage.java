package com.walmart.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class CartPage extends BasePage
{
    public CartPage(WebDriver wd)
    {
        super(wd);
        PageFactory.initElements(wd, this);
    }

}
