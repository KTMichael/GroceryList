DROP DATABASE IF EXISTS gList;
CREATE DATABASE gList;

USE gList;

CREATE TABLE groceryList (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY(id)
)

-- mysql -u root -p < db/schema.sql
-- mysql -u root -p < schema.sql
-- sign into mysql shell
-- mysql -u root -p