package com.example.PsicoLogar.Resource;

import org.springframework.data.jpa.repository.JpaRepository;

public abstract interface BaseRepository<Entity extends BaseEntity> extends JpaRepository<Entity, Long>{

}
