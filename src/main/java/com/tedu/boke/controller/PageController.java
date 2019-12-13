package com.tedu.boke.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class PageController {

    @RequestMapping("index")
    public String index(){
        return "admin";
    }

    @RequestMapping("/{page}")
    public String toPage(@PathVariable String page) {
        return page;
    }

}
