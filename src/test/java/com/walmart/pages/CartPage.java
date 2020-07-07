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
    @FindBy(css="[data-automation-id='full-cart-header']")
    WebElement cartProducts;
    @FindBy(css="")
    WebElement cartTitle;
    @FindBy(css="[data-automation-id='delete-button']")
    WebElement deleteButton;



    public void validateProductAddedInCart()
    {
        wait.until(ExpectedConditions.visibilityOf(checkMark));
        assertTrue(checkMark.isDisplayed());
        assertTrue(productAddedValidation.isDisplayed());
        System.out.println("Producto agregado al carrito con exito");
    }

    public void goToCart()
    {
        goToCart.click();
    }

    public void validateProductsDisplayedInCart()
    {
        wait.until(ExpectedConditions.visibilityOf(cartTitle));
        wait.until(ExpectedConditions.visibilityOf(cartProducts));
        System.out.println("Product is displayed in the cart ");
    }

    public void deleteProduct()
    {
        deleteButton.click();
    }




}
