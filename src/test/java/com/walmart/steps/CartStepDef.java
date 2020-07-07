package com.walmart.steps;

import com.walmart.hooks.Hooks;
import com.walmart.sites.WalmartSite;
import com.walmart.utils.Producto;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CartStepDef {
    public WalmartSite walmartSite;

    public CartStepDef(Hooks hooksClass)
    {
        this.walmartSite = hooksClass.getWalmartSite();
    }

   @Given("I am in the Cart Page")
    public void iAmInTheCartPage()
    {
        walmartSite.getHome().navigate();
        walmartSite.getHome().validateHomePage();
        walmartSite.getSearch().searchForProduct();
        walmartSite.getSearch().validateSearchProductList();
        walmartSite.getSearch().capturaDatos();
        Producto primerProd = walmartSite.getSearch().capturaDatos();
        walmartSite.getProduct().validarProducto(primerProd);
        walmartSite.getProduct().addToCart();
        walmartSite.getCart().validateProductAddedInCart();
        walmartSite.getCart().goToCart();
    }

    @When("I see the list of products")
    public void iSeeTheListOfProducts()
    {
        walmartSite.getCart().validateProductsDisplayedInCart();

    }


    @Then("I can delete the product")
    public void iCanDeleteTheProduct() {
        walmartSite.getCart().deleteProduct();
    }
}
