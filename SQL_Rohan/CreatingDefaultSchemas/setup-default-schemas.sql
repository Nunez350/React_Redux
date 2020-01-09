SELECT * FROM all_users;
SELECT * FROM dba_users;

SELECT username, account_status, created, lock_date, expiry_date
  FROM dba_users
 WHERE account_status != 'OPEN';
 
select username, account_status
from dba_users
where username = 'SCOTT';

/***** Enable HR account ********/
ALTER USER hr ACCOUNT UNLOCK IDENTIFIED BY hr;

/* Create user scott and run the scott.sql script *****/
grant all privileges to scott identified by tiger;
