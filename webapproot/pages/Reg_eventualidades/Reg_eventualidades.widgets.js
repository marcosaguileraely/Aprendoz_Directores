Reg_eventualidades.widgets = {
	eventualidadpersonasLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.eventualidadpersonasLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.eventualidades.idEventualidad","source":"eventualidadesDataGrid1.selectedItem.idEventualidad"}, {}]
		}]
	}],
	getUserID: ["wm.ServiceVariable", {"service":"securityService","operation":"getUserName","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	ls_Grado: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	estudiantes_liveVariable: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.buscar_personas_LiveView","maxResults":20,"designMaxResults":20}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.curso.idCurso","source":"curso_select_1.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.persona.codigo","source":"codigo_box_1.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.persona.nombre1","source":"nombre1_box_1.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.persona.nombre2","source":"nombre2_box_1.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"filter.persona.apellido1","source":"apellido1_box_1.dataValue"}, {}],
			wire5: ["wm.Wire", {"targetProperty":"filter.persona.apellido2","source":"apellido2_box_1.dataValue"}, {}],
			wire6: ["wm.Wire", {"targetProperty":"filter.apellido1","source":"apellido1_box_1.dataValue"}, {}],
			wire7: ["wm.Wire", {"targetProperty":"filter.apellido2","source":"apellido2_box_1.dataValue"}, {}],
			wire8: ["wm.Wire", {"targetProperty":"filter.nombre1","source":"nombre1_box_1.dataValue"}, {}],
			wire9: ["wm.Wire", {"targetProperty":"filter.nombre2","source":"nombre2_box_1.dataValue"}, {}]
		}]
	}],
	ls_Curso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grado.idGrado","source":"grado_select_1.dataValue"}, {}]
		}]
	}],
	ls_tipo_eventualidad: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.TipoEventualidad"}, {}],
	ls_subtipo_eventualidad: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.SubtipoEventualidad"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.tipoEventualidad.idTipoEventualidad","source":"tipo_eventualidad_select.dataValue"}, {}]
		}]
	}],
	lista_lugares: ["wm.Variable", {"type":"EntryData","json":"[\n\t{name:\"Choice A\", dataValue:\"foo\"},\n        {name:\"Choice B\", dataValue:\"bar\"},\n\t{name:\"Choice A\", dataValue:\"foo\"},\n\t{name:\"Choice A\", dataValue:\"foo\"},\n\t{name:\"Choice A\", dataValue:\"foo\"},\n\t{name:\"Choice A\", dataValue:\"foo\"}\n]"}, {}],
	lista_estados: ["wm.Variable", {"type":"EntryData","json":"[\n\t{name:\"Abierto\", dataValue:\"Abierto\"},\n        {name:\"En seguimiento\", dataValue:\"En seguimiento\"},\n\t{name:\"Cerrado\", dataValue:\"Cerrado\"}\n\n]"}, {}],
	complexSearch: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"searchReportesAlumnos"}, {}, {
		input: ["wm.ServiceInput", {"type":"searchReportesAlumnosInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"a_searchEventualities","source":"searchInput.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"search","source":"searchInput.dataValue"}, {}]
			}]
		}]
	}],
	a_searchEventualities: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"seachEventualidadHQL"}, {}, {
		input: ["wm.ServiceInput", {"type":"seachEventualidadHQLInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"search","source":"inputSearchEventuralidades.dataValue"}, {}]
			}]
		}]
	}],
	getTipoEventualidad: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getTipoEventualidadByIdSubTipo"}, {"onSuccess":"getTipoEventualidadSuccess"}, {
		input: ["wm.ServiceInput", {"type":"getTipoEventualidadByIdSubTipoInputs"}, {}]
	}],
	eventualidadesLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.eventualidadesLiveView1","orderBy":"desc: idEventualidad","maxResults":3,"designMaxResults":3}, {"onSuccess":"eventualidadesLiveVariable1Success"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.usuarioReg","source":"setUsername.dataValue"}, {}]
		}]
	}],
	a_insertarPersonaEventualidad: ["wm.Variable", {"type":"com.aprendoz_test.data.EventualidadPersonas"}, {}],
	svEventualidadPersonas: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"hqlPersonaEventualidad"}, {}, {
		input: ["wm.ServiceInput", {"type":"hqlPersonaEventualidadInputs"}, {}]
	}],
	deleteEventualidadPersona: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"deleteEventualidadPersona"}, {}, {
		input: ["wm.ServiceInput", {"type":"deleteEventualidadPersonaInputs"}, {}]
	}],
	sendMail: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"enviarMailEventualidades"}, {"onSuccess":"sendMailSuccess"}, {
		input: ["wm.ServiceInput", {"type":"enviarMailEventualidadesInputs"}, {}]
	}],
	jsSendMail: ["wm.ServiceVariable", {"service":"EnviarMail","operation":"sendEmailNotification"}, {"onSuccess":"jsSendMailSuccess","onError":"jsSendMailError","onBeforeUpdate":"loading"}, {
		input: ["wm.ServiceInput", {"type":"sendEmailNotificationInputs"}, {}]
	}],
	loading: ["wm.NavigationCall", {"operation":"gotoDialogPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoDialogPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"SendingMessage\""}, {}],
				wire2: ["wm.Wire", {"targetProperty":"width","expression":"270"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"height","expression":"130"}, {}]
			}]
		}]
	}],
	sendMailHQLService: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"sendMailHQL"}, {"onSuccess":"sendMailHQLServiceSuccess"}, {
		input: ["wm.ServiceInput", {"type":"sendMailHQLInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"10","autoScroll":false}, {}, {
		panel3: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"61px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","padding":"1","layoutKind":"left-to-right"}, {}, {
			setUsername: ["wm.TextEditor", {"width":"242px","showing":false,"displayValue":"m"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"targetProperty":"dataValue","source":"getUserID.dataValue"}, {}]
				}],
				editor: ["wm._TextEditor", {}, {}]
			}],
			spacer3: ["wm.Spacer", {"height":"48px","width":"100px"}, {}],
			r_eventualidades: ["wm.Button", {"height":"100%","width":"179px","caption":"Registrar Eventualidad","borderColor":"#c6c6c6","iconUrl":"resources/images/buttons/eventualidades.png","iconWidth":"30px","iconHeight":"30px","iconMargin":"0 -10px 0 0"}, {"onclick":"r_eventualidadesClick"}],
			b_consulta: ["wm.Button", {"height":"100%","width":"169px","caption":"Consultar Eventualidad","borderColor":"#c6c6c6","iconUrl":"resources/images/buttons/buscar.png","iconWidth":"25px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"b_consultaClick"}]
		}],
		Ingreso_Eventualidades: ["wm.Layers", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"padding":"0,100,0,100"}, {}, {
			layer5: ["wm.Layer", {"caption":"layer5","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"center","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					eventualidadesLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_TopStyleCurved8px"]},"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"validateBeforeSave":true,"autoScroll":true}, {"onSuccess":"eventualidadesLiveVariable1","onBeginInsert":"eventualidadesLiveForm1BeginInsert","onInsertData":"eventualidadesLiveForm1InsertData"}, {
						binding: ["wm.Binding", {}, {}, {
							wire1: ["wm.Wire", {"targetProperty":"dataOutput.subtipoEventualidad","source":"subtipoEventualidadRelatedEditor1.dataOutput","expression":undefined}, {}],
							wire2: ["wm.Wire", {"targetProperty":"dataOutput.tipoLugar","source":"relatedEditor1.dataOutput","expression":undefined}, {}],
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"eventualidadesDataGrid1.selectedItem"}, {}]
						}],
						editPanel1: ["wm.EditPanel", {"liveForm":"eventualidadesLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1","padding":"2","height":"45px"}, {}, {
							savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
								saveButton1: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
									}]
								}],
								cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
							}],
							operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
								newButton1: ["wm.RoundedButton", {"caption":"Nueva eventualidad","width":"172px","height":"100%"}, {"onclick":"editPanel1.beginDataInsert"}],
								updateButton1: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataUpdate"}, {
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
						}],
						panel13: ["wm.Panel", {"height":"35px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true}, {}, {
							spacer11: ["wm.Spacer", {"height":"26px","width":"45%"}, {}],
							picture1: ["wm.Picture", {"source":"resources/images/buttons/number_1.png","height":"28px","border":"0","width":"24px","aspect":"v"}, {}],
							label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Ingresa los detalles principales de la eventualidad, posteriormente guarde los detalles.","height":"28px","width":"100%","border":"0"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						idEventualidadEditor1: ["wm.Editor", {"caption":"ID","readonly":true,"formField":"idEventualidad","width":"100%","height":"26px","display":"Number"}, {}, {
							editor: ["wm._NumberEditor", {}, {}]
						}],
						fechaIngresoEditor1: ["wm.Editor", {"caption":"FechaIngreso","readonly":true,"formField":"fechaIngreso","width":"100%","height":"26px","display":"Date","showing":false}, {}, {
							editor: ["wm._DateEditor", {"required":true}, {}]
						}],
						panel5: ["wm.Panel", {"height":"27px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							spacer6: ["wm.Spacer", {"height":"26px","width":"102%"}, {}],
							fechaEditor1: ["wm.Editor", {"caption":"Fecha","readonly":true,"formField":"fecha","width":"100%","height":"26px","display":"Date","captionSize":"51%"}, {}, {
								editor: ["wm._DateEditor", {"required":true}, {}]
							}],
							horaEditor1: ["wm.Editor", {"caption":"Hora","readonly":true,"formField":"hora","width":"100%","height":"26px","display":"Time"}, {}, {
								editor: ["wm._TimeEditor", {"required":true}, {}]
							}],
							usuarioRegEditor1: ["wm.Editor", {"caption":"Usuario","readonly":true,"formField":"usuarioReg","width":"100%","height":"26px"}, {}, {
								editor: ["wm._TextEditor", {"required":true}, {}]
							}]
						}],
						estadoEditor1: ["wm.Editor", {"caption":"Estado","readonly":true,"formField":"estado","width":"100%","height":"28px","display":"Select","captionSize":"51%"}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","required":true,"options":"Abierto, Cerrado"}, {}, {
								optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
							}]
						}],
						relatedEditor1: ["wm.RelatedEditor", {"formField":"tipoLugar","height":"28px","lock":true,"fitToContentHeight":true,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"eventualidadesDataGrid1.selectedItem.tipoLugar","expression":undefined}, {}],
								wire1: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoLugarLookup1.selectedItem","expression":undefined}, {}]
							}],
							tipoLugarLookup1: ["wm.Editor", {"caption":"Lugar","readonly":true,"formField":"","width":"100%","height":"26px","display":"Lookup","captionSize":"51%"}, {}, {
								editor: ["wm._LookupEditor", {"required":true,"displayField":"lugar","allowNone":true}, {}]
							}]
						}],
						panel14: ["wm.Panel", {"height":"35px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true}, {}, {
							spacer12: ["wm.Spacer", {"height":"26px","width":"45%"}, {}],
							picture2: ["wm.Picture", {"source":"resources/images/buttons/number_2.png","height":"28px","border":"0","width":"24px","aspect":"v"}, {}],
							label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Busca, selecciona y adiciona las eventualidades de los involucrados","height":"28px","width":"100%","border":"0"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						layers1: ["wm.Layers", {"height":"329px"}, {}, {
							layer1: ["wm.Layer", {"caption":"layer1","horizontalAlign":"right","verticalAlign":"top"}, {}, {
								panel2: ["wm.Panel", {"height":"32px","horizontalAlign":"left","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
									limpiar_boton_1: ["wm.Button", {"height":"34px","width":"150px","caption":"Limpiar","margin":"2","borderColor":"#4D90FE","showing":false}, {"onclick":"limpiar_boton_1Click"}],
									searchInput: ["wm.TextEditor", {"width":"100%","caption":"Buscar involucrados","height":"30px","captionSize":"51%"}, {"onchange":"complexSearch"}, {
										editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
									}]
								}],
								panel10: ["wm.Panel", {"height":"150px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									spacer10: ["wm.Spacer", {"height":"48px","width":"102%"}, {}],
									tabla_buscar_persona: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"border":"0","width":"130%"}, {"onRowDblClick":"tabla_buscar_personaRowDblClick"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"complexSearch","expression":undefined}, {}]
										}],
										id1: ["wm.DataGridColumn", {"caption":"+","field":"id","columnWidth":"38px"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										complex1: ["wm.DataGridColumn", {"index":2,"caption":"Nombre completo","field":"complex","columnWidth":"100%"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										code1: ["wm.DataGridColumn", {"index":1,"caption":"Código","field":"code","columnWidth":"70px"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}],
									layers3: ["wm.Layers", {"width":"70%"}, {}, {
										layer3: ["wm.Layer", {"caption":"layer3","horizontalAlign":"left","verticalAlign":"top"}, {}, {
											tipo_eventualidad_select: ["wm.SelectEditor", {"width":"100%","caption":"Tipo eventualidad","height":"26px","captionSize":"70%"}, {"onchange":"ls_subtipo_eventualidad"}, {
												editor: ["wm._SelectEditor", {"displayField":"tipoEventualidad","dataField":"idTipoEventualidad"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_tipo_eventualidad","expression":undefined}, {}]
													}]
												}]
											}],
											subtipo_eventualidad: ["wm.SelectEditor", {"width":"100%","caption":"Subtipo Eventualidad","height":"26px","captionSize":"70%"}, {}, {
												editor: ["wm._SelectEditor", {"displayField":"subtipoEventualidad","dataField":"idSubtipoEventualidad"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_subtipo_eventualidad","expression":undefined}, {}]
													}]
												}]
											}],
											spacer9: ["wm.Spacer", {"height":"100%","width":"96px"}, {}],
											panel7: ["wm.Panel", {"height":"38px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
												agregar_butt: ["wm.Button", {"height":"100%","width":"100%","caption":"+ Agregar","disabled":true}, {"onclick":"agregar_buttClick"}],
												quitar_butt: ["wm.Button", {"height":"100%","width":"100%","caption":"- Quitar","disabled":true,"borderColor":"#aaa"}, {"onclick":"quitar_buttClick"}]
											}]
										}]
									}]
								}],
								panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									spacer8: ["wm.Spacer", {"height":"48px","width":"51%"}, {}],
									eventualidadPersonasDataGrid: ["wm.DataGrid", {"border":"0"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"dataSet","source":"svEventualidadPersonas","expression":undefined}, {}]
										}],
										nombrecompleto1: ["wm.DataGridColumn", {"index":1,"caption":"Nombre completo","field":"nombrecompleto","columnWidth":"100%"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										subtipo1: ["wm.DataGridColumn", {"index":2,"caption":"Tipo eventualidad","field":"subtipo","columnWidth":"100%"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}],
										column1: ["wm.DataGridColumn", {"caption":"+","field":"id","columnWidth":"40px"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}]
								}]
							}]
						}],
						panel11: ["wm.Panel", {"height":"39px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							testSV: ["wm.Button", {"height":"100%","width":"160px","caption":"Enviar notificación","disabled":true,"margin":"3","iconUrl":"resources/images/buttons/sendMail.png","iconWidth":"20px","iconHeight":"18px","iconMargin":"0 0px 0 0"}, {"onclick":"testSVClick"}]
						}],
						spacer7: ["wm.Spacer", {"height":"18px","width":"96px"}, {}],
						panel15: ["wm.Panel", {"height":"35px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true}, {}, {
							spacer13: ["wm.Spacer", {"height":"26px","width":"45%"}, {}],
							picture3: ["wm.Picture", {"source":"resources/images/buttons/number_3.png","height":"28px","border":"0","width":"24px","aspect":"v"}, {}],
							label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"caption":"Presione el botón <u><b>Editar acta</b></u> y a continuación ingrese los detalles del acta","height":"28px","width":"100%","border":"0"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						panel12: ["wm.Panel", {"height":"38px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							quitar_butt2: ["wm.Button", {"height":"100%","width":"120px","caption":"Editar acta","disabled":true,"borderColor":"#aaa","iconUrl":"resources/images/buttons/update0.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"quitar_butt2Click"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable"}, {}]
								}]
							}]
						}],
						descripcion: ["wm.TextAreaEditor", {"height":"120px","width":"100%","caption":"Descripción","singleLine":false,"readonly":true,"formField":"descripcion"}, {}, {
							editor: ["wm._TextAreaEditor", {}, {}]
						}],
						autoevaluacion: ["wm.TextAreaEditor", {"height":"120px","width":"100%","caption":"Autoevaluación","singleLine":false,"readonly":true,"formField":"pregunta1"}, {}, {
							editor: ["wm._TextAreaEditor", {}, {}]
						}],
						pregunta2: ["wm.TextAreaEditor", {"height":"120px","width":"130%","caption":"Plan de acción para<br> resolver problemas o mejorar,<br> incluyendo formas de seguimiento","singleLine":false,"readonly":true,"formField":"pregunta2"}, {}, {
							editor: ["wm._TextAreaEditor", {}, {}]
						}],
						pregunta3: ["wm.TextAreaEditor", {"height":"120px","width":"100%","caption":"Socialización del plan con padres y otros, <br>y sus comentarios","singleLine":false,"readonly":true,"formField":"pregunta3"}, {}, {
							editor: ["wm._TextAreaEditor", {}, {}]
						}],
						confidencialcheckBoxEditor1: ["wm.CheckBoxEditor", {"width":"100%","caption":"Confidencial","readonly":true,"formField":"confidencial","display":"Select"}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Si, No"}, {}, {
								optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
							}]
						}],
						fechaPlanReparacionEditor1: ["wm.Editor", {"caption":"Fecha Revisión","readonly":true,"formField":"fechaPlanReparacion","width":"100%","height":"26px","display":"Date"}, {}, {
							editor: ["wm._DateEditor", {}, {}]
						}],
						panel9: ["wm.Panel", {"height":"38px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
							guardar_cuerpo_eventualidades: ["wm.Button", {"height":"100%","width":"120px","caption":"Guardar acta","disabled":true,"borderColor":"#aaa","iconUrl":"resources/images/buttons/save.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"guardar_cuerpo_eventualidadesClick"}]
						}],
						panel16: ["wm.Panel", {"height":"38px","horizontalAlign":"center","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right"}, {}, {
							picture4: ["wm.Picture", {"source":"resources/images/buttons/number_4.png","height":"30px","border":"0","width":"24px","aspect":"v"}, {}],
							imprimir_acta: ["wm.Button", {"height":"100%","width":"132px","caption":"Imprimir acta","disabled":true,"borderColor":"#aaa","iconUrl":"resources/images/buttons/acta.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"imprimir_actaClick"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable"}, {}]
								}]
							}]
						}]
					}],
					eventualidadesDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","showing":false}, {"onAfterRender":"eventualidadesDataGrid1AfterRender","onSelected":"eventualidadesDataGrid1Selected"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"eventualidadesLiveVariable1","expression":undefined}, {}]
						}],
						idEventualidad1: ["wm.DataGridColumn", {"index":1,"caption":"+","field":"idEventualidad","columnWidth":"36px","display":"Number","autoSize":undefined}, {}, {
							format: ["wm.NumberFormatter", {}, {}]
						}],
						fecha1: ["wm.DataGridColumn", {"index":2,"caption":"Fecha","field":"fecha","columnWidth":"72px","display":"Date","autoSize":undefined}, {}, {
							format: ["wm.DateFormatter", {}, {}]
						}],
						hora1: ["wm.DataGridColumn", {"index":3,"caption":"Hora","field":"hora","columnWidth":"82px","display":"Time","autoSize":undefined}, {}, {
							format: ["wm.TimeFormatter", {}, {}]
						}],
						estado1: ["wm.DataGridColumn", {"index":4,"caption":"Estado","field":"estado","columnWidth":"49px","autoSize":undefined}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						fechaIngreso1: ["wm.DataGridColumn", {"index":5,"caption":"FechaIngreso","field":"fechaIngreso","columnWidth":"82px","display":"Date","autoSize":undefined}, {}, {
							format: ["wm.DateFormatter", {}, {}]
						}],
						usuarioReg1: ["wm.DataGridColumn", {"caption":"UsuarioReg","field":"usuarioReg","columnWidth":"72px","autoSize":undefined}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}],
					agregarLiveForm: ["wm.LiveForm", {"height":"210px","verticalAlign":"top","horizontalAlign":"left","width":"76px","showing":false}, {"onSuccess":"agregarLiveFormSuccess"}]
				}]
			}]
		}],
		Consulta_Eventualidades: ["wm.Layers", {"padding":"0,100,0,100","showing":false}, {}, {
			layer6: ["wm.Layer", {"caption":"layer6","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				detalles_usuarios1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					layers7: ["wm.Layers", {}, {}, {
						layer7: ["wm.Layer", {"caption":"layer1","horizontalAlign":"left","verticalAlign":"top"}, {}, {
							panel_usuarios_2: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_14px","wm_BackgroundColor_VeryLightGray"]},"height":"90px","horizontalAlign":"right","width":"100%","verticalAlign":"bottom","layoutKind":"left-to-right"}, {}, {
								layers4: ["wm.Layers", {"width":"350px"}, {}, {
									layer4: ["wm.Layer", {"caption":"layer4","horizontalAlign":"left","verticalAlign":"top"}, {}, {
										inputSearchEventuralidades: ["wm.TextEditor", {"width":"100%","height":"32px"}, {"onchange":"a_searchEventualities"}, {
											editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
										}],
										layers10: ["wm.Layers", {"height":"50px"}, {}, {
											layer10: ["wm.Layer", {"caption":"layer3","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												panel8: ["wm.Panel", {"height":"37px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													actualizarEventualidad_butt: ["wm.Button", {"height":"100%","width":"40%","caption":"Actualizar","disabled":true,"margin":"2","borderColor":"#BBB","iconUrl":"resources/images/buttons/update0.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"actualizarEventualidad_buttClick"}],
													limpiar_boton_2: ["wm.Button", {"height":"100%","width":"40%","caption":"Limpiar","margin":"2","borderColor":"#BBB","iconUrl":"resources/images/buttons/clear.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"limpiar_boton_2Click"}]
												}]
											}]
										}]
									}]
								}],
								spacer2: ["wm.Spacer", {"height":"48px","width":"474%"}, {}],
								reporte_eventualidades: ["wm.Button", {"height":"50px","width":"140px","caption":"Eventualidades x alumno","margin":"2","borderColor":"#bbb","iconUrl":"resources/images/buttons/reporte.png","iconWidth":"20px","iconHeight":"20px","iconMargin":"0 0px 0 0"}, {"onclick":"reporte_eventualidadesClick"}]
							}],
							panel6: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"54px","horizontalAlign":"right","width":"100%","verticalAlign":"middle","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
								button3: ["wm.Button", {"height":"48px","width":"96px","caption":"Reporte"}, {}],
								button4: ["wm.Button", {"height":"48px","width":"96px","caption":"Reporte"}, {}]
							}],
							eventualidades: ["wm.DataGrid", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"border":"0"}, {"onSelected":"eventualidadesSelected"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"a_searchEventualities","expression":undefined}, {}]
								}],
								id1: ["wm.DataGridColumn", {"index":1,"caption":"+","field":"ideventualidad","columnWidth":"45px","display":"Number"}, {}, {
									format: ["wm.NumberFormatter", {}, {}]
								}],
								hora1: ["wm.DataGridColumn", {"index":5,"caption":"Hora","field":"hora","columnWidth":"57px","display":"Time"}, {}, {
									format: ["wm.TimeFormatter", {}, {}]
								}],
								complex1: ["wm.DataGridColumn", {"index":3,"caption":"Nombre completo","field":"complex","columnWidth":"145px"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								estado1: ["wm.DataGridColumn", {"index":6,"caption":"Estado","field":"estado","columnWidth":"53px"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								fecha1: ["wm.DataGridColumn", {"index":4,"caption":"Fecha","field":"fecha","columnWidth":"96px","display":"Date"}, {}, {
									format: ["wm.DateFormatter", {}, {}]
								}],
								lugar1: ["wm.DataGridColumn", {"index":7,"caption":"Lugar","field":"lugar","columnWidth":"75px"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								column1: ["wm.DataGridColumn", {"index":2,"caption":"Código","field":"codigo","columnWidth":"80px"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								column2: ["wm.DataGridColumn", {"caption":"Confidencial","field":"confidencial","columnWidth":"71px"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								column3: ["wm.DataGridColumn", {"index":9,"caption":"Eventualidad","field":"subtipo","columnWidth":"100%"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								column4: ["wm.DataGridColumn", {"index":9,"caption":"+","field":"usuario"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}