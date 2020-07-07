package com.walmart.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import static junit.framework.Assert.assertTrue;

public class CartPage extends BasePage
{
    public CartPage(WebDriver wd)
    {
        super(wd);
        PageFactory.initElements(wd, this);
    }

    @FindBy(css="addToCartButton")
    WebElement addToCart;
    @FindBy(css="added-to-cart")
    WebElement productAddedValidation;

    public void addToCart()
    {
        addToCart.click();
    }

    public void validateProductInCart()
    {
        assertTrue(productAddedValidation.isDisplayed());
    }



}
