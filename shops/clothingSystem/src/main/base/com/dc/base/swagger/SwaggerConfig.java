package com.dc.base.swagger;

import com.mangofactory.swagger.configuration.SpringSwaggerConfig;
import com.mangofactory.swagger.models.dto.ApiInfo;
import com.mangofactory.swagger.plugin.EnableSwagger;
import com.mangofactory.swagger.plugin.SwaggerSpringMvcPlugin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableSwagger
public class SwaggerConfig {
    private SpringSwaggerConfig springSwaggerConfig;

    @Autowired
    public void setSpringSwaggerConfig(SpringSwaggerConfig springSwaggerConfig) {
        this.springSwaggerConfig = springSwaggerConfig;
    }

    @Bean
    public SwaggerSpringMvcPlugin CustomImplementation(){
        return new SwaggerSpringMvcPlugin(this.springSwaggerConfig).apiInfo(apiInfo());
    }

    //自定义apiInfo
    public ApiInfo apiInfo(){
        ApiInfo apiInfo=new ApiInfo("simple", "提供接口", "termsOfServiceUrl",
                "contact", "license", "licenseUrl");
        return apiInfo;
    }
}
