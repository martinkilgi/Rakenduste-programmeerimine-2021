package ee.martin.backend.controller;


import ee.martin.backend.model.Category;
import ee.martin.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("categories")
    public List<Category> getCategories() {
        return categoryService.getCategories();
    }

    @PostMapping("categories")
    public String postCategories(@RequestBody Category category) {
        categoryService.saveCategory(category);
        return "Post tootab: " + category.getName();
    }


    //delete, edit, view one item paring

    //andmebaas

    //kategooria osas samad asjad (controller, service, repository) ehk siis CategoryRepository, CategoryService, CategoryController)

}
