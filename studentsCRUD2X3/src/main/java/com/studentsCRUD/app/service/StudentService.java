package com.studentsCRUD.app.service;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.studentsCRUD.app.model.Student;

public interface StudentService {

	public Iterable<Student> findAll();
	
	public Page<Student> findAll(Pageable pageable);
	
	public Optional<Student> findById(int id);

	public Student save(Student student);
	
	public void deleteById(int id);
}
