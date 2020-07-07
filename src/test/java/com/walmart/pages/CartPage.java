package com.walmart.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import static junit.framework.Assert.assertTrue;

public class CartPage extends BasePage
{
    public CartPage(WebDriver wd)
    {
        super(wd);
        PageFactory.initElements(wd, this);
    }

    @FindBy(css="[data-automation-id='added-to-cart']")
    WebElement productAddedValidation;
    @FindBy(css = "[alt='check mark']")
    WebElement checkMark;
    @FindBy(css="[data-automation-id='go-to-cart']")
    WebElement goToCart;



    public void validateProductInCart()
    {
        wait.until(ExpectedConditions.visibilityOf(checkMark));
        assertTrue(checkMark.isDisplayed());
        assertTrue(productAddedValidation.isDisplayed());
        System.out.println("Producto agregado al carrito con exito");
    }

    /*public void goToCart()
    {
        goToCart.click();
    }*/
}
