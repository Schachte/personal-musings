-- create posts table
CREATE table posts (
	id SERIAL PRIMARY KEY,
	title VARCHAR(50) NOT NULL,
	created_on TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	author VARCHAR(50),
	tags VARCHAR(100),
	content_html VARCHAR(10000),
	content_md VARCHAR(10000),
	description VARCHAR(500)
);

-- sample insertion statement
INSERT INTO posts (title, author, tags, content_html, content_md, description)
VALUES('Hacking into Java', 
'Ryan Schachte', 
'java, algorithms, coding', 
'<html><h1>HTML</h1></html>', 
'## Markdown!', 
'This is a description');

DROP TABLE posts;

INSERT INTO posts (title, author, tags, content_html, content_md, description)
VALUES('Creating Real-Time Avro to ORC Converter', 'Ryan Schachte', 'java, algorithms, coding', '<html></html>', '## Hello', 'This is a description');

select * from posts;

