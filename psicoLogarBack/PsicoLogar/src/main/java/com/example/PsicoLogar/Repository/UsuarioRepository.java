package com.example.PsicoLogar.Repository;

import java.util.Optional;

import com.example.PsicoLogar.Entity.Usuario;
import com.example.PsicoLogar.Resource.BaseRepository;

public interface UsuarioRepository extends BaseRepository<Usuario> {

	public Optional<Usuario> findByEmail(String email);
}
