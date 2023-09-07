CREATE TABLE users (
    uid varchar(50) NOT NULL PRIMARY KEY,
    name varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    password varchar(72) NOT NULL,
    role varchar(50) NOT NULL,
    location varchar(50),
    description varchar(100),
    photo image,
);

INSERT INTO users VALUES ('1', 'DaoHuy', 
'dmhuy.ityu@gmail.com', '123456', 'admin', NULL, NULL, NULL);

-- update admin uid
UPDATE users SET uid = '1' WHERE role = 'admin';
```