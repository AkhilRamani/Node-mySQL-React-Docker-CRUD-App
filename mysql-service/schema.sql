DROP TABLE IF EXISTS `keywords`;
DROP TABLE IF EXISTS `sites`;
DROP TABLE IF EXISTS `settings`;

CREATE TABLE `keywords` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `word` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `sites` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `site` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `chrome` boolean,
  `firefox` boolean,
  `explorer` boolean DEFAULT true,
  `safari` boolean,
  `opera` boolean,
  `incognito` boolean DEFAULT true,
  `target_site_wait` varchar(255) DEFAULT "40-55",
  `visit_within` boolean DEFAULT true,
  `no_page` int DEFAULT 1,
  `page_from` int DEFAULT 30,
  `page_to` int DEFAULT 50,
  `wait_after` varchar(255) DEFAULT "5-10",
  `target_site` int DEFAULT 10,
  `not_found_wait` varchar(255) DEFAULT "20",
  `reset_no` int DEFAULT 1,
  `device_reset` boolean,
  `vinn_reset` boolean,
  `phone_reset` boolean,
  `mobile_data` boolean DEFAULT true,
  `fly_mode` boolean,
  `no_cookie` boolean DEFAULT true,
  `change_resolution` boolean,
  `mouse_track` boolean,
  `data_saving` boolean DEFAULT true,
  `randome_generate` boolean,
  `analytic_protect` boolean DEFAULT true,
  `remove_history` boolean,
  PRIMARY KEY (`id`)
);