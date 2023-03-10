package com.job.portal.service;
import com.job.portal.repository.EmployerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class EmployerService {

  private EmployerRepository employerRepository;

  public void addJob(Map<String,Object> jobData){
    String organizationName = (String) jobData.get("organization");
    String designation = (String) jobData.get("designation");
    String skill1 = (String) jobData.get("skill1");
    String skill2 = (String) jobData.get("skill2");
    String skill3 = (String) jobData.get("skill3");
    String language1 = (String) jobData.get("language1");
    String language3 = (String) jobData.get("language2");
    String location1 = (String) jobData.get("location1");
    String location2 = (String) jobData.get("location2");
    Integer salary = Integer.parseInt((String)jobData.get("salary"));
    String period = (String) jobData.get("period");
    employerRepository.addJob(organizationName,designation,skill1,skill2,skill3,language1,language3,location1,location2,salary,period);


  }
}
