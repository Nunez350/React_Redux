select dname, deptno from dept;
select * from dept ;
select dname as "name" ,deptno as "dept#",loc  as "dept location" from dept;
select deptno from emp;
select distinct deptno from emp ;
select deptno, job from emp;
select distinct deptno , job from emp;
select ename from emp where deptno = 30;
select * from emp where hiredate= '17/DEC/1981';
select * from emp where hiredate>= '17/DEC/1981';
select ename from emp where job = 'clerk';
select ename from emp where job = 'CLERK';
select ename from emp where sal > 2500;
select ename from emp where sal between 100 and 1600;
select ename from emp where ename LIKE '%ER%'; 
select ename from emp where comm is null;
select ename, comm, empno from emp order by comm asc;
select ename, comm, empno from emp order by comm desc;
select ename, comm, empno from emp order by comm desc nulls last;


select * from emp;


