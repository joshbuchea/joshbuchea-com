---
slug: mysql
date: 2019-11-23
title: 'MySQL'
published: true
# banner: './banner.png'
---

- Restart MySQL: `systemctl restart mysql`

## SQL Wilcards

- Find any values that start with "a": `WHERE CustomerName LIKE 'a%'`
- Find any values that end with "a": `WHERE CustomerName LIKE '%a'`
- Find any values that have "or" in any position: `WHERE CustomerName LIKE '%or%'`
- Find any values that have "r" in the second position: `WHERE CustomerName LIKE '_r%'`
- Find any values that starts with "a" and are at least 3 characters in length: `WHERE CustomerName LIKE 'a_%_%'`
- Find any values that starts with "a" and ends with "o": `WHERE ContactName LIKE 'a%o'`

## Import / Export

- Export (with pwd): `mysqldump -u username --password=password database_name > /path/to/file.sql`
- Export (pwd prompt): `mysqldump -u username -p database_name > /path/to/file.sql`
- Export All (with pwd): `mysqldump -u username --password=password –all-databases > /path/to/file.sql`
- Export All (pwd prompt): `mysqldump -u username -p –all-databases > /path/to/file.sql`
- Import (with pwd): `mysql -u username --password=password database_name < /path/to/file.sql`
- Import (pwd prompt): `mysql -u username -p database_name < /path/to/file.sql`
- Import One DB From Dump (pwd prompt): `mysql -u username -p --one-database database_name < /path/to/file.sql`
  - There are bugs related to the `--one-database` option: `http://bugs.mysql.com/bug.php?id=40477` (can still modify other tables)
  - Extract single DB from am `--all-databases` dump: `sed -n '/^-- Current Database: `dbname`/,/^-- Current Database: `/p' alldatabases.sql > output.sql`
    - Guy said he had to add original dump headers to avoid some errors: `http://stackoverflow.com/a/25975930/1492782`

Running into "foreign key" issues/errors?: Uncheck `Enable foreign key checks` in phpMyAdmin before importing

Check `Disable foreign key checks` & `Add CREATE DATABASE / USE statement` options for max compatibility

## Error: TYPE vs ENGINE

The older TYPE option was synonymous with ENGINE. TYPE was deprecated in MySQL 4.0 and removed in MySQL 5.5. When upgrading to MySQL 5.5 or later, you must convert existing applications that rely on TYPE to use ENGINE instead.

Search & Replace: `TYPE` --> `ENGINE`

## Error Code: 1062. Duplicate entry '1' for key 'PRIMARY'

Drop table & re-create before importing. This message is because 1 has already been assigned to a previous record for this table.

## Error: Unknown collation

This error means your database is using a collation, which the MySQL server does not understand. This can happen, when you use a database, which has been created with a newer version of MySQL, with an older MySQL server version.

> you need to change your collation. Something like ALTER TABLE myTable CONVERT TO CHARACTER SET utf8 COLLATE utf8_general_ci ... then redo your export/import

> Sounds like you have an old version of MySQL? utf8mb4 came with 5.5.3; I don't know when that collation came.
