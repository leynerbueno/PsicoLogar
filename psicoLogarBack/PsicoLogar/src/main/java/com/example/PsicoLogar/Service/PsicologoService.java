package com.example.PsicoLogar.Service;

import org.springframework.stereotype.Service;

import com.example.PsicoLogar.Entity.Psicologo;
import com.example.PsicoLogar.Repository.PsicologoRepository;
import com.example.PsicoLogar.Resource.BaseService;
@Service
public class PsicologoService extends BaseService<Psicologo,PsicologoRepository> {

	@Override
	public Psicologo insert(Psicologo psicologo) {
		return super.insert(psicologo);
	}
}
