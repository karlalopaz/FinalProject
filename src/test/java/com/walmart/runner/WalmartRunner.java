package com.walmart.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        monochrome = false,
        features = {"src/test/resources/features/addToCart.feature",
        "src/test/resources/features/verifyCart.feature"},
        strict = false,
        plugin = {"pretty",
                "json:target/cucumber_json_reports/WalmartFinalProject.json",
                "html:target/WalmartFinalProject-html"},
        glue = {"com.walmart"})

public class WalmartRunner {
}