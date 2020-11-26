package com.projetoIntegrador.Psicologar.Resource;

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

public abstract class BaseController<Entity extends BaseEntity,Repository extends BaseRepository<Entity>,Service extends BaseService<Entity,Repository>> {

	@Autowired
	private Service service;
	
	//metodo que retorna todos os dados do banco de dandos
	@GetMapping
	public ResponseEntity<List<Entity>> getAll(){
		List<Entity> entity = service.getAll();
		return ResponseEntity.ok(entity);
	}
	
	//metodo que cadastra dados no banco de dados
	@PostMapping
	@Transactional
	public ResponseEntity<Entity> insert(@Valid @RequestBody Entity entity){
		Entity newEntity = service.insert(entity);
		return ResponseEntity.status(201).body(newEntity);
	}
	
	//metodo que retorna apenas um dado do banco de dados
	@GetMapping("/{id}")
	public ResponseEntity<Entity> getOne(@PathVariable(value = "id") Long id) throws NotFoundException {
		Entity entity = service.getOne(id);
		return ResponseEntity.ok(entity);
	}
	
	//metodo de atualização dos dados do banco de dados
	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity<Entity> update(@Valid @PathVariable(value = "id") Long id, @RequestBody Entity entity) {
		Entity updatedEntity = service.update(id, entity);
		return ResponseEntity.ok(updatedEntity);
	}
	
	//metodo de deletar dados do banco de dados
	@DeleteMapping
	@Transactional
	public ResponseEntity<?> delete(@PathVariable(value = "id") Long id) throws NotFoundException {
		service.delete(id);
		return ResponseEntity.noContent().build();
	}
}
