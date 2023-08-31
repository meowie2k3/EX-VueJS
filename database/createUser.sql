CREATE TABLE users (
    uid char(50) NOT NULL PRIMARY KEY,
    name char(50) NOT NULL,
    email char(50) NOT NULL,
    password char(50) NOT NULL,
    role char(50) NOT NULL,
    location char(50),
    description char(100),
    photo image,
);

INSERT INTO users VALUES ('1', 'DaoHuy', 
'dmhuy.ityu@gmail.com', '123456', 'admin', NULL, NULL, NULL);