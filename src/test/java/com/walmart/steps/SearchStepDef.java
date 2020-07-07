package com.walmart.steps;

import com.walmart.hooks.Hooks;
import com.walmart.sites.WalmartSite;
import cucumber.api.java.en.When;

public class SearchStepDef {

    public WalmartSite walmartSite;

    public SearchStepDef (Hooks hooksClass)
    {
        this.walmartSite = hooksClass.getWalmartSite();
    }

    @When("I enter a product name in the search bar")
    public void iEnterAProductNameInTheSearchBar()
    {
        walmartSite.getSearch().searchForProduct();
    }

}
