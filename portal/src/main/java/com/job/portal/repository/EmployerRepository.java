package com.job.portal.repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class EmployerRepository {
  @Autowired
  JdbcTemplate jdbcTemplate;

  public void addJob(String organizationName,String designation,String skill1,String skill2,String skill3,String language1,String language3,String location1,String location2,Integer salary,String period){
    this.jdbcTemplate.update("EXEC employer.sp_addJob ?,?,?,?,?,?,?,?,?,?,?",organizationName,designation,skill1,skill2,skill3,language1,language3,location1,location2,salary,period);
  }
}
