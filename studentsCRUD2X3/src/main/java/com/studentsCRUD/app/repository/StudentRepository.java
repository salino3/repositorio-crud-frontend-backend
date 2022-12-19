package com.studentsCRUD.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.studentsCRUD.app.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer>{

}
