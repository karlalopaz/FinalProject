package com.walmart.pages;

import com.walmart.utils.Producto;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import static junit.framework.Assert.*;

public class ProductPage extends BasePage
{
    public ProductPage(WebDriver wd)
    {
        super(wd);
        PageFactory.initElements(wd, this);
    }

    @FindBy(css="[data-automation-id='product-details-header']")
    WebElement nombreProducto;
    @FindBy(css="[data-automation-id='product-brand-name'] a")
    WebElement marcaProducto;
    @FindBy(css="[data-automation-id='product-price']")
    WebElement precioProducto;
    @FindBy(css="[data-automation-id='add-button']")
    WebElement addToCart;



    public void validarProducto(Producto primerProd)
    {
        String prodName = nombreProducto.getText();
        String prodBrand = marcaProducto.getText();
        String prodPrice = precioProducto.getText();
        prodPrice = prodPrice.replace("$", "");
        double pp = Double.parseDouble(prodPrice);

        if (primerProd.getName().equals(prodName))
        {
            System.out.println("El nombre de los productos concuerda. " +prodName);
        }
        else
            System.out.println("El nombre del producto no concuerda....");

        if (primerProd.getBrand().equals(prodBrand))
        {
            System.out.println("El nombre de la marca concuerda. " +prodBrand);
        }
        else
            System.out.println("Las marcas no concuerdan");
        if (primerProd.getPrice()== (pp))
        {
            System.out.println("El precio de los productos concuerda. $"+pp);
        }
        else
            System.out.println("El precio no concuerda");
    }
    public void addToCart()
    {
        addToCart.click();
    }


}
