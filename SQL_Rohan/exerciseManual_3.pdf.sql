 -- employee, list the employee id, first name, last name, job id, and job title
 select * from employees;
 
 select employees.employee_id, employees.first_name, employees.last_name, employees.job_id, jobs.job_title from employees join jobs on employees.job_id = jobs.job_id;
 
 
select e.employee_id, e.first_name, e.last_name, e.job_id, j.job_title from employees e join jobs j on e.job_id = j.job_id;
  
  
  
select e.employee_id, e.first_name, e.last_name, e.job_id, j.job_title from employees e join jobs j on e.job_id = j.job_id where e.job_id = 'FI_ACCOUNT';





-- exercise 3.1
select * from locations;
select * from departments;
select * from countries;
select locations.city, locations.location_id, departments.department_name from locations join departments on locations.location_id = departments.location_id;
-- oining the locations and countries tables, display the country name and city.
select * from countries;

select countries.country_name, locations.city from locations join countries on countries.country_id = locations.country_id;

select c.country_name, l.city from locations l join countries c on c.country_id = l.country_id;
--  Joining the locations, countries, and departments tables, displae_idy the country name, city, and department name.
select countries.country_name, locations.city from countries join locations on countries.country_id = locations.country_id join departments on locations.location_id = departments.location_id;
select * from employees;
select * from job_history;
select * from jobs;
-- Joining the employees and job_history tables, display the employee ID, first and last name, and the job ID. Display the output in sequence by employee_id.
select employees.employee_id, employees.first_name, employees.last_name, job_history.JOB_ID from employees join job_history on employees.employee_id = job_history.employee_id order by employee_id;

-- Joining the jobs and job_history tables, display the job title, employee ID, and starting date for all employees who started in that job after Jan. 1, 1998.
select jobs.job_title, job_history.employee_id,job_history.start_date from jobs join job_history on jobs.JOB_ID = job_history.JOB_ID where job_history.start_date > '1/JAN/1998' ;

-- Modify the above query: remove the start date restriction and also include the employees’ first and last names.
-- . Modify the above query: remove the start date restriction and also include the employees’ first and last names
select jobs.job_title, employees.first_name, employees.last_name, job_history.employee_id , job_history.start_date from jobs join job_history on jobs.JOB_ID = job_history.JOB_ID join employees on employees.employee_id = job_history.employee_id ;


select e.first_name, e.last_name, d.department_name from employees e inner join departments d on e.department_id = d.department_id;