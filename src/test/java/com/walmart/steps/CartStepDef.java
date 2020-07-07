package com.walmart.steps;

import com.walmart.hooks.Hooks;
import com.walmart.sites.WalmartSite;
import cucumber.api.java.en.Given;

public class CartStepDef {
    public WalmartSite walmartSite;

    public CartStepDef(Hooks hooksClass)
    {
        this.walmartSite = hooksClass.getWalmartSite();
    }

   /*@Given("I am in the Cart Page")
    public void iAmInTheCartPage()
    {
        walmartSite.getCart().goToCart();
    }*/

}
