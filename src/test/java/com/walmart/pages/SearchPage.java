package com.walmart.pages;

import com.walmart.utils.Producto;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;

public class SearchPage extends BasePage
{
    public SearchPage (WebDriver wd)
    {
        super(wd);
        PageFactory.initElements(wd, this);
    }

    @FindBy(css="[class*=searchBarContainer] input")
    WebElement searchBar;
    @FindBy(css="button[data-automation-id='search-icon']")
    WebElement searchIcon;
    @FindBy(css="[class*='col']")
    List<WebElement> productsList;
    @FindBy(css="[class*=product_name] p div")
    WebElement nombreProducto;
    @FindBy (css="[class*=product_brand] a")
    WebElement marcaProducto;
    @FindBy (css="[class*=product_price_] p")
    WebElement precioProducto;

    public void searchForProduct()
    {
        wait.until(ExpectedConditions.elementToBeClickable(searchBar));
        searchBar.sendKeys("juegos");
        wait.until(ExpectedConditions.elementToBeClickable(searchIcon));
        searchIcon.click();
    }

    public void validateSearchProductPage()
    {
        List<WebElement> productos = productsList;
        System.out.println("El total de productos son: "+productos.size());
        if (productos.size() > 1)
        {
            System.out.println("la lista se desplego correctamente");
        }
    }

    public Producto capturaDatos(int x)
    {
        String prodName = nombreProducto.getText();
        String prodBrand = marcaProducto.getText();
        String prodPrice = precioProducto.getText();
        prodPrice= prodPrice.replace("$", "");
        double price = Double.parseDouble(prodPrice);

        return new Producto(prodName, prodBrand, price);
    }

    public void clickOnProduct(int numProduct)
    {
        WebElement producto = productsList.get(numProduct - 1);
        producto.click();
    }


}
