package com.task.springboot.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;


@Configuration
@EnableWebSecurity
public class SpringSecurityConfiguration extends WebSecurityConfigurerAdapter {

  @Bean
  public WebMvcConfigurer corsConfigurer() {
    return new WebMvcConfigurer () {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedMethods("GET", "POST", "PUT", "DELETE").allowedOrigins("*")
          .allowedHeaders("*");
      }
    };
  }
  @Override
  protected void configure(HttpSecurity httpSecurity) throws Exception {
    httpSecurity
    .csrf().disable()
      .antMatcher("/**")
      .authorizeRequests().and()
      .httpBasic()
      .and()
      .authorizeRequests().anyRequest().authenticated().and().cors();

  }
}
