package com.walmart.pages;

import com.walmart.utils.Producto;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import static junit.framework.Assert.assertTrue;

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
    Producto p;

    public void searchForProduct()
    {
        wait.until(ExpectedConditions.elementToBeClickable(searchBar));
        assertTrue(searchBar.isEnabled());
        searchBar.sendKeys("nintendo");
        wait.until(ExpectedConditions.elementToBeClickable(searchIcon));
        assertTrue(searchIcon.isEnabled());
        searchIcon.click();
        System.out.println("Buscando producto");
    }

    public void validateSearchProductList()
    {
        List<WebElement> productos = productsList;
        System.out.println("El total de productos son: "+productos.size());
        if (productos.size() > 1)
        {
            System.out.println("la lista se desplego correctamente");
        }
    }

    public Producto capturaDatos()
    {
        wait.until(ExpectedConditions.visibilityOf(nombreProducto));
        wait.until(ExpectedConditions.visibilityOf(marcaProducto));
        wait.until(ExpectedConditions.visibilityOf(precioProducto));
        String prodName = nombreProducto.getText();
        String[] name= prodName.split(" ");
        String splitName = name[0];
        System.out.println("El nombre del producto es: "+splitName);
        String prodBrand = marcaProducto.getText();
        System.out.println("La marca del producto es: "+prodBrand);
        String prodPrice = precioProducto.getText();
        prodPrice = prodPrice.replace("$", "");
        prodPrice = prodPrice.replace(",","");
        System.out.println("El precio del producto es: "+prodPrice);
        double price = Double.parseDouble(prodPrice);
        this.p = new Producto(splitName, prodBrand, price);
        return this.p;
    }

    public void clickOnProduct(int numProduct)
    {
        WebElement producto = productsList.get(numProduct - 1);
        producto.click();
        System.out.println("Seleccionando el producto: "+numProduct);
    }

    public Producto getProducto() {
        return this.p;
    }


}
