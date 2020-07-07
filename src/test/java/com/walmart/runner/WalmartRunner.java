package com.walmart.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {
        "src/test/resources/features/addProductToCart.feature",

},
        strict = false, plugin = {"pretty",
        "json:target/cucumber_json_reports/WalmartFinalProject.json",
        "html:target/WalmartFinalProject-html"},
        glue = {"mx.com.walmart.sites",
                "mx.com.walmart.pages",
                "mx.com.walmart.steps",
                "mx.com.walmart.utils",
                "mx.com.walmart.hooks"})

public class WalmartRunner {
}