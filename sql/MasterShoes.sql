-- Base de datos: `Master Shoes`

-- --------------------------------------------------------

-- Estructura para la tabla `tiene`

CREATE TABLE `tiene` (
  `id` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `tropa`
--
CREATE TABLE `tropa` (
  `id` int(11) NOT NULL,
  `clase` varchar(50) NOT NULL,
  `nivel` int(11) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `vida` int(11) NOT NULL,
  `ataque` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `usuario`
--
CREATE TABLE `usuario` (
  `username` varchar(20) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `password` varchar(400) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
--
-- Índices para tablas volcadas
--
--
-- Indices de la tabla `tiene`
--
ALTER TABLE `tiene`
  ADD PRIMARY KEY (`id`,`username`,`created_at`),
  ADD KEY `id` (`id`),
  ADD KEY `username` (`username`);
--
-- Indices de la tabla `tropa`
--
ALTER TABLE `tropa`
  ADD PRIMARY KEY (`id`);
--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`username`);
--
-- AUTO_INCREMENT de las tablas volcadas
--
--
-- AUTO_INCREMENT de la tabla `tropa`
--
ALTER TABLE `tropa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Restricciones para tablas volcadas
--
--
-- Filtros para la tabla `tiene`
--
ALTER TABLE `tiene`
  ADD CONSTRAINT `fk_tropas` FOREIGN KEY (`id`) REFERENCES `tropa` (`id`),
  ADD CONSTRAINT `fk_usuarios` FOREIGN KEY (`username`) REFERENCES `usuario` (`username`);
COMMIT;