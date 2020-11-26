package com.projetoIntegrador.Psicologar.Resource;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public abstract class BaseService<Entity extends BaseEntity, Repository extends BaseRepository<Entity>> {

	@Autowired
	private Repository repository;
	
	
	//metodo que retorna todos os dados do banco de dandos
	public List<Entity> getAll(){
		return repository.findAll();
	}
	
	//metodo que cadastra dados no banco de dados
	public Entity insert(Entity entity) {
		return repository.save(entity);
	}
	
	//metodo que retorna apenas um dado do banco de dados
	public Entity getOne(Long id) {
		Optional<Entity> optional = repository.findById(id);
		if(!optional.isPresent()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "entity não foi encontrada!");
		}
		Entity entity = optional.get();
		return entity;
	}
	
	//metodo que retorna o diario pela data
	public Entity getDiario(Long id, LocalDate dataDiario) {
		Optional<Entity> optional = repository.findById(id);
		if(!optional.isPresent()) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "entity não foi encontrada!");
		}
		Entity entity = optional.get();
		return entity;
	}
	
	//metodo de atualização dos dados do banco de dados
	public Entity update(Long id, Entity entity) {
		this.getOne(id);
		entity.setId(id);
		return this.insert(entity);
	}
	
	//metodo de deletar dados do banco de dados
	public void delete(Long id) {
		Entity entity = this.getOne(id);
		repository.delete(entity);
	}
}
