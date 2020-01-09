SELECT e.first_name, e.last_name, d.department_name
FROM employees e
LEFT OUTER JOIN departments d
ON e.department_id = d.department_id;



-- 5.3

select * from employees;
select * from departments;


-- 18
select d.department_id, d.department_name from departments d 
where exists ( select 1 from employees e 
where e.department_id = d.department_id) order by department_id;

-- 19
select employee_id id, first_name, salary 
from employees where salary > (select avg(salary) 
from employees) order by salary desc ;


-- 20
select employee_id, first_name, last_name, salary 
from employees where salary = (
select max(salary) from employees);

-- 21


select
employee_id, first_name, last_name,salary, commission_pct 
from employees where commission_pct >
(select avg(commission_pct) 
from employees where salary > (select avg(salary) from employees)) 
order by last_name;


select * from departments;
select * from employees;
select * from locations;
select * from jobs;
select * from regions;
select * from job_history;
select * from countries;
select employee_id, first_name,last_name from employees;
-- 22
select employee_id,first_name, last_name
from employees
where department_id in (
select department_id
from departments
where location_id in ( 
select location_id
from locations
where city = 'London'
)
);



--- 
select * from departments;
select * from employees;
select * from locations;
select * from jobs;
select * from regions;
select * from job_history;
select * from countries;




select * from employees where department_id not in (
select department_id from departments where manager_id between 100 and 200);

select employee_id from job_history;

select department_id from employees where salary >= (select max(salary) from employees) ;




select * from departments where department_id in 
(select department_id from employees 
where salary >= 7000) join employees ;

select employee_id from job_history group by employee_id having count(employee_id) >=1;

select * from job_history group by employee_id having count(employee_id) >=1 in (

select * from departments where department_id in 
(select department_id from employees 
where salary >= 7000)
);


select * 
    from departments 
    where department_id in 
    (select department_id
        from employees
        where employee_id in 
            (select employee_id
            from job_history
            group by employee_id
            having count (employee_id) >= 1)
            group by department_id)
            having max(employees.salary) >= 7000);



select distinct department_id from departments;

select min(salary) as vvv from employees in 
(select distinct department_id from departments
);


select employee_id, salary distinct department_id from departments ;

select * from employee where salary = (;

-- correlated subquery
select * 
from employees e1 
where e1.salary = 
(select min(salary) 
from employees e2 where e1.department_id=e2.department_id);


-- chapter

create table emps as
select e.first_name, e.last_name, d.department_name,l.city from employees e 
join departments d on 
e.department_id= d.department_id 
join locations 
l on l.location_id=d.location_id;


-- 2
select * from emps;
--3
drop table emps;

-- 4
FLASHBACK TABLE emps TO BEFORE DROP;

--5 
truncate table emps;

--6 
drop table emps purge;




select  * from employees e 
join departments d on 
e.department_id= d.department_id 
join locations 
l on l.location_id=d.location_id;


FLASHBACK TABLE emps TO BEFORE DROP

select * from employees;
select * from departments;
select * from locations;



create table Agents(
    agent_code varchar2(6) not null primary key,
    agent_name varchar2(40) not null,
    working_area varchar2(35) not null,
    commission decimal(10,2) check(commission <1) not null,
    phone_no varchar2(15) null);



select * from agents;

create table Customer (
    cust_code varchar2(6) not null primary key,
    cust_name varchar2(25) not null unique,
    cust_city varchar2(25) ,
    agent_code varchar2(6) references agents(agent_code)
    );
    

alter table Agents 
    add (country varchar2(25) )
;

select * from agents;

alter table agents drop column country;


alter table agents 
  drop constraint
 commission;
 
 alter table agents modify commission default .05;
 
 alter table agents add constraint dup_che_con unique(agent_name);
ALTER TABLE AGENTS DROP CONSTRAINT DUP_CHE_CON;
ALTER TABLE AGENTS MODIFY C9COUNTY VARCHAR(35));
