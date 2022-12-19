package com.studentsCRUD.app.controller;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.studentsCRUD.app.model.Student;
import com.studentsCRUD.app.service.StudentService;

@RestController
@RequestMapping("/students")
@CrossOrigin("http://localhost:3000")
public class StudentController {

	
	@Autowired
	private StudentService studentService;
	
	// Create a student
	@PostMapping
	public ResponseEntity<?> create (@RequestBody Student student){
		
		return ResponseEntity.status(HttpStatus.CREATED).body(studentService.save(student));        
	};
	
	// Read a student data for id
	@GetMapping("/{id}")
    public ResponseEntity<?> read (@PathVariable(value = "id") int studentId){
		Optional<Student> oStudent = studentService.findById(studentId);
		
		if(!oStudent.isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		return ResponseEntity.ok(oStudent);
			
	}; 
	
	
	// Read all students info
	@GetMapping
	public List<Student> readAll() {
		
		List<Student> student = StreamSupport
				.stream(studentService.findAll().spliterator(), false)
				.collect(Collectors.toList());
		
		return student;
		
	};
	
	// Update a student info
	@PutMapping("/{id}")
	public ResponseEntity<?> update (@RequestBody Student studentDetails, @PathVariable(value = "id") int studentId){
		Optional<Student> student = studentService.findById(studentId);

		if(!student.isPresent()) {
			return ResponseEntity.notFound().build();
		}
				
		student.get().setName(studentDetails.getName());
		student.get().setEmail(studentDetails.getEmail());
		student.get().setCourse(studentDetails.getCourse());
		student.get().setPassword(studentDetails.getPassword());
		student.get().setRol(studentDetails.getRol());
		student.get().setMajor(studentDetails.isMajor());

	
		return ResponseEntity.status(HttpStatus.CREATED).body(studentService.save(student.get()));
	};

	// Delete a student
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete (@PathVariable(value = "id") int studentId){
		
		if(!studentService.findById(studentId).isPresent()) {
			return ResponseEntity.notFound().build();
		}
		
		studentService.deleteById(studentId);		
		return ResponseEntity.ok().build();
	};

	
	
}
