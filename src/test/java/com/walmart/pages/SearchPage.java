package com.walmart.pages;

import com.walmart.utils.Producto;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

import static junit.framework.Assert.assertTrue;

public class SearchPage extends BasePage
{
    public SearchPage (WebDriver wd)
    {
        super(wd);
        PageFactory.initElements(wd, this);
    }

    @FindBy(css="search-bar-desktop_searchBarContainer__eBcmI")
    WebElement searchBar;
    @FindBy(css="search-icon")
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
        assertTrue(searchBar.isEnabled());
        assertTrue(searchIcon.isDisplayed());
        searchBar.sendKeys("salsa");
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

    public Producto capturaDatos(int i)
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
        List<WebElement> productos = productsList;
        WebElement producto = productos.get(numProduct - 1);
        producto.click();
    }


}
