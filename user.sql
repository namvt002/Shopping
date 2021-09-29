CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(45) NOT NULL,
  `comments` text NOT NULL,
  `status` varchar(10) NOT NULL DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

CREATE TABLE `shopping`.`users` ( `id` INT(11) NOT NULL AUTO_INCREMENT , `first_name` VARCHAR(20) NOT NULL , `last_name` VARCHAR(20) NOT NULL ,`user_name` VARCHAR(64) NOT NULL, `password` VARCHAR(165) NOT NULL , `avatar` VARCHAR(200) NOT NULL , `email` VARCHAR(200) NOT NULL , `address` VARCHAR(128) NOT NULL , `gender` VARCHAR(16) NOT NULL , `phone` INT(11) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;
