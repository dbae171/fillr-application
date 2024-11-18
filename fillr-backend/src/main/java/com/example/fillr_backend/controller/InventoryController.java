package com.example.fillr_backend.controller;

import com.example.fillr_backend.model.InventoryItem;
import com.example.fillr_backend.repository.InventoryRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inventory")
@CrossOrigin(origins = "http://localhost:3000")
public class InventoryController {
    private final InventoryRepository repository;

    //constructor
    public InventoryController(InventoryRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<InventoryItem> getAllItems() {
        return repository.findAll();
    }

    @PostMapping
    public InventoryItem addItem(@RequestBody InventoryItem item) {
        return repository.save(item);
    }

}
