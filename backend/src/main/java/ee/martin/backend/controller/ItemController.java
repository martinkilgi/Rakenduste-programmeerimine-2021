package ee.martin.backend.controller;


import ee.martin.backend.model.Item;
import ee.martin.backend.service.ItemService;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ItemController {

    @Autowired
    ItemService itemService;

    @GetMapping("items")
    public List<Item> getItems() {
        return itemService.getItems();
    }

    @PostMapping("items")
    public void postItems(@RequestBody Item item) {
        itemService.saveItem(item);
    }

    @DeleteMapping("delete-item/{id}")
    public List<Item> deleteItem(@PathVariable Long id) {
        itemService.deleteItem(id);
        return itemService.getItems();
    }

    @ApiOperation("API otspunkt eseme muutmiseks, alati kaasa anda ID")
    @PutMapping("edit-item")
    public void editItem(@RequestBody Item item) {
        itemService.saveItem(item);
    }

    @GetMapping("view-item/{id}")
    public Item getOneItem(@PathVariable Long id) throws Exception {
        return itemService.getOneItem(id);
    }



    //delete, edit, view one item paring

    //andmebaas

    //kategooria osas samad asjad (controller, service, repository) ehk siis CategoryRepository, CategoryService, CategoryController)

}
