package com.walmart.steps;

import com.walmart.hooks.Hooks;
import com.walmart.sites.WalmartSite;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class LandingStepDef {

    public WalmartSite walmartSite;

    public LandingStepDef(Hooks hooksClass)
    {
        this.walmartSite = hooksClass.getWalmartSite();
    }

    @Given("I navigate to Walmart")
    public void iNavigateToWalmart()
    {
        walmartSite.getHome().navigate();
        walmartSite.getHome().validateHomePage();
    }

}
