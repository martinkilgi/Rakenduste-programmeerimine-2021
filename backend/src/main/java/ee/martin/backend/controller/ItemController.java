package ee.martin.backend.controller;


import ee.martin.backend.model.Item;
import ee.martin.backend.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @PostMapping("items")
    public String postItems(@RequestBody Item item) {
        itemService.saveItem(item);
        return "Post tootab: " + item.getName();
    }


    //delete, edit, view one item paring

    //andmebaas

    //kategooria osas samad asjad (controller, service, repository) ehk siis CategoryRepository, CategoryService, CategoryController)

}
