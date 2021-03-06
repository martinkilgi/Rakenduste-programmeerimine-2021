package ee.martin.backend.controller;


import ee.martin.backend.model.Category;
import ee.martin.backend.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CategoryController {

    @Autowired
    CategoryService categoryService;

    @GetMapping("categories")
    public List<Category> getCategories() {
        return categoryService.getCategories();
    }

    @PostMapping("categories")
    public void postCategories(@RequestBody Category category) {
        categoryService.saveCategory(category);
    }


    //delete, edit, view one item paring

    //andmebaas

    //kategooria osas samad asjad (controller, service, repository) ehk siis CategoryRepository, CategoryService, CategoryController)

}
