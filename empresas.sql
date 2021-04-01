-- -------------------------------------------------------------
-- TablePlus 3.12.5(364)
--
-- https://tableplus.com/
--
-- Database: empresas
-- Generation Time: 2021-04-01 14:23:24.3620
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `Alumnos` (
  `cursoAl` text,
  `nombreAl` text,
  `localidadAl` text,
  `emailAl` text,
  `movilAl` int(11) DEFAULT NULL,
  `empresaAl` text,
  `contactoEmp` text,
  `practicas` text,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `OBSERVACIONES` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

CREATE TABLE `Empresas` (
  `EMPRESA` varchar(28) DEFAULT NULL,
  `CONTACTO` varchar(49) DEFAULT NULL,
  `EMAIL` varchar(60) DEFAULT NULL,
  `TELEFONO` varchar(21) DEFAULT NULL,
  `PRACTICAS` varchar(39) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `OBSERVACIONES` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=182 DEFAULT CHARSET=utf8;

INSERT INTO `Alumnos` (`cursoAl`, `nombreAl`, `localidadAl`, `emailAl`, `movilAl`, `empresaAl`, `contactoEmp`, `practicas`, `id`, `OBSERVACIONES`) VALUES
('2021', 'MARTINA CLADERA', 'STA MARIA', 'MARI@NANA.COM', NULL, 'GUIELL TECH', 'GUILLEM', 'Programacion', 0, NULL),
('GSS', 'MARIANO', 'CAMPOS', 'mira@gmail.com', 654321, 'LUCIONET', 'ESPINOSA', 'LUCERO', 1, NULL),
('GSI', 'JULIANA', 'MANACOR', 'DSLKJ@SD.COM', 654321, 'ILUTEC', 'susanita', 'IMAGEN', 2, NULL),
('GSS', 'PERE', 'MANACOR', 'mira@gmail.com', 654321, 'Sonet', 'MIGUEL', 'ILUMINACION', 3, NULL),
('GSS', 'IVAN AGUADO', 'PAGUERA', 'D.E@G.COM', 111111, 'ONDAS LIBRES', 'PAQUITO', 'SONIDO FICCION', 4, NULL),
('GSS', 'PERE BATLE', 'PALMA', 'pere@cef.com', 656896523, 'CADENA SER', 'RAÚL JIMENEZ', 'SONIDO RADIO', 5, NULL),
('GSR', 'LOURDES', 'CAMPOS', 'mira@gmail.com', 654321, 'Sonet', 'MIGUELOTE', 'SONIDO', 6, NULL),
('GSS', 'XISCO MERCADAL', 'MARRATXI', 'XISCO@XISCO.COM', 999000333, 'ON-LINE', 'TEO ON-LINE', 'SONIDO', 7, NULL),
('GSS2', 'JULIANO MINGANO', 'ARGENTINO', 'JULIANO@ANO.COM', 1010101010, 'CADENA SER', 'RAULILLO', 'RADIO', 9, NULL),
('GSR', 'JUANITA BANANA', 'SINEU', 'JUANITA@JT.RD', 555667565, 'SIURELL SL', 'MARTIRIO', 'CAMARA', 10, NULL),
('GSSA', 'MARIA', 'PAGUERA', 'MARI@MARI.COM', NULL, 'MATRIX X.L', 'NEO', '3D', 11, NULL),
('GSSR', 'PAULA', 'BILBAO', 'PAU@LA.COM', NULL, 'TOMAVISTES', 'JAUME', 'Estudio Foto', 12, NULL),
('GSSI', 'ALEX MALDONADO', 'ARENAL', 'ALEX@MALO.COM', NULL, 'ILUTECH S.L', 'MARIANO', 'Plato Tv', 13, NULL),
('2021', 'ARTURO BAYONA', 'PALMA', 'ARTU@RO.COM', NULL, 'LEGUAS', 'JAVIER', 'Plato Tv', 14, NULL),
('2020', 'MIGUEL', 'ALGAIDA', 'ALM@GRT.COM', NULL, 'SDFSDF', 'VIKTORIA', 'Radio', 25, NULL);

INSERT INTO `Empresas` (`EMPRESA`, `CONTACTO`, `EMAIL`, `TELEFONO`, `PRACTICAS`, `id`, `OBSERVACIONES`) VALUES
('ACOPUO', 'Juanjo Buendía', 'juanjo@acopuo.com', '616578398', 'Editor ', 1, NULL),
('AICO', NULL, 'info@aico.es', '609741229', 'Camara', 2, NULL),
('AL AIRE FILMS MALLORCA', 'LUÍS RIZO', 'luis@alairefilms.com', '656370777', 'Grabaciones de Aventura', 3, ''),
('AMADIP ESMENT', 'Carles Bover', 'cbover@amadipesment.org', '618423660', 'MontajeVideo, Sonido', 4, 'BUENA EMPRESA, BUENA GENTE\r\nBUENA EMPRESA, BUENA GENTE\r\nBUENA EMPRESA, BUENA GENTE\r\nBUENA EMPRESA, BUENA GENTE\r\nBUENA EMPRESA, BUENA GENTE\r\nBUENA EMPRESA, BUENA GENTE\r\nBUENA EMPRESA, BUENA GENTE\r\nBUENA EMPRESA, BUENA GENTE\r\n'),
('AUDITORIUM', 'J Ferragut', '‎jferragut@auditoriumpalma.com', '971 73 04 23', 'Sonido Imagen', 5, NULL),
('BABIEKA FILMS', 'Ernest Riera', 'ernestriera77@gmail.com', '658378379', 'Sonido Imagen, Video, Guion', 6, 'BUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDDBUENA EMPRESA, BUENA GENTEDD'),
('BORBALAN', 'Brenda Marta/ Fernando/ Xesca', 'bbarta@botbalan.com/fcamps@borbalan.com', '971729457', 'Video', 7, NULL),
('CADENA SER', 'Raúl Jiménez', 'RJimenezM@prisaradio.com', '607822510', 'Radio', 8, NULL),
('CALMA STUDIO', 'Josep Umbria', 'umbria@calmaestudis.com', '971 847 254', 'Video', 9, NULL),
('CAMP APRENENTATGE ORIENT', 'Toni Rosselló', 'cabinifaldo1@gmail.com/ caorient@educaib.eu', '971427212/619199111', 'Video', 10, NULL),
('CAN PUC', 'Enric Hernaiz Trilla', 'canpuc@gmail.com', '607621782', 'Video', 11, NULL),
('CANAL 4 TV', 'Baltasar Crespí ', 'bcrespi@grup4.com', '609612394', 'Video', 12, NULL),
('CARMINA SHOEMAKER', 'Miquel Martorell', 'mmartorell@carminashoemaker.com', '971880938', 'Video', 13, NULL),
('CASA PLANAS', 'MARITO/Alelí Mirelman', 'centreculturalcasaplanas@gmail.com/maritoverdaguer@gmail.com', '660239021', 'Video', 14, NULL),
('CASTELAO PRODUCTIONS SA', 'BÀRBARA FERRER', 'barbara@laperiferica.com', '617013979', 'Video', 15, NULL),
('CD ATLÉTICO BALEARES', 'CARLOS HERNÁNDEZ', 'comunicacion@atleticobaleares.com', '680646438', 'Foto Ficción', 16, NULL),
('CEF AUDIOVISUAL', 'ALINE', 'aline@cefmallorca.com', '971718063', 'Video', 17, NULL),
('CINÉTICA', 'Luís Hortas', NULL, '686650829', 'Video', 18, NULL),
('COPE', NULL, NULL, NULL, 'Video', 19, '19/02/21: 1 alumnos '),
('DI7 CONSULTORS', NULL, 'info@dissetconsultors.com', NULL, 'Video', 20, 'BINISSALEM'),
('DIARIO DE MALLORCA', 'Marisa Goñi', ' ', ' ', 'Video', 21, '19/02/21: 2 alumnos: fotógrafo/audiovisual JUNIO/JULIO\r\nCON GANAS DE SEGUIR EN SEPTIEMBRE'),
('DJ GROUP', 'Toni Contreras', 'tonicontreras@lomusic.es', '626553063', 'Video', 22, 'INCA'),
('EMPRESA ANDREA', NULL, NULL, ' ', 'Video', 23, NULL),
('ENCORA', ' ', NULL, NULL, 'Video', 24, 'SOLLER'),
('ES BALUARD', 'Eva Cifre', NULL, '971908200', 'Video', 25, '19/02/21: Nos lo va a confirmar'),
('ESPAI TEMPS', 'Lluís Prieto', 'lluis@espaitemps.com', NULL, 'Video', 26, NULL),
('EVOLUTION FILM FESTIVAL', 'PAU VICH', 'evolutionfilmfestival@gmail.com', '649480290', 'Video', 27, NULL),
('FAR VISUALS', 'Joan Bover', 'joan@farvisuals.com', '699604005', 'Video', 28, NULL),
('FIBWI', NULL, NULL, '971 940 971', 'Video', 29, 'INCA'),
('FOTO ESTUDIO  MOLINS', 'Guillermo Ginard', 'fotomolins@fotomolins.com', '607860731/971288051', 'Video', 30, NULL),
('IB3 RADIO', NULL, NULL, NULL, 'Video', 31, NULL),
('IBEROSTAR', 'Alberto Alba', 'alberto.alba@iberostar.com', '686 233 801', 'Video', 32, '19/02/21: Mandado EMAIL'),
('INSELRADIO', 'CHRISTINA TRAPP', 'trapp@inselradio.com', '971 725 941', 'Video', 33, NULL),
('ISLANET', 'Santiago Tonelli', 'digital@islanetworks.com', '619176015', 'Video', 34, NULL),
('KAMALYON', NULL, 'albertocollazo@kamalyon.com', '654 055 015', 'Video', 35, NULL),
('KINACU SYSTEMS', NULL, 'senyconsulting@gmail.com', '686339982', 'Video', 36, NULL),
('LA CATALINA', 'Manuel Bauzá', 'info@lacatalina.net', NULL, 'Video', 37, NULL),
('LAURA JAUME', 'Laura Jaume', 'laurajaumefotografia@gmail.com', '689242223/971603089', 'Video', 38, NULL),
('LIQUID MEDIA, SL ', NULL, NULL, NULL, 'Video', 39, NULL),
('LOOPING', 'Oliver Hernández', 'ohernandez@looping.es', '676493511', 'Video', 40, NULL),
('MALLORCA VÍDEO', 'David', 'info@mallorcavideo.es', '680376010', 'Video', 41, NULL),
('MALLORCADOCS', 'ALEJANDRO DIOSCÓRIDES', 'mallorcadocs@gmail.com', '695533660', 'Video', 42, NULL),
('MANSION GAMES', 'Helena Soriano', ' mgallardo@mansion-games.com', '636429628', 'Video', 43, NULL),
('MATCH SO', 'Matías Garau Parets', 'matchband@yahoo.es', '658502865', 'Video', 44, NULL),
('MATEU BENNASAR', NULL, NULL, NULL, 'Video', 45, NULL),
('MEDIAPRO', NULL, 'formacion@mediapro.es', '667110344', 'Video', 46, NULL),
('MEDIÓPOLIS', 'Patrick', 'patrick.mediopolis@gmail.com', '636950974', 'Video', 47, NULL),
('MN STUDIOS', 'Daniela', 'daniela@mnstudios.es', '620246688', 'Video', 48, NULL),
('MOSAIC', 'MARTA CASTELLS', 'marta@mosaicprod.com', '649803581', 'Video', 49, NULL),
('MOM WORKS', 'NURIA ABAD', 'MUMWORKS.ES', '656626981', 'Video', 50, NULL),
('NOVA TV', 'Mercedes Rubio (RRHH)/Manolo Coeto (Jefe técnico)', 'mcoeto@novatelevisio.com/direccio@novatelevisio.com', 'Manolo 616414810', 'Video', 51, NULL),
('OFFLINE PRODUCCIONES', 'Dani Cuesta', 'dani@offlineproducciones.es', '658633924', 'Video', 52, NULL),
('ONA MEDITERRÀNIA', 'info@onamediterrania.cat', NULL, NULL, 'Video', 53, NULL),
('ONDA CERO', 'jenriquez@ondacero.es', 'Juan Carlos Enríquez', '971777000', 'Video', 54, 'informativos@ondacero.es'),
('ONLINE', 'Teo Adrover', 'info@onlinesonoritzacions.com', '629654834', 'Video', 55, NULL),
('PALEÂRTICA FILMS', 'MARINA SEGUÍ/TONI ESCANDELL', 'toniescandell@gmail.com/marinapaleartica@gmail.com', '663080322', 'Video', 56, NULL),
('PALMA MUSIC STUDIO', 'Fredrick Thomander', 'mail@palmamusicstudios.com', '654715373', 'Video', 57, NULL),
('PALMA PICTURES', NULL, NULL, NULL, 'Video', 58, NULL),
('PEPMI GARAU', 'Pepmi Garau', 'info@pepmi.es', '680 74 63 68', 'Video', 59, NULL),
('PERIFÉRICA', NULL, NULL, NULL, 'Video', 60, NULL),
('PLAY SPACE', NULL, NULL, NULL, 'Video', 61, NULL),
('RADIO BALEAR ', 'Fernando Ruiz', 'fruiz@radiobalear.com', '971421121', 'Video', 62, NULL),
('RADIO CALVIÀ', '659477715', 'Jaime Mora', NULL, 'Video', 63, NULL),
('RADIO RNE', 'BERNARDO J. CASTELL VIVES', 'jefemedios.baleares@rtve.es', '971211335 (11335)', 'Video', 64, NULL),
('REVI', 'Miquel Rechac Garau', 'revifondo@hotmail.com', '669799599', 'Video', 65, NULL),
('REX4MEDIA ', 'Javier Regueira', 'javier@rex4media.com', '971 53 68 40', 'Video', 66, 'Agencia marketing POLLENÇA'),
('ROCKY & CO', 'Juan Manuel Herrera', 'info@rockyandco.es', '610820640', 'Video', 67, '19/01/21: Nos mandará detalle de las funciones de los alumnos'),
('SCHOOLERS', 'MARTA VIDAL', 'backoffice@schoolers.io', '971910222 | 696485264', 'Video', 68, 'Plataforma formació online'),
('SINGULAR', NULL, NULL, NULL, 'Video', 69, '4 a Pep y 1 a Fred i Calent'),
('SOLWORKS FILMS', 'MAR PÉREZ', 'mar@solworks.eu', '658 914 442', 'Video', 70, NULL),
('SOUNDTOOSONG', NULL, NULL, '610961506', 'Video', 71, NULL),
('SunnySideUp Productions S.L.', 'Christina Held', NULL, '649 821 122', 'Video', 72, 'info@sunnysideup.tv'),
('TEAM 33 ', 'Sara', 'mailbox@team33.es', '971 741702', 'Video', 73, NULL),
('TEATRE PRINCIPAL', NULL, 'secretariadireccio@teatreprincipal.com', '971219689', NULL, 74, NULL),
('TECNICA AUDIOVISUAL BALEAR', NULL, 'tecnica.audiovisual.balear@gmail.com', '676553367', 'Video', 75, NULL),
('TOMEU COLL (Fotógrafo)', 'Tomeu Coll', 'tomeucoll@gmail.com', '635493303', 'Video', 76, NULL),
('TRAMUNTANA ESTUDIOS', 'Jaume Gelabert', 'jaumegelabertm@gmail.com', '675 874844', 'Video', 77, NULL),
('TVE', NULL, NULL, NULL, 'Video', 78, NULL),
('VIDEO REPORT ', 'Mª Jesús Martínez', 'mariaj.martinez@tres60grupo.com', '618223169', 'Video', 79, NULL),
('WE-FOUR', 'ENRIQUE FRANCO', 'enriquefranco@we-four.com', NULL, 'Video', 80, NULL),
('XALOC STUDIOS', 'Joan Pons', 'joanpons@xalocstudios.com', NULL, 'Video', 81, '15/02/21: en unas semanas nos confirman disponibilidad'),
('ZINKFO', 'Rocío Gutiérrez', 'rociogutierrez@zinkfo.com', '609118071', 'MontajeVideo, Sonido', 82, NULL),
('ÁNGELA COVAS', NULL, NULL, NULL, 'Video', 83, NULL),
('Online2', 'Tolo P', 'do.com@h.com', '999999', 'Video', 84, 'si quieren SONIDO'),
('PASTERETES', 'LOURDES', 'LOU@LOU.COM', '987987987', 'Video', 85, NULL),
('RAIXA', 'RAIXA', 'RAIXA.E@RAIXA.COM', '987987987', ' Guion', 86, NULL),
('RAIXA2', 'RAIXA', 'RAIXA.E@RAIXA.COM', '987987987', 'MontajeVideo, Sonido', 87, NULL),
('RAIXA3', 'RAIXA', 'RAIXA.E@RAIXA.COM', NULL, 'Iluminacion', 88, NULL),
('RAIXA5', 'RAIXA', 'RAIXA.E@RAIXA.COM', '987987987', ' Guion', 89, NULL),
('RAIXA6', 'RAIXA', 'RAIXA.E@RAIXA.COM', '987987987', 'SonidoDirecto', 90, NULL),
('NUEVA EMPRESA LISTADA', 'EL LISTADO', 'EL@LISTADO.COM', '98987987987', 'Productora TV', 91, NULL),
('ULTIMA EMPRESA', 'DIMONI', 'DIMO@ONI.COM', '666666666', 'Estudio Foto', 181, 'BUENA EMPRESA SI TE GUSTA TRABAJAR EN UN SITIO CON BUEN AMBIENTE, Y CALENTITO!!!');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;