package com.example.PsicoLogar.Resource;

import java.util.List;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import javassist.NotFoundException;

public abstract class BaseController<Entity extends BaseEntity, Repository extends BaseRepository<Entity>, Service extends BaseService<Entity, Repository>> {

	@Autowired
	private Service service;

	@GetMapping
	public ResponseEntity<List<Entity>> selecionarTodos() {
		List<Entity> entity = service.selectAll();
		return ResponseEntity.ok(entity);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Entity> selecionarID(@PathVariable(value = "id") Long id) throws NotFoundException {
		Entity entity = service.getOne(id);
		return ResponseEntity.ok(entity);
	}

	@PostMapping
	@Transactional
	public ResponseEntity<Entity> cadastrar(@Valid @RequestBody Entity entity) {
		System.out.println(entity);
		Entity newEntity = service.insert(entity);
		return ResponseEntity.status(201).body(newEntity);
	}

	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity<Entity> atualizar(@Valid @PathVariable(value = "id") Long id, @RequestBody Entity entity) {
		Entity updatedEntity = service.update(id, entity);
		return ResponseEntity.ok(updatedEntity);
	}

	@DeleteMapping
	@Transactional
	public ResponseEntity<?> deletar(@PathVariable(value = "id") Long id) throws NotFoundException {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}

}
