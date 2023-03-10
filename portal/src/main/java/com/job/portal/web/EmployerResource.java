package com.job.portal.web;
import com.job.portal.service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class EmployerResource {
  @Autowired
  private EmployerService employerService;

  @PostMapping("/postJob")
  public void addJob(@RequestBody Map<String,Object> jobData){
    employerService.addJob(jobData);
  }
}
