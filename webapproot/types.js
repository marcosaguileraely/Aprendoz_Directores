wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"com.aprendoz_test.data.Actividad": {
			"fields": {
				"actividad": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idActividad": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"inscAlumActividads": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumActividad"
				},
				"requeridoAlternativo": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Subtopico"
				},
				"tipoActividad": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TipoActividad"
				},
				"tipoDesempeno": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TipoDesempeno"
				},
				"tipoValoracion": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TipoValoracion"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ActualizacionDatosPersona": {
			"fields": {
				"actualizado": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Byte"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idActualizacionDatosPersona": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ActualizacionGrupoFamiliar": {
			"fields": {
				"actualizado": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Byte"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.GrupoFamiliar"
				},
				"idActualizacionGrupoFamiliar": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.AdministracionVistaAsignaturas": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.AdministracionVistaAsignaturasId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.AdministracionVistaAsignaturasCurso": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.AdministracionVistaAsignaturasCursoId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.AdministracionVistaAsignaturasCursoId": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"gradoIdGrado": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idCurso": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idGrado": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombreLdap": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.AdministracionVistaAsignaturasId": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idGrado": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subject": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.AdministracionVistaInscAlumAsig": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.AdministracionVistaInscAlumAsigId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.AdministracionVistaInscAlumAsigId": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"califChar": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.math.BigDecimal"
				},
				"esperados": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSy": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"logrados": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"porcentaje": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.math.BigDecimal"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.AdministracionVistaInscAlumnCurso": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.AdministracionVistaInscAlumnCursoId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.AdministracionVistaInscAlumnCursoId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grupoFamiliarIdGrupoFamiliar": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idCurso": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSy": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"matriculado": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.AdministracionVistaPersonas": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.AdministracionVistaPersonasId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.AdministracionVistaPersonasId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grupoFamiliarIdGrupoFamiliar": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idGrupoFamiliar": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Anticipos": {
			"fields": {
				"codigo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"idAnticipos": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Anuncio": {
			"fields": {
				"anuncio": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.AprEsperados": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.AprEsperadosId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.AprEsperadosId": {
			"fields": {
				"asignaturaIdAsignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"count___": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"fechaEsperada": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.AprLogrados": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.AprLogradosId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.AprLogradosId": {
			"fields": {
				"count___": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"fechaLogro": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Aprendizaje": {
			"fields": {
				"aprendizaje": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"calificacionFinals": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.CalificacionFinal"
				},
				"dimensionComprension": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.DimensionComprension"
				},
				"dimensionCurricular": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.DimensionCurricular"
				},
				"eje2IdEje": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"eje3IdEje": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"ejeIdEje": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"fechaEsperada": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idAprendizaje": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscAlumAprendizajes": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumAprendizaje"
				},
				"inteligencia": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Inteligencia"
				},
				"learning": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"nivelEsperado": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.NivelEsperado"
				},
				"peso": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Subtopico"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Area": {
			"fields": {
				"area": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"areaName": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idArea": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"inscAlumAreas": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumArea"
				},
				"subareas": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Subarea"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Asignatura": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"descripAsigEspaniol": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"descripAsigIngles": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"electiva": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"esperadostotal": {
					"exclude": [],
					"fieldOrder": 19,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 20,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Grado"
				},
				"horarios": {
					"exclude": [],
					"fieldOrder": 24,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Horario"
				},
				"idArea1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"idArea2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"idArea3": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSubarea1": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"idSubarea2": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"idSubarea3": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"ihA1": {
					"exclude": [],
					"fieldOrder": 15,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Float"
				},
				"ihA2": {
					"exclude": [],
					"fieldOrder": 16,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Float"
				},
				"ihA3": {
					"exclude": [],
					"fieldOrder": 17,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Float"
				},
				"inscAlumAsigs": {
					"exclude": [],
					"fieldOrder": 25,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumAsig"
				},
				"inscCursoAsigs": {
					"exclude": [],
					"fieldOrder": 23,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscCursoAsig"
				},
				"intensidadHoraria": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"meses": {
					"exclude": [],
					"fieldOrder": 18,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"peso": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"salonIdSalon": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"sesions": {
					"exclude": [],
					"fieldOrder": 26,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Sesion"
				},
				"subject": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 22,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Sy"
				},
				"tipoInscAsig": {
					"exclude": [],
					"fieldOrder": 21,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TipoInscAsig"
				},
				"unidads": {
					"exclude": [],
					"fieldOrder": 27,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Unidad"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Asistencia": {
			"fields": {
				"comentario": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idAsistencia": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"sesion": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Sesion"
				},
				"tipoAsistencia": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TipoAsistencia"
				},
				"tipoEventualidadIdTipoEventualidad": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipoEventualidadIdTipoEventualidad1": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipoEventualidadIdTipoEventualidad2": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.BimestreSy": {
			"fields": {
				"bimestre": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"fechaFin": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaInicio": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idBimSy": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Sy"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.BisUsers": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.BisUsersId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.BisUsersId": {
			"fields": {
				"apellido": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"auth": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"dec": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"hex": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CafeteriaGartinuras": {
			"fields": {
				"descripcion": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"garnitura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"idGarnituras": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"imageLink": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CafeteriaMenu": {
			"fields": {
				"diaSemana": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"garniturasIdGarnituras": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"idMenu": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"postresIdPostres": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"sopaIdSopa": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CafeteriaPostres": {
			"fields": {
				"descripcion": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idPostres": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"imageLink": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"postre": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CafeteriaProteina": {
			"fields": {
				"descripcion": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idProteinas": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"imageLink": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"proteina": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CafeteriaSopas": {
			"fields": {
				"descripcion": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idSopas": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"image": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sopas": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CafeteriaTipoOpcion": {
			"fields": {
				"idOpciones": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"menuIdMenu": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipoOpcionIdTipoOpcion": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipoProteinaIdTipoProteina": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CalifEst": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.CalifEstId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CalifEstCopy": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.CalifEstCopyId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CalifEstCopyId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"aprendizaje": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"asignatura": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 12,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"fechaEsperada": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"fechaLogro": {
					"exclude": [],
					"fieldOrder": 13,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"unidad": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CalifEstId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"aprendizaje": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"asignatura": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 12,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"fechaEsperada": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"fechaLogro": {
					"exclude": [],
					"fieldOrder": 13,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"unidad": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CalificacionFinal": {
			"fields": {
				"aprendizaje": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Aprendizaje"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"calificacionNum": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"fechaLogro": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idCalificacionFinal": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CodigosCorrecion": {
			"fields": {
				"codigo": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Coordinacion": {
			"fields": {
				"curso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Curso"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.CoordinacionId"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Sy"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CoordinacionDeGrupo": {
			"fields": {
				"curso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Curso"
				},
				"idCoordinacionDeGrupo": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Sy"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CoordinacionId": {
			"fields": {
				"cursoIdCurso": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idCordinacion": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Coordinadores": {
			"fields": {
				"curso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Curso"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.CoordinadoresId"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Sy"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CoordinadoresId": {
			"fields": {
				"cursoIdCurso": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"grupo": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"idCoordinador": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CortesAnuales": {
			"fields": {
				"fechaFin": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"fechaInicio": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idCorte": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"mescorte": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"numeroCorte": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"ordenNominal": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Costos": {
			"fields": {
				"anual": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"descripcion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Grado"
				},
				"idCosto": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscAlumCostos": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumCosto"
				},
				"nombreProducto": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"nuevo": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"obligatorio": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"positivo": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Sy"
				},
				"valor": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Double"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Cronograma": {
			"fields": {
				"descripcion": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idCronograma": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Sy"
				},
				"tipoDia": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TipoDia"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CurriculoGrado": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.CurriculoGradoId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.CurriculoGradoId": {
			"fields": {
				"actividad": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"aprendizaje": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"asignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"asignaturaGradoIdGrado": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"asignaturaSyIdSy": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gradoGrado": {
					"exclude": [],
					"fieldOrder": 12,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"gradoIdGrado": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSubtopico": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idUnidad": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"recurso": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"unidad": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Curso": {
			"fields": {
				"coordinacionDeGrupos": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.CoordinacionDeGrupo"
				},
				"coordinacions": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Coordinacion"
				},
				"coordinadoreses": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Coordinadores"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Grado"
				},
				"horarios": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Horario"
				},
				"idCurso": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscAlumCursos": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumCurso"
				},
				"inscCoordinadoresCursos": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscCoordinadoresCurso"
				},
				"inscCursoAsigs": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscCursoAsig"
				},
				"matriculas": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Matricula"
				},
				"sesions": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Sesion"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Davivienda": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"facturadavivienda": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Byte"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"iddavivienda": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idpersona": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nodocumento": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DimensionComprension": {
			"fields": {
				"aprendizajes": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Aprendizaje"
				},
				"dimensionComprension": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idDimension": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DimensionCurricular": {
			"fields": {
				"aprendizajes": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Aprendizaje"
				},
				"dimensionCurricular": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idDimension": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DirectoresDocentesListadoReportes": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.DirectoresDocentesListadoReportesId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DirectoresDocentesListadoReportesId": {
			"fields": {
				"codigo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"descripcion": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idTipoPersona": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idreporte": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"reporte": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"tipoPersona": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"uri": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesAsistenciaAsistencias": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.DocentesAsistenciaAsistenciasId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesAsistenciaAsistenciasId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"comentario": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSesion": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idTipo": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"sexo": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"tipo": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesInicioVistaDetallesAcceso": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.DocentesInicioVistaDetallesAccesoId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesInicioVistaDetallesAccesoId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"clave": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"cursoIdCurso": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombreLdap": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesInscCursoAsignatura": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.DocentesInscCursoAsignaturaId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesInscCursoAsignaturaId": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"asignaturaIdAsignatura": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombreLdap": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaAprendizajesAsignatura": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.DocentesVistaAprendizajesAsignaturaId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaAprendizajesAsignaturaId": {
			"fields": {
				"aprendizaje": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"asignaturaIdAsignatura": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"fechaEsperada": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"idAprendizaje": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"learning": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"numeroSubtopico": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"numeroUnidad": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"peso": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"unidad": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaAsignaturaGrado": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.DocentesVistaAsignaturaGradoId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaAsignaturaGradoId": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"gradoIdGrado": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaAsignaturas": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.DocentesVistaAsignaturasId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaAsignaturasId": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"electiva": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"gradoIdGrado": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaCalificacionFinal": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.DocentesVistaCalificacionFinalId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaCalificacionFinalId": {
			"fields": {
				"aprendizajeIdAprendizaje": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"calificacionNum": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Float"
				},
				"fechaLogro": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaDristribucionAlumnosCursos": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.DocentesVistaDristribucionAlumnosCursosId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaDristribucionAlumnosCursosId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"cursoIdCurso": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idCurso": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSy": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaInscAlumnAsig": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.DocentesVistaInscAlumnAsigId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaInscAlumnAsigDemografica": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.DocentesVistaInscAlumnAsigDemograficaId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaInscAlumnAsigDemograficaId": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"califChar": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.math.BigDecimal"
				},
				"esperados": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSy": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"logrados": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"porcentaje": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.math.BigDecimal"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"subject": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaInscAlumnAsigId": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"califChar": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.math.BigDecimal"
				},
				"esperados": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSy": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"logrados": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"porcentaje": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.math.BigDecimal"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"subject": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaPersonasDemografica": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.DocentesVistaPersonasDemograficaId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.DocentesVistaPersonasDemograficaId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grupoFamiliarIdGrupoFamiliar": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"tipoPersonaIdTipoPersona": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Eje": {
			"fields": {
				"activo": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"axis": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"ejeTematico": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idEje": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subarea": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Subarea"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.EstadoDepartamento": {
			"fields": {
				"estado": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"idEstados": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"pais": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Pais"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.EventualidadPersonas": {
			"fields": {
				"eventualidades": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Eventualidades"
				},
				"idEventualidadPersonas": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"subtipoEventualidad": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.SubtipoEventualidad"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Eventualidades": {
			"fields": {
				"confidencial": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"descripcion": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"estado": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"eventualidadPersonases": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.EventualidadPersonas"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaIngreso": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"fechaPlanReparacion": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"hora": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idEventualidad": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"pregunta1": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"pregunta2": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"pregunta3": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipoLugar": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TipoLugar"
				},
				"usuarioReg": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.FichaMedica": {
			"fields": {
				"alergias": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"antecedentesQuirurgicos": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"enfermedadesRecientes": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fechaCreacion": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idfichaMedica": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"medicamentosActualidad": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"medicamentosAlerta": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"medicoTratante": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"recomendacionesEspeciales": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Formulario5a": {
			"fields": {
				"anionacimiento": {
					"exclude": [],
					"fieldOrder": 20,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"barrio": {
					"exclude": [],
					"fieldOrder": 23,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"ciudad": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"ciudadnacimiento": {
					"exclude": [],
					"fieldOrder": 15,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"ciudadresidencia": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"comparativo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"condicioningreso": {
					"exclude": [],
					"fieldOrder": 24,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"departamento": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"departamentonacimiento": {
					"exclude": [],
					"fieldOrder": 16,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"departamentoresidencia": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dianacimiento": {
					"exclude": [],
					"fieldOrder": 18,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"estrato": {
					"exclude": [],
					"fieldOrder": 26,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fechanacimiento": {
					"exclude": [],
					"fieldOrder": 21,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"genero": {
					"exclude": [],
					"fieldOrder": 22,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"grupo": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idformulario5a": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"mesnacimiento": {
					"exclude": [],
					"fieldOrder": 19,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nacionalidad": {
					"exclude": [],
					"fieldOrder": 17,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nuevo": {
					"exclude": [],
					"fieldOrder": 25,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numerodoc": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"primerapellido": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"primernombre": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"segundoapellido": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"segundonombre": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipodocumento": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Foto": {
			"fields": {
				"codigo": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"foto": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "byte"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Grado": {
			"fields": {
				"asignaturas": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Asignatura"
				},
				"costoses": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Costos"
				},
				"cursos": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Curso"
				},
				"grade": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"gradoSapiens": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idGrado": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscAlumAreas": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumArea"
				},
				"nivel": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Nivel"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.GrupoFamiliar": {
			"fields": {
				"actualizacionGrupoFamiliars": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.ActualizacionGrupoFamiliar"
				},
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"grupoLdap": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idGrupoFamiliar": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscPersonaGrupoFamiliars": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscPersonaGrupoFamiliar"
				},
				"personas": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Persona"
				},
				"transporteRutases": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TransporteRutas"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Horario": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Asignatura"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Curso"
				},
				"dia": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idHorario": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"numeroSesion": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Sy"
				},
				"tipoSemana": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TipoSemana"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ImportacionAlumnosTransporte": {
			"fields": {
				"alumno": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"contrasena": {
					"exclude": [],
					"fieldOrder": 21,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"contrato": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"direccionAm": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"direccionAm2": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"direccionPm": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"direccionPm2": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"id": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"madreApellido": {
					"exclude": [],
					"fieldOrder": 17,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"madreCelular": {
					"exclude": [],
					"fieldOrder": 19,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"madreMail": {
					"exclude": [],
					"fieldOrder": 20,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"madreNombre": {
					"exclude": [],
					"fieldOrder": 16,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"madreTelefono": {
					"exclude": [],
					"fieldOrder": 18,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"padreApellido": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"padreCelular": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"padreMail": {
					"exclude": [],
					"fieldOrder": 15,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"padreNombre": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"padreTelefono": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"rm": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"rt": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"telefono": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ImportacionCartera": {
			"fields": {
				"alumno": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"concepto": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idImportacionCartera": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"mensualidad": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numeroMes": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"valor": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ImportacionDavivienda": {
			"fields": {
				"estado": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fechaCreacion": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaModificacion": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idImportacionDavivienda": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombresocio": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numeroidentificacion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tarjeta": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ImportacionDaviviendaCopy2": {
			"fields": {
				"estado": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fechaCreacion": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaModificacion": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idImportacionDavivienda": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombresocio": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numeroidentificacion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tarjeta": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ImportacionDaviviendaCopy3": {
			"fields": {
				"estado": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fechaCreacion": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaModificacion": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idImportacionDavivienda": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombresocio": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numeroidentificacion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tarjeta": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ImportacionDaviviendaCopy4": {
			"fields": {
				"estado": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fechaCreacion": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaModificacion": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idImportacionDavivienda": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombresocio": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numeroidentificacion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tarjeta": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ImportacionDaviviendaCopy5": {
			"fields": {
				"estado": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fechaCreacion": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaModificacion": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idImportacionDavivienda": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombresocio": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numeroidentificacion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tarjeta": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ImportacionDaviviendaCopy6": {
			"fields": {
				"estado": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fechaCreacion": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaModificacion": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idImportacionDavivienda": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombresocio": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numeroidentificacion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tarjeta": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ImportadorSapiens": {
			"fields": {
				"acudiendir": {
					"exclude": [],
					"fieldOrder": 66,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"acudienema": {
					"exclude": [],
					"fieldOrder": 175,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"acudienemp": {
					"exclude": [],
					"fieldOrder": 67,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"acudienocu": {
					"exclude": [],
					"fieldOrder": 68,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"acudienpro": {
					"exclude": [],
					"fieldOrder": 69,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"acudiente": {
					"exclude": [],
					"fieldOrder": 70,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"acudientel": {
					"exclude": [],
					"fieldOrder": 71,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"alquiler": {
					"exclude": [],
					"fieldOrder": 72,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"alu": {
					"exclude": [],
					"fieldOrder": 121,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"anomadre": {
					"exclude": [],
					"fieldOrder": 171,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"anopadre": {
					"exclude": [],
					"fieldOrder": 172,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"apartado": {
					"exclude": [],
					"fieldOrder": 62,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"apellido1": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"asociaci": {
					"exclude": [],
					"fieldOrder": 73,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"asopan": {
					"exclude": [],
					"fieldOrder": 138,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"autoret": {
					"exclude": [],
					"fieldOrder": 19,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"banco": {
					"exclude": [],
					"fieldOrder": 23,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"barrio": {
					"exclude": [],
					"fieldOrder": 74,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"beca": {
					"exclude": [],
					"fieldOrder": 75,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"bogo": {
					"exclude": [],
					"fieldOrder": 149,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"cafeteri": {
					"exclude": [],
					"fieldOrder": 76,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"cafeteria": {
					"exclude": [],
					"fieldOrder": 160,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"campo": {
					"exclude": [],
					"fieldOrder": 33,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"cargo": {
					"exclude": [],
					"fieldOrder": 52,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"cargonom": {
					"exclude": [],
					"fieldOrder": 53,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"ccmadre": {
					"exclude": [],
					"fieldOrder": 77,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"ccodigo": {
					"exclude": [],
					"fieldOrder": 147,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"ccosto": {
					"exclude": [],
					"fieldOrder": 50,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"ccostonom": {
					"exclude": [],
					"fieldOrder": 51,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"ccpadre": {
					"exclude": [],
					"fieldOrder": 78,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"cedula": {
					"exclude": [],
					"fieldOrder": 59,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"ciiu": {
					"exclude": [],
					"fieldOrder": 154,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"ciudad": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"ciudadnac": {
					"exclude": [],
					"fieldOrder": 79,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"ciudian": {
					"exclude": [],
					"fieldOrder": 32,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"clase": {
					"exclude": [],
					"fieldOrder": 63,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"clasecta": {
					"exclude": [],
					"fieldOrder": 151,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"cli": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"clinicaeme": {
					"exclude": [],
					"fieldOrder": 165,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codban": {
					"exclude": [],
					"fieldOrder": 16,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codciu": {
					"exclude": [],
					"fieldOrder": 155,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"coddpto": {
					"exclude": [],
					"fieldOrder": 156,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codide": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codidenom": {
					"exclude": [],
					"fieldOrder": 55,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codidenum": {
					"exclude": [],
					"fieldOrder": 111,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 157,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codigoant": {
					"exclude": [],
					"fieldOrder": 133,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codigoroch": {
					"exclude": [],
					"fieldOrder": 182,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codint": {
					"exclude": [],
					"fieldOrder": 120,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"colanterio": {
					"exclude": [],
					"fieldOrder": 129,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"contsalud": {
					"exclude": [],
					"fieldOrder": 164,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"conyuge": {
					"exclude": [],
					"fieldOrder": 56,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"cuentaah": {
					"exclude": [],
					"fieldOrder": 54,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"curher1": {
					"exclude": [],
					"fieldOrder": 114,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"curher2": {
					"exclude": [],
					"fieldOrder": 115,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"curher3": {
					"exclude": [],
					"fieldOrder": 116,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"cursoact": {
					"exclude": [],
					"fieldOrder": 80,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"cursoant": {
					"exclude": [],
					"fieldOrder": 81,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"cursoing": {
					"exclude": [],
					"fieldOrder": 82,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"descto": {
					"exclude": [],
					"fieldOrder": 83,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"diasbl": {
					"exclude": [],
					"fieldOrder": 152,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"digveri": {
					"exclude": [],
					"fieldOrder": 132,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"direccio": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"direccion": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dvedian": {
					"exclude": [],
					"fieldOrder": 25,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"edad": {
					"exclude": [],
					"fieldOrder": 44,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"email": {
					"exclude": [],
					"fieldOrder": 168,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"emailmadre": {
					"exclude": [],
					"fieldOrder": 127,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"emailpadre": {
					"exclude": [],
					"fieldOrder": 128,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"emp": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"encargado": {
					"exclude": [],
					"fieldOrder": 153,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"eps": {
					"exclude": [],
					"fieldOrder": 163,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"estado": {
					"exclude": [],
					"fieldOrder": 48,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"estcivil": {
					"exclude": [],
					"fieldOrder": 47,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"exalmadre": {
					"exclude": [],
					"fieldOrder": 169,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"exalpadre": {
					"exclude": [],
					"fieldOrder": 170,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"fac": {
					"exclude": [],
					"fieldOrder": 34,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"fallecidom": {
					"exclude": [],
					"fieldOrder": 173,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"fallecidop": {
					"exclude": [],
					"fieldOrder": 174,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"familia": {
					"exclude": [],
					"fieldOrder": 134,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fax": {
					"exclude": [],
					"fieldOrder": 41,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fechaing": {
					"exclude": [],
					"fieldOrder": 43,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechanac": {
					"exclude": [],
					"fieldOrder": 42,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fmatricula": {
					"exclude": [],
					"fieldOrder": 86,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"folio": {
					"exclude": [],
					"fieldOrder": 84,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fretiro": {
					"exclude": [],
					"fieldOrder": 85,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 87,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"grupo": {
					"exclude": [],
					"fieldOrder": 135,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"hermano1": {
					"exclude": [],
					"fieldOrder": 88,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"hermano2": {
					"exclude": [],
					"fieldOrder": 89,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"hermano3": {
					"exclude": [],
					"fieldOrder": 90,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idImportadorSapiens": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inactivo": {
					"exclude": [],
					"fieldOrder": 91,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"indica": {
					"exclude": [],
					"fieldOrder": 60,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"libmil": {
					"exclude": [],
					"fieldOrder": 57,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"liqint": {
					"exclude": [],
					"fieldOrder": 122,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"listavta": {
					"exclude": [],
					"fieldOrder": 38,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"lugarde": {
					"exclude": [],
					"fieldOrder": 92,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"lugarnac": {
					"exclude": [],
					"fieldOrder": 45,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"madredir": {
					"exclude": [],
					"fieldOrder": 93,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"madreemp": {
					"exclude": [],
					"fieldOrder": 94,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"madrenom": {
					"exclude": [],
					"fieldOrder": 95,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"madreocu": {
					"exclude": [],
					"fieldOrder": 96,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"madreprof": {
					"exclude": [],
					"fieldOrder": 97,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"madretel": {
					"exclude": [],
					"fieldOrder": 98,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"matrih": {
					"exclude": [],
					"fieldOrder": 99,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"mediabec": {
					"exclude": [],
					"fieldOrder": 118,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"mediotra": {
					"exclude": [],
					"fieldOrder": 119,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"nacionali": {
					"exclude": [],
					"fieldOrder": 136,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nacionalid": {
					"exclude": [],
					"fieldOrder": 130,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"ngr": {
					"exclude": [],
					"fieldOrder": 125,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nitdian": {
					"exclude": [],
					"fieldOrder": 24,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nocuenta": {
					"exclude": [],
					"fieldOrder": 17,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"noliqint": {
					"exclude": [],
					"fieldOrder": 123,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nombres": {
					"exclude": [],
					"fieldOrder": 146,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"notaauxi": {
					"exclude": [],
					"fieldOrder": 139,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"ntranspor": {
					"exclude": [],
					"fieldOrder": 126,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"num": {
					"exclude": [],
					"fieldOrder": 65,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"numcue": {
					"exclude": [],
					"fieldOrder": 150,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numidacu": {
					"exclude": [],
					"fieldOrder": 177,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numidmad": {
					"exclude": [],
					"fieldOrder": 143,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numidpad": {
					"exclude": [],
					"fieldOrder": 142,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numidres": {
					"exclude": [],
					"fieldOrder": 145,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numlis": {
					"exclude": [],
					"fieldOrder": 117,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"observacio": {
					"exclude": [],
					"fieldOrder": 112,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"onmdian": {
					"exclude": [],
					"fieldOrder": 30,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"otro": {
					"exclude": [],
					"fieldOrder": 131,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"padredir": {
					"exclude": [],
					"fieldOrder": 100,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"padreemp": {
					"exclude": [],
					"fieldOrder": 101,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"padrenom": {
					"exclude": [],
					"fieldOrder": 102,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"padreocu": {
					"exclude": [],
					"fieldOrder": 103,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"padreprof": {
					"exclude": [],
					"fieldOrder": 104,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"padretel": {
					"exclude": [],
					"fieldOrder": 105,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"pagban": {
					"exclude": [],
					"fieldOrder": 21,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"pagodav": {
					"exclude": [],
					"fieldOrder": 158,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"paidian": {
					"exclude": [],
					"fieldOrder": 181,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"papdian": {
					"exclude": [],
					"fieldOrder": 27,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"parentesco": {
					"exclude": [],
					"fieldOrder": 106,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"pension": {
					"exclude": [],
					"fieldOrder": 137,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"permanen": {
					"exclude": [],
					"fieldOrder": 20,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"pnmdian": {
					"exclude": [],
					"fieldOrder": 29,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"porfac": {
					"exclude": [],
					"fieldOrder": 35,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"pro": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"religion": {
					"exclude": [],
					"fieldOrder": 161,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"represen": {
					"exclude": [],
					"fieldOrder": 22,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"respondir": {
					"exclude": [],
					"fieldOrder": 178,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"responpare": {
					"exclude": [],
					"fieldOrder": 180,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"respontel": {
					"exclude": [],
					"fieldOrder": 179,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"retirado": {
					"exclude": [],
					"fieldOrder": 107,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"ricaxmil": {
					"exclude": [],
					"fieldOrder": 148,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"ruta": {
					"exclude": [],
					"fieldOrder": 108,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"rzodian": {
					"exclude": [],
					"fieldOrder": 31,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"saldo": {
					"exclude": [],
					"fieldOrder": 61,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"saludpre": {
					"exclude": [],
					"fieldOrder": 162,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sangre": {
					"exclude": [],
					"fieldOrder": 46,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sapdian": {
					"exclude": [],
					"fieldOrder": 28,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"seguro": {
					"exclude": [],
					"fieldOrder": 113,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"sexo": {
					"exclude": [],
					"fieldOrder": 36,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tarjedav": {
					"exclude": [],
					"fieldOrder": 159,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tdodian": {
					"exclude": [],
					"fieldOrder": 26,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tele1": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tele2": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tele3": {
					"exclude": [],
					"fieldOrder": 37,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"telecasa": {
					"exclude": [],
					"fieldOrder": 109,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"telefono": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"teleofi": {
					"exclude": [],
					"fieldOrder": 58,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tied": {
					"exclude": [],
					"fieldOrder": 124,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipcont": {
					"exclude": [],
					"fieldOrder": 49,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipidacu": {
					"exclude": [],
					"fieldOrder": 176,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipidmad": {
					"exclude": [],
					"fieldOrder": 141,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipidpad": {
					"exclude": [],
					"fieldOrder": 140,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipidres": {
					"exclude": [],
					"fieldOrder": 144,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipoc": {
					"exclude": [],
					"fieldOrder": 18,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipocxp": {
					"exclude": [],
					"fieldOrder": 15,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tiporh": {
					"exclude": [],
					"fieldOrder": 167,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"transpor": {
					"exclude": [],
					"fieldOrder": 110,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"valort": {
					"exclude": [],
					"fieldOrder": 64,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"vivecon": {
					"exclude": [],
					"fieldOrder": 166,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"zona": {
					"exclude": [],
					"fieldOrder": 39,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"zonanom": {
					"exclude": [],
					"fieldOrder": 40,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscAlumActividad": {
			"fields": {
				"actividad": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Actividad"
				},
				"comentario": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idInscAlumActividad": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"logrado": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscAlumAprendizaje": {
			"fields": {
				"aprendizaje": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Aprendizaje"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"calificacionNum": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Float"
				},
				"comentario": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fechaIngreso": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaLogro": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idInscAlumAprendizaje": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscAlumArea": {
			"fields": {
				"area": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Area"
				},
				"calificacionChar": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"calificacionNum": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Grado"
				},
				"idInscAlumArea": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"ih": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Sy"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscAlumAsig": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Asignatura"
				},
				"califChar": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.math.BigDecimal"
				},
				"esperados": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"idInscAlumAsig": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"logrados": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"periodo": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Periodo"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"porcentaje": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.math.BigDecimal"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscAlumAsigCurso": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.InscAlumAsigCursoId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscAlumAsigCursoCompleto": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.InscAlumAsigCursoCompletoId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscAlumAsigCursoCompletoId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"asignatura": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"asignaturaIdAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"idCurso": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sexo": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscAlumAsigCursoId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"asignatura": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"asignaturaIdAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"idCurso": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sexo": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscAlumCosto": {
			"fields": {
				"costos": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Costos"
				},
				"descuentoPorcentaje": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"descuentoValor": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Double"
				},
				"fechaFin": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"fechaInicio": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idInscAlumCosto": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscrito": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"observacion": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Sy"
				},
				"valorFinalDescuento": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Double"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscAlumCurso": {
			"fields": {
				"califChar": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Curso"
				},
				"fechaMatricula": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idInscAlumCurso": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Sy"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscCoordinadoresCurso": {
			"fields": {
				"curso": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Curso"
				},
				"grupo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"idInscCoordinadoresCurso": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Sy"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscCursoAsig": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Asignatura"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Curso"
				},
				"idInscCursoAsig": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"periodo": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Periodo"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscDirectorNivel": {
			"fields": {
				"idInscDirectorNivel": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nivel": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Nivel"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscPersonaGrupoFamiliar": {
			"fields": {
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.GrupoFamiliar"
				},
				"idInscPersonaGrupoFamiliar": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"responsable": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"tipoPersona": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TipoPersona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscipcionesVistaAsignaturas": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.InscipcionesVistaAsignaturasId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscipcionesVistaAsignaturasId": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"electiva": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"gradoIdGrado": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscripcionesVistaInscAlumnCurso": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.InscripcionesVistaInscAlumnCursoId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.InscripcionesVistaInscAlumnCursoId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grupoFamiliarIdGrupoFamiliar": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idCurso": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSy": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"matriculado": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Inteligencia": {
			"fields": {
				"aprendizajes": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Aprendizaje"
				},
				"idInteligencia": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inteligencia": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.LogDocentes": {
			"fields": {
				"fechaIngreso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"horaIngreso": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idLogDocentes": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.LogEventos": {
			"fields": {
				"dato1": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato10": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato2": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato3": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato4": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato5": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato6": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato7": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato8": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"dato9": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"evento": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"fechaDelRegistro": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaEvento": {
					"exclude": [],
					"fieldOrder": 15,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idLog": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"origenEvento": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"tipoPersonaSoloPersona": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Logeventosaprendoz": {
			"fields": {
				"accion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"hora": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idLogEventos": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"tabla": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Matricula": {
			"fields": {
				"comentario": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Curso"
				},
				"fechaMatricula": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idMatricula": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Sy"
				},
				"valorAnual": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Double"
				},
				"valorMensual": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Nacionalidades": {
			"fields": {
				"idNacionalidad": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nacionalidad": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Nivel": {
			"fields": {
				"grados": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Grado"
				},
				"idNivel": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscDirectorNivels": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscDirectorNivel"
				},
				"levelName": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nivel": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sesionNivels": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.SesionNivel"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.NivelEsperado": {
			"fields": {
				"aprendizajes": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Aprendizaje"
				},
				"idNivelEsperado": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nivelEsperado": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.OtrasMetas": {
			"fields": {
				"fecha": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idOtraMeta": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"logrado": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"meta": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Subtopico"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PadresVistaActividades": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.PadresVistaActividadesId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PadresVistaActividadesId": {
			"fields": {
				"actividad": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"idActividad": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PadresVistaAprendizajes": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.PadresVistaAprendizajesId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PadresVistaAprendizajesId": {
			"fields": {
				"aprendizaje": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"fechaEsperada": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"idAprendizaje": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSubtopico": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"learning": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"numeroUnidad": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"unidad": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PadresVistaCalifFinal": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.PadresVistaCalifFinalId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PadresVistaCalifFinalId": {
			"fields": {
				"aprendizajeIdAprendizaje": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"calificacionNum": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Float"
				},
				"fechaLogro": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"idCalificacionFinal": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PadresVistaInscAlumAsig": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.PadresVistaInscAlumAsigId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PadresVistaInscAlumAsigId": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"califChar": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.math.BigDecimal"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSy": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"porcentaje": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.math.BigDecimal"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PadresVistaPersonas": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.PadresVistaPersonasId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PadresVistaPersonasId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grupoFamiliarIdGrupoFamiliar": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idGrupoFamiliar": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PadresVistaPersonasPromocion": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.PadresVistaPersonasPromocionId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PadresVistaPersonasPromocionId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"aprobado": {
					"exclude": [],
					"fieldOrder": 12,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"autorizadoAcademico": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"autorizadoFinanciera": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grupoFamiliarIdGrupoFamiliar": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idGrupoFamiliar": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"promovido": {
					"exclude": [],
					"fieldOrder": 13,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 14,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipoPersonaIdTipoPersona": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PadresVistaRecursos": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.PadresVistaRecursosId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PadresVistaRecursosId": {
			"fields": {
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idRecurso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"recurso": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"ubicacion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Pais": {
			"fields": {
				"estadoDepartamentos": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.EstadoDepartamento"
				},
				"idPais": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"pais": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"personas": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Periodo": {
			"fields": {
				"fechaFin": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaInicio": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idPeriodo": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscAlumAsigs": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumAsig"
				},
				"inscCursoAsigs": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscCursoAsig"
				},
				"periodo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Sy"
				},
				"tipoPeriodo": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TipoPeriodo"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Persona": {
			"fields": {
				"activoRetirado": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"actualizacionDatosPersonas": {
					"exclude": [],
					"fieldOrder": 78,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.ActualizacionDatosPersona"
				},
				"apellido1": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"asistencias": {
					"exclude": [],
					"fieldOrder": 73,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Asistencia"
				},
				"barrio": {
					"exclude": [],
					"fieldOrder": 23,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"calificacionFinals": {
					"exclude": [],
					"fieldOrder": 64,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.CalificacionFinal"
				},
				"cargo": {
					"exclude": [],
					"fieldOrder": 45,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"celular": {
					"exclude": [],
					"fieldOrder": 46,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"clave": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"clinicaEmergencia": {
					"exclude": [],
					"fieldOrder": 29,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codigoFamilia": {
					"exclude": [],
					"fieldOrder": 33,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"codigoPostal": {
					"exclude": [],
					"fieldOrder": 59,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"colegioAnterior": {
					"exclude": [],
					"fieldOrder": 39,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"comentarioRetiro": {
					"exclude": [],
					"fieldOrder": 38,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"coordinacionDeGrupos": {
					"exclude": [],
					"fieldOrder": 71,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.CoordinacionDeGrupo"
				},
				"coordinacions": {
					"exclude": [],
					"fieldOrder": 87,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Coordinacion"
				},
				"coordinadoreses": {
					"exclude": [],
					"fieldOrder": 83,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Coordinadores"
				},
				"cursoIngreso": {
					"exclude": [],
					"fieldOrder": 36,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"departamento": {
					"exclude": [],
					"fieldOrder": 25,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"direccionOficina": {
					"exclude": [],
					"fieldOrder": 47,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"direccionResidencia": {
					"exclude": [],
					"fieldOrder": 15,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"email": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"empresa": {
					"exclude": [],
					"fieldOrder": 44,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"eps": {
					"exclude": [],
					"fieldOrder": 27,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"eventualidadPersonases": {
					"exclude": [],
					"fieldOrder": 70,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.EventualidadPersonas"
				},
				"fechaIngreso": {
					"exclude": [],
					"fieldOrder": 34,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaNacimiento": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaRetiro": {
					"exclude": [],
					"fieldOrder": 37,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fichaMedicas": {
					"exclude": [],
					"fieldOrder": 79,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.FichaMedica"
				},
				"gradoIngreso": {
					"exclude": [],
					"fieldOrder": 35,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 62,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.GrupoFamiliar"
				},
				"hijoDeExalumno": {
					"exclude": [],
					"fieldOrder": 40,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"idPersona": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscAlumActividads": {
					"exclude": [],
					"fieldOrder": 66,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumActividad"
				},
				"inscAlumAprendizajes": {
					"exclude": [],
					"fieldOrder": 63,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumAprendizaje"
				},
				"inscAlumAreas": {
					"exclude": [],
					"fieldOrder": 69,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumArea"
				},
				"inscAlumAsigs": {
					"exclude": [],
					"fieldOrder": 85,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumAsig"
				},
				"inscAlumCostos": {
					"exclude": [],
					"fieldOrder": 86,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumCosto"
				},
				"inscAlumCursoIdInscAlumCurso": {
					"exclude": [],
					"fieldOrder": 57,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"inscAlumCursos": {
					"exclude": [],
					"fieldOrder": 72,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumCurso"
				},
				"inscCoordinadoresCursos": {
					"exclude": [],
					"fieldOrder": 74,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscCoordinadoresCurso"
				},
				"inscCursoAsigs": {
					"exclude": [],
					"fieldOrder": 77,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscCursoAsig"
				},
				"inscDirectorNivels": {
					"exclude": [],
					"fieldOrder": 67,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscDirectorNivel"
				},
				"inscPersonaGrupoFamiliars": {
					"exclude": [],
					"fieldOrder": 68,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscPersonaGrupoFamiliar"
				},
				"logDocenteses": {
					"exclude": [],
					"fieldOrder": 80,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.LogDocentes"
				},
				"logeventosaprendozs": {
					"exclude": [],
					"fieldOrder": 75,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Logeventosaprendoz"
				},
				"lugarExpedicionDepartamento": {
					"exclude": [],
					"fieldOrder": 22,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"lugarExpedicionMunicipio": {
					"exclude": [],
					"fieldOrder": 21,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"lugarNacimientoDepartamento": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"lugarNacimientoMunicipio": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"matriculado": {
					"exclude": [],
					"fieldOrder": 56,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"matriculas": {
					"exclude": [],
					"fieldOrder": 84,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Matricula"
				},
				"municipio": {
					"exclude": [],
					"fieldOrder": 24,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nacionalidad": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nivelAcademico": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"noDocumento": {
					"exclude": [],
					"fieldOrder": 20,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"noPlaqueta": {
					"exclude": [],
					"fieldOrder": 55,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nombreLdap": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nombrePadreExalumno": {
					"exclude": [],
					"fieldOrder": 41,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numeroContratoSalud": {
					"exclude": [],
					"fieldOrder": 28,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"pais": {
					"exclude": [],
					"fieldOrder": 60,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Pais"
				},
				"paisDomicilio": {
					"exclude": [],
					"fieldOrder": 58,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"parentesco": {
					"exclude": [],
					"fieldOrder": 49,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"personaCarnes": {
					"exclude": [],
					"fieldOrder": 82,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.PersonaCarne"
				},
				"profesion": {
					"exclude": [],
					"fieldOrder": 43,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"promocion": {
					"exclude": [],
					"fieldOrder": 42,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"promocions": {
					"exclude": [],
					"fieldOrder": 76,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Promocion"
				},
				"religion": {
					"exclude": [],
					"fieldOrder": 18,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"rutaM": {
					"exclude": [],
					"fieldOrder": 50,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"rutaT": {
					"exclude": [],
					"fieldOrder": 51,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"saludPrepagada": {
					"exclude": [],
					"fieldOrder": 26,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"sexo": {
					"exclude": [],
					"fieldOrder": 32,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"telefono": {
					"exclude": [],
					"fieldOrder": 16,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"telefono2": {
					"exclude": [],
					"fieldOrder": 17,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"telefonoOficina": {
					"exclude": [],
					"fieldOrder": 48,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipoDocumento": {
					"exclude": [],
					"fieldOrder": 19,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipoPersona": {
					"exclude": [],
					"fieldOrder": 61,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TipoPersona"
				},
				"tipoSangre": {
					"exclude": [],
					"fieldOrder": 31,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tomaAlmuerzo": {
					"exclude": [],
					"fieldOrder": 52,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"tomaMediasNueves": {
					"exclude": [],
					"fieldOrder": 53,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"tomaSeguroAccidentes": {
					"exclude": [],
					"fieldOrder": 54,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"transporteInscAlumTransportes": {
					"exclude": [],
					"fieldOrder": 65,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TransporteInscAlumTransporte"
				},
				"transporteNovedadeses": {
					"exclude": [],
					"fieldOrder": 81,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TransporteNovedades"
				},
				"viveCon": {
					"exclude": [],
					"fieldOrder": 30,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PersonaCarne": {
			"fields": {
				"fecha": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idPersonaCarne": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"numerocopias": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Personal": {
			"fields": {
				"afp": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"arp": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"eps": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"noDocumento": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"rh": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Promocion": {
			"fields": {
				"aprobado": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"autorizadoAcademico": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"autorizadoFinanciera": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"autorizadoPromAnticipada": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				},
				"calificacionChar": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"commentaprobado": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"commentcomite": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"commentfinanc": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"commentpromovido": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idPromocion": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"promovido": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Sy"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PromocionVistaInscAlumnCurso": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.PromocionVistaInscAlumnCursoId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.PromocionVistaInscAlumnCursoId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grupoFamiliarIdGrupoFamiliar": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idCurso": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSy": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"matriculado": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Recurso": {
			"fields": {
				"documento": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "byte"
				},
				"idRecurso": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"recurso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Subtopico"
				},
				"tipoRecurso": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TipoRecurso"
				},
				"ubicacion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ReporteDavivienda": {
			"fields": {
				"cursoact": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idReporteSapiensDavivienda": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nit": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nnombre": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nombres": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numidres": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tarjetadav": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"valor": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Float"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Reportes": {
			"fields": {
				"codigo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"descripcion": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idreporte": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"reporte": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"reportesDependenciases": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.ReportesDependencias"
				},
				"reportesTipoPersonas": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.ReportesTipoPersona"
				},
				"uri": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ReportesDependencias": {
			"fields": {
				"idReporteDependencia": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"reportes": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Reportes"
				},
				"tipoDependencia": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TipoDependencia"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ReportesTipoPersona": {
			"fields": {
				"idreportestipopersona": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"reportes": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Reportes"
				},
				"tipoPersona": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TipoPersona"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Salon": {
			"fields": {
				"idSalon": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"numeroSalon": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Semana": {
			"fields": {
				"idSemana": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"numeroSemana": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Sy"
				},
				"tipoSemana": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TipoSemana"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ServiciosListadoServiciosAlumnos": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.ServiciosListadoServiciosAlumnosId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.ServiciosListadoServiciosAlumnosId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"codigoProd": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"descripcion": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"idCosto": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idInscAlumCosto": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSy": {
					"exclude": [],
					"fieldOrder": 14,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscrito": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"noDocumento": {
					"exclude": [],
					"fieldOrder": 16,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombreProducto": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 13,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 12,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipoDocumento": {
					"exclude": [],
					"fieldOrder": 15,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Sesion": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Asignatura"
				},
				"asistencias": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Asistencia"
				},
				"comentario": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Curso"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"horaFin": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"horaInicio": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idSesion": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"impartida": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Boolean"
				},
				"numeroSesion": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.SesionNivel": {
			"fields": {
				"dia": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"horaFin": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"horaInicio": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idSesionNivel": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nivel": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Nivel"
				},
				"numeroSesion": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Sy"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Subarea": {
			"fields": {
				"area": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Area"
				},
				"ejes": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Eje"
				},
				"idSubarea": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"subarea": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.SubtipoEventualidad": {
			"fields": {
				"eventualidadPersonases": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.EventualidadPersonas"
				},
				"idSubtipoEventualidad": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subtipoEventualidad": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipoEventualidad": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TipoEventualidad"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Subtopico": {
			"fields": {
				"actividads": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Actividad"
				},
				"aprendizajes": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Aprendizaje"
				},
				"fechaFin": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"fechaInicio": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idSubtopico": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"numeroSubtopico": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"otrasMetases": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.OtrasMetas"
				},
				"recursos": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Recurso"
				},
				"subtopic": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"subtopico": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"unidad": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Unidad"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Sy": {
			"fields": {
				"asignaturas": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Asignatura"
				},
				"bimestreSies": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.BimestreSy"
				},
				"coordinacionDeGrupos": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.CoordinacionDeGrupo"
				},
				"coordinacions": {
					"exclude": [],
					"fieldOrder": 18,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Coordinacion"
				},
				"coordinadoreses": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Coordinadores"
				},
				"costoses": {
					"exclude": [],
					"fieldOrder": 15,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Costos"
				},
				"cronogramas": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Cronograma"
				},
				"horarios": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Horario"
				},
				"idSy": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscAlumAreas": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumArea"
				},
				"inscAlumCostos": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumCosto"
				},
				"inscAlumCursos": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscAlumCurso"
				},
				"inscCoordinadoresCursos": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscCoordinadoresCurso"
				},
				"matriculas": {
					"exclude": [],
					"fieldOrder": 16,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Matricula"
				},
				"periodos": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Periodo"
				},
				"promocions": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Promocion"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"semanas": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Semana"
				},
				"sesionNivels": {
					"exclude": [],
					"fieldOrder": 17,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.SesionNivel"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoActividad": {
			"fields": {
				"actividads": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Actividad"
				},
				"idTipoActividad": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipoActividad": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoAsistencia": {
			"fields": {
				"asistencias": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Asistencia"
				},
				"idTipo": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoDependencia": {
			"fields": {
				"dependencia": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"idtipodependencia": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"reportesDependenciases": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.ReportesDependencias"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoDesempeno": {
			"fields": {
				"actividads": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Actividad"
				},
				"idTipoDesempeno": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipoDesempeno": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoDia": {
			"fields": {
				"cronogramas": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Cronograma"
				},
				"descripcion": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idTipoDia": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipoDia": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoEps": {
			"fields": {
				"direccion": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"eps": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"ideps": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"web": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoEventualidad": {
			"fields": {
				"idTipoEventualidad": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subtipoEventualidads": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.SubtipoEventualidad"
				},
				"tipoEventualidad": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoInscAsig": {
			"fields": {
				"asignaturas": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Asignatura"
				},
				"idTipoInscAsig": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoLugar": {
			"fields": {
				"eventualidadeses": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Eventualidades"
				},
				"idLugar": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"lugar": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoPeriodo": {
			"fields": {
				"idTipoPeriodo": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"periodos": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Periodo"
				},
				"tipoPeriodo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoPersona": {
			"fields": {
				"idTipoPersona": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"inscPersonaGrupoFamiliars": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.InscPersonaGrupoFamiliar"
				},
				"personas": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Persona"
				},
				"reportesTipoPersonas": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.ReportesTipoPersona"
				},
				"tipoPersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoRecurso": {
			"fields": {
				"idTipoRecurso": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"recursos": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Recurso"
				},
				"tipoRecurso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoSemana": {
			"fields": {
				"descripcion": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"horarios": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Horario"
				},
				"idTipoSemana": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"semanas": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Semana"
				},
				"tipoSemana": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoSolicitud": {
			"fields": {
				"idTipoSolicitud": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"solicitud": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"transporteNovedadeses": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TransporteNovedades"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoTransporte": {
			"fields": {
				"descripcion": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"idtipoTransporte": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipoTransporte": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"transporteRutases": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TransporteRutas"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TipoValoracion": {
			"fields": {
				"actividads": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Actividad"
				},
				"idTipoValoracion": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipoValoracion": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TmpBoletin20122013": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.TmpBoletin20122013Id"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TmpBoletin20122013Id": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"asignatura": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"califchar": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"calificacion": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.math.BigDecimal"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 12,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"esperados": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"logrados": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"mescorte": {
					"exclude": [],
					"fieldOrder": 14,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"orden": {
					"exclude": [],
					"fieldOrder": 13,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"porcentaje": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Double"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TmpEnrLog": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.TmpEnrLogId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TmpEnrLogId": {
			"fields": {
				"concepto": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"created": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"identificacion": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"idpersona": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"monto": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nit": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TransporteIngresoRutas": {
			"fields": {
				"accionma": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"accionta": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"estudiante": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"horaTa": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"horama": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idIngresoRutas": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"identificacion": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"rutama": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"rutata": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TransporteInscAlumTransporte": {
			"fields": {
				"amPm": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"idInscAlumTransporte": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"transporteRutasByDomingoRuta": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TransporteRutas"
				},
				"transporteRutasByJuevesRuta": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TransporteRutas"
				},
				"transporteRutasByLunesRuta": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TransporteRutas"
				},
				"transporteRutasByMartesRuta": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TransporteRutas"
				},
				"transporteRutasByMiercolesRuta": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TransporteRutas"
				},
				"transporteRutasBySabadoRuta": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TransporteRutas"
				},
				"transporteRutasByViernesRuta": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TransporteRutas"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TransporteNovedades": {
			"fields": {
				"aprobacionCoordinador": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"aprobacionDirNivel": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"aprobacionTransporte": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"fechaProgramada": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"fechaSolicitudFin": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"fechaSolicitudInicio": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"horaActualSalida": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"horaProgramada": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idNovedades": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"jueves": {
					"exclude": [],
					"fieldOrder": 15,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"lunes": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"martes": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"miercoles": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"numeroPuerta": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"observaciones": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"persona": {
					"exclude": [],
					"fieldOrder": 19,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Persona"
				},
				"sabado": {
					"exclude": [],
					"fieldOrder": 17,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"tipoSolicitud": {
					"exclude": [],
					"fieldOrder": 20,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TipoSolicitud"
				},
				"tipoSolicitud_1": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"transporteRutas": {
					"exclude": [],
					"fieldOrder": 18,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TransporteRutas"
				},
				"viernes": {
					"exclude": [],
					"fieldOrder": 16,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.TransporteRutas": {
			"fields": {
				"descripcion": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 15,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.GrupoFamiliar"
				},
				"idAvantel": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"idRuta": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"movilConductor": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"movilMonitor": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"nombreConductor": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"nombreMonitora": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"nombreResponsable": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numeroAvantel": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"numeroRuta": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"placaVehiculo": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"telefono1": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"telefono2": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"telefonoConductor": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"telefonoMonitor": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"tipoTransporte": {
					"exclude": [],
					"fieldOrder": 16,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TipoTransporte"
				},
				"transporteInscAlumTransportesForDomingoRuta": {
					"exclude": [],
					"fieldOrder": 22,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TransporteInscAlumTransporte"
				},
				"transporteInscAlumTransportesForJuevesRuta": {
					"exclude": [],
					"fieldOrder": 19,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TransporteInscAlumTransporte"
				},
				"transporteInscAlumTransportesForLunesRuta": {
					"exclude": [],
					"fieldOrder": 24,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TransporteInscAlumTransporte"
				},
				"transporteInscAlumTransportesForMartesRuta": {
					"exclude": [],
					"fieldOrder": 17,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TransporteInscAlumTransporte"
				},
				"transporteInscAlumTransportesForMiercolesRuta": {
					"exclude": [],
					"fieldOrder": 18,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TransporteInscAlumTransporte"
				},
				"transporteInscAlumTransportesForSabadoRuta": {
					"exclude": [],
					"fieldOrder": 21,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TransporteInscAlumTransporte"
				},
				"transporteInscAlumTransportesForViernesRuta": {
					"exclude": [],
					"fieldOrder": 20,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TransporteInscAlumTransporte"
				},
				"transporteNovedadeses": {
					"exclude": [],
					"fieldOrder": 23,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.TransporteNovedades"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.Unidad": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.Asignatura"
				},
				"fechaFin": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"fechaInicio": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.util.Date"
				},
				"idSyIdIdSy": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"idUnidad": {
					"exclude": ["insert"],
					"fieldOrder": 0,
					"include": ["delete", "read", "update"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"numeroUnidad": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.Integer"
				},
				"subtopicos": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": false,
					"type": "com.aprendoz_test.data.Subtopico"
				},
				"unidad": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				},
				"unit": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": false,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VProfesorAsignatura": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.VProfesorAsignaturaId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VProfesorAsignaturaCompleto": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.VProfesorAsignaturaCompletoId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VProfesorAsignaturaCompletoId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"asignatura": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"asignaturaIdAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"cursoIdCurso": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gradoIdGrado": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombreLdap": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subject": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VProfesorAsignaturaId": {
			"fields": {
				"asignatura": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"asignaturaIdAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"gradoIdGrado": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSubarea1": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSubarea2": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSubarea3": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombreLdap": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subject": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaAlumnosActivos": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.VistaAlumnosActivosId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaAlumnosActivosId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"idCurso": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idGrado": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nivel": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"noDocumento": {
					"exclude": [],
					"fieldOrder": 12,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"tipoDocumento": {
					"exclude": [],
					"fieldOrder": 13,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaAlumnosActivosPrejardinNuevos": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.VistaAlumnosActivosPrejardinNuevosId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaAlumnosActivosPrejardinNuevosId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"barrio": {
					"exclude": [],
					"fieldOrder": 15,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"departamento": {
					"exclude": [],
					"fieldOrder": 17,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"direccionResidencia": {
					"exclude": [],
					"fieldOrder": 12,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"municipio": {
					"exclude": [],
					"fieldOrder": 16,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nivel": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"noDocumento": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"telefono": {
					"exclude": [],
					"fieldOrder": 13,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"telefono2": {
					"exclude": [],
					"fieldOrder": 14,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"tipoDocumento": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaDashboardAvanzadosYMagistrales": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.VistaDashboardAvanzadosYMagistralesId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaDashboardAvanzadosYMagistralesId": {
			"fields": {
				"aprAvanzado": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"aprCompetente": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"aprMagistral": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"aprProgreso": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"asignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"total": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaDashboardNoCalificados": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.VistaDashboardNoCalificadosId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaDashboardNoCalificadosId": {
			"fields": {
				"aprProgreso": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"asignaturasNoCalificadas": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"califPorcentaje": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.math.BigDecimal"
				},
				"idAsignatura": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"totalEstudiantes": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"totalPorcentaje": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.math.BigDecimal"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaEnvioCorreo": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.VistaEnvioCorreoId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaEnvioCorreoId": {
			"fields": {
				"alumnoApellido1": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"alumnoApellido2": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"alumnoClave": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"alumnoCodigo": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"alumnoId": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"alumnoMail": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"alumnoNombre1": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"alumnoNombre2": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"alumnoUsuario": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"idCurso": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"madreApellido1": {
					"exclude": [],
					"fieldOrder": 19,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"madreApellido2": {
					"exclude": [],
					"fieldOrder": 20,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"madreClave": {
					"exclude": [],
					"fieldOrder": 24,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"madreCorreo": {
					"exclude": [],
					"fieldOrder": 25,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"madreNombre1": {
					"exclude": [],
					"fieldOrder": 21,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"madreNombre2": {
					"exclude": [],
					"fieldOrder": 22,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"madreUsuario": {
					"exclude": [],
					"fieldOrder": 23,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"padreApellido1": {
					"exclude": [],
					"fieldOrder": 12,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"padreApellido2": {
					"exclude": [],
					"fieldOrder": 13,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"padreClave": {
					"exclude": [],
					"fieldOrder": 17,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"padreMail": {
					"exclude": [],
					"fieldOrder": 18,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"padreNombre1": {
					"exclude": [],
					"fieldOrder": 14,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"padreNombre2": {
					"exclude": [],
					"fieldOrder": 15,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"padreUsuario": {
					"exclude": [],
					"fieldOrder": 16,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaEventualidadesNotificaciones": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.VistaEventualidadesNotificacionesId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaEventualidadesNotificacionesFamilia": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.VistaEventualidadesNotificacionesFamiliaId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaEventualidadesNotificacionesFamiliaId": {
			"fields": {
				"correoCordinador": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"correoDirector": {
					"exclude": [],
					"fieldOrder": 20,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"correoMadre": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"correoPadre": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"estado": {
					"exclude": [],
					"fieldOrder": 17,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 12,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"grupofamiliar": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"horas": {
					"exclude": [],
					"fieldOrder": 13,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"idcurso": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"ideventualidad": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idpersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"lugar": {
					"exclude": [],
					"fieldOrder": 14,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nivel": {
					"exclude": [],
					"fieldOrder": 19,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombreAlumno": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombreMadre": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombrePadre": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"registrante": {
					"exclude": [],
					"fieldOrder": 18,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"subtipo": {
					"exclude": [],
					"fieldOrder": 16,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"tipoeventualidad": {
					"exclude": [],
					"fieldOrder": 15,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"userCordinador": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"userDirector": {
					"exclude": [],
					"fieldOrder": 21,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaEventualidadesNotificacionesId": {
			"fields": {
				"correoCordinador": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"correoDirector": {
					"exclude": [],
					"fieldOrder": 16,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"estado": {
					"exclude": [],
					"fieldOrder": 13,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"grupofamiliar": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"horas": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"idcurso": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"ideventualidad": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idpersona": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"lugar": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nivel": {
					"exclude": [],
					"fieldOrder": 15,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombreAlumno": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombreRegistrante": {
					"exclude": [],
					"fieldOrder": 18,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"registrante": {
					"exclude": [],
					"fieldOrder": 14,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"subtipo": {
					"exclude": [],
					"fieldOrder": 12,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"tipoeventualidad": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"userCordinador": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"userDirector": {
					"exclude": [],
					"fieldOrder": 17,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaInscAlumnCurso": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.VistaInscAlumnCursoId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaInscAlumnCursoId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grado": {
					"exclude": [],
					"fieldOrder": 13,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"gradoIdGrado": {
					"exclude": [],
					"fieldOrder": 12,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"grupoFamiliarIdGrupoFamiliar": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idCurso": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idGrado": {
					"exclude": [],
					"fieldOrder": 14,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSy": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"matriculado": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"schoolYear": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaMatriculasGraficasTotalDia": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.VistaMatriculasGraficasTotalDiaId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaMatriculasGraficasTotalDiaId": {
			"fields": {
				"cont": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Long"
				},
				"cursoIdCurso": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"fechaMatricula": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.util.Date"
				},
				"idMatricula": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"syIdSy": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaPersonasGrupoFamiliar": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "com.aprendoz_test.data.VistaPersonasGrupoFamiliarId"
				}
			},
			"internal": false,
			"liveService": true,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.VistaPersonasGrupoFamiliarId": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 6,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 7,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"clave": {
					"exclude": [],
					"fieldOrder": 14,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"codigo": {
					"exclude": [],
					"fieldOrder": 10,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grupoFamiliar": {
					"exclude": [],
					"fieldOrder": 12,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"grupoFamiliarIdGrupoFamiliar": {
					"exclude": [],
					"fieldOrder": 1,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idGrupoFamiliar": {
					"exclude": [],
					"fieldOrder": 11,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idPersona": {
					"exclude": [],
					"fieldOrder": 4,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idTipoPersona": {
					"exclude": [],
					"fieldOrder": 13,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 8,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 9,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"nombreLdap": {
					"exclude": [],
					"fieldOrder": 5,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.String"
				},
				"personaIdPersona": {
					"exclude": [],
					"fieldOrder": 0,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				},
				"responsable": {
					"exclude": [],
					"fieldOrder": 3,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"tipoPersonaIdTipoPersona": {
					"exclude": [],
					"fieldOrder": 2,
					"include": ["delete", "read", "update", "insert"],
					"isList": false,
					"noChange": ["delete", "read", "update"],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.ComplexSendMailRtnType": {
			"fields": {
				"idalumno": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"ide": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombreAlumno": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.EnviarMailEventualidadesRtnType": {
			"fields": {
				"alumnoid": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"c2": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"c3": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"coordinador": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"correoCoordinador": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"correodirector": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"docenteReg": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"hora": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"lugar": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"nombreAlumno": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"subtipo": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"tipoeventualidad": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.GetCountGenderFemaleRtnType": {
			"fields": {
				"anio_escolar": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"idCurso": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSY": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sexo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"tipito": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"total": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Long"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.GetCountGenderMaleRtnType": {
			"fields": {
				"anio_escolar": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"idCurso": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSY": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sexo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"tipito": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"total": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Long"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.GetCountGenderRtnType": {
			"fields": {
				"anio_escolar": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido1": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"apodo": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"idCurso": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idSY": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sexo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"tipito": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"total": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Long"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.GetFullNameRtnType": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.GetMaxSubjectByGradeRtnType": {
			"fields": {
				"maxValue": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"newId": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.GetTipoEventualidadByIdSubTipoRtnType": {
			"fields": {
				"eventualidad": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idTipo": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subtipo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.GetTypeUserRtnType": {
			"fields": {
				"apodo": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"idtipo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "com.aprendoz_test.data.TipoPersona"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.HQLlsCursosRtnType": {
			"fields": {
				"curso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.HQLlsGradoRtnType": {
			"fields": {
				"grado": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.HQLlsPeriodoRtnType": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"periodo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"tipoP": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.HqlPersonaEventualidadRtnType": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"ideventualidad": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idsubtipo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombrecompleto": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"subtipo": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.Hql_tipo_eventualidadRtnType": {
			"fields": {
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"tipo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.Last_accessHQLRtnType": {
			"fields": {
				"lastdate": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.LsCursosRtnType": {
			"fields": {
				"curso": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.SeachEventualidadHQLRtnType": {
			"fields": {
				"codigo": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"complex": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"confidencial": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"descripcion": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"estado": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"hora": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"ideventualidad": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"lugar": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"subtipo": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"usuario": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.SearchReportesAlumnosRtnType": {
			"fields": {
				"a1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"a2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"code": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"complex": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"n1": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"n2": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.SendMailHQLRtnType": {
			"fields": {
				"cor_mail": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"cor_user": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"curso": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"dir_mail": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"fecha": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"hora": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.util.Date"
				},
				"idalumno": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"ide": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"lugar": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"nombreAlumno": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"registrante": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"subtipo": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"tipo": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.ShowInformationUserRtnType": {
			"fields": {
				"apellido1": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"apellido2": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"clave": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"idpersona": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idtipo": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"nombre1": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"nombre2": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"numeroDocumento": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sexo": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"tipoDocumento": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"tipoPersona": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"usuario": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.SubjectDetailsRtnType": {
			"fields": {
				"a1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"a2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"a3": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"asignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"descripcion_espanol": {
					"exclude": [],
					"fieldOrder": 14,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"descripcion_ingles": {
					"exclude": [],
					"fieldOrder": 15,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"electiva": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Boolean"
				},
				"esperadosTotal": {
					"exclude": [],
					"fieldOrder": 21,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idTipoInscAsig": {
					"exclude": [],
					"fieldOrder": 12,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idgrado": {
					"exclude": [],
					"fieldOrder": 10,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"iha1": {
					"exclude": [],
					"fieldOrder": 17,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Float"
				},
				"iha2": {
					"exclude": [],
					"fieldOrder": 18,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Float"
				},
				"iha3": {
					"exclude": [],
					"fieldOrder": 19,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Float"
				},
				"ihtotal": {
					"exclude": [],
					"fieldOrder": 20,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Float"
				},
				"meses": {
					"exclude": [],
					"fieldOrder": 16,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Float"
				},
				"peso": {
					"exclude": [],
					"fieldOrder": 22,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Float"
				},
				"sa1": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sa2": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sa3": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"salon": {
					"exclude": [],
					"fieldOrder": 13,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"subject": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"sy": {
					"exclude": [],
					"fieldOrder": 11,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.aprendoz_test.data.output.SubjectsByGradeRtnType": {
			"fields": {
				"a1": {
					"exclude": [],
					"fieldOrder": 4,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"a2": {
					"exclude": [],
					"fieldOrder": 5,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"a3": {
					"exclude": [],
					"fieldOrder": 6,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"asignatura": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"c3": {
					"exclude": [],
					"fieldOrder": 3,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"id": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"idgrado": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sa1": {
					"exclude": [],
					"fieldOrder": 7,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sa2": {
					"exclude": [],
					"fieldOrder": 8,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				},
				"sa3": {
					"exclude": [],
					"fieldOrder": 9,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Integer"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "aprendoz_test"
		},
		"com.wavemaker.runtime.server.DownloadResponse": {
			"fields": {
				"contentType": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				},
				"contents": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.io.InputStream"
				},
				"fileName": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": false,
			"liveService": false,
			"service": "reporteDocente1"
		},
		"com.wavemaker.runtime.service.PagingOptions": {
			"fields": {
				"firstResult": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Long"
				},
				"maxResults": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": false,
					"noChange": [],
					"required": true,
					"type": "java.lang.Long"
				},
				"orderBy": {
					"exclude": [],
					"fieldOrder": 2,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": true,
			"liveService": false,
			"service": "runtimeService"
		},
		"com.wavemaker.runtime.service.PropertyOptions": {
			"fields": {
				"filters": {
					"exclude": [],
					"fieldOrder": 1,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": true,
					"type": "com.wavemaker.runtime.service.Filter"
				},
				"properties": {
					"exclude": [],
					"fieldOrder": 0,
					"include": [],
					"isList": true,
					"noChange": [],
					"required": true,
					"type": "java.lang.String"
				}
			},
			"internal": true,
			"liveService": false,
			"service": "runtimeService"
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		}
	}
};