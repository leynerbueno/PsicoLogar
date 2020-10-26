package com.example.PsicoLogar.Repository;

import com.example.PsicoLogar.Entity.Usuario;
import com.example.PsicoLogar.Resource.BaseRepository;

public interface UsuarioRepository extends BaseRepository<Usuario> {

	public Usuario findByEmail(String email);
}
