package com.walmart.sites;

import com.walmart.pages.CartPage;
import com.walmart.pages.LandingPage;
import com.walmart.pages.ProductPage;
import com.walmart.pages.SearchPage;
import org.openqa.selenium.WebDriver;

public class WalmartSite {
    private final WebDriver driver;

    public LandingPage getHome()
    {
        return new LandingPage(driver);
    }

    public SearchPage getSearch()
    {
        return new SearchPage(driver);
    }

    public ProductPage getProduct()
    {
        return new ProductPage(driver);
    }

    public CartPage getCart()
    {
        return new CartPage(driver);
    }

    private LandingPage home;
    private SearchPage search;
    private ProductPage product;
    private CartPage cart;

    public WalmartSite(WebDriver driver)
    {
        this.driver = driver;
    }


}
