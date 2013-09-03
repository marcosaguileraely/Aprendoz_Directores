Main.widgets = {
	listGrado: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	iraformularios: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"layer","source":"cur_formularios"}, {}]
			}]
		}]
	}],
	listDES: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoDesempeno"}, {}],
	listRETRO: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoValoracion"}, {}],
	LOGOUT: ["wm.ServiceVariable", {"service":"securityService","operation":"logout"}, {"onResult":"iraSALIR"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	iraSALIR: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Login\""}, {}]
			}]
		}]
	}],
	estudiantes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"calif_encabezado_opciones_sel_curso.dataValue"}, {}]
		}]
	}],
	iraCalificaciones: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"layer","source":"calificaciones"}, {}]
			}]
		}]
	}],
	alumnosCURSOS: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2","maxResults":40,"designMaxResults":40}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"calif_encabezado_opciones_sel_curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"calif_encabezado_opciones_sel_sy.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.sexo","source":"calif_contenedor_sel_Genero.dataValue"}, {}]
		}]
	}],
	alumnoslv: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2","maxResults":30,"designMaxResults":30}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"calif_alumnos_panel1_sel_curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"calif_alumnos_panel1_sel_sy.dataValue"}, {}]
		}]
	}],
	unidadlv: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Unidad","orderBy":"asc: numeroUnidad","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.asignatura.idAsignatura","source":"calif_alumnos_datagrids_datag_alumnos_asignaturas.selectedItem.asignatura.idAsignatura"}, {}]
		}]
	}],
	subtopicolv: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Subtopico"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.unidad.idUnidad","source":"unidad.selectedItem.idUnidad"}, {}]
		}]
	}],
	personaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.personaLiveView1","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.codigo","source":"Estudiante.selectedItem.persona.codigo"}, {}]
		}]
	}],
	listapersonas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumCurso","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"grado2.dataValue"}, {}]
		}]
	}],
	listaGrado4: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	listaCursos4: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"grado1.dataValue"}, {}]
		}]
	}],
	listaPeriodo: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Sy"}, {}],
	lsCursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"calif_encabezado_opciones_sel_grado.dataValue"}, {}]
		}]
	}],
	inscalumactividadLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumactividadLiveView1","ignoreCase":true,"orderBy":"asc: persona.apellido1, asc: persona.apellido2, asc: persona.nombre1, asc: persona.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.actividad.idActividad","source":"dataGrid5.selectedItem.idActividad"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"actAlumnos.selectedItem.persona.idPersona"}, {}]
		}]
	}],
	asignaturaslv1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Asignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"selectEditor17.dataValue"}, {}]
		}]
	}],
	actividadLV: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Unidad"}, {}],
	ACTIVIDADESLV3: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Actividad","orderBy":"asc: fecha"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.unidad.asignatura.idAsignatura","source":"actAsignaturas.selectedItem.idAsignatura"}, {}]
		}]
	}],
	inscalumasigLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumasigLiveView3","orderBy":"asc: persona.apellido1, asc: persona.apellido2,  asc: persona.nombre1, asc: persona.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.asignatura.sy.idSy","source":"Schoolar_Year.dataValue"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.asignatura.idAsignatura","source":"Asignatura.selectedItem.id.idAsignatura"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"Estudiante.selectedItem.id.idPersona"}, {}]
		}]
	}],
	vistaEstudiantes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false}, {}],
	vistaALUMNOS: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumAsigCurso"}, {}],
	insccursoasigLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.insccursoasigLiveView2","maxResults":40,"designMaxResults":30}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.persona.nombreLdap","source":"cur_encabezado_tex_ldapUser.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.periodo.sy.idSy","source":"cur_encabezado_sel_sy.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.asignatura.grado.idGrado","source":"cur_encabezado_sel_grado.dataValue"}, {}]
		}]
	}],
	sp_insertar_actividades: ["wm.ServiceVariable", {"service":"sp_actividad_curso","operation":"corre_proc_act_cur"}, {}, {
		input: ["wm.ServiceInput", {"type":"corre_proc_act_curInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"P_Fecha","source":"fechaEditor3.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"Pr_Comentario","source":"comentarioEditor4.dataValue"}, {}],
				wire2: ["wm.Wire", {"targetProperty":"Pr_Id_Actividad","source":"dataGrid5.selectedItem.idActividad"}, {}],
				wire3: ["wm.Wire", {"targetProperty":"Pr_Id_Curso","source":"selectEditor18.dataValue"}, {}],
				wire4: ["wm.Wire", {"targetProperty":"Pr_Logrado","source":"logradoEditor2.dataValue"}, {}]
			}]
		}]
	}],
	ls_Area1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Area"}, {}],
	ls_Area2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Area"}, {}],
	ls_Area3: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Area"}, {}],
	lv_subarea1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Subarea"}, {}],
	actualizacalifestuapren: ["wm.ServiceVariable", {"service":"actualiza_calif","operation":"corre_proc_calcula_calif_est"}, {"onSuccess":"aux200","onResult":"actualizacalifestuaprenResult"}, {
		input: ["wm.ServiceInput", {"type":"corre_proc_calcula_calif_estInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"targetProperty":"Pr_Id_Persona","source":"personaaux.dataValue"}, {}],
				wire: ["wm.Wire", {"targetProperty":"Pr_Id_Aprendizaje","source":"aprendizajeaux.dataValue"}, {}]
			}]
		}]
	}],
	iraFormulario2: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"layer","source":"layer47"}, {}]
			}]
		}]
	}],
	ejesDirNivel: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {}],
	actualizacalifestudiante: ["wm.ServiceVariable", {"service":"actualiza_calif","operation":"corre_proc_calcula_calif_est"}, {"onResult":"actualizacalifestudianteResult"}, {
		input: ["wm.ServiceInput", {"type":"corre_proc_calcula_calif_estInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"Pr_Id_Aprendizaje","source":"aux200.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"Pr_Id_Persona","source":"aux199.dataValue"}, {}]
			}]
		}]
	}],
	pesos: ["wm.Variable", {"type":"EntryData","json":"[\n\t{name:\"1\", dataValue:\"1\"},\n        {name:\"2\", dataValue:\"2\"},\n\t{name:\"3\", dataValue:\"3\"},\n\t{name:\"4\", dataValue:\"4\"},\n\t{name:\"5\", dataValue:\"5\"}\n]\n"}, {}],
	a_lista_sy: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Sy","orderBy":"desc: idSy"}, {"onSuccess":"a_lista_sySuccess"}],
	a_grado: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	l_cur_asig_asignaturas_vista_docentes_asignaturas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.VProfesorAsignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"cur_encabezado_sel_sy.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.cursoIdCurso","source":"cur_encabezado_sel_grado.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.id.gradoIdGrado","source":"cur_encabezado_sel_grado.dataValue"}, {}]
		}]
	}],
	l_cur_unid_unidades_unidadLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.unidadLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.asignatura.idAsignatura","source":"cur_asig_datag_asignaturasDataGrid1.selectedItem.id.asignaturaIdAsignatura"}, {}]
		}]
	}],
	l_cur_subt_subtopicos_subtopicoLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.subtopicoLiveView1","ignoreCase":true,"orderBy":"asc: fechaInicio","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.unidad.idUnidad","source":"cur_unid_datag_unidadesDataGrid1.selectedItem.idUnidad"}, {}]
		}]
	}],
	l_cur_apr_aprendizajes_aprendizajeLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.aprendizajeLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.idSubtopico"}, {}]
		}]
	}],
	l_cur_metas_metas_otrasmetasLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.otrasmetasLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.idSubtopico"}, {}]
		}]
	}],
	l_cur_act_actividades_actividadLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.actividadLiveView1","maxResults":30,"designMaxResults":30}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.idSubtopico"}, {}]
		}]
	}],
	l_cur_rec_recursos_recursoLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.recursoLiveView3"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subtopico.idSubtopico","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.idSubtopico"}, {}]
		}]
	}],
	l_cur_formularios_aprendizajes_listaEjes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaEjesBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaEjesSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subarea.idSubarea","source":"cur_asig_datag_asignaturasDataGrid1.selectedItem.id.idSubarea1"}, {}]
		}]
	}],
	l_cur_formularios_aprendizajes_listaDimension_comprension: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionComprension"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaDimension_comprensionBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaDimension_comprensionSuccess"}],
	l_cur_formularios_aprendizajes_listaDimension_curricular: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionCurricular"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaDimension_curricularBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaDimension_curricularSuccess"}],
	l_cur_formularios_aprendizajes_listaInteligencias: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Inteligencia"}, {"onBeforeUpdate":"l_cur_formularios_aprendizajes_listaInteligenciasBeforeUpdate","onSuccess":"l_cur_formularios_aprendizajes_listaInteligenciasSuccess"}],
	l_cur_formularios_actividad_listaTipoActividades: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoActividad"}, {"onBeforeUpdate":"l_cur_formularios_actividad_listaTipoActividadesBeforeUpdate","onSuccess":"l_cur_formularios_actividad_listaTipoActividadesSuccess"}],
	l_cur_formularios_actividad_listaTipoValoracion: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoValoracion"}, {"onBeforeUpdate":"l_cur_formularios_actividad_listaTipoValoracionBeforeUpdate","onSuccess":"l_cur_formularios_actividad_listaTipoValoracionSuccess"}],
	l_cur_formularios_actividad_listaTipoDesempeno: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoDesempeno"}, {}],
	l_cur_formularios_recursos_tipoRecurso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoRecurso"}, {"onBeforeUpdate":"l_cur_formularios_recursos_tipoRecursoBeforeUpdate","onSuccess":"l_cur_formularios_recursos_tipoRecursoSuccess"}],
	l_calif_encabezado_opciones_listaCursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"calif_encabezado_opciones_sel_grado.dataValue"}, {}]
		}]
	}],
	l_calif_contenedor_tablas_asignaturas_docentes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.VProfesorAsignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.nombreLdap","source":"cur_encabezado_tex_ldapUser.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.gradoIdGrado","source":"calif_encabezado_opciones_sel_grado.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"calif_encabezado_opciones_sel_sy.dataValue"}, {}]
		}]
	}],
	l_calif_contenedor_tablas_aprendizajes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaAprendizajesAsignatura","orderBy":"asc: id.fechaEsperada"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.asignaturaIdAsignatura","source":"calif_asig_datag_asignaturasDataGrid1.selectedItem.id.asignaturaIdAsignatura"}, {}]
		}]
	}],
	l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscAlumAsigCurso","orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2","maxResults":40,"designMaxResults":40}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"calif_encabezado_opciones_sel_sy.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"calif_encabezado_opciones_sel_curso.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.id.sexo","source":"calif_contenedor_sel_Genero.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.asignaturaIdAsignatura","source":"calif_asig_datag_asignaturasDataGrid1.selectedItem.id.asignaturaIdAsignatura"}, {}]
		}]
	}],
	l_calif_contenedor_tablas_calificacion_final: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaCalificacionFinal"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.aprendizajeIdAprendizaje","source":"calif_asig_datag_aprendizajesDataGrid1.selectedItem.id.idAprendizaje"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.id.personaIdPersona"}, {}]
		}]
	}],
	l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumaprendizajeLiveView3","orderBy":"desc: idInscAlumAprendizaje","maxResults":50,"designMaxResults":10}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.inscAlumCurso.persona.idPersona","source":"calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.persona.idPersona"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.aprendizaje.idAprendizaje","source":"calif_asig_datag_aprendizajesDataGrid1.selectedItem.id.idAprendizaje"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"calif_alumnos_curso_datag_alumnosDataGrid1.selectedItem.id.personaIdPersona"}, {}]
		}]
	}],
	l_calif_alumnos_listaCursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"calif_alumnos_panel1_sel_grado.dataValue"}, {}]
		}]
	}],
	l_calif_alumnos_alumnosCursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.VistaInscAlumnCurso","orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"calif_alumnos_panel1_sel_curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"calif_alumnos_panel1_sel_sy.dataValue"}, {}]
		}]
	}],
	l_calif_alumnos_alumnos_asignaturas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaInscAlumnAsig"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.id.idPersona"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"calif_alumnos_panel1_sel_sy.dataValue"}, {}]
		}]
	}],
	l_calif_alumnos_aprendizajes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaAprendizajesAsignatura","orderBy":"asc: id.fechaEsperada"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.asignaturaIdAsignatura","source":"calif_alumnos_datagrids_datag_alumnos_asignaturas.selectedItem.id.idAsignatura"}, {}]
		}]
	}],
	l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.inscalumaprendizajeLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"filter.inscAlumCurso.persona.idPersona","source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.persona.idPersona"}, {}],
			wire: ["wm.Wire", {"targetProperty":"filter.aprendizaje.idAprendizaje","source":"calif_alumnos_datagrids_datag_aprendizajes_asignaturas.selectedItem.id.idAprendizaje"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.id.idPersona"}, {}]
		}]
	}],
	l_calif_alumnos_calificaciones_finales: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaCalificacionFinal"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"calif_alumnos_datagrids_datag_alumnos_cursos.selectedItem.id.idPersona"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.aprendizajeIdAprendizaje","source":"calif_alumnos_datagrids_datag_aprendizajes_asignaturas.selectedItem.id.idAprendizaje"}, {}]
		}]
	}],
	l_inscrip_panel_lista_cursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"Grado.dataValue"}, {}]
		}]
	}],
	l_inscrip_panel_VistaAsignaturas: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscipcionesVistaAsignaturas","orderBy":"asc: id.electiva"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.gradoIdGrado","source":"Grado.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"Schoolar_Year.dataValue"}, {}]
		}]
	}],
	l_inscrip_panel_VistaEstudiantesCursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.InscripcionesVistaInscAlumnCurso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"Curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"Schoolar_Year.dataValue"}, {}]
		}]
	}],
	l_dirNivel_formulario_aprendizaje_lista_Ejes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Eje"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_EjesBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_EjesSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.subarea.idSubarea","source":"nivel_asig_datag_asignaturasDataGrid1.selectedItem.idSubarea1"}, {}]
		}]
	}],
	l_dirNivel_formulario_aprendizaje_lista_domension_comprension: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionComprension"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_domension_comprensionBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_domension_comprensionSuccess"}],
	l_dirNivel_formulario_aprendizaje_lista_domension_curricular: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DimensionCurricular"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_domension_curricularBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_domension_curricularSuccess"}],
	a_isAuthenticated: ["wm.ServiceVariable", {"service":"securityService","operation":"isAuthenticated","autoUpdate":true,"startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"isAuthenticatedInputs"}, {}]
	}],
	l_dirNivel_formulario_aprendizaje_lista_inteligencia: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Inteligencia"}, {"onBeforeUpdate":"l_dirNivel_formulario_aprendizaje_lista_inteligenciaBeforeUpdate","onSuccess":"l_dirNivel_formulario_aprendizaje_lista_inteligenciaSuccess"}],
	l_promocion_insc_alum_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.PromocionVistaInscAlumnCurso","orderBy":"asc: id.apellido1, asc: id.apellido2, asc: id.nombre1, asc: id.nombre2"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idCurso","source":"promocion_sel_curso.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"promocion_sel_ao_escolar.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.codigo","source":"promocion_box_codigo.dataValue"}, {}]
		}]
	}],
	l_promocion_curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"promocion_sel_grado.dataValue"}, {}]
		}]
	}],
	l_promocion_promocionLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.promocionLiveView2","maxResults":50}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.persona.idPersona","source":"promocion_container_datag_personas_x_curso.selectedItem.id.idPersona"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.sy.idSy","source":"promocion_sel_ao_escolar.dataValue"}, {}]
		}]
	}],
	multiReporte: ["wm.ServiceVariable", {"service":"MultiReportes","operation":"getReport"}, {"onResult":"multiReporteResult"}, {
		input: ["wm.ServiceInput", {"type":"getReportInputs"}, {}]
	}],
	tipoDocumento: ["wm.Variable", {"type":"EntryData","json":"[{name: \"PDF (Adobe Reader)\", value: \"PDF\"},\n{name: \"DOCX (Microsoft Word 2007 o Superior)\", value: \"DOCX\"}]"}, {}],
	a_getCompleteName: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getFullName"}, {"onSuccess":"a_getCompleteNameSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getFullNameInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"usuario","source":"bienvenida_inputFullName.dataValue"}, {}]
			}]
		}]
	}],
	a_periodo: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Periodo"}, {}],
	countEstudiantes: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getCountGender"}, {}, {
		input: ["wm.ServiceInput", {"type":"getCountGenderInputs"}, {}]
	}],
	a_numero_unidad: ["wm.Variable", {"type":"EntryData","json":"[\n{name: \"Unidad #1\", value: \"1\"}, \n{name: \"Unidad #2\", value: \"2\"}, \n{name: \"Unidad #3\", value: \"3\"},\n{name: \"Unidad #4\", value: \"4\"}, \n{name: \"Unidad #5\", value: \"5\"}, \n{name: \"Unidad #6\", value: \"6\"},\n{name: \"Unidad #7\", value: \"7\"}, \n{name: \"Unidad #8\", value: \"8\"}, \n{name: \"Unidad #9\", value: \"9\"},\n{name: \"Unidad #10\", value: \"10\"}\n]\n"}, {}],
	numerounidad: ["wm.Variable", {"type":"EntryData","json":"[{name:\"Numero 1\", dataValue: \"1\"},{name:\"Numero 2\", dataValue: \"2\"},\n{name:\"Numero 3\", dataValue: \"3\"},\n{name:\"Numero 4\", dataValue: \"4\"},\n{name:\"Numero 5\", dataValue: \"5\"},\n{name:\"Numero 6\", dataValue: \"6\"},\n{name:\"Numero 7\", dataValue: \"7\"}]"}, {}],
	a_logInsertRecords: ["wm.Variable", {"type":"com.aprendoz_test.data.LogDocentes"}, {}],
	a_informacionUsuario: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"showInformationUser"}, {"onSuccess":"a_informacionUsuarioSuccess"}, {
		input: ["wm.ServiceInput", {"type":"showInformationUserInputs"}, {}]
	}],
	a_getUserName: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","autoUpdate":true,"startUpdate":true}, {"onSuccess":"a_getUserNameSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	a_actualizaClave: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"actualizarClave"}, {"onSuccess":"a_actualizaClaveSuccess","onError":"a_actualizaClaveError"}, {
		input: ["wm.ServiceInput", {"type":"actualizarClaveInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"usuario","source":"aux_getNameUser.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"clave","source":"inicio_box_clave.dataValue"}, {}]
			}]
		}]
	}],
	l_inicio_cursos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"inicio_sel_grado.dataValue"}, {}]
		}]
	}],
	l_inicio_detalles_acceso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesInicioVistaDetallesAcceso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.syIdSy","source":"inicio_sel_sy.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.cursoIdCurso","source":"inicio_sel_curso.dataValue"}, {}]
		}]
	}],
	l_reportes_graficos_listado_reportes: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DirectoresDocentesListadoReportes","matchMode":"anywhere","orderBy":"asc: id.codigo","maxResults":50}, {}],
	openUpReportes: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoDialogPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Reportes\""}, {}]
			}]
		}]
	}],
	a_getLastAccess: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"last_accessHQL"}, {"onSuccess":"a_getLastAccessSuccess"}, {
		input: ["wm.ServiceInput", {"type":"last_accessHQLInputs"}, {}]
	}],
	cur_ls_inteligencias: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Inteligencia"}, {}],
	panel_principal: ["wm.Layout", {"height":"100%","width":"1032px","horizontalAlign":"left","verticalAlign":"top"}, {}, {
		FancyCentered: ["wm.Template", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			templateMain: ["wm.Template", {"_classes":{"domNode":["template-main","wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"100%","layoutKind":"left-to-right","autoScroll":true}, {}, {
				aprendoz: ["wm.Panel", {"height":"1551px","horizontalAlign":"left","width":"100%","freeze":true,"verticalAlign":"top"}, {}, {
					panelHeader: ["wm.Panel", {"_classes":{"domNode":["template-header-panel","wm_BackgroundColor_White"]},"height":"80px","horizontalAlign":"left","width":"100%","verticalAlign":"top","padding":"2","layoutKind":"left-to-right","lock":true}, {}, {
						logo: ["wm.Picture", {"height":"100%","border":"0","width":"200px","margin":"8","source":"resources/images/logos/headerapp2.jpg","aspect":"h"}, {}],
						spacer5: ["wm.Spacer", {"height":"48px","width":"99%"}, {}],
						panel_top_user: ["wm.Layers", {"_classes":{"domNode":["wm_Border_BottomStyleCurved4px"]},"height":"75px","width":"285px"}, {}, {
							layer10: ["wm.Layer", {"_classes":{"domNode":["wm_Border_BottomStyleCurved12px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"caption":"layer10","horizontalAlign":"left","verticalAlign":"top","border":"1","borderColor":"#CD0000"}, {}, {
								panel31: ["wm.Panel", {"height":"36px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									label1: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_FontSizePx_16px"]},"caption":"Bienvenido,","height":"27px","width":"99px","border":"0","align":"right"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									label2: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Arial","wm_FontSizePx_16px"]},"caption":"m","height":"27px","width":"91%","border":"0"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"caption","source":"a_getUserName.dataValue"}, {}]
										}],
										format: ["wm.DataFormatter", {}, {}]
									}],
									button7: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_FontColor_Black","wm_BackgroundColor_LightBlue"]},"height":"38px","width":"49px","caption":"","borderColor":"","border":"0","margin":"0","iconUrl":"resources/images/ico/logout.png","iconWidth":"35px","iconMargin":"0 0px 0 0"}, {"onclick":"LOGOUT"}]
								}],
								panel32: ["wm.Panel", {"_classes":{"domNode":["wm_Border_BottomStyleCurved8px"]},"height":"35px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									picture2: ["wm.Picture", {"height":"28px","border":"0","width":"47px","source":"resources/images/Date-icon.gif","aspect":"h"}, {}],
									dateEditor1: ["wm.DateEditor", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_FontFamily_Arial"]},"displayValue":"02/09/2013","width":"78px","readonly":true}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
										}],
										editor: ["wm._DateEditor", {}, {}]
									}],
									picture3: ["wm.Picture", {"height":"26px","border":"0","width":"22px","source":"resources/images/Clock-icon.gif","aspect":"v"}, {}],
									timeEditor1: ["wm.TimeEditor", {"_classes":{"domNode":["wm_FontSizePx_12px","wm_FontFamily_Arial"]},"displayValue":"11:25 a.m.","width":"72px","readonly":true}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
										}],
										editor: ["wm._TimeEditor", {}, {}]
									}],
									spacer18: ["wm.Spacer", {"height":"48px","width":"9%"}, {}]
								}]
							}]
						}]
					}],
					panel1: ["wm.Panel", {"height":"24px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
						templateTopLeft: ["wm.Panel", {"_classes":{"domNode":["template-top-left"]},"height":"100%","horizontalAlign":"left","width":"24px","verticalAlign":"top"}, {}],
						templateTop: ["wm.Panel", {"_classes":{"domNode":["template-top-center"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}],
						templateTopRight: ["wm.Panel", {"_classes":{"domNode":["template-top-right"]},"height":"100%","horizontalAlign":"left","width":"24px","verticalAlign":"top"}, {}]
					}],
					panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","freeze":true,"verticalAlign":"top","padding":"5","layoutKind":"left-to-right"}, {}, {
						templateLeft: ["wm.Panel", {"_classes":{"domNode":["template-left"]},"height":"100%","horizontalAlign":"left","width":"24px","freeze":true,"verticalAlign":"top","showing":false}, {}],
						templateContent: ["wm.Panel", {"_classes":{"domNode":["template-content"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
							MAIN: ["wm.TabLayers", {"layersType":"RoundedTabs"}, {}, {
								pestana_bievenida: ["wm.Layer", {"caption":"Inicio","horizontalAlign":"left","verticalAlign":"top","lock":true,"roles":["6","10","5"],"padding":"100"}, {}, {
									bienvenida_inputFullName: ["wm.TextEditor", {"width":"100%","caption":"inputFullName","showing":false,"displayValue":"m"}, {"onchange":"bienvenida_inputFullNameChange"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataValue","source":"a_getUserName.dataValue"}, {}]
										}],
										editor: ["wm._TextEditor", {}, {}]
									}],
									bienvenida_logo: ["wm.Picture", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"158px","border":"0","width":"100%","source":"resources/images/logo.jpeg"}, {}],
									panel4: ["wm.Panel", {"height":"51px","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true}, {}, {
										bienvenida_fullname: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_28px"]},"height":"48px","width":"100%","border":"0","align":"center"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}],
									configuracion_panel: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										inicio_filtros_claves: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","width":"500px","verticalAlign":"top","padding":"10","margin":"10","showing":false}, {}, {
											inicio_sel_sy: ["wm.SelectEditor", {"width":"100%","caption":"Año Escolar","height":"26px"}, {}, {
												editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
													}]
												}]
											}],
											inicio_sel_grado: ["wm.SelectEditor", {"width":"150%","caption":"Grado","height":"26px"}, {"onchange":"l_inicio_cursos"}, {
												editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
													}]
												}]
											}],
											inicio_sel_curso: ["wm.SelectEditor", {"width":"150%","caption":"Curso","height":"26px"}, {"onchange":"l_inicio_detalles_acceso"}, {
												editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_inicio_cursos","expression":undefined}, {}]
													}]
												}]
											}],
											detalles_alumnos: ["wm.DataGrid", {"border":"0"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_inicio_detalles_acceso","expression":undefined}, {}]
												}],
												column2: ["wm.DataGridColumn", {"caption":"*","field":"id.codigo","columnWidth":"62px","index":1}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column1: ["wm.DataGridColumn", {"caption":"Nombre","field":"id.nombre1","columnWidth":"100%","index":1,"dataExpression":"${id.apellido1}+\" \"+${id.apellido2}+\" \"+${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column3: ["wm.DataGridColumn", {"caption":"Usuario","field":"id.nombreLdap","columnWidth":"80px","index":2}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}],
												column4: ["wm.DataGridColumn", {"caption":"Clave","field":"id.clave","columnWidth":"80px","index":3}, {}, {
													format: ["wm.DataFormatter", {}, {}]
												}]
											}]
										}],
										dashBoard: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}],
										tabs: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"44px","verticalAlign":"top"}, {}, {
											layers1: ["wm.Layers", {"width":"44px"}, {}, {
												layer1: ["wm.Layer", {"caption":"layer1","horizontalAlign":"right","verticalAlign":"top"}, {}, {
													spacer2: ["wm.Spacer", {"height":"20px","width":"100%","showing":false}, {}],
													inicio_abrir_preferencias: ["wm.Label", {"caption":"<img src=\"resources/images/ico/gear.png\" height=\"34\" width=\"34\" align=\"right\">","height":"48px","width":"100%","border":"0","align":"right"}, {"onclick":"inicio_abrir_preferenciasClick"}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													spacer7: ["wm.Spacer", {"height":"2px","width":"100%"}, {}],
													inicio_abrir_preferencias1: ["wm.Label", {"caption":"<img src=\"resources/images/ico/student.png\" height=\"34\" width=\"34\" align=\"right\">","height":"48px","width":"100%","border":"0","align":"right"}, {"onclick":"inicio_abrir_preferencias1Click"}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													spacer6: ["wm.Spacer", {"height":"2px","width":"100%"}, {}],
													inicio_cerrar_preferencias: ["wm.Label", {"caption":"<img src=\"resources/images/ico/close.png\" height=\"18\" width=\"18\" align=\"right\">","height":"30px","width":"70%","border":"0","align":"right"}, {"onclick":"inicio_cerrar_preferenciasClick"}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}]
											}]
										}],
										inicio_panel_opciones: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"275px","verticalAlign":"top","padding":"10"}, {}, {
											aux_getNameUser: ["wm.TextEditor", {"width":"150%","caption":"userId","showing":false,"disabled":true,"displayValue":"m","height":"28px"}, {"onchange":"getCompleteName"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataValue","source":"a_getUserName.dataValue"}, {}]
												}],
												editor: ["wm._TextEditor", {}, {}]
											}],
											lastAccess_Label: ["wm.Label", {"height":"38px","width":"100%","border":"0","align":"center","singleLine":false}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											inicio_box_id_persona: ["wm.TextEditor", {"width":"100%","caption":"•","height":"28px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_tipo_persona: ["wm.TextEditor", {"width":"150%","caption":"Tipo Persona","height":"28px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_nombre: ["wm.TextEditor", {"width":"150%","caption":"Nombres","height":"28px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_apellido: ["wm.TextEditor", {"width":"150%","caption":"Apellidos","height":"28px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_usuario: ["wm.TextEditor", {"width":"150%","caption":"Usuario","height":"28px","readonly":true}, {}, {
												editor: ["wm._TextEditor", {}, {}]
											}],
											inicio_box_clave: ["wm.TextEditor", {"width":"150%","caption":"Clave","height":"28px","readonly":true}, {"onchange":"inicio_box_claveChange"}, {
												editor: ["wm._TextEditor", {"password":true,"changeOnKey":true,"changeOnEnter":true}, {}]
											}],
											inicio_box_reclave: ["wm.TextEditor", {"width":"150%","caption":"Repetir Clave","height":"28px","readonly":true}, {"onchange":"inicio_box_reclaveChange"}, {
												editor: ["wm._TextEditor", {"password":true,"changeOnKey":true,"changeOnEnter":true}, {}]
											}],
											inicio_ok_label: ["wm.Label", {"caption":"Comparación de contraseña correcta!","height":"22px","width":"100%","border":"0","align":"center","showing":false}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											inicio_bad_label: ["wm.Label", {"caption":"Verificación de contraseña erronea!","height":"22px","width":"100%","border":"0","align":"center","showing":false}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											spacer3: ["wm.Spacer", {"height":"12px","width":"96px"}, {}],
											inicio_panel_boton_actualizar: ["wm.Panel", {"height":"40px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
												inicio_boton_actualiza: ["wm.Button", {"height":"100%","width":"96px","caption":"Actualizar","disabled":true}, {"onclick":"a_actualizaClave"}],
												inicio_boton_cancelar: ["wm.Button", {"_classes":{"domNode":["wm_BackgroundColor_LightGray"]},"height":"100%","width":"96px","caption":"Cancelar"}, {"onclick":"inicio_boton_cancelarClick"}]
											}],
											inicio_forgot_password: ["wm.Label", {"caption":"<u>¿Desea cambiar su contraseña?</u>","height":"25px","width":"100%","border":"0","align":"center"}, {"onclick":"inicio_forgot_passwordClick"}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											logForm: ["wm.LiveForm", {"height":"60px","verticalAlign":"top","horizontalAlign":"left","showing":false}, {}, {
												inicio_box_fecha: ["wm.DateEditor", {"displayValue":"02/09/2013","readonly":true,"disabled":true,"caption":"hora","showing":false}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
													}],
													editor: ["wm._DateEditor", {}, {}]
												}],
												inicio_box_hora: ["wm.TimeEditor", {"displayValue":"11:25 a.m.","disabled":true,"caption":"fecha","showing":false}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataValue","expression":"new Date().getTime()"}, {}]
													}],
													editor: ["wm._TimeEditor", {}, {}]
												}]
											}]
										}]
									}]
								}],
								pestana_curriculo: ["wm.Layer", {"caption":"Currículo","horizontalAlign":"left","verticalAlign":"top","lock":true,"roles":["8","9","6","10","20","21","22","23","24","25"]}, {"onShow":"pestana_curriculoShow"}, {
									curriculo: ["wm.TabLayers", {}, {}, {
										cur_tablas: ["wm.Layer", {"caption":"TABLAS","horizontalAlign":"left","verticalAlign":"top"}, {"onShow":"cur_tablasShow"}, {
											cur_tablas_panel: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","padding":"0","height":"869px","borderColor":"#CD0000"}, {}, {
												cur_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"44px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
													cur_encabezado_sel_sy: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"width":"300px","caption":"AÑO ESCOLAR","height":"26px","captionSize":"80%"}, {"onchange":"cur_encabezado_sel_syChange"}, {
														editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","startUpdate":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
															}]
														}]
													}],
													cur_encabezado_sel_grado: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_TextDecoration_Bold","wm_FontSizePx_16px"],"domNode":["wm_FontSizePx_16px"]},"width":"243px","caption":"GRADO","height":"26px","captionAlign":"left"}, {"onchange":"cur_encabezado_sel_gradoChange"}, {
														editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado","startUpdate":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
															}]
														}]
													}],
													button2: ["wm.Button", {"height":"100%","width":"96px","caption":"Buscar","showing":false}, {"onclick":"l_cur_asig_asignaturas_vista_docentes_asignaturas"}],
													cur_encabezado_spacer_espacio: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
													cur_encabezado_butt_reporte1: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"43px","width":"48px","borderColor":"#bbb","iconUrl":"resources/images/ico/download.png","iconMargin":"0px 5px 0px 0px"}, {"onclick":"cur_encabezado_butt_reporte1Click"}],
													cur_encabezado_butt_restaurar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"43px","width":"150px","caption":"Restaurar","borderColor":"#bbb","iconUrl":"resources/images/ico/refresh.png","iconMargin":"0 0px 0 0"}, {"onclick":"cur_encabezado_butt_restaurarClick"}]
												}],
												cur_panel_asig: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
													cur_asig_panel_asignaturas: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"ASIGNATURAS","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"2"}, {}, {
														cur_asig_datag_asignaturasDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {"onSelected":"cur_asig_datag_asignaturasDataGrid1Selected"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_asig_asignaturas_vista_docentes_asignaturas","expression":undefined}, {}]
															}],
															column1: ["wm.DataGridColumn", {"caption":"Asignatura","field":"id.asignatura","columnWidth":"100%","index":1}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column2: ["wm.DataGridColumn", {"caption":"•","field":"id.asignaturaIdAsignatura"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column3: ["wm.DataGridColumn", {"caption":"Subject","field":"id.subject","columnWidth":"100%","index":2}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column4: ["wm.DataGridColumn", {"caption":"Docente","field":"id.nombreLdap","index":3}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}]
														}]
													}]
												}],
												cur_panel_encabezado2: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue","wm_BackgroundColor_VeryLightGray"]},"height":"44px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
													cur_encabezado2_butt_crea_unidad: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"43px","width":"150px","caption":"Crear Unidad","borderColor":"#bbb","iconUrl":"resources/images/ico/wired.png","iconWidth":"29px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"29px"}, {"onclick":"cur_encabezado2_butt_crea_unidadClick"}]
												}],
												cur_panel_unid: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","height":"247px"}, {}, {
													cur_unid_panel_unidades: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"UNIDADES","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"2","height":"244px"}, {}, {
														cur_unid_datag_unidadesDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {"onSelected":"l_cur_subt_subtopicos_subtopicoLiveVariable1","onRowDblClick":"cur_unid_datag_unidadesDataGrid1RowDblClick","onCellClick":"cur_unid_datag_unidadesDataGrid1CellClick"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_unid_unidades_unidadLiveVariable1","expression":undefined}, {}]
															}],
															idUnidad1: ["wm.DataGridColumn", {"caption":"•","field":"idUnidad"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															unidad1: ["wm.DataGridColumn", {"caption":"Unidad","field":"unidad","columnWidth":"100%","index":2}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															unit1: ["wm.DataGridColumn", {"caption":"Unit","field":"unit","columnWidth":"100%","index":3}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															fechaInicio1: ["wm.DataGridColumn", {"caption":"Fecha Inicio","field":"fechaInicio","columnWidth":"110px","index":4,"display":"Date","autoSize":undefined}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															fechaFin1: ["wm.DataGridColumn", {"caption":"Fecha Final","field":"fechaFin","columnWidth":"110px","index":5,"display":"Date"}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															numeroUnidad1: ["wm.DataGridColumn", {"caption":"No. Unidad","field":"numeroUnidad","columnWidth":"110px","index":1,"display":"Number"}, {}, {
																format: ["wm.NumberFormatter", {}, {}]
															}]
														}]
													}]
												}],
												cur_panel_encabezado3: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"44px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													cur_encabezado3_butt_crear_subtopico: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"43px","width":"160px","caption":"Crear Subtopico","borderColor":"#bbb","iconUrl":"resources/images/ico/download_link.png","iconWidth":"30px","iconMargin":"0 0px 0 0","disabled":true,"iconHeight":"30px"}, {"onclick":"cur_encabezado3_butt_crear_subtopicoClick"}]
												}],
												cur_panel_subt: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","height":"239px"}, {}, {
													cur_subt_panel_subtopicos: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"SUBTOPICOS","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"2","lock":true}, {}, {
														cur_subt_datag_subtopicoDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {"onSelected":"cur_subt_datag_subtopicoDataGrid1Selected","onRowDblClick":"cur_subt_datag_subtopicoDataGrid1RowDblClick","onCellClick":"cur_subt_datag_subtopicoDataGrid1CellClick"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_subt_subtopicos_subtopicoLiveVariable1","expression":undefined}, {}]
															}],
															idSubtopico1: ["wm.DataGridColumn", {"caption":"•","field":"idSubtopico"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															subtopico1: ["wm.DataGridColumn", {"caption":"Subtopico","field":"subtopico","columnWidth":"100%","index":2}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															fechaInicio1: ["wm.DataGridColumn", {"caption":"Fecha Inicio","field":"fechaInicio","columnWidth":"110px","index":4,"display":"Date"}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															fechaFin1: ["wm.DataGridColumn", {"caption":"Fecha Final","field":"fechaFin","columnWidth":"110px","index":5,"display":"Date"}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															subtopic1: ["wm.DataGridColumn", {"caption":"Subtopic","field":"subtopic","columnWidth":"100%","index":3}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															numeroSubtopico1: ["wm.DataGridColumn", {"caption":"No. Subtopico","field":"numeroSubtopico","columnWidth":"110px","index":1,"display":"Number"}, {}, {
																format: ["wm.NumberFormatter", {}, {}]
															}]
														}]
													}]
												}]
											}],
											cur_subTablas: ["wm.TabLayers", {"borderColor":"#CD0000"}, {}, {
												cur_subTablas_apr: ["wm.Layer", {"caption":"APRENDIZAJE","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													cur_apr_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"44px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
														cur_apr_encabezado_butt_crear_aprendizaje: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"43px","width":"195px","caption":"Crear Aprendizaje","borderColor":"#bbb","iconUrl":"resources/images/ico/artwork.png","iconMargin":"0 0px 0 0","disabled":true}, {"onclick":"cur_apr_encabezado_butt_crear_aprendizajeClick"}]
													}],
													cur_panel_apr: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
														cur_apr_panel_subtopicos: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Aprendizaje","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"2","border":"3,3,3,3"}, {}, {
															cur_apr_datag_aprendizajeDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {"onRowDblClick":"cur_apr_datag_aprendizajeDataGrid1RowDblClick","onSelected":"cur_apr_datag_aprendizajeDataGrid1Selected"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_apr_aprendizajes_aprendizajeLiveVariable1","expression":undefined}, {}]
																}],
																idAprendizaje1: ["wm.DataGridColumn", {"caption":"•","field":"idAprendizaje"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																fechaEsperada1: ["wm.DataGridColumn", {"caption":"Fecha esperada","field":"fechaEsperada","index":1,"display":"Date"}, {}, {
																	format: ["wm.DateFormatter", {}, {}]
																}],
																aprendizaje1: ["wm.DataGridColumn", {"caption":"Aprendizaje","field":"aprendizaje","columnWidth":"100%","index":2}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																learning1: ["wm.DataGridColumn", {"caption":"Learning","field":"learning","columnWidth":"100%","index":3}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																peso1: ["wm.DataGridColumn", {"caption":"Peso","field":"peso","columnWidth":"50px","index":4,"display":"Number"}, {}, {
																	format: ["wm.NumberFormatter", {}, {}]
																}],
																ejeIdEje1: ["wm.DataGridColumn", {"caption":"Eje 1","field":"ejeIdEje","columnWidth":"50px","index":5,"display":"Number"}, {}, {
																	format: ["wm.NumberFormatter", {}, {}]
																}],
																column1: ["wm.DataGridColumn", {"caption":"Eje 2","field":"eje2IdEje","columnWidth":"50px","index":6}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column2: ["wm.DataGridColumn", {"caption":"Eje 3","field":"eje3IdEje","columnWidth":"50px","index":7}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}]
														}]
													}]
												}],
												cur_subTablas_metas: ["wm.Layer", {"caption":"OTRAS METAS","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													cur_metas_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"42px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
														cur_metas_encabezado_butt_crear_meta: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"43px","width":"150px","caption":"Crear Meta","borderColor":"#bbb","iconUrl":"resources/images/ico/travel_directions.png","iconMargin":"0 0px 0 0","disabled":true}, {"onclick":"cur_metas_encabezado_butt_crear_metaClick"}]
													}],
													cur_panel_metas: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
														cur_metas_panel_metas: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Metas","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"2"}, {}, {
															cur_metas_datag_otrasmetasDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {"onRowDblClick":"cur_metas_datag_otrasmetasDataGrid1RowDblClick"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_metas_metas_otrasmetasLiveVariable1","expression":undefined}, {}]
																}],
																idOtraMeta1: ["wm.DataGridColumn", {"caption":"•","field":"idOtraMeta"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																meta1: ["wm.DataGridColumn", {"caption":"Meta (Descripción)","field":"meta","columnWidth":"832px","index":1,"autoSize":undefined}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																fecha1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","index":2,"display":"Date","autoSize":undefined}, {}, {
																	format: ["wm.DateFormatter", {}, {}]
																}],
																logrado1: ["wm.DataGridColumn", {"caption":"Logrado","field":"logrado","columnWidth":"67px","index":3,"autoSize":undefined}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}]
														}]
													}]
												}],
												cur_subTablas_act: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"ACTIVIDADES","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													cur_act_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"42px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
														cur_act_encabezado_butt_crear_actividad: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"43px","width":"199px","caption":"Crear Actividad","borderColor":"#bbb","iconUrl":"resources/images/ico/add_event.png","iconMargin":"0 0px 0 0","disabled":true}, {"onclick":"cur_act_encabezado_butt_crear_actividadClick"}]
													}],
													cur_panel_act: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
														cur_act_panel_actividades: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Actividad","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"2"}, {}, {
															cur_act_datag_actividadDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onRowDblClick":"cur_act_datag_actividadDataGrid1RowDblClick"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_act_actividades_actividadLiveVariable1","expression":undefined}, {}]
																}],
																idActividad1: ["wm.DataGridColumn", {"caption":"•","field":"idActividad"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																actividad1: ["wm.DataGridColumn", {"caption":"Actividad","field":"actividad","columnWidth":"706px","index":1,"autoSize":undefined}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																fecha1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","index":2,"display":"Date"}, {}, {
																	format: ["wm.DateFormatter", {}, {}]
																}],
																requeridoAlternativo1: ["wm.DataGridColumn", {"caption":"Requerido","field":"requeridoAlternativo","columnWidth":"102px","index":3,"autoSize":undefined}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column1: ["wm.DataGridColumn", {"caption":"Tipo Valoracion","field":"tipoValoracion.tipoValoracion","columnWidth":"143px","index":4}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}]
														}]
													}]
												}],
												cur_subTablas_rec: ["wm.Layer", {"caption":"RECURSOS","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													cur_rec_encabezado_recursos: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"42px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
														cur_rec_encabezado_butt_crear_recurso: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_TextDecoration_Bold"]},"height":"43px","width":"184px","caption":"Crear Recurso","borderColor":"#bbb","iconUrl":"resources/images/ico/pastel_colors.png","iconMargin":"0 0px 0 0","disabled":true}, {"onclick":"cur_rec_encabezado_butt_crear_recursoClick"}]
													}],
													cur_panel_rec: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
														cur_rec_panel_recursos: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Recurso","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"2"}, {}, {
															cur_rec_datag_recursosDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {"onRowDblClick":"cur_rec_datag_recursosDataGrid1RowDblClick"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_rec_recursos_recursoLiveVariable1","expression":undefined}, {}]
																}],
																idRecurso1: ["wm.DataGridColumn", {"caption":"•","field":"idRecurso","display":"Number","autoSize":undefined}, {}, {
																	format: ["wm.NumberFormatter", {}, {}]
																}],
																recurso1: ["wm.DataGridColumn", {"caption":"Recurso","field":"recurso","columnWidth":"60%","index":1}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																ubicacion1: ["wm.DataGridColumn", {"caption":"Direccion Recurso http://","field":"ubicacion","columnWidth":"120%","index":3,"dataExpression":"'<a href=\"'+${ubicacion}+'\" target=\"_blank\">'+${ubicacion}+'</a>'"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}]
														}]
													}]
												}]
											}]
										}],
										cur_formularios: ["wm.Layer", {"caption":"FORMULARIOS","horizontalAlign":"center","verticalAlign":"top","borderColor":"#CD0000"}, {}, {
											cur_formularios_panel_unidad: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"FORMULARIO UNIDAD","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_14px wm_FontFamily_Arial","height":"347px","lock":true,"showing":false}, {}, {
												unidadLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_16px"]},"height":"170%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_cur_unid_unidades_unidadLiveVariable1","onBeginInsert":"unidadLiveForm1BeginInsert","onBeginUpdate":"unidadLiveForm1BeginUpdate","onInsertData":"unidadLiveForm1InsertData","onUpdateData":"unidadLiveForm1UpdateData","onCancelEdit":"unidadLiveForm1CancelEdit"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_unid_datag_unidadesDataGrid1.selectedItem","expression":undefined}, {}],
														wire1: ["wm.Wire", {"targetProperty":"dataOutput.asignatura","source":"asignaturaRelatedEditor1.dataOutput","expression":undefined}, {}]
													}],
													cur_formularios_unidad_panel1: ["wm.Panel", {"height":"34px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														idUnidadEditor1: ["wm.Editor", {"caption":"ID Unidad:","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idUnidad"}, {}, {
															editor: ["wm._NumberEditor", {"required":true}, {}]
														}],
														asignaturaRelatedEditor1: ["wm.RelatedEditor", {"formField":"asignatura","height":"100%"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_unid_datag_unidadesDataGrid1.selectedItem.asignatura","expression":undefined}, {}]
															}],
															asignaturaLookup1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"ID Asignatura","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idAsignatura"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}]
														}]
													}],
													cur_formularios_unidad_panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														unidadEditor1: ["wm.Editor", {"caption":"Unidad","width":"100%","height":"100%","readonly":true,"formField":"unidad","singleLine":false,"captionAlign":"left"}, {}, {
															editor: ["wm._TextEditor", {"required":true,"promptMessage":"Inserte una descripción en Ingles de la Unidad ","invalidMessage":"Este campo es requerido *","tooltipDisplayTime":3000}, {}]
														}],
														unitEditor1: ["wm.Editor", {"caption":"Unit","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"unit","singleLine":false,"captionAlign":"left"}, {}, {
															editor: ["wm._TextAreaEditor", {"required":true,"promptMessage":"Inserte una descripción en Ingles de la Unidad ","invalidMessage":"Este campo es requerido *","tooltipDisplayTime":3000}, {}]
														}]
													}],
													cur_formularios_unidad_panel3: ["wm.Panel", {"height":"34px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														fechaInicioEditor1: ["wm.Editor", {"caption":"Fecha Inicio","width":"100%","height":"100%","display":"Date","readonly":true,"formField":"fechaInicio"}, {}, {
															editor: ["wm._DateEditor", {"required":true,"promptMessage":"Selecciones un Fecha Inicial para la Unidad","invalidMessage":"El campo es requerido *"}, {}]
														}],
														fechaFinEditor1: ["wm.Editor", {"caption":"Fecha Final","width":"100%","height":"100%","display":"Date","readonly":true,"formField":"fechaFin"}, {}, {
															editor: ["wm._DateEditor", {"required":true,"promptMessage":"Selecciones un Fecha Final para la Unidad","invalidMessage":"El campo es requerido *"}, {}]
														}]
													}],
													numeroUnidadEditor2: ["wm.NumberEditor", {"caption":"Numero Unidad","readonly":true,"formField":"numeroUnidad","width":"100%"}, {}, {
														editor: ["wm._NumberEditor", {}, {}]
													}],
													numeroUnidadEditor1: ["wm.Editor", {"caption":"Numero Unidad","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"numeroUnidad","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"displayValue","source":"cur_unid_datag_unidadesDataGrid1.selectedItem.numeroUnidad"}, {}]
														}],
														editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue"}, {}, {
															optionsVar: ["wm.Variable", {"type":"EntryData"}, {}],
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"numerounidad","expression":undefined}, {}]
															}]
														}]
													}],
													editPanel4: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"liveForm":"unidadLiveForm1","savePanel":"savePanel4","operationPanel":"operationPanel4"}, {}, {
														savePanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
															saveButton4: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel4.saveData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formInvalid","expression":undefined}, {}]
																}]
															}],
															cancelButton4: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel4.cancelEdit"}]
														}],
														operationPanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
															newButton4: ["wm.RoundedButton", {"caption":"Nueva Unidad","width":"150px","height":"100%"}, {"onclick":"editPanel4.beginDataInsert"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","expression":"selectEditor14.dataValue=1"}, {}]
																}]
															}],
															updateButton4: ["wm.RoundedButton", {"caption":"Actualizar","width":"134px","height":"100%","disabled":true}, {"onclick":"editPanel4.beginDataUpdate"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formUneditable","expression":undefined}, {}]
																}]
															}],
															deleteButton4: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel4.deleteData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel4.formUneditable","expression":undefined}, {}]
																}]
															}]
														}]
													}]
												}]
											}],
											cur_formularios_panel_subtopico: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"FORMULARIO SUBTOPICOS","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_14px wm_FontFamily_Arial","height":"373px","lock":true,"showing":false}, {}, {
												subtopicoLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_16px"]},"height":"170%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_cur_subt_subtopicos_subtopicoLiveVariable1","onBeginInsert":"subtopicoLiveForm1BeginInsert"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem","expression":undefined}, {}],
														wire1: ["wm.Wire", {"targetProperty":"dataOutput.unidad","source":"unidadRelatedEditor1.dataOutput","expression":undefined}, {}]
													}],
													cur_formularios_subtopicos_panel1: ["wm.Panel", {"height":"34px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														idSubtopicoEditor1: ["wm.Editor", {"caption":"ID Subtopico","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idSubtopico"}, {}, {
															editor: ["wm._NumberEditor", {"required":true}, {}]
														}],
														unidadRelatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"formField":"unidad","height":"100%","lock":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_subt_datag_subtopicoDataGrid1.selectedItem.unidad","expression":undefined}, {}]
															}],
															unidadLookup1: ["wm.Editor", {"caption":"ID Unidad","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idUnidad"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}]
														}]
													}],
													cur_formularios_subtopicos_panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														subtopicoEditor1: ["wm.Editor", {"caption":"Subtopico","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"subtopico","singleLine":false,"captionAlign":"left"}, {}, {
															editor: ["wm._TextAreaEditor", {"required":true,"promptMessage":"Inserte una descripción para Subtópico","invalidMessage":"Este campo es requerido *"}, {}]
														}],
														subtopicEditor1: ["wm.Editor", {"caption":"Subtopic","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"subtopic","singleLine":false,"captionAlign":"left"}, {}, {
															editor: ["wm._TextAreaEditor", {"required":true,"promptMessage":"Inserte una descripción para Subtópico","invalidMessage":"Este campo es requerido *"}, {}]
														}]
													}],
													cur_formularios_subtopicos_panel3: ["wm.Panel", {"height":"35px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														fechaInicioEditor2: ["wm.Editor", {"caption":"Fecha Inicio","width":"100%","height":"100%","display":"Date","readonly":true,"formField":"fechaInicio"}, {}, {
															editor: ["wm._DateEditor", {"required":true,"promptMessage":"Seleccione un fecha","invalidMessage":"Fecha Final es un campo obligatorio"}, {}]
														}],
														fechaFinEditor2: ["wm.Editor", {"caption":"Fecha Final","width":"100%","height":"100%","display":"Date","readonly":true,"formField":"fechaFin"}, {}, {
															editor: ["wm._DateEditor", {"required":true,"promptMessage":"Seleccione una Fecha","invalidMessage":"Fecha Final es un campo obligatorio"}, {}]
														}]
													}],
													numeroSubtopicoEditor1: ["wm.Editor", {"caption":"Numero Subtopico","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"numeroSubtopico"}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true,"options":"1,2,3,4,5,6,7,8,9,10"}, {}, {
															optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
														}]
													}],
													editPanel5: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"liveForm":"subtopicoLiveForm1","savePanel":"savePanel5","operationPanel":"operationPanel5"}, {}, {
														savePanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
															saveButton5: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel5.saveData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel5.formInvalid","expression":undefined}, {}]
																}]
															}],
															cancelButton5: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel5.cancelEdit"}]
														}],
														operationPanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
															newButton5: ["wm.RoundedButton", {"caption":"Nuevo Subtopico","width":"200px","height":"100%"}, {"onclick":"editPanel5.beginDataInsert"}],
															updateButton5: ["wm.RoundedButton", {"caption":"Actualizar","width":"149px","height":"100%","disabled":true}, {"onclick":"editPanel5.beginDataUpdate"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel5.formUneditable","expression":undefined}, {}]
																}]
															}],
															deleteButton5: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel5.deleteData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel5.formUneditable","expression":undefined}, {}]
																}]
															}]
														}]
													}]
												}]
											}],
											cur_formularios_panel_otrasmetas: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"FORMULARIO METAS","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontColor_White wm_TextDecoration_Bold wm_FontFamily_Arial wm_FontSizePx_14px","height":"300px","lock":true,"showing":false}, {}, {
												otrasmetasLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_16px"]},"height":"165%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_cur_metas_metas_otrasmetasLiveVariable1","onBeginInsert":"otrasmetasLiveForm1BeginInsert"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_metas_datag_otrasmetasDataGrid1.selectedItem","expression":undefined}, {}],
														wire1: ["wm.Wire", {"targetProperty":"dataOutput.subtopico","source":"relatedEditor7.dataOutput","expression":undefined}, {}]
													}],
													cur_formularios_metas_panel1: ["wm.Panel", {"height":"38px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														idOtraMetaEditor1: ["wm.Editor", {"caption":"ID Otra Meta","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idOtraMeta"}, {}, {
															editor: ["wm._NumberEditor", {"required":true}, {}]
														}],
														relatedEditor7: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"formField":"subtopico","height":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_metas_datag_otrasmetasDataGrid1.selectedItem.subtopico","expression":undefined}, {}]
															}],
															subtopicoLookup1: ["wm.Editor", {"caption":"ID Subtopico","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idSubtopico"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}]
														}]
													}],
													metaEditor1: ["wm.Editor", {"caption":"Meta","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"meta","singleLine":false}, {}, {
														editor: ["wm._TextAreaEditor", {"required":true,"promptMessage":"Ingrese la descripción de la Meta","invalidMessage":"Este campo es obligatorio *"}, {}]
													}],
													fechaEditor1: ["wm.Editor", {"caption":"Fecha","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fecha"}, {}, {
														editor: ["wm._DateEditor", {"required":true,"promptMessage":"Seleccione una Fecha","invalidMessage":"Este campo es obligatorio *"}, {}]
													}],
													logradoEditor1: ["wm.Editor", {"caption":"Logrado","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"logrado","displayValue":true,"emptyValue":"false"}, {}, {
														editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
													}],
													editPanel2: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"liveForm":"otrasmetasLiveForm1","savePanel":"savePanel2","operationPanel":"operationPanel2","lock":false}, {}, {
														savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
															saveButton2: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel2.saveData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formInvalid","expression":undefined}, {}]
																}]
															}],
															cancelButton2: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel2.cancelEdit"}]
														}],
														operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
															newButton2: ["wm.RoundedButton", {"caption":"Nueva Meta","width":"150px","height":"100%"}, {"onclick":"editPanel2.beginDataInsert"}],
															updateButton2: ["wm.RoundedButton", {"caption":"Actualizar","width":"128px","height":"100%","disabled":true}, {"onclick":"editPanel2.beginDataUpdate"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
																}]
															}],
															deleteButton2: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel2.deleteData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formUneditable","expression":undefined}, {}]
																}]
															}]
														}]
													}]
												}]
											}],
											cur_formularios_panel_actividad: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"FORMULARIO ACTIVIDAD","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_DropShadow wm_Border_TopStyleCurved4px wm_FontColor_White wm_TextDecoration_Bold wm_FontSizePx_14px wm_FontFamily_Arial","height":"349px","lock":true,"showing":false}, {}, {
												actividadLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"224%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_cur_act_actividades_actividadLiveVariable1","onBeginInsert":"actividadLiveForm1BeginInsert","onBeforeOperation":"l_cur_formularios_actividad_listaTipoActividades"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_act_datag_actividadDataGrid1.selectedItem","expression":undefined}, {}],
														wire1: ["wm.Wire", {"targetProperty":"dataOutput.tipoActividad","source":"relatedEditor8.dataOutput","expression":undefined}, {}],
														wire2: ["wm.Wire", {"targetProperty":"dataOutput.tipoValoracion","source":"relatedEditor9.dataOutput","expression":undefined}, {}],
														wire3: ["wm.Wire", {"targetProperty":"dataOutput.tipoDesempeno","source":"relatedEditor10.dataOutput","expression":undefined}, {}],
														wire4: ["wm.Wire", {"targetProperty":"dataOutput.subtopico","source":"relatedEditor3.dataOutput","expression":undefined}, {}]
													}],
													cur_formularios_actividad_panel1: ["wm.Panel", {"height":"40px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														idActividadEditor1: ["wm.Editor", {"caption":"ID Actividad:","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idActividad"}, {}, {
															editor: ["wm._NumberEditor", {"required":true}, {}]
														}],
														relatedEditor3: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"formField":"subtopico","height":"100%","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_act_datag_actividadDataGrid1.selectedItem.subtopico","expression":undefined}, {}],
																wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"subtopicoLookup2.selectedItem","expression":undefined}, {}]
															}],
															subtopicoLookup3: ["wm.Editor", {"caption":"ID Subtopico","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idSubtopico"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}]
														}]
													}],
													fechaEditor2: ["wm.Editor", {"caption":"Fecha","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fecha"}, {}, {
														editor: ["wm._DateEditor", {}, {}]
													}],
													cur_formularios_actividad_panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														actividadEditor1: ["wm.Editor", {"caption":"Actividad:","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"actividad","singleLine":false}, {}, {
															editor: ["wm._TextAreaEditor", {}, {}]
														}],
														requeridoAlternativoEditor1: ["wm.Editor", {"caption":"Requerido","width":"294px","height":"26px","display":"CheckBox","readonly":true,"formField":"requeridoAlternativo","displayValue":true,"emptyValue":"false"}, {}, {
															editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
														}]
													}],
													relatedEditor8: ["wm.RelatedEditor", {"formField":"tipoActividad","height":"28px","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_act_datag_actividadDataGrid1.selectedItem.tipoActividad","expression":undefined}, {}],
															wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoActividadLookup1.selectedItem","expression":undefined}, {}]
														}],
														tipoActividadLookup1: ["wm.Editor", {"caption":"Tipo de Actividad:","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {"onchange":"tipoActividadLookup1Change"}, {
															editor: ["wm._LookupEditor", {"displayField":"tipoActividad","autoDataSet":false,"startUpdate":false,"allowNone":true}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_actividad_listaTipoActividades","expression":undefined}, {}]
																}]
															}]
														}]
													}],
													relatedEditor9: ["wm.RelatedEditor", {"formField":"tipoValoracion","height":"28px","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_act_datag_actividadDataGrid1.selectedItem.tipoValoracion","expression":undefined}, {}],
															wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoValoracionLookup1.selectedItem","expression":undefined}, {}]
														}],
														tipoValoracionLookup1: ["wm.Editor", {"caption":"Retroalimentación","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
															editor: ["wm._LookupEditor", {"displayField":"tipoValoracion","autoDataSet":false,"startUpdate":false,"allowNone":true}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_actividad_listaTipoValoracion","expression":undefined}, {}]
																}]
															}]
														}]
													}],
													relatedEditor10: ["wm.RelatedEditor", {"formField":"tipoDesempeno","height":"28px","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_act_datag_actividadDataGrid1.selectedItem.tipoDesempeno","expression":undefined}, {}],
															wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoDesempenoLookup1.selectedItem","expression":undefined}, {}]
														}],
														tipoDesempenoLookup1: ["wm.Editor", {"caption":"Desempeño","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":"","disabled":true}, {}, {
															editor: ["wm._LookupEditor", {"displayField":"tipoDesempeno","autoDataSet":false,"startUpdate":false,"allowNone":true}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_actividad_listaTipoDesempeno","expression":undefined}, {}]
																}]
															}]
														}]
													}],
													editPanel6: ["wm.EditPanel", {"liveForm":"actividadLiveForm1","savePanel":"savePanel6","operationPanel":"operationPanel6","lock":false}, {}, {
														savePanel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
															saveButton6: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel6.saveData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel6.formInvalid","expression":undefined}, {}]
																}]
															}],
															cancelButton6: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel6.cancelEdit"}]
														}],
														operationPanel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
															newButton6: ["wm.RoundedButton", {"caption":"Nueva Actividad","width":"160px","height":"100%"}, {"onclick":"editPanel6.beginDataInsert"}],
															updateButton6: ["wm.RoundedButton", {"caption":"Actualizar","height":"100%","disabled":true}, {"onclick":"editPanel6.beginDataUpdate"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel6.formUneditable","expression":undefined}, {}]
																}]
															}],
															deleteButton6: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel6.deleteData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel6.formUneditable","expression":undefined}, {}]
																}]
															}]
														}]
													}]
												}]
											}],
											cur_formularios_panel_recurso: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"FORMULARIO RECURSOS","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","height":"364px","lock":true,"showing":false}, {}, {
												recursoLiveForm2: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_cur_rec_recursos_recursoLiveVariable1","onBeginInsert":"recursoLiveForm2BeginInsert","onBeforeOperation":"l_cur_formularios_recursos_tipoRecurso"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_rec_datag_recursosDataGrid1.selectedItem","expression":undefined}, {}],
														wire1: ["wm.Wire", {"targetProperty":"dataOutput.tipoRecurso","source":"tipoRecursoRelatedEditor2.dataOutput","expression":undefined}, {}],
														wire2: ["wm.Wire", {"targetProperty":"dataOutput.subtopico","source":"subtopicoRelatedEditor1.dataOutput","expression":undefined}, {}]
													}],
													cur_formulario_recurso_panel1: ["wm.Panel", {"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														idRecursoEditor2: ["wm.Editor", {"caption":"ID Recurso","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idRecurso"}, {}, {
															editor: ["wm._NumberEditor", {"required":true}, {}]
														}],
														subtopicoRelatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"formField":"subtopico","height":"100%"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_rec_datag_recursosDataGrid1.selectedItem.subtopico","expression":undefined}, {}],
																wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"subtopicoLookup5.selectedItem","expression":undefined}, {}]
															}],
															subtopicoLookup4: ["wm.Editor", {"caption":"ID Subtopico","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idSubtopico"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}]
														}]
													}],
													recursoEditor1: ["wm.Editor", {"caption":"Recurso","width":"100%","height":"119px","display":"TextArea","readonly":true,"formField":"recurso","singleLine":false}, {}, {
														editor: ["wm._TextAreaEditor", {}, {}]
													}],
													documentoEditor2: ["wm.Editor", {"caption":"Documento","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"documento","showing":false}, {}, {
														editor: ["wm._NumberEditor", {}, {}]
													}],
													ubicacionEditor2: ["wm.Editor", {"caption":"Direccion Http://","width":"100%","height":"26px","readonly":true,"formField":"ubicacion"}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}],
													idSyIdIdSyEditor1: ["wm.Editor", {"caption":"IdSyIdIdSy","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idSyIdIdSy","showing":false}, {}, {
														editor: ["wm._NumberEditor", {}, {}]
													}],
													tipoRecursoRelatedEditor2: ["wm.RelatedEditor", {"formField":"tipoRecurso","height":"33px"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_rec_datag_recursosDataGrid1.selectedItem.tipoRecurso","expression":undefined}, {}],
															wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoRecursoLookup2.selectedItem","expression":undefined}, {}]
														}],
														tipoRecursoLookup2: ["wm.Editor", {"caption":"Tipo recurso","width":"100%","height":"100%","display":"Lookup","readonly":true,"formField":""}, {}, {
															editor: ["wm._LookupEditor", {"required":true,"displayField":"tipoRecurso","autoDataSet":false,"startUpdate":false}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_recursos_tipoRecurso","expression":undefined}, {}]
																}]
															}]
														}]
													}],
													cur_formulario_recurso_panel2: ["wm.Panel", {"height":"48px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														cur_formularios_butt_cargar_recurso: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_16px"]},"height":"100%","width":"193px","caption":"Recursos","iconUrl":"resources/images/ico/page_up.png","iconMargin":"0 2px 0 0"}, {"onclick":"cur_formularios_butt_cargar_recursoClick"}]
													}],
													editPanel13: ["wm.EditPanel", {"liveForm":"recursoLiveForm2","savePanel":"savePanel13","operationPanel":"operationPanel13","lock":false,"height":"50px"}, {}, {
														savePanel13: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
															saveButton13: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel13.saveData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel13.formInvalid","expression":undefined}, {}]
																}]
															}],
															cancelButton13: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel13.cancelEdit"}]
														}],
														operationPanel13: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
															newButton13: ["wm.RoundedButton", {"caption":"Nuevo","width":"131px","height":"100%"}, {"onclick":"editPanel13.beginDataInsert"}],
															updateButton13: ["wm.RoundedButton", {"caption":"Actualizar","width":"136px","height":"100%","disabled":true}, {"onclick":"editPanel13.beginDataUpdate"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel13.formUneditable","expression":undefined}, {}]
																}]
															}],
															deleteButton13: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel13.deleteData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel13.formUneditable","expression":undefined}, {}]
																}]
															}]
														}]
													}]
												}]
											}],
											cur_formularios_panel_aprendizaje: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"FORMULARIO DE APRENDIZAJES","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","height":"505px","lock":true,"showing":false}, {}, {
												aprendizajeLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_cur_apr_aprendizajes_aprendizajeLiveVariable1","onBeginInsert":"aprendizajeLiveForm1BeginInsert","onBeginUpdate":"aprendizajeLiveForm1BeginUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem","expression":undefined}, {}],
														wire1: ["wm.Wire", {"targetProperty":"dataOutput.dimensionComprension","source":"dimensionComprensionRelatedEditor1.dataOutput","expression":undefined}, {}],
														wire2: ["wm.Wire", {"targetProperty":"dataOutput.dimensionCurricular","source":"dimensionCurricularRelatedEditor1.dataOutput","expression":undefined}, {}],
														wire3: ["wm.Wire", {"targetProperty":"dataOutput.subtopico","source":"relatedEditor1.dataOutput","expression":undefined}, {}],
														wire4: ["wm.Wire", {"targetProperty":"dataOutput.nivelEsperado","source":"relatedEditor5.dataOutput","expression":undefined}, {}],
														wire5: ["wm.Wire", {"targetProperty":"dataOutput.inteligencia","source":"relatedEditor2.dataOutput","expression":undefined}, {}]
													}],
													panel16: ["wm.Panel", {"height":"38px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														idAprendizajeEditor1: ["wm.Editor", {"caption":"ID Aprendizaje","width":"100%","height":"100%","display":"Number","readonly":true,"formField":"idAprendizaje"}, {}, {
															editor: ["wm._NumberEditor", {"required":true}, {}]
														}],
														relatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_BackgroundColor_VeryLightGray"]},"formField":"subtopico","height":"100%","lock":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.subtopico","expression":undefined}, {}],
																wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"subtopicoLookup7.selectedItem","expression":undefined}, {}]
															}],
															subtopicoLookup6: ["wm.Editor", {"caption":"ID Subtopico","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idSubtopico"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}]
														}]
													}],
													panel17: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														aprendizajeEditor1: ["wm.Editor", {"caption":"Aprendizaje","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"aprendizaje","singleLine":false}, {}, {
															editor: ["wm._TextAreaEditor", {"required":true,"promptMessage":"Ingrese la descripción del Aprendizaje","invalidMessage":"Este campo es obligatorio *","tooltipDisplayTime":3000}, {}]
														}],
														learningEditor1: ["wm.Editor", {"caption":"Learning","width":"100%","height":"100%","display":"TextArea","readonly":true,"formField":"learning","singleLine":false}, {}, {
															editor: ["wm._TextAreaEditor", {"required":true,"promptMessage":"Ingrese la descripción del Aprendizaje","invalidMessage":"Este campo es obligatorio *","tooltipDisplayTime":3000}, {}]
														}]
													}],
													fechaEsperadaEditor1: ["wm.Editor", {"caption":"Fecha esperada","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaEsperada"}, {}, {
														editor: ["wm._DateEditor", {"required":true,"promptMessage":"Seleccione una Fecha"}, {}]
													}],
													pesoEditor3: ["wm.NumberEditor", {"caption":"Peso","height":"26px","readonly":true,"formField":"peso","display":"Select","width":"150%"}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"dataValue","dataField":"name","required":true,"lookupDisplay":"Number","startUpdate":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"pesos","expression":undefined}, {}]
															}],
															format: ["wm.NumberFormatter", {}, {}]
														}]
													}],
													ejeIdEjeEditor1: ["wm.Editor", {"caption":"Eje (Primer eje curricular)","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"ejeIdEje"}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"ejeTematico","dataField":"idEje","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaEjes","expression":undefined}, {}]
															}]
														}]
													}],
													eje2IdEjeEditor1: ["wm.Editor", {"caption":"Eje (Segundo eje curricular)","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"eje2IdEje"}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"ejeTematico","dataField":"idEje"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaEjes","expression":undefined}, {}]
															}]
														}]
													}],
													eje3IdEjeEditor1: ["wm.Editor", {"caption":"Eje (Tercer eje curricular)","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"eje3IdEje"}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"ejeTematico","dataField":"idEje"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaEjes","expression":undefined}, {}]
															}]
														}]
													}],
													relatedEditor5: ["wm.RelatedEditor", {"formField":"nivelEsperado","height":"28px","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.nivelEsperado","expression":undefined}, {}],
															wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"nivelEsperadoLookup1.selectedItem","expression":undefined}, {}]
														}],
														nivelEsperadoLookup1: ["wm.Editor", {"caption":"Nivel Esperado","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
															editor: ["wm._LookupEditor", {"required":true,"displayField":"nivelEsperado"}, {}]
														}]
													}],
													dimensionComprensionRelatedEditor1: ["wm.RelatedEditor", {"formField":"dimensionComprension"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.dimensionComprension","expression":undefined}, {}],
															wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"dimensionComprensionLookup1.selectedItem","expression":undefined}, {}]
														}],
														dimensionComprensionLookup1: ["wm.Editor", {"caption":"Dimensión de la comprensión","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
															editor: ["wm._LookupEditor", {"required":true,"displayField":"dimensionComprension","autoDataSet":false,"startUpdate":false}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaDimension_comprension","expression":undefined}, {}]
																}]
															}]
														}]
													}],
													dimensionCurricularRelatedEditor1: ["wm.RelatedEditor", {"formField":"dimensionCurricular"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.dimensionCurricular","expression":undefined}, {}],
															wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"dimensionCurricularLookup1.selectedItem","expression":undefined}, {}]
														}],
														dimensionCurricularLookup1: ["wm.Editor", {"caption":"Dimensión curricular","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
															editor: ["wm._LookupEditor", {"required":true,"displayField":"dimensionCurricular","autoDataSet":false,"startUpdate":false}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaDimension_curricular","expression":undefined}, {}]
																}]
															}]
														}]
													}],
													relatedEditor2: ["wm.RelatedEditor", {"formField":"inteligencia","height":"28px","fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cur_apr_datag_aprendizajeDataGrid1.selectedItem.inteligencia","expression":undefined}, {}],
															wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"inteligenciaLookup1.selectedItem","expression":undefined}, {}]
														}],
														inteligenciaLookup1: ["wm.Editor", {"caption":"Inteligencia","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":""}, {}, {
															editor: ["wm._LookupEditor", {"required":true,"displayField":"inteligencia","autoDataSet":false,"startUpdate":false}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_cur_formularios_aprendizajes_listaInteligencias","expression":undefined}, {}]
																}]
															}]
														}]
													}],
													editPanel1: ["wm.EditPanel", {"liveForm":"aprendizajeLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1"}, {}, {
														savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
															saveButton1: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
																}]
															}],
															cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
														}],
														operationPanel1: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
															newButton1: ["wm.RoundedButton", {"caption":"Nuevo Aprendizaje","width":"180px","height":"100%"}, {"onclick":"editPanel1.beginDataInsert"}],
															updateButton1: ["wm.RoundedButton", {"caption":"Actualizar","width":"150px","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataUpdate"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
																}]
															}],
															deleteButton1: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel1.deleteData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
																}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}],
								calificaciones: ["wm.Layer", {"caption":"Calificaciones","horizontalAlign":"left","verticalAlign":"top","roles":["6","8","9","10","7","25"],"borderColor":"#CD0000"}, {"onShow":"calificacionesShow"}, {
									calf_panel_encabezado_principal: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"48px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true}, {}, {
										textEditor6: ["wm.TextEditor", {"width":"308px","caption":"idTipoPersona","showing":false}, {}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataValue","source":"a_getTipoPersona.usuario"}, {}]
											}],
											editor: ["wm._TextEditor", {}, {}]
										}],
										button39: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"42px","width":"107px","caption":"Actividades","borderColor":"#4D90FE","margin":"0","disabled":true,"roles":["4","10","11","22","21","20","23","24","5","6","18","19","9"]}, {"onclick":"button39Click"}],
										spacer13: ["wm.Spacer", {"height":"52px","width":"2px"}, {}],
										l_calif_alumnos_panel1_butt_promocion: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"42px","width":"150px","caption":"Promoción","borderColor":"#CD3333","margin":"0","iconUrl":"resources/images/ico/prom32x32.png","iconMargin":"0 0px 0 0","roles":["6","9","10","13","7","11","25"]}, {"onclick":"l_calif_alumnos_panel1_butt_promocionClick"}],
										spacer12: ["wm.Spacer", {"height":"48px","width":"15px"}, {}],
										l_calif_alumnos_panel1_butt_cambiarPanel: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_Black","wm_Border_BottomStyleCurved4px","wm_FontSizePx_14px","wm_Border_TopStyleCurved4px"]},"height":"42px","width":"153px","caption":"Aprendizajes","borderColor":"#D14836","margin":"0","iconUrl":"resources/images/ico/canvas_holder.png","iconWidth":"30px","iconMargin":"0 0px 0 0","roles":["10","11","4","5","6","9","18","19","20","22","21","23","24"]}, {"onclick":"l_calif_alumnos_panel1_butt_cambiarPanelClick"}],
										button12: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_Black","wm_FontSizePx_14px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"42px","width":"153px","caption":"Estudiantes","borderColor":"#3C9300","margin":"0","iconUrl":"resources/images/ico/user-comment.png","iconMargin":"0 0px 0 0","roles":["4","5","6","9","10","11","20","21","22","23","24"]}, {"onclick":"button12Click"}],
										spacer9: ["wm.Spacer", {"height":"48px","width":"3px"}, {}]
									}],
									calf_panel_encabezado_opciones: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_LightBlue","wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"45px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true}, {}, {
										calif_encabezado_opciones_sel_sy: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"width":"240px","caption":"Año escolar","height":"26px","captionSize":"100%"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","required":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
												}]
											}]
										}],
										calif_encabezado_opciones_sel_grado: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"width":"200px","caption":"Grado","height":"26px","captionSize":"70%"}, {"onchange":"calif_encabezado_opciones_sel_gradoChange"}, {
											editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado","required":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
												}]
											}]
										}],
										calif_encabezado_opciones_sel_curso: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_FontSizePx_16px"],"domNode":["wm_FontSizePx_16px"]},"width":"200px","caption":"Curso","height":"26px","disabled":true,"captionSize":"70%"}, {"onchange":"calif_encabezado_opciones_sel_cursoChange"}, {
											editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso","required":true}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_encabezado_opciones_listaCursos","expression":undefined}, {}]
												}]
											}]
										}],
										calif_encabezado_opciones_butt_limpiar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"43px","width":"48px","caption":"","borderColor":"#FFCC00","iconUrl":"resources/images/ico/trash-can.png","iconMargin":"0 0px 0 0"}, {"onclick":"calif_encabezado_opciones_butt_limpiarClick"}],
										calif_encabezado_opciones_butt_reporte: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"43px","width":"48px","borderColor":"#474747","iconUrl":"resources/images/ico/download.png","iconMargin":"5 10px 0 0","disabled":true}, {"onclick":"calif_encabezado_opciones_butt_reporteClick"}],
										calif_encabezado_opciones_butt_limpiar1: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_24px"]},"height":"43px","width":"48px","caption":"☝","iconMargin":"0 0px 0 0","showing":false,"roles":["6","7","9","10","13"]}, {"onclick":"calif_encabezado_opciones_butt_limpiar1Click"}],
										spacer4: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
										l_calif_alumnos_butt_ocultar: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_Black","wm_Border_BottomStyleCurved4px","wm_FontSizePx_14px","wm_Border_TopStyleCurved4px"]},"height":"35px","width":"100px","caption":"Ocultar","borderColor":"#D9D9D9","margin":"0","iconUrl":"resources/images/buttons/left.png","iconWidth":"30px","iconMargin":"0 0px 0 0","iconHeight":"20px"}, {"onclick":"l_calif_alumnos_butt_ocultarClick"}],
										l_calif_alumnos_butt_mostrar: ["wm.Button", {"_classes":{"domNode":["wm_FontColor_Black","wm_Border_BottomStyleCurved4px","wm_FontSizePx_14px","wm_Border_TopStyleCurved4px"]},"height":"35px","width":"100px","caption":"Mostrar","borderColor":"#D9D9D9","margin":"0","iconUrl":"resources/images/buttons/right.png","iconWidth":"30px","iconMargin":"0 0px 0 0","iconHeight":"20px"}, {"onclick":"l_calif_alumnos_butt_mostrarClick"}],
										button1: ["wm.Button", {"height":"48px","width":"96px","showing":false}, {"onclick":"button1Click"}],
										spacer8: ["wm.Spacer", {"height":"48px","width":"3px"}, {}]
									}],
									calif_panel_contenedor_aprendizaje: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"borderColor":"#ffffff"}, {}, {
										calif_contendor_layer_principal: ["wm.Layers", {}, {}, {
											calif_contendor_sublayer_principal: ["wm.Layer", {"caption":"layer20","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												calif_contendor_panel1: ["wm.Panel", {"height":"50%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","borderColor":"#fffff"}, {}, {
													calif_asig_datag_asignaturasDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","width":"495px","borderColor":"#000000"}, {"onSelected":"calif_asig_datag_asignaturasDataGrid1Selected","onDeselected":"calif_asig_datag_asignaturasDataGrid1Deselected"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_contenedor_tablas_asignaturas_docentes","expression":undefined}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"●","field":"id.asignaturaIdAsignatura","columnWidth":"80px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Asignatura","field":"id.asignatura","columnWidth":"120%","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Docente","field":"id.nombreLdap","columnWidth":"85px","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													tablaUnidades: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_Unidades","expression":undefined}, {}]
														}],
														unidad1: ["wm.DataGridColumn", {"caption":"Unidad","field":"unidad","columnWidth":"213px","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idUnidad1: ["wm.DataGridColumn", {"caption":"ID Unidad","field":"idUnidad","columnWidth":"58px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Numero Unidad","field":"numeroUnidad","columnWidth":"65px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													tablaSubtopicos: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_Subtopicos","expression":undefined}, {}]
														}],
														subtopico1: ["wm.DataGridColumn", {"caption":"Subtopico","field":"subtopico","columnWidth":"259px","index":6}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"ID Subtopico","field":"idSubtopico","columnWidth":"76px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													splitter2: ["wm.Splitter", {"height":"100%","width":"4px","border":"0"}, {}],
													calif_asig_datag_aprendizajesDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#000000"}, {"onSelected":"calif_asig_datag_aprendizajesDataGrid1Selected","onSelectionChanged":"calif_asig_datag_aprendizajesDataGrid1SelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_contenedor_tablas_aprendizajes","expression":undefined}, {}]
														}],
														idAprendizaje1: ["wm.DataGridColumn", {"caption":"•","field":"id.idAprendizaje","columnWidth":"55px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														aprendizaje1: ["wm.DataGridColumn", {"caption":"Aprendizaje","field":"id.aprendizaje","columnWidth":"150%","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Learning","field":"id.learning","columnWidth":"150%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"Unidad","field":"id.unidad","columnWidth":"100%","index":5}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Subtopico","field":"id.subtopico","columnWidth":"100%","index":7}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"Fecha esperada","field":"id.fechaEsperada","columnWidth":"52%","index":3,"display":"Date"}, {}, {
															format: ["wm.DateFormatter", {}, {}]
														}],
														column5: ["wm.DataGridColumn", {"caption":"N° Unidad","field":"id.numeroUnidad","columnWidth":"65px","index":4,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														column6: ["wm.DataGridColumn", {"caption":"N° Subtópico","field":"id.numeroSubtopico","columnWidth":"78px","index":6,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}]
													}]
												}],
												splitter1: ["wm.Splitter", {"height":"4px","width":"100%","border":"0"}, {}],
												calif_contenedor_panel1: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"5%","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
													mensaje_parpadeante: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","horizontalAlign":"left","width":"55%","verticalAlign":"top","lock":true,"showing":false}, {}, {
														label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"Importante: Seleccione un <u>Aprendizaje</u> y <u>Estudiante</u> para ver los detalles de calificaciones.","height":"100%","width":"100%","border":"0","singleLine":false}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													calif_contenedor1_spacer1: ["wm.Spacer", {"height":"100%","width":"37px"}, {}],
													calif_contenedor_tex_cadena: ["wm.TextEditor", {"_classes":{"domNode":["wm_TextDecoration_Bold","wm_FontSizePx_16px"]},"width":"100%","height":"100%","captionPosition":"right","readonly":true}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}]
												}],
												calif_contenedor_panel_datagrids: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","borderColor":"#ffffff"}, {}, {
													calif_contenedor_datagrids_layer_principal: ["wm.Layers", {"padding":"5"}, {}, {
														calif_contenedor_datagrids_sublayer: ["wm.Layer", {"caption":"layer13","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															calif_contenedor_panel_encabezado: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_20px"]},"height":"35px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
																calif_contenedor_lab_alumnos: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_TextDecoration_Bold","wm_FontColor_White"]},"caption":"ALUMNOS","height":"100%","width":"124px","border":"0"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																calif_contenedor_spacer_alumnos: ["wm.Spacer", {"height":"100%","width":"70%"}, {}],
																calif_contenedor_sel_Genero: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_FontFamily_Geneva","wm_FontColor_White"],"domNode":["wm_FontSizePx_16px"]},"width":"150%","caption":"GENERO"}, {"onchange":"l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso"}, {
																	editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Masculino, Femenino"}, {}, {
																		optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
																	}]
																}],
																calif_contenedor_img_limpiar: ["wm.Picture", {"height":"27px","border":"0","width":"39px","source":"resources/images/ico/dialog-close.png","hint":"Restaurar todos los alumnos del curso"}, {"onclick":"calif_contenedor_img_limpiarClick"}]
															}],
															calif_alumnos_curso_datag_alumnosDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"1","borderColor":"#404040"}, {"onSelected":"calif_alumnos_curso_datag_alumnosDataGrid1Selected","onSelectionChanged":"calif_alumnos_curso_datag_alumnosDataGrid1SelectionChanged"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_contendor_tablas_Vista_Insc_Alumn_Asig_Curso","expression":undefined}, {}]
																}],
																column1: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","columnWidth":"100%","index":3,"dataExpression":"${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column2: ["wm.DataGridColumn", {"caption":"●","field":"id.sexo","columnWidth":"52px","dataExpression":"if(${id.sexo}==\"Masculino\") {'<img src=\"resources/images/ico/Male.png\" height=\"28\" width=\"28\" /><center>'}  if(${id.sexo}==\"Femenino\") {'<img src=\"resources/images/ico/Female.png\" height=\"28\" width=\"28\" /><center>'}"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column3: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","columnWidth":"100%","index":2,"dataExpression":"${id.apellido1}+\" \"+${id.apellido2}"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column4: ["wm.DataGridColumn", {"caption":"Curso","field":"id.curso","columnWidth":"100px","index":4}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																column5: ["wm.DataGridColumn", {"caption":"ID Persona","field":"id.personaIdPersona","columnWidth":"82px","index":1}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}]
														}]
													}],
													splitter4: ["wm.Splitter", {"height":"100%","width":"4px","border":"0"}, {}],
													spacer10: ["wm.Spacer", {"height":"48px","width":"1px"}, {}],
													layers2: ["wm.Layers", {}, {}, {
														layer12: ["wm.Layer", {"caption":"layer12","horizontalAlign":"left","verticalAlign":"top"}, {}, {
															calif_contenedor_panel_encabezado2: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_Green"]},"height":"35px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
																label4: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_TextDecoration_Bold","wm_FontColor_White"]},"caption":"DETALLES DE CALIFICACIONES","height":"100%","width":"231%","border":"0"}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}]
															}],
															panel36: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_FontSizePx_12px"]},"height":"262px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																liveForm1: ["wm.LiveForm", {"height":"256px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"fitToContentHeight":true}, {"onBeginInsert":"liveForm1BeginInsert","onSuccess":"alumnoCALIFICACIONES"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"calificaciones.selectedItem","expression":undefined}, {}],
																		wire1: ["wm.Wire", {"targetProperty":"dataOutput.inscAlumCurso","source":"inscAlumCursoRelatedEditor1.dataOutput","expression":undefined}, {}]
																	}],
																	panel39: ["wm.Panel", {"height":"31px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		idInscAlumAprendizajeEditor1: ["wm.Editor", {"caption":"ID","width":"113px","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumAprendizaje"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}],
																		fechaIngresoEditor1: ["wm.Editor", {"caption":"Fecha Ingreso:","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaIngreso","disabled":true,"showing":false}, {}, {
																			editor: ["wm._DateEditor", {}, {}]
																		}],
																		calificacionEditor1: ["wm.Editor", {"caption":"Calificación:","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"calificacion"}, {}, {
																			editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"En Progreso, Competente, Avanzado, Magistral"}, {}, {
																				optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
																			}]
																		}],
																		fechaLogroEditor1: ["wm.Editor", {"caption":"Fecha Logro:","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaLogro"}, {}, {
																			editor: ["wm._DateEditor", {}, {}]
																		}]
																	}],
																	idSyEditor1: ["wm.Editor", {"caption":"IdSy","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idSy","disabled":true,"showing":false}, {}, {
																		editor: ["wm._NumberEditor", {}, {}]
																	}],
																	calificacionNumEditor1: ["wm.Editor", {"caption":"CalificacionNum","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"calificacionNum","disabled":true,"showing":false}, {}, {
																		editor: ["wm._NumberEditor", {}, {}]
																	}],
																	comentarioEditor1: ["wm.Editor", {"caption":"Comentario:","width":"100%","height":"105px","display":"TextArea","readonly":true,"formField":"comentario","captionAlign":"left","captionPosition":"top"}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	personaIdPersonaEditor1: ["wm.Editor", {"caption":"ID PERSONA:","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"personaIdPersona","disabled":true}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	aprendizajeIdAprendizajeEditor1: ["wm.Editor", {"caption":"ID APRENDIZAJE","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"aprendizajeIdAprendizaje","disabled":true}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	periodoIdPeriodoEditor1: ["wm.Editor", {"caption":"PeriodoIdPeriodo","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"periodoIdPeriodo","disabled":true,"showing":false}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	inscAlumCursoRelatedEditor1: ["wm.RelatedEditor", {"formField":"inscAlumCurso"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"calificaciones.selectedItem.inscAlumCurso","expression":undefined}, {}],
																			wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"inscAlumCursoLookup2.selectedItem","expression":undefined}, {}]
																		}],
																		inscAlumCursoLookup1: ["wm.Editor", {"caption":"ID ALUMNO*CURSO:","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumCurso"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}]
																	}],
																	editPanel8: ["wm.EditPanel", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_FontSizePx_10px"]},"liveForm":"liveForm1","savePanel":"savePanel8","operationPanel":"operationPanel8"}, {}, {
																		savePanel8: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																			saveButton8: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel8.saveData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel8.formInvalid","expression":undefined}, {}]
																				}]
																			}],
																			cancelButton8: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel8.cancelEdit"}]
																		}],
																		operationPanel8: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			newButton8: ["wm.RoundedButton", {"caption":"Ingresar Calificacion","width":"160px","height":"100%"}, {"onclick":"editPanel8.beginDataInsert"}],
																			updateButton8: ["wm.RoundedButton", {"caption":"Actualizar Calificación","width":"170px","height":"100%","disabled":true}, {"onclick":"editPanel8.beginDataUpdate"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel8.formUneditable","expression":undefined}, {}]
																				}]
																			}],
																			deleteButton8: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel8.deleteData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel8.formUneditable","expression":undefined}, {}]
																				}]
																			}]
																		}]
																	}]
																}]
															}],
															dataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"border":"1","borderColor":"#000000"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_contenedor_tablas_calificacion_final","expression":undefined}, {}]
																}],
																fechaLogro1: ["wm.DataGridColumn", {"caption":"Fecha Logro","field":"id.fechaLogro","index":1,"display":"Date"}, {}, {
																	format: ["wm.DateFormatter", {}, {}]
																}],
																calificacion1: ["wm.DataGridColumn", {"caption":"Calificación","field":"id.calificacion","columnWidth":"120%","index":3}, {}, {
																	format: ["wm.DataFormatter", {}, {}]
																}],
																calificacionNum1: ["wm.DataGridColumn", {"caption":"Equivalencia numerica","field":"id.calificacionNum","columnWidth":"120%","index":4,"display":"Number"}, {}, {
																	format: ["wm.NumberFormatter", {"digits":2}, {}]
																}]
															}],
															splitter3: ["wm.Splitter", {"height":"4px","width":"100%","border":"0"}, {}],
															inscalumaprendizajeLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left","height":"519%"}, {}, {
																inscalumaprendizajeGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_Border_DropShadow","wm_BackgroundColor_Green"]},"horizontalAlign":"left","verticalAlign":"top","title":"CALIFICACIONES DEL APRENDIZAJE","captionClasses":"wm_Border_DropShadow wm_BackgroundColor_Green wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0","height":"237px"}, {}, {
																	inscalumaprendizajeDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {"onSelected":"inscalumaprendizajeDataGrid1Selected","onRowDblClick":"inscalumaprendizajeDataGrid1RowDblClick"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_contenedor_tablas_inscalumaprendizajeLiveVariable2","expression":undefined}, {}]
																		}],
																		idInscAlumAprendizaje1: ["wm.DataGridColumn", {"caption":"•","field":"idInscAlumAprendizaje","columnWidth":"100px"}, {}, {
																			format: ["wm.DataFormatter", {}, {}]
																		}],
																		fechaLogro1: ["wm.DataGridColumn", {"caption":"Fecha Logro","field":"fechaLogro","columnWidth":"97px","index":2,"display":"Date","autoSize":undefined}, {}, {
																			format: ["wm.DateFormatter", {}, {}]
																		}],
																		calificacion1: ["wm.DataGridColumn", {"caption":"Calificación","field":"calificacion","columnWidth":"87px","index":3,"autoSize":undefined}, {}, {
																			format: ["wm.DataFormatter", {}, {}]
																		}],
																		comentario1: ["wm.DataGridColumn", {"caption":"Comentario","field":"comentario","columnWidth":"150%","index":5}, {}, {
																			format: ["wm.DataFormatter", {}, {}]
																		}],
																		fechaIngreso1: ["wm.DataGridColumn", {"caption":"Fecha Ingreso","field":"fechaIngreso","columnWidth":"60%","index":6,"display":"Date"}, {}, {
																			format: ["wm.DateFormatter", {}, {}]
																		}]
																	}]
																}],
																splitter7: ["wm.Splitter", {"height":"4px","width":"100%","border":"0"}, {}],
																inscalumaprendizajeDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_Border_DropShadow","wm_BackgroundColor_Green"]},"horizontalAlign":"left","verticalAlign":"top","title":"MODIFICAR CALIFICACIÓN","captionClasses":"wm_Border_DropShadow wm_BackgroundColor_Green wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0"}, {}, {
																	inscalumaprendizajeLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_14px"]},"height":"290%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onBeginInsert":"inscalumaprendizajeLiveForm1BeginInsert","onBeginUpdate":"inscalumaprendizajeLiveForm1BeginUpdate","onSuccess":"inscalumaprendizajeLiveForm1Success","onDeleteData":"inscalumaprendizajeLiveForm1DeleteData","onCancelEdit":"inscalumaprendizajeLiveForm1CancelEdit"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid1.selectedItem","expression":undefined}, {}],
																			wire1: ["wm.Wire", {"targetProperty":"dataOutput.aprendizaje","source":"aprendizajeRelatedEditor1.dataOutput","expression":undefined}, {}],
																			wire2: ["wm.Wire", {"targetProperty":"dataOutput.inscAlumCurso","source":"inscAlumCursoRelatedEditor2.dataOutput","expression":undefined}, {}],
																			wire3: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor1.dataOutput","expression":undefined}, {}]
																		}],
																		panel40: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"34px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			idInscAlumAprendizajeEditor2: ["wm.Editor", {"caption":"ID","width":"153px","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumAprendizaje"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}],
																			fechaIngresoEditor2: ["wm.Editor", {"caption":"Fecha Ingreso","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaIngreso","disabled":true}, {}, {
																				editor: ["wm._DateEditor", {}, {}]
																			}],
																			fechaLogroEditor2: ["wm.Editor", {"caption":"Fecha Logro","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaLogro"}, {}, {
																				editor: ["wm._DateEditor", {}, {}]
																			}]
																		}],
																		panel22: ["wm.Panel", {"height":"32px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			calificacionEditor2: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"Calificación","width":"150%","height":"26px","display":"Select","readonly":true,"formField":"calificacion"}, {"onchange":"calificacionEditor2Change"}, {
																				editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true,"options":"En Progreso, Competente, Avanzado, Magistral"}, {}, {
																					optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
																				}]
																			}],
																			label33: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_BackgroundColor_VeryLightGray"]},"caption":"»»","height":"26px","width":"37px","border":"0"}, {}, {
																				format: ["wm.DataFormatter", {}, {}]
																			}],
																			calificacionNumEditor2: ["wm.Editor", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_BackgroundColor_VeryLightGray"],"captionNode":["wm_FontColor_LightBlue","wm_BackgroundColor_VeryLightGray"]},"width":"100%","height":"26px","readonly":true,"formField":"calificacionNum","disabled":true}, {}, {
																				editor: ["wm._TextEditor", {"required":true}, {}]
																			}]
																		}],
																		comentarioEditor2: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"caption":"Comentario","width":"100%","height":"110px","display":"TextArea","readonly":true,"formField":"comentario","captionAlign":"left","captionPosition":"top"}, {}, {
																			editor: ["wm._TextAreaEditor", {}, {}]
																		}],
																		panel8: ["wm.Panel", {"height":"35px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			aprendizajeRelatedEditor1: ["wm.RelatedEditor", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px"]},"formField":"aprendizaje"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid1.selectedItem.aprendizaje","expression":undefined}, {}],
																					wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"aprendizajeLookup2.selectedItem","expression":undefined}, {}]
																				}],
																				aprendizajeLookup1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_LightGray","wm_Border_TopStyleCurved4px"]},"caption":"ID Aprendizaje","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idAprendizaje"}, {}, {
																					editor: ["wm._NumberEditor", {"required":true}, {}]
																				}]
																			}],
																			personaRelatedEditor1: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid1.selectedItem.persona","expression":undefined}, {}],
																					wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"personaLookup2.selectedItem","expression":undefined}, {}]
																				}],
																				personaLookup1: ["wm.Editor", {"_classes":{"domNode":["wm_Border_BottomStyleCurved4px","wm_BackgroundColor_LightGray"]},"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
																					editor: ["wm._NumberEditor", {"required":true}, {}]
																				}],
																				label32: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"Apreciado Visitante: Realice con éxito la consulta de calificaciónes <b><u>siguiendo  paso a paso el proceso.","height":"24px","width":"855px","border":"0"}, {}, {
																					format: ["wm.DataFormatter", {}, {}]
																				}]
																			}]
																		}],
																		aprendizajeaux: ["wm.TextEditor", {"width":"309px","caption":"aprendizaje","display":"Number","showing":false}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}],
																		personaaux: ["wm.TextEditor", {"width":"294px","caption":"persona","display":"Number","showing":false}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}],
																		editPanel9: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"liveForm":"inscalumaprendizajeLiveForm1","savePanel":"savePanel9","operationPanel":"operationPanel9","lock":false}, {}, {
																			savePanel9: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																				saveButton9: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel9.saveData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel9.formInvalid","expression":undefined}, {}]
																					}]
																				}],
																				cancelButton9: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel9.cancelEdit"}]
																			}],
																			operationPanel9: ["wm.Panel", {"height":"40px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																				newButton9: ["wm.RoundedButton", {"caption":"Nueva Calificación","width":"201px","height":"100%"}, {"onclick":"editPanel9.beginDataInsert"}],
																				updateButton9: ["wm.RoundedButton", {"caption":"Actualizar","width":"120px","height":"100%","disabled":true}, {"onclick":"editPanel9.beginDataUpdate"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel9.formUneditable","expression":undefined}, {}]
																					}]
																				}],
																				deleteButton9: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel9.deleteData"}, {
																					binding: ["wm.Binding", {}, {}, {
																						wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel9.formUneditable","expression":undefined}, {}]
																					}]
																				}]
																			}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}]
										}]
									}],
									actividades: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
										panel72: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
											layers18: ["wm.Layers", {"border":"2","borderColor":"#000000"}, {}, {
												layer41: ["wm.Layer", {"caption":"layer41","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													panel42: ["wm.Panel", {"height":"90px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														layers19: ["wm.Layers", {}, {}, {
															layer42: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"layer42","horizontalAlign":"left","verticalAlign":"bottom"}, {}, {
																selectEditor17: ["wm.SelectEditor", {"width":"353px","caption":"GRADO"}, {"onchange":"selectEditor17Change"}, {
																	editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"gradoslista","expression":undefined}, {}]
																		}]
																	}]
																}],
																selectEditor18: ["wm.SelectEditor", {"width":"353px","caption":"CURSO"}, {}, {
																	editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"dataSet","source":"cursoslv1","expression":undefined}, {}]
																		}]
																	}]
																}],
																panel73: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	selectEditor19: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"width":"353px","caption":"AÑO ESCOLAR"}, {}, {
																		editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}]
																	}],
																	button10: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"34px","width":"96px","caption":"Buscar"}, {"onclick":"button10Click"}],
																	button36: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"34px","width":"96px","caption":"Limpiar"}, {"onclick":"button36Click"}]
																}]
															}]
														}]
													}],
													actAsignaturas: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"border":"2","height":"450px","borderColor":"#000000"}, {"onSelected":"ACTIVIDADESLV3"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"asignaturaLV1","expression":undefined}, {}]
														}],
														idAsignatura1: ["wm.DataGridColumn", {"caption":"●","field":"idAsignatura","columnWidth":"78px","index":10}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														asignatura2: ["wm.DataGridColumn", {"caption":"Asignatura","field":"asignatura","columnWidth":"100%","index":11}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													dataGrid5: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"border":"2","borderColor":"#000000"}, {"onSelected":"inscalumactividadLiveVariable1"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ACTIVIDADESLV3","expression":undefined}, {}]
														}],
														fecha1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","columnWidth":"98px","index":2,"display":"Date"}, {}, {
															format: ["wm.DateFormatter", {}, {}]
														}],
														actividad1: ["wm.DataGridColumn", {"caption":"Actividad","field":"actividad","columnWidth":"100%","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idActividad1: ["wm.DataGridColumn", {"caption":"●","field":"idActividad","columnWidth":"68px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													inscalumactividadLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
														inscalumactividadDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"FORMULARIO INSCRIPCION ACTIVIDADES","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","height":"148%"}, {}, {
															inscalumactividadLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_16px"]},"height":"198%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"inscalumactividadLiveVariable1","onBeginInsert":"inscalumactividadLiveForm1BeginInsert","onCancelEdit":"inscalumactividadLiveVariable1"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumactividadDataGrid1.selectedItem","expression":undefined}, {}],
																	wire1: ["wm.Wire", {"targetProperty":"dataOutput.actividad","source":"actividadRelatedEditor1.dataOutput","expression":undefined}, {}],
																	wire2: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor3.dataOutput","expression":undefined}, {}]
																}],
																idInscAlumActividadEditor1: ["wm.Editor", {"caption":"ID Actividad","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumActividad"}, {}, {
																	editor: ["wm._NumberEditor", {"required":true}, {}]
																}],
																logradoEditor2: ["wm.Editor", {"caption":"Logrado","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"logrado","displayValue":true,"emptyValue":"false"}, {}, {
																	editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																}],
																fechaEditor3: ["wm.Editor", {"caption":"Fecha","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fecha"}, {}, {
																	editor: ["wm._DateEditor", {}, {}]
																}],
																comentarioEditor4: ["wm.Editor", {"caption":"Comentario","width":"100%","height":"74px","display":"TextArea","readonly":true,"formField":"comentario"}, {}, {
																	editor: ["wm._TextAreaEditor", {}, {}]
																}],
																actividadRelatedEditor1: ["wm.RelatedEditor", {"formField":"actividad"}, {}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumactividadDataGrid1.selectedItem.actividad","expression":undefined}, {}]
																	}],
																	actividadLookup1: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_LightGray"]},"caption":"ID Actividad","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idActividad"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}]
																}],
																personaRelatedEditor3: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumactividadDataGrid1.selectedItem.persona","expression":undefined}, {}]
																	}],
																	personaLookup4: ["wm.Editor", {"_classes":{"domNode":["wm_BackgroundColor_LightGray"]},"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}]
																}],
																editPanel12: ["wm.EditPanel", {"liveForm":"inscalumactividadLiveForm1","savePanel":"savePanel12","operationPanel":"operationPanel12","lock":false,"verticalAlign":"middle","height":"43px"}, {}, {
																	savePanel12: ["wm.Panel", {"height":"43px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
																		calificaTodos: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_BackgroundChromeBar_LightGray","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"43px","width":"184px","caption":"Calificar a todos","borderColor":"#CD0000","margin":"2","iconUrl":"resources/images/ico/todos.png","iconMargin":"0 0px 0 0"}, {"onclick":"calificaTodosClick"}],
																		spacer11: ["wm.Spacer", {"height":"48px","width":"171px"}, {}],
																		saveButton12: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel12.saveData"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel12.formInvalid","expression":undefined}, {}]
																			}]
																		}],
																		cancelButton12: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel12.cancelEdit"}]
																	}],
																	operationPanel12: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true}, {}, {
																		newButton12: ["wm.RoundedButton", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"Calificar","width":"100px","height":"100%"}, {"onclick":"editPanel12.beginDataInsert"}],
																		updateButton12: ["wm.RoundedButton", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"Actualizar","width":"112px","height":"100%","disabled":true}, {"onclick":"editPanel12.beginDataUpdate"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel12.formUneditable","expression":undefined}, {}]
																			}]
																		}],
																		deleteButton12: ["wm.RoundedButton", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel12.deleteData"}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel12.formUneditable","expression":undefined}, {}]
																			}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}],
											spacer35: ["wm.Spacer", {"height":"48px","width":"12px"}, {}],
											layers17: ["wm.Layers", {"border":"2","borderColor":"#000000"}, {}, {
												layer40: ["wm.Layer", {"caption":"layer40","horizontalAlign":"left","verticalAlign":"top"}, {}, {
													panel58: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"47px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
														button40: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px","wm_Border_DropShadow","wm_FontSizePx_16px"]},"height":"100%","width":"126px","caption":"Calificaciones"}, {"onclick":"button40Click"}]
													}],
													spacer34: ["wm.Spacer", {"height":"41px","width":"98px"}, {}],
													actAlumnos: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"border":"2","height":"450px","borderColor":"#000000"}, {"onSelected":"inscalumactividadLiveVariable1"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"INSALUCUR","expression":undefined}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"●","field":"persona.idPersona","columnWidth":"72px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"Nombres","field":"persona.nombre1","columnWidth":"100%","index":2,"dataExpression":"${persona.nombre1}+\" \"+${persona.nombre2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Apellidos","field":"persona.apellido1","columnWidth":"100%","index":1,"dataExpression":"${persona.apellido1}+\" \"+${persona.apellido2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"Año escolar","field":"sy.schoolYear","columnWidth":"110px","index":3}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													panel76: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"34px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
														picture9: ["wm.Picture", {"height":"27px","border":"0","width":"32px","source":"resources/images/ico/dialog-close.png","hint":"Ver todas las calificaciones"}, {"onclick":"picture9Click"}]
													}],
													inscalumactividadGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"TABLA INSCRIPCION DE ACTIVIDADES","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","border":"3,3,3,3"}, {}, {
														inscalumactividadDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumactividadLiveVariable1","expression":undefined}, {}]
															}],
															logrado1: ["wm.DataGridColumn", {"caption":"Logrado","field":"logrado","columnWidth":"63px","index":2,"display":"Number","autoSize":undefined,"dataExpression":"if(${logrado}==\"1\") {'<img src=\"resources/images/ico/si.gif\" height=\"22\" width=\"22\" /><center>'}  if(${logrado}==\"0\") {'<img src=\"resources/images/ico/no.gif\" height=\"22\" width=\"22\" /><center>'}"}, {}, {
																format: ["wm.NumberFormatter", {}, {}]
															}],
															fecha1: ["wm.DataGridColumn", {"caption":"Fecha","field":"fecha","columnWidth":"113px","index":3,"display":"Date","autoSize":undefined}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															comentario1: ["wm.DataGridColumn", {"caption":"Comentario","field":"comentario","columnWidth":"100%","index":4}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column2: ["wm.DataGridColumn", {"caption":"Nombre","field":"persona.nombre1","columnWidth":"159px","index":1,"dataExpression":"${persona.nombre1}+\" \"+${persona.nombre2}"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column3: ["wm.DataGridColumn", {"caption":"Apellidos","field":"persona.apellido1","columnWidth":"159px","dataExpression":"${persona.apellido1}+ \" \"+${persona.apellido2}"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}],
									calif_panel_contenedor_alumnos: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
										layers7: ["wm.Layers", {}, {}, {
											layer21: ["wm.Layer", {"caption":"layer21","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												calif_alumnos_panel_panel1: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
													calif_alumnos_panel1_sel_sy: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"width":"248px","caption":"Año escolar","captionSize":"90%"}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
															}]
														}]
													}],
													calif_alumnos_panel1_sel_grado: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"width":"224px","caption":"Grado"}, {"onchange":"l_calif_alumnos_listaCursos"}, {
														editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
															}]
														}]
													}],
													calif_alumnos_panel1_sel_curso: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"width":"260px","caption":"Curso"}, {"onchange":"calif_alumnos_panel1_sel_cursoChange"}, {
														editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_listaCursos","expression":undefined}, {}]
															}]
														}]
													}],
													calif_alumnos_panel1_butt_limpiar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_16px","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"43px","width":"48px","caption":"","iconUrl":"resources/images/ico/trash-can.png","iconMargin":"0 0px 0 0"}, {"onclick":"calif_alumnos_panel1_butt_limpiarClick"}],
													calif_alumnos_panel1_spacer_spacer1: ["wm.Spacer", {"height":"48px","width":"100%"}, {}],
													calif_alumnos_panel1_butt_show: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"43px","width":"90px","caption":"Ocultar"}, {"onclick":"calif_alumnos_panel1_butt_showClick"}],
													calif_alumnos_panel1_butt_hide: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"43px","width":"90px","caption":"Mostrar","showing":false}, {"onclick":"calif_alumnos_panel1_butt_hideClick"}],
													spacer1: ["wm.Spacer", {"height":"48px","width":"2px"}, {}]
												}],
												calif_alumnos_panel_datagrids: ["wm.Panel", {"height":"402px","horizontalAlign":"left","width":"100%","verticalAlign":"top","border":"3","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
													calif_alumnos_datagrids_datag_alumnos_cursos: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"2","width":"500px","borderColor":"#000000"}, {"onSelected":"calif_alumnos_datagrids_datag_alumnos_cursosSelected","onSelectionChanged":"calif_alumnos_datagrids_datag_alumnos_cursosSelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_alumnosCursos","expression":undefined}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","columnWidth":"100%","index":3,"dataExpression":"${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column6: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","columnWidth":"100%","index":1,"dataExpression":"${id.apellido1}+\" \"+${id.apellido2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column8: ["wm.DataGridColumn", {"caption":"•","field":"id.idPersona","columnWidth":"64px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													splitter6: ["wm.Splitter", {"height":"100%","width":"4px","border":"0"}, {}],
													calif_alumnos_datagrids_datag_alumnos_asignaturas: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"2","borderColor":"#000000"}, {"onSelected":"l_calif_alumnos_aprendizajes","onSelectionChanged":"calif_alumnos_datagrids_datag_alumnos_asignaturasSelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_alumnos_asignaturas","expression":undefined}, {}]
														}],
														idInscAlumAsig1: ["wm.DataGridColumn", {"caption":"•","field":"id.idAsignatura","columnWidth":"81px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Asignatura","field":"id.asignatura","columnWidth":"250px","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Esperados","field":"id.esperados","columnWidth":"90px","index":3}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"Logrados","field":"id.logrados","columnWidth":"75px","index":4}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column5: ["wm.DataGridColumn", {"caption":"Porcentaje","field":"id.porcentaje","columnWidth":"90px","index":5,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {"round":true}, {}]
														}],
														column6: ["wm.DataGridColumn", {"caption":"Calif.Num","field":"id.calificacion","columnWidth":"84px","index":6}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column7: ["wm.DataGridColumn", {"caption":"Calificacion","field":"id.califChar","columnWidth":"96px","index":7}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													unidad: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"0","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"unidadlv","expression":undefined}, {}]
														}],
														numeroUnidad1: ["wm.DataGridColumn", {"caption":"Nº Unidad","field":"numeroUnidad","columnWidth":"82px","index":2,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														unidad1: ["wm.DataGridColumn", {"caption":"Unidad","field":"unidad","columnWidth":"241px","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														idUnidad1: ["wm.DataGridColumn", {"caption":"ID","field":"idUnidad"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}],
												aux13: ["wm.TextEditor", {"caption":"aux","showing":false,"disabled":true}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												panel50: ["wm.Panel", {"height":"349px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													subtopico: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"0","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"subtopicolv","expression":undefined}, {}]
														}],
														idSubtopico1: ["wm.DataGridColumn", {"caption":"ID","field":"idSubtopico","columnWidth":"88px","index":4}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														subtopico1: ["wm.DataGridColumn", {"caption":"Subtopico","field":"subtopico","columnWidth":"467px","index":6}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													calif_alumnos_datagrids_datag_aprendizajes_asignaturas: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"3","height":"345px","borderColor":"#000000"}, {"onSelectionChanged":"calif_alumnos_datagrids_datag_aprendizajes_asignaturasSelectionChanged","onSelected":"calif_alumnos_datagrids_datag_aprendizajes_asignaturasSelected"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_aprendizajes","expression":undefined}, {}]
														}],
														fechaEsperada1: ["wm.DataGridColumn", {"caption":"Fecha esperada","field":"id.fechaEsperada","columnWidth":"110px","index":3,"display":"Date"}, {}, {
															format: ["wm.DateFormatter", {}, {}]
														}],
														idAprendizaje1: ["wm.DataGridColumn", {"caption":"•","field":"id.idAprendizaje","columnWidth":"85px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														aprendizaje1: ["wm.DataGridColumn", {"caption":"Aprendizaje","field":"id.aprendizaje","columnWidth":"150%","index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Subtopico","field":"id.subtopico","columnWidth":"100%","index":5}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"Unidad","field":"id.unidad","columnWidth":"100%","index":7}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column4: ["wm.DataGridColumn", {"caption":"Learning","field":"id.learning","columnWidth":"150%","index":2}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column5: ["wm.DataGridColumn", {"caption":"No. Unidad","field":"id.numeroUnidad","columnWidth":"70px","index":6,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}],
														column6: ["wm.DataGridColumn", {"caption":"No. Subtopico","field":"id.numeroSubtopico","columnWidth":"70px","index":4,"display":"Number"}, {}, {
															format: ["wm.NumberFormatter", {}, {}]
														}]
													}]
												}],
												panel51: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													inscalumaprendizajeGridPanel1: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundChromeBar_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"CALIFICACION","captionClasses":"wm_BackgroundChromeBar_Blue wm_FontSizePx_16px wm_FontColor_White","margin":"0"}, {}, {
														inscalumaprendizajeDataGrid2: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_datagrids_inscalumaprendizajeLiveVariable1","expression":undefined}, {}]
															}],
															idInscAlumAprendizaje1: ["wm.DataGridColumn", {"caption":"•","field":"idInscAlumAprendizaje","columnWidth":"100px"}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															fechaLogro1: ["wm.DataGridColumn", {"caption":"Fecha Logro","field":"fechaLogro","columnWidth":"119px","index":1,"display":"Date"}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															calificacion1: ["wm.DataGridColumn", {"caption":"Calificacion","field":"calificacion","columnWidth":"100px","index":2}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															comentario1: ["wm.DataGridColumn", {"caption":"Comentario","field":"comentario","columnWidth":"100%","index":3}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}]
														}],
														calif_alumnos_datag_calificacionFinal: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"0"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_calif_alumnos_calificaciones_finales","expression":undefined}, {}]
															}],
															column2: ["wm.DataGridColumn", {"caption":"Calificación","field":"id.calificacion","columnWidth":"140px","index":1}, {}, {
																format: ["wm.DataFormatter", {}, {}]
															}],
															column3: ["wm.DataGridColumn", {"caption":"Fecha Logro","field":"id.fechaLogro","columnWidth":"122px","display":"Date"}, {}, {
																format: ["wm.DateFormatter", {}, {}]
															}],
															column1: ["wm.DataGridColumn", {"caption":"Calificación Númerica","field":"id.calificacionNum","columnWidth":"100%","index":2,"display":"Number"}, {}, {
																format: ["wm.NumberFormatter", {}, {}]
															}]
														}]
													}],
													inscalumaprendizajeDetailsPanel1: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundChromeBar_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"MODIFICAR CALIFICACION","captionClasses":"wm_BackgroundChromeBar_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"0"}, {}, {
														inscalumaprendizajeLiveForm2: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"inscalumaprendizajeLiveForm2Success","onBeginInsert":"inscalumaprendizajeLiveForm2BeginInsert","onCancelEdit":"inscalumaprendizajeLiveForm2CancelEdit","onBeginUpdate":"inscalumaprendizajeLiveForm2BeginUpdate"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid2.selectedItem","expression":undefined}, {}],
																wire1: ["wm.Wire", {"targetProperty":"dataOutput.aprendizaje","source":"aprendizajeRelatedEditor2.dataOutput","expression":undefined}, {}],
																wire2: ["wm.Wire", {"targetProperty":"dataOutput.inscAlumCurso","source":"inscAlumCursoRelatedEditor3.dataOutput","expression":undefined}, {}],
																wire3: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor2.dataOutput","expression":undefined}, {}]
															}],
															panel52: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"266px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																layers9: ["wm.Layers", {"_classes":{"domNode":["wm_FontSizePx_16px"]}}, {}, {
																	layer23: ["wm.Layer", {"caption":"layer23","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																		idInscAlumAprendizajeEditor3: ["wm.Editor", {"caption":"ID","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumAprendizaje"}, {}, {
																			editor: ["wm._NumberEditor", {"required":true}, {}]
																		}],
																		fechaIngresoEditor3: ["wm.Editor", {"caption":"Fecha Ingreso","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaIngreso","disabled":true}, {}, {
																			editor: ["wm._DateEditor", {}, {}]
																		}],
																		fechaLogroEditor3: ["wm.Editor", {"caption":"Fecha Logro","width":"100%","height":"26px","display":"Date","readonly":true,"formField":"fechaLogro"}, {}, {
																			editor: ["wm._DateEditor", {}, {}]
																		}],
																		calificacionEditor3: ["wm.Editor", {"caption":"Calificacion","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"calificacion"}, {"onchange":"calificacionEditor3Change"}, {
																			editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"En Progreso, Competente, Avanzado, Magistral"}, {}, {
																				optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
																			}]
																		}],
																		calificacionNumEditor3: ["wm.Editor", {"caption":"CalificacionNum","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"calificacionNum","disabled":true,"showing":false}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}],
																		calificacionNumEditor23: ["wm.TextEditor", {"width":"100%","caption":"Calificacion","display":"Number","disabled":true,"readonly":true,"formField":"calificacionNum"}, {}, {
																			editor: ["wm._NumberEditor", {}, {}]
																		}]
																	}]
																}],
																layers8: ["wm.Layers", {"_classes":{"domNode":["wm_FontSizePx_16px"]}}, {}, {
																	layer22: ["wm.Layer", {"caption":"layer22","horizontalAlign":"left","verticalAlign":"top"}, {}, {
																		comentarioEditor3: ["wm.Editor", {"caption":"Comentario","width":"100%","height":"132px","display":"TextArea","readonly":true,"formField":"comentario","captionAlign":"left","captionPosition":"top"}, {}, {
																			editor: ["wm._TextAreaEditor", {}, {}]
																		}],
																		aprendizajeRelatedEditor2: ["wm.RelatedEditor", {"formField":"aprendizaje","lock":true}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid2.selectedItem.aprendizaje","expression":undefined}, {}]
																			}],
																			aprendizajeLookup3: ["wm.Editor", {"caption":"ID Aprendizaje","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idAprendizaje"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}]
																		}],
																		personaRelatedEditor2: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumaprendizajeDataGrid2.selectedItem.persona","expression":undefined}, {}]
																			}],
																			personaLookup3: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}]
																		}]
																	}]
																}]
															}],
															panel105: ["wm.Panel", {"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
																aux199: ["wm.TextEditor", {"width":"100%","caption":"auxIDPersona"}, {}, {
																	editor: ["wm._TextEditor", {}, {}]
																}],
																aux200: ["wm.TextEditor", {"width":"100%","caption":"auxIDAprendizaje"}, {}, {
																	editor: ["wm._TextEditor", {}, {}]
																}]
															}],
															editPanel10: ["wm.EditPanel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"liveForm":"inscalumaprendizajeLiveForm2","savePanel":"savePanel10","operationPanel":"operationPanel10","lock":false}, {}, {
																savePanel10: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																	saveButton10: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel10.saveData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel10.formInvalid","expression":undefined}, {}]
																		}]
																	}],
																	cancelButton10: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel10.cancelEdit"}]
																}],
																operationPanel10: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	newButton10: ["wm.RoundedButton", {"caption":"Nueva Calificacion","width":"170px","height":"100%"}, {"onclick":"editPanel10.beginDataInsert"}],
																	updateButton10: ["wm.RoundedButton", {"caption":"Actualizar","width":"138px","height":"100%","disabled":true}, {"onclick":"editPanel10.beginDataUpdate"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel10.formUneditable","expression":undefined}, {}]
																		}]
																	}],
																	deleteButton10: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel10.deleteData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel10.formUneditable","expression":undefined}, {}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}]
										}]
									}],
									calif_panel_contenedor_promocion: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false,"roles":["6","7","10","9","11","13","25"]}, {}, {
										calif_panel_contenedor_top: ["wm.Layers", {}, {}, {
											calif_layer_contenedor_promocion: ["wm.Layer", {"caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												promociones_panel_top: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
													promocion_sel_ao_escolar: ["wm.SelectEditor", {"width":"220px","caption":"Año Escolar","height":"28px","captionSize":"70%"}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
															}]
														}]
													}],
													promocion_sel_grado: ["wm.SelectEditor", {"width":"160px","caption":"Grado","height":"28px"}, {"onchange":"promocion_sel_gradoChange"}, {
														editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
															}]
														}]
													}],
													promocion_sel_curso: ["wm.SelectEditor", {"width":"160px","caption":"Curso","height":"28px"}, {}, {
														editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso","required":true}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_promocion_curso","expression":undefined}, {}]
															}]
														}]
													}],
													promocion_box_codigo: ["wm.NumberEditor", {"caption":"Codigo","height":"28px","display":"Text","roles":["7","25","10"]}, {}, {
														editor: ["wm._TextEditor", {}, {}]
													}],
													promocion_butt_buscar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"96px","caption":"Buscar","borderColor":"#3366CC"}, {"onclick":"l_promocion_insc_alum_curso"}],
													promocion_butt_limpiar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"38px","width":"96px","caption":"Limpiar","borderColor":"#bbb"}, {"onclick":"promocion_butt_limpiarClick"}],
													button3: ["wm.Button", {"height":"38px","width":"40px","caption":"","borderColor":"#bbb","iconUrl":"resources/images/ico/refresh.png"}, {"onclick":"l_promocion_promocionLiveVariable1"}]
												}],
												promocion_panel_container: ["wm.Panel", {"height":"804px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													promocion_container_datag_personas_x_curso: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0"}, {"onSelected":"l_promocion_promocionLiveVariable1","onSelectionChanged":"promocion_container_datag_personas_x_cursoSelectionChanged"}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_promocion_insc_alum_curso","expression":undefined}, {}]
														}],
														column2: ["wm.DataGridColumn", {"caption":"●","field":"id.codigo","columnWidth":"80px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","columnWidth":"100%","index":1,"dataExpression":"${id.apellido1}+\" \"+${id.apellido2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column3: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","columnWidth":"100%","index":2,"dataExpression":"${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
														promocionLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
															promocionGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","height":"20%"}, {}, {
																promocionDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {"onSelected":"promocionDataGrid1Selected"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_promocion_promocionLiveVariable1","expression":undefined}, {}]
																	}],
																	column2: ["wm.DataGridColumn", {"caption":"Aprobado","field":"aprobado","columnWidth":"90%","index":1,"dataExpression":"if(${aprobado}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${aprobado}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } "}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column3: ["wm.DataGridColumn", {"caption":"Promovido","field":"promovido","columnWidth":"90%","index":2,"dataExpression":"if(${promovido}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${promovido}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } "}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column4: ["wm.DataGridColumn", {"caption":"Autorización Docencia","field":"autorizadoAcademico","columnWidth":"90%","index":3,"dataExpression":"if(${autorizadoAcademico}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${autorizadoAcademico}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } "}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column5: ["wm.DataGridColumn", {"caption":"Autorización Financiera","field":"autorizadoFinanciera","columnWidth":"90%","index":4,"dataExpression":"if(${autorizadoFinanciera}==true){\t'<img src=\"resources/images/ico/ok.gif\" height=\"16\" width=\"16\" /><center>' \t} if(${autorizadoFinanciera}==false){\t'<img src=\"resources/images/ico/bad.gif\" height=\"16\" width=\"16\" /><center>' } "}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column1: ["wm.DataGridColumn", {"caption":"Calificación","field":"calificacionChar","columnWidth":"75%","index":5}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column6: ["wm.DataGridColumn", {"caption":"Año Escolar","field":"sy.schoolYear","columnWidth":"80px","index":6}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}],
																	column7: ["wm.DataGridColumn", {"caption":"•","field":"idPromocion","columnWidth":"60px"}, {}, {
																		format: ["wm.DataFormatter", {}, {}]
																	}]
																}]
															}],
															promocionDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Formulario Acciones de Promoción","captionClasses":"wm_BackgroundGradient_Blue wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1"}, {}, {
																promocionLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"l_promocion_promocionLiveVariable1","onBeginInsert":"promocionLiveForm1BeginInsert","onBeginUpdate":"promocionLiveForm1BeginUpdate","onUpdateData":"promocionLiveForm1UpdateData","onCancelEdit":"promocionLiveForm1CancelEdit","onInsertData":"promocionLiveForm1InsertData"}, {
																	binding: ["wm.Binding", {}, {}, {
																		wire: ["wm.Wire", {"targetProperty":"dataSet","source":"promocionDataGrid1.selectedItem","expression":undefined}, {}],
																		wire1: ["wm.Wire", {"targetProperty":"dataOutput.sy","source":"syRelatedEditor1.dataOutput","expression":undefined}, {}],
																		wire2: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor5.dataOutput","expression":undefined}, {}]
																	}],
																	editPanel3: ["wm.EditPanel", {"liveForm":"promocionLiveForm1","savePanel":"savePanel3","operationPanel":"operationPanel3","lock":false}, {}, {
																		savePanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																			saveButton3: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel3.saveData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formInvalid","expression":undefined}, {}]
																				}]
																			}],
																			cancelButton3: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel3.cancelEdit"}]
																		}],
																		operationPanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																			newButton3: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel3.beginDataInsert"}],
																			updateButton3: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel3.beginDataUpdate"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formUneditable","expression":undefined}, {}]
																				}]
																			}],
																			deleteButton3: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel3.deleteData"}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel3.formUneditable","expression":undefined}, {}]
																				}]
																			}]
																		}]
																	}],
																	idPromocionEditor1: ["wm.Editor", {"caption":"ID Promocion","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPromocion"}, {}, {
																		editor: ["wm._NumberEditor", {"required":true}, {}]
																	}],
																	aprobadoEditor1: ["wm.Editor", {"caption":"Aprobado","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"aprobado","disabled":true,"displayValue":true,"emptyValue":"false","roles":["6","9","10","11","23","24"]}, {"onchange":"aprobadoEditor1Change"}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentaprobadoEditor1: ["wm.Editor", {"caption":"Comentario de Aprobación","width":"100%","height":"60px","display":"TextArea","readonly":true,"formField":"commentaprobado","roles":["6","9","10","11","23","24"]}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	promovidoEditor1: ["wm.Editor", {"caption":"Promovido","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"promovido","displayValue":true,"emptyValue":"false","roles":["6","9","10","23","24"]}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentpromovidoEditor1: ["wm.Editor", {"caption":"Comentario de Promoción","width":"100%","height":"60px","display":"TextArea","readonly":true,"formField":"commentpromovido","roles":["23","24","6","9","10","11"]}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	autorizadoAcademicoEditor1: ["wm.Editor", {"caption":"Autorización Docencia","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"autorizadoAcademico","displayValue":true,"emptyValue":"false","roles":["6","9","10","11","22","23"]}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentcomiteEditor1: ["wm.Editor", {"caption":"Comentario de Autorización Docente","width":"100%","height":"60px","display":"TextArea","readonly":true,"formField":"commentcomite","roles":["23","24","6","9","10","11"]}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	autorizadoFinancieraEditor1: ["wm.Editor", {"caption":"Autorización Financiera","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"autorizadoFinanciera","displayValue":true,"emptyValue":"false","roles":["7","25"]}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	commentfinancEditor1: ["wm.Editor", {"caption":"Comentario de Autorización Financiera","width":"100%","height":"60px","display":"TextArea","readonly":true,"formField":"commentfinanc","roles":["7","25"]}, {}, {
																		editor: ["wm._TextAreaEditor", {}, {}]
																	}],
																	autorizadoPromAnticipadaEditor1: ["wm.Editor", {"caption":"Autorizado Promoción Anticipada","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"autorizadoPromAnticipada","displayValue":true,"emptyValue":"false","captionSize":"80%","roles":["6","9","10","11","23","24"]}, {}, {
																		editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
																	}],
																	calificacionEditor5: ["wm.Editor", {"caption":"Puntaje","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"calificacion","disabled":true}, {}, {
																		editor: ["wm._NumberEditor", {}, {}]
																	}],
																	calificacionCharEditor1: ["wm.Editor", {"caption":"Calificación","width":"100%","height":"26px","readonly":true,"formField":"calificacionChar","disabled":true}, {}, {
																		editor: ["wm._TextEditor", {}, {}]
																	}],
																	syRelatedEditor1: ["wm.RelatedEditor", {"formField":"sy"}, {}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"promocionDataGrid1.selectedItem.sy","expression":undefined}, {}],
																			wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"syLookup1.selectedItem","expression":undefined}, {}]
																		}],
																		syLookup1: ["wm.Editor", {"caption":"ID Año Escolar","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":"","disabled":true,"displayValue":"2010-2011"}, {}, {
																			editor: ["wm._LookupEditor", {"required":true,"displayField":"schoolYear","autoDataSet":false,"startUpdate":false}, {}, {
																				binding: ["wm.Binding", {}, {}, {
																					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
																				}]
																			}]
																		}]
																	}],
																	panel10: ["wm.Panel", {"height":"36px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		personaRelatedEditor5: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																			binding: ["wm.Binding", {}, {}, {
																				wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"promocionDataGrid1.selectedItem.persona","expression":undefined}, {}],
																				wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"personaLookup5.selectedItem","expression":undefined}, {}]
																			}],
																			personaLookup2: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
																				editor: ["wm._NumberEditor", {"required":true}, {}]
																			}]
																		}]
																	}],
																	panel11: ["wm.Panel", {"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																		promocion_butt_promover: ["wm.Button", {"height":"100%","width":"100%","caption":"FINALIZAR Y PROMOVER","iconUrl":"resources/images/ico/route.png","iconMargin":"0 0px 0 0","showing":false}, {}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}],
								demografica: ["wm.Layer", {"caption":"Demográfica","horizontalAlign":"left","verticalAlign":"top","lock":true,"roles":["7","8","9","6","10"],"border":"3","borderColor":"#CD0000"}, {}, {
									pageContainer1: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Demografica"}, {}]
								}],
								asistencia: ["wm.Layer", {"caption":"ASISTENCIA","horizontalAlign":"left","verticalAlign":"top","lock":true,"roles":["4","10","11","21","22","23","24","8"],"showing":false}, {"onShow":"asistenciaShow"}, {
									eventualidadesContainer: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Eventualidades"}, {}]
								}],
								distribucion: ["wm.Layer", {"caption":"<u>Distribución</u>","horizontalAlign":"left","verticalAlign":"top","roles":["5","6","10"]}, {}, {
									page_distribucion: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Distribucion"}, {}]
								}],
								eventualidades: ["wm.Layer", {"caption":"Eventualidades","horizontalAlign":"left","verticalAlign":"top","lock":true,"roles":["10","6","7","8","9","5"]}, {}, {
									registro_eventualidades: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Reg_eventualidades"}, {}]
								}],
								gestion: ["wm.Layer", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"caption":"Gestión Curricular","horizontalAlign":"left","verticalAlign":"top","roles":["7","10","8","11","22","23","21","24","6"],"borderColor":"#CD0000"}, {"onShow":"gestionShow"}, {
									pageSubjects: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Subjects"}, {}]
								}],
								Inscripciones: ["wm.Layer", {"caption":"Inscripciones","horizontalAlign":"left","verticalAlign":"top","lock":true,"roles":["6","10","20","21","22","23","24","5"]}, {}, {
									insc_panel_panel1: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"39px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
										Schoolar_Year: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"],"captionNode":["wm_FontColor_Black"]},"width":"274px","caption":"AÑO ESCOLAR","height":"30px","captionSize":"70%"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_lista_sy","expression":undefined}, {}]
												}]
											}]
										}],
										Grado: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"],"captionNode":["wm_FontColor_Black"]},"width":"212px","caption":"GRADO","height":"31px"}, {"onchange":"GradoChange"}, {
											editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_grado","expression":undefined}, {}]
												}]
											}]
										}],
										Curso: ["wm.SelectEditor", {"_classes":{"domNode":["wm_FontSizePx_14px"],"captionNode":["wm_FontColor_Black"]},"width":"235px","caption":"CURSO","height":"30px"}, {"onchange":"l_inscrip_panel_VistaEstudiantesCursos"}, {
											editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_inscrip_panel_lista_cursos","expression":undefined}, {}]
												}]
											}]
										}]
									}],
									panel30: ["wm.Panel", {"height":"450px","horizontalAlign":"left","width":"100%","verticalAlign":"top","border":"3","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
										layers21: ["wm.Layers", {}, {}, {
											layer11: ["wm.Layer", {"caption":"layer11","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												Asignatura: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"0"}, {"onSelected":"inscalumasigLiveVariable1"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_inscrip_panel_VistaAsignaturas","expression":undefined}, {}]
													}],
													electiva1: ["wm.DataGridColumn", {"caption":"Electiva","field":"id.electiva","columnWidth":"80px","index":3,"display":"Number","dataExpression":"if(${id.electiva}==\"1\")    {'<img src=\"resources/images/ico/si.gif\" height=\"22\" width=\"22\" /><center>'} \tif(${id.electiva}==\"0\") \t {'<img src=\"resources/images/ico/no.gif\" height=\"22\" width=\"22\" /><center>'}"}, {}, {
														format: ["wm.NumberFormatter", {}, {}]
													}],
													asignatura2: ["wm.DataGridColumn", {"caption":"Asignatura","field":"id.asignatura","columnWidth":"100%","index":1}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													idAsignatura: ["wm.DataGridColumn", {"caption":"●","field":"id.idAsignatura","columnWidth":"59px"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}]
											}]
										}],
										layers20: ["wm.Layers", {}, {}, {
											layer8: ["wm.Layer", {"caption":"layer8","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												Estudiante: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"border":"0"}, {"onSelected":"inscalumasigLiveVariable1"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_inscrip_panel_VistaEstudiantesCursos","expression":undefined}, {}]
													}],
													apellidos: ["wm.DataGridColumn", {"caption":"Apellidos","field":"id.apellido1","columnWidth":"50%","index":1,"dataExpression":"${id.apellido1}+\" \"+${id.apellido2}"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													nombres: ["wm.DataGridColumn", {"caption":"Nombres","field":"id.nombre1","columnWidth":"50%","index":2,"dataExpression":"${id.nombre1}+\" \"+${id.nombre2}"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}],
													Codigo: ["wm.DataGridColumn", {"caption":"●","field":"id.idPersona","columnWidth":"67px"}, {}, {
														format: ["wm.DataFormatter", {}, {}]
													}]
												}]
											}]
										}]
									}],
									panel37: ["wm.Panel", {"height":"50%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										layers23: ["wm.Layers", {}, {}, {
											layer27: ["wm.Layer", {"caption":"layer27","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												inscalumasigLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
													inscalumasigDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Formulario","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1","border":"3,3,3,3"}, {}, {
														inscalumasigLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_16px"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"inscalumasigLiveVariable1","onBeginInsert":"inscalumasigLiveForm1BeginInsert"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumasigDataGrid1.selectedItem","expression":undefined}, {}],
																wire1: ["wm.Wire", {"targetProperty":"dataOutput.asignatura","source":"asignaturaRelatedEditor2.dataOutput","expression":undefined}, {}],
																wire2: ["wm.Wire", {"targetProperty":"dataOutput.periodo","source":"periodoRelatedEditor1.dataOutput","expression":undefined}, {}],
																wire3: ["wm.Wire", {"targetProperty":"dataOutput.persona","source":"personaRelatedEditor4.dataOutput","expression":undefined}, {}]
															}],
															idInscAlumAsigEditor1: ["wm.Editor", {"caption":"ID","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idInscAlumAsig"}, {}, {
																editor: ["wm._NumberEditor", {"required":true}, {}]
															}],
															periodoRelatedEditor1: ["wm.RelatedEditor", {"formField":"periodo"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumasigDataGrid1.selectedItem.periodo","expression":undefined}, {}],
																	wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"periodoLookup1.selectedItem","expression":undefined}, {}]
																}],
																periodoLookup1: ["wm.Editor", {"caption":"Periodo Escolar","width":"100%","height":"26px","display":"Lookup","readonly":true,"formField":"","displayValue":"2010-2011"}, {}, {
																	editor: ["wm._LookupEditor", {"required":true,"displayField":"periodo"}, {}]
																}]
															}],
															calificacionEditor4: ["wm.Editor", {"caption":"Calificacion","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"calificacion","disabled":true,"showing":false}, {}, {
																editor: ["wm._NumberEditor", {}, {}]
															}],
															porcentajeEditor1: ["wm.Editor", {"caption":"Porcentaje","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"porcentaje","disabled":true,"showing":false}, {}, {
																editor: ["wm._NumberEditor", {}, {}]
															}],
															esperadosEditor1: ["wm.Editor", {"caption":"Esperados","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"esperados","disabled":true,"showing":false}, {}, {
																editor: ["wm._NumberEditor", {}, {}]
															}],
															logradosEditor1: ["wm.Editor", {"caption":"Logrados","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"logrados","disabled":true,"showing":false}, {}, {
																editor: ["wm._NumberEditor", {}, {}]
															}],
															califCharEditor1: ["wm.Editor", {"caption":"CalifChar","width":"100%","height":"26px","readonly":true,"formField":"califChar","disabled":true,"showing":false}, {}, {
																editor: ["wm._TextEditor", {}, {}]
															}],
															asignaturaRelatedEditor2: ["wm.RelatedEditor", {"formField":"asignatura"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumasigDataGrid1.selectedItem.asignatura","expression":undefined}, {}]
																}],
																asignaturaLookup5: ["wm.Editor", {"caption":"ID Asignatura","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idAsignatura"}, {}, {
																	editor: ["wm._NumberEditor", {"required":true}, {}]
																}]
															}],
															personaRelatedEditor4: ["wm.RelatedEditor", {"formField":"persona"}, {}, {
																binding: ["wm.Binding", {}, {}, {
																	wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumasigDataGrid1.selectedItem.persona","expression":undefined}, {}]
																}],
																personaLookup6: ["wm.Editor", {"caption":"ID Persona","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idPersona"}, {}, {
																	editor: ["wm._NumberEditor", {"required":true}, {}]
																}]
															}],
															editPanel7: ["wm.EditPanel", {"liveForm":"inscalumasigLiveForm1","savePanel":"savePanel7","operationPanel":"operationPanel7","lock":false}, {}, {
																savePanel7: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
																	saveButton7: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel7.saveData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel7.formInvalid","expression":undefined}, {}]
																		}]
																	}],
																	cancelButton7: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel7.cancelEdit"}]
																}],
																operationPanel7: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
																	newButton7: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel7.beginDataInsert"}],
																	updateButton7: ["wm.RoundedButton", {"caption":"Actualizar","width":"120px","height":"100%","disabled":true}, {"onclick":"editPanel7.beginDataUpdate"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel7.formUneditable","expression":undefined}, {}]
																		}]
																	}],
																	deleteButton7: ["wm.RoundedButton", {"caption":"Borrar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel7.deleteData"}, {
																		binding: ["wm.Binding", {}, {}, {
																			wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel7.formUneditable","expression":undefined}, {}]
																		}]
																	}]
																}]
															}]
														}]
													}]
												}]
											}]
										}],
										layers22: ["wm.Layers", {}, {}, {
											layer17: ["wm.Layer", {"caption":"layer17","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												inscalumasigGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px","wm_Border_TopStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"Tabla Alumnos","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_Border_TopStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"1"}, {}, {
													dataGrid2: ["wm.DataGrid", {"border":"0","showing":false}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"vistaALUMNOS","expression":undefined}, {}]
														}],
														column1: ["wm.DataGridColumn", {"autoSize":true}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column2: ["wm.DataGridColumn", {"index":1}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}],
													inscalumasigDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_14px"]},"border":"0"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"inscalumasigLiveVariable1","expression":undefined}, {}]
														}],
														Apellidos: ["wm.DataGridColumn", {"caption":"Apellidos","field":"persona.apellido1","columnWidth":"50%","index":1,"dataExpression":"${persona.apellido1}+\" \"+${persona.apellido2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														Nombres: ["wm.DataGridColumn", {"caption":"Nombres","field":"persona.nombre1","columnWidth":"50%","index":2,"dataExpression":"${persona.nombre1}+\" \"+${persona.nombre2}"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}],
														column1: ["wm.DataGridColumn", {"caption":"●","field":"persona.codigo","columnWidth":"52px"}, {}, {
															format: ["wm.DataFormatter", {}, {}]
														}]
													}]
												}]
											}]
										}]
									}]
								}],
								pestana_reportes_seguimiento: ["wm.Layer", {"caption":"Reportes","horizontalAlign":"left","verticalAlign":"top","lock":true,"roles":["5","6","10"],"padding":"40"}, {"onShow":"pestana_reportes_seguimientoShow"}, {
									reportes_top_panel: ["wm.Panel", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_BackgroundColor_VeryLightGray"]},"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"top","padding":"2","layoutKind":"left-to-right"}, {}, {
										reports_open_report_window: ["wm.Button", {"height":"100%","width":"155px","caption":"<img src=\"resources/images/buttons/report.png\" WIDTH=32 HEIGHT=32 > Generar reporte","borderColor":"#c6c6c6","disabled":true,"hint":"Abrir generador de  reporte"}, {"onclick":"reports_open_report_windowClick"}],
										uctualizar_reportes_descripcion: ["wm.Button", {"height":"100%","width":"200px","caption":"<img src=\"resources/images/buttons/Update.png\" WIDTH=22 HEIGHT=22 > Actualizar información","disabled":true}, {}]
									}],
									panel6: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"40px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
										codigoReporte: ["wm.TextEditor", {"caption":"Codigo","height":"32px"}, {"onchange":"codigoReporteChange"}, {
											editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
										}],
										reporte: ["wm.TextEditor", {"width":"200px","caption":"Reporte","height":"32px","captionSize":"35%"}, {"onchange":"reporteChange"}, {
											editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
										}]
									}],
									panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","padding":"5","layoutKind":"left-to-right","autoScroll":true}, {}, {
										reportes_graficos_listado_reportes: ["wm.DataGrid", {"border":"0"}, {"onSelected":"reportes_graficos_listado_reportesSelected","onSelectionChanged":"reportes_graficos_listado_reportesSelectionChanged","onDeselected":"reportes_graficos_listado_reportesDeselected"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"l_reportes_graficos_listado_reportes","expression":undefined}, {}]
											}],
											column1: ["wm.DataGridColumn", {"caption":"<center>+ Código</center>","field":"id.codigo","dataExpression":"\"<center>\"+${id.codigo}+\"</center>\""}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column3: ["wm.DataGridColumn", {"caption":"Reporte","field":"id.reporte","columnWidth":"100%","index":1}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column6: ["wm.DataGridColumn", {"caption":"Tipo <br/>Persona","field":"id.tipoPersona","index":2}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column4: ["wm.DataGridColumn", {"caption":"Descripción","field":"id.descripcion","columnWidth":"100%","index":3}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}]
									}]
								}],
								mensaje: ["wm.Layer", {"caption":"Aviso","horizontalAlign":"left","verticalAlign":"top","lock":true,"roles":["1","2","3","4"]}, {}, {
									panel56: ["wm.Panel", {"height":"482px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										picture6: ["wm.Picture", {"height":"100%","border":"0","width":"615px","source":"resources/images/illustrator-old-school-icon.gif","aspect":"h"}, {}],
										label18: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_24px","wm_Border_TopStyleCurved8px","wm_Border_BottomStyleCurved8px","wm_SilverBlueTheme_LightBlueInsetPanel"]},"caption":"<font color=\"red\"><b><h3>AVISO IMPORTANTE: </h3></b></font> <font color=\"red\"><b>Aprendoz</b></font> ha detectado que usted no cumple con los requisitos de seguridad para utilizar este  servicio.</br></br> Le sugerimos ponerse en contacto con el administrador del sistema quien le podra brindar información mas precisa sobre esta restricción.</br></br>  Sentimos  las molestias causadas.","height":"100%","width":"96%","border":"3","singleLine":false,"borderColor":"#FFxxyy"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}]
								}]
							}]
						}],
						templateRight: ["wm.Panel", {"_classes":{"domNode":["template-right"]},"height":"100%","horizontalAlign":"left","width":"24px","verticalAlign":"top","lock":true,"showing":false}, {}]
					}],
					panel3: ["wm.Panel", {"height":"24px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
						templateBottomLeft: ["wm.Panel", {"_classes":{"domNode":["template-bottom-left"]},"height":"100%","horizontalAlign":"left","width":"24px","verticalAlign":"top"}, {}],
						templateBottom: ["wm.Panel", {"_classes":{"domNode":["template-bottom-center"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}],
						templateBottomRight: ["wm.Panel", {"_classes":{"domNode":["template-bottom-right"]},"height":"100%","horizontalAlign":"left","width":"24px","verticalAlign":"top"}, {}]
					}],
					panelFooter: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_LightGray","wm_FontSizePx_14px"]},"caption":"<font color=\"red\">Aprendoz® | Colegio Rochester  2012 - 2013</font>","height":"48px","width":"100%","border":"0","align":"right","padding":"10,20","margin":"0","singleLine":false}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}]
		}]
	}]
}