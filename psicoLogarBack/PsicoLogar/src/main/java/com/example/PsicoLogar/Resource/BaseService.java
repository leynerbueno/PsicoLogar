package com.example.PsicoLogar.Resource;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;



public abstract class BaseService<Entity extends BaseEntity, Repository extends BaseRepository<Entity>> {
	
	@Autowired
	protected Repository repository;
	
	public List<Entity> selectAll(){
		return repository.findAll();
	}
	
	public Entity insert(Entity entity) {
		System.out.println(entity);
		return repository.save(entity);
	}
	
	public Entity getOne(Long id) {
		Optional<Entity> optional = repository.findById(id);
		if(!optional.isPresent()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "entity não foi encontrada!");
		}
		Entity entity = optional.get();
		return entity;
	}
	
	public Entity getOne(Long id, LocalDate dataDiario) {
		Optional<Entity> optional = repository.findById(id);
		if(!optional.isPresent()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "entity não foi encontrada!");
		}
		Entity entity = optional.get();
		return entity;
	}

	public Entity update(Long id, Entity entity) {
		this.getOne(id);
		entity.setId(id);
		return this.insert(entity);
	}
	
	public void delete(Long id) {
		Entity entity = this.getOne(id);
		repository.delete(entity);
	}
}
