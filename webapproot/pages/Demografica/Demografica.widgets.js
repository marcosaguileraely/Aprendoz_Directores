Demografica.widgets = {
	personaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.personaLiveView2","maxResults":10,"designMaxResults":100}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.grupoFamiliar.idGrupoFamiliar","source":"Tabla_personas_docentes.selectedItem.id.grupoFamiliarIdGrupoFamiliar"}, {}]
		}]
	}],
	iraVer: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"pageName","expression":"\"Info_academica\""}, {}]
			}]
		}]
	}],
	iradetalles: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"layer","source":"tab_detalles_academicos"}, {}]
			}]
		}]
	}],
	listaPais: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Pais"}, {"onBeforeUpdate":"listaPaisBeforeUpdate","onSuccess":"listaPaisSuccess"}],
	listaEstados: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.EstadoDepartamento"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.pais.idPais","source":"textEditor1.dataValue"}, {}]
		}]
	}],
	sylista: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Sy","orderBy":"desc: idSy"}, {}],
	iracertificados: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"layer","source":"tab_detalles_academicos"}, {}]
			}]
		}]
	}],
	listaPais2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Pais"}, {}],
	listaEstados2: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.EstadoDepartamento"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.pais.pais","source":"selectEditor4.dataValue"}, {}]
		}]
	}],
	Vista_Detalles_Academicos: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaInscAlumnAsigDemografica","maxResults":40}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.idSy","source":"caja_sy_detalles_academicos.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.personaIdPersona","source":"Tabla_personas_docentes.selectedItem.id.idPersona"}, {}]
		}]
	}],
	Vista_Personas_Demografica: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.DocentesVistaPersonasDemografica","maxResults":100}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"targetProperty":"filter.id.nombre1","source":"n1.dataValue"}, {}],
			wire1: ["wm.Wire", {"targetProperty":"filter.id.nombre2","source":"n2.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"filter.id.apellido1","source":"a1.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"filter.id.apellido2","source":"a2.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"filter.id.codigo","source":"codigo.dataValue"}, {}]
		}]
	}],
	ls_tipo_persona: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.TipoPersona"}, {"onBeforeUpdate":"ls_tipo_personaBeforeUpdate","onSuccess":"ls_tipo_personaSuccess"}],
	listcurso: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"com.aprendoz_test.data.Curso"}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"center","verticalAlign":"top"}, {}, {
		tabLayers1: ["wm.TabLayers", {"layersType":"RoundedTabs"}, {}, {
			layer11: ["wm.Layer", {"caption":"Demográfica","horizontalAlign":"left","verticalAlign":"top"}, {}, {
				layers1: ["wm.Layers", {"height":"165px"}, {}, {
					layer1: ["wm.Layer", {"caption":"layer1","horizontalAlign":"center","verticalAlign":"top"}, {}, {
						panel_filtros: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_FontColor_White","wm_TextDecoration_Bold"]},"height":"40px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							label9: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"100%","width":"383px","border":"0","caption":"BUSQUEDA DE INFORMACION"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}],
						label6: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"48px","width":"96%","border":"0","caption":"Por favor, realice la busqueda de  información de acuerdo a la informacion requeridad. Por favor verifique que los criterios de filtrado sean acordes a la busqueda.  ","showing":false}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}],
						panel_header: ["wm.Panel", {"_classes":{"domNode":["wm_Border_BottomStyleCurved12px","wm_SilverBlueTheme_LightBlueInsetPanel","wm_FontSizePx_14px"]},"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							layers2: ["wm.Layers", {"height":"159px"}, {}, {
								layer2: ["wm.Layer", {"caption":"layer2","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									panel2: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										layers3: ["wm.Layers", {"width":"350px"}, {}, {
											layer3: ["wm.Layer", {"caption":"layer3","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												a1: ["wm.TextEditor", {"caption":"1er Apellido","width":"100%","captionAlign":"left","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												a2: ["wm.TextEditor", {"caption":"2do Apellido","width":"100%","captionAlign":"left","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												n1: ["wm.TextEditor", {"caption":"1er Nombre","width":"100%","captionAlign":"left","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												n2: ["wm.TextEditor", {"caption":"2do Nombre","width":"100%","captionAlign":"left","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}]
											}]
										}],
										layers4: ["wm.Layers", {}, {}, {
											layer4: ["wm.Layer", {"caption":"layer4","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												cfamilia: ["wm.TextEditor", {"caption":"Grupo Familiar","width":"350px","captionAlign":"left","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												codigo: ["wm.TextEditor", {"caption":"Código","width":"350px","captionAlign":"left","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												panel3: ["wm.Panel", {"height":"60px","width":"100%","horizontalAlign":"left","verticalAlign":"bottom","layoutKind":"left-to-right"}, {}, {
													boton_buscar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"48px","width":"126px","margin":"2","caption":"Buscar","iconUrl":"resources/images/search.gif","iconMargin":"0 0px 0 0"}, {"onclick":"Vista_Personas_Demografica"}],
													boton_limpiar: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"48px","width":"110px","margin":"2","caption":"Limpiar Campos","iconUrl":"resources/images/ico/delete.gif","iconMargin":"0 0px 0 0"}, {"onclick":"boton_limpiarClick"}],
													boton_detalles: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"48px","width":"126px","margin":"2","caption":"Detalles","iconUrl":"resources/images/ico/detalles.gif","iconMargin":"0 0px 0 0","disabled":true}, {"onclick":"boton_detallesClick"}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				personaLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
					personaGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"LISTA DE RESULTADOS","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_FontSizePx_16px wm_TextDecoration_Bold wm_FontColor_White","margin":"2","height":"80%"}, {}, {
						panel5: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							Tabla_personas_docentes: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_16px"]},"border":"0"}, {"onSelected":"Tabla_personas_docentesSelected","onDeselected":"Tabla_personas_docentesDeselected"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"Vista_Personas_Demografica","expression":undefined}, {}]
								}],
								column2: ["wm.DataGridColumn", {"index":1,"caption":"Código","field":"id.codigo"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								column1: ["wm.DataGridColumn", {"index":2,"caption":"Apellidos","field":"id.apellido1","columnWidth":"340px","dataExpression":"${id.apellido1}+\" \"+${id.apellido2}"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								column4: ["wm.DataGridColumn", {"index":4,"caption":"Nombres","field":"id.nombre1","columnWidth":"340px","dataExpression":"${id.nombre1}+\" \"+${nombre2}"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								column7: ["wm.DataGridColumn", {"caption":"•","field":"id.codigo","columnWidth":"110px","dataExpression":"'<img src=\"http://aprendoz.rochester.edu.co/stds/'+${id.codigo}+\".jpg\"+'\" height=\"140\" width=\"100\"/><center>'"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}],
								column3: ["wm.DataGridColumn", {"index":4,"caption":"Grupo Familiar","field":"id.grupoFamiliar","columnWidth":"289px"}, {}, {
									format: ["wm.DataFormatter", {}, {}]
								}]
							}]
						}]
					}],
					personaDetailsPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_BottomStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"","captionClasses":"wm_BackgroundGradient_Blue wm_Border_BottomStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold wm_SilverBlueTheme_LightBlueInsetPanel","margin":"2","border":"3,3,3,3"}, {}, {
						personaLiveForm1: ["wm.LiveForm", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"height":"200%","verticalAlign":"top","horizontalAlign":"left","readonly":true}, {"onSuccess":"personaLiveVariable1","onBeginInsert":"listaPais","onBeginUpdate":"listaPais"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"personaDataGrid1.selectedItem","expression":undefined}, {}],
								wire2: ["wm.Wire", {"targetProperty":"dataOutput.grupoFamiliar","source":"grupoFamiliarRelatedEditor1.dataOutput","expression":undefined}, {}],
								wire1: ["wm.Wire", {"targetProperty":"dataOutput.tipoPersona","source":"relatedEditor1.dataOutput","expression":undefined}, {}]
							}],
							info: ["wm.TabLayers", {}, {}, {
								layer13: ["wm.Layer", {"caption":"Grupo Familiar","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									panel_grupo_familiar: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_FontColor_White","wm_TextDecoration_Bold"]},"height":"40px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										label10: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"100%","width":"383px","border":"0","caption":"INREGRANTES GRUPO FAMILIAR"}, {}, {
											format: ["wm.DataFormatter", {}, {}]
										}]
									}],
									panel1: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										personaDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_16px"]},"border":"0"}, {"onSelected":"personaDataGrid1Selected","onDeselected":"personaDataGrid1Deselected"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"targetProperty":"dataSet","source":"personaLiveVariable1","expression":undefined}, {}]
											}],
											codigo1: ["wm.DataGridColumn", {"caption":"•","field":"codigo","columnWidth":"70px","dataExpression":"'<img src=\"http://aprendoz.rochester.edu.co/stds/'+${codigo}+\".jpg\"+'\" height=\"80\" width=\"60\"/><center>'"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											apellido1: ["wm.DataGridColumn", {"index":2,"caption":"1er Apellido","field":"apellido1","columnWidth":"164px","autoSize":undefined}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											apellido2: ["wm.DataGridColumn", {"index":3,"caption":"2do Apellido","field":"apellido2","columnWidth":"160px","autoSize":undefined}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											nombre1: ["wm.DataGridColumn", {"index":4,"caption":"1er Nombre","field":"nombre1","columnWidth":"150px","autoSize":undefined}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											nombre2: ["wm.DataGridColumn", {"index":5,"caption":"2do Nombre","field":"nombre2","columnWidth":"145px","autoSize":undefined}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											idgrupofamiliar: ["wm.DataGridColumn", {"index":6,"caption":"Grupo Familiar","field":"grupoFamiliar.grupoFamiliar","columnWidth":"272px"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}],
											column2: ["wm.DataGridColumn", {"index":1,"caption":"Código","field":"codigo"}, {}, {
												format: ["wm.DataFormatter", {}, {}]
											}]
										}]
									}]
								}],
								layer5: ["wm.Layer", {"caption":"Info. Persona","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									panel4: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										layers5: ["wm.Layers", {}, {}, {
											layer6: ["wm.Layer", {"caption":"layer6","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												nombre1Editor1: ["wm.Editor", {"caption":"1er Nombre","readonly":true,"formField":"nombre1","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												nombre2Editor1: ["wm.Editor", {"caption":"2do Nombre","readonly":true,"formField":"nombre2","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												apellido1Editor1: ["wm.Editor", {"caption":"1er Apellido","readonly":true,"formField":"apellido1","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												apellido2Editor1: ["wm.Editor", {"caption":"2do Apellido","readonly":true,"formField":"apellido2","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												tipoPersonaRelatedEditor1: ["wm.RelatedEditor", {"formField":"tipoPersona"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire1: ["wm.Wire", {"targetProperty":"dataSet","source":"personaDataGrid1.selectedItem.tipoPersona","expression":undefined}, {}],
														wire: ["wm.Wire", {"targetProperty":"dataOutput","source":"tipoPersonaLookup1.selectedItem","expression":undefined}, {}]
													}],
													tipoPersonaLookup1: ["wm.Editor", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"Tipo persona","readonly":true,"formField":"","width":"100%","height":"26px","display":"Lookup"}, {"onchange":"tipoPersonaLookup1Change"}, {
														editor: ["wm._LookupEditor", {"displayField":"tipoPersona","autoDataSet":false,"startUpdate":false}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_tipo_persona","expression":undefined}, {}]
															}]
														}]
													}]
												}],
												idPersonaEditor1: ["wm.Editor", {"caption":"ID Persona","readonly":true,"formField":"idPersona","width":"100%","height":"26px","display":"Number"}, {}, {
													editor: ["wm._NumberEditor", {"required":true}, {}]
												}],
												selectEditor1: ["wm.SelectEditor", {"width":"150%","caption":"Curso actual","readonly":true,"formField":"inscAlumCursoIdInscAlumCurso"}, {}, {
													editor: ["wm._SelectEditor", {"displayField":"curso","dataField":"idCurso","startUpdate":true}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listcurso","expression":undefined}, {}]
														}]
													}]
												}],
												codigoEditor1: ["wm.Editor", {"caption":"Código","readonly":true,"formField":"codigo","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												sexoEditor1: ["wm.Editor", {"caption":"Género","readonly":true,"formField":"sexo","width":"100%","height":"26px","display":"Select"}, {}, {
													editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Masculino, Femenino"}, {}, {
														optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
													}]
												}],
												selectEditor2: ["wm.SelectEditor", {"width":"150%","caption":"Nacionalidad","readonly":true,"formField":"nacionalidad"}, {}, {
													editor: ["wm._SelectEditor", {"displayField":"pais","dataField":"pais"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listaPais","expression":undefined}, {}]
														}]
													}]
												}],
												textEditor1: ["wm.TextEditor", {"caption":"Pais Nacimiento","width":"150%","display":"Select","readonly":true,"formField":"paisNacId"}, {"onchange":"listaEstados"}, {
													editor: ["wm._SelectEditor", {"displayField":"pais","dataField":"idPais"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listaPais","expression":undefined}, {}]
														}]
													}]
												}],
												selectEditor3: ["wm.SelectEditor", {"width":"150%","caption":"Departamento Nacimiento ","readonly":true,"formField":"lugarNacimientoDepartamento"}, {}, {
													editor: ["wm._SelectEditor", {"displayField":"estado","dataField":"estado"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listaEstados","expression":undefined}, {}]
														}]
													}]
												}],
												lugarNacimientoMunicipioEditor1: ["wm.Editor", {"caption":"Municipio de nacimiento","readonly":true,"formField":"lugarNacimientoMunicipio","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												tipoDocumentoEditor1: ["wm.Editor", {"caption":"Tipo documento","readonly":true,"formField":"tipoDocumento","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												noDocumentoEditor1: ["wm.Editor", {"caption":"No documento","readonly":true,"formField":"noDocumento","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												lugarExpedicionDepartamentoEditor1: ["wm.Editor", {"caption":"Dpto Expedición","readonly":true,"formField":"lugarExpedicionDepartamento","width":"100%","height":"26px","display":"Select"}, {}, {
													editor: ["wm._SelectEditor", {"displayField":"estado","dataField":"estado"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listaEstados","expression":undefined}, {}]
														}]
													}]
												}],
												lugarExpedicionMunicipioEditor1: ["wm.Editor", {"caption":"Municipio Expedición","readonly":true,"formField":"lugarExpedicionMunicipio","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}]
											}]
										}],
										layers6: ["wm.Layers", {}, {}, {
											layer7: ["wm.Layer", {"caption":"layer7","horizontalAlign":"left","verticalAlign":"top"}, {}, {
												panel16: ["wm.Panel", {"height":"26px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
													spacer3: ["wm.Spacer", {"height":"100%","width":"100%"}, {}],
													checkBoxEditor1: ["wm.CheckBoxEditor", {"width":"100%","caption":"¿Matriculado?","emptyValue":"false","readonly":true,"formField":"matriculado","captionSize":"100%"}, {}, {
														editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
													}],
													activoRetiradoEditor1: ["wm.Editor", {"caption":"¿Activo?","readonly":true,"formField":"activoRetirado","width":"80%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false","captionSize":"100%"}, {}, {
														editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
													}],
													fechaRetiroEditor1: ["wm.Editor", {"caption":"Fecha retiro","readonly":true,"formField":"fechaRetiro","width":"100%","height":"26px","display":"Date","captionSize":"100%"}, {}, {
														editor: ["wm._DateEditor", {}, {}]
													}]
												}],
												emailEditor1: ["wm.Editor", {"caption":"E-mail","readonly":true,"formField":"email","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												nivelAcademicoEditor1: ["wm.Editor", {"caption":"Nivel académico","readonly":true,"formField":"nivelAcademico","width":"100%","height":"26px","display":"Select","disabled":true}, {}, {
													editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Bachiller, Universitario, Especializacion, Maestria, Doctorado"}, {}, {
														optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
													}]
												}],
												fechaNacimientoEditor1: ["wm.Editor", {"caption":"Fecha nacimiento","readonly":true,"formField":"fechaNacimiento","width":"100%","height":"30px","display":"Date"}, {}, {
													editor: ["wm._DateEditor", {}, {}]
												}],
												telefonoEditor1: ["wm.Editor", {"caption":"Teléfono","readonly":true,"formField":"telefono","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												telefono2Editor1: ["wm.Editor", {"caption":"Teléfono (alterno)","readonly":true,"formField":"telefono2","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												religionEditor1: ["wm.Editor", {"caption":"Religión","readonly":true,"formField":"religion","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												selectEditor4: ["wm.SelectEditor", {"width":"150%","caption":"Pais Domicilio","readonly":true,"formField":"paisDomicilio"}, {}, {
													editor: ["wm._SelectEditor", {"displayField":"pais","dataField":"pais"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listaPais2","expression":undefined}, {}]
														}]
													}]
												}],
												departamentoEditor1: ["wm.Editor", {"caption":"Departamento Domicilio","readonly":true,"formField":"departamento","width":"100%","height":"26px","display":"Select"}, {}, {
													editor: ["wm._SelectEditor", {"displayField":"estado","dataField":"estado"}, {}, {
														binding: ["wm.Binding", {}, {}, {
															wire: ["wm.Wire", {"targetProperty":"dataSet","source":"listaEstados2","expression":undefined}, {}]
														}]
													}]
												}],
												municipioEditor1: ["wm.Editor", {"caption":"Municipio","readonly":true,"formField":"municipio","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												direccionResidenciaEditor1: ["wm.Editor", {"caption":"Dirección domiciliar","readonly":true,"formField":"direccionResidencia","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												barrioEditor1: ["wm.Editor", {"caption":"Barrio","readonly":true,"formField":"barrio","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												cursoIngresoEditor1: ["wm.Editor", {"caption":"Curso ingreso","readonly":true,"formField":"cursoIngreso","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												colegioAnteriorEditor1: ["wm.Editor", {"caption":"Colegio anterior","readonly":true,"formField":"colegioAnterior","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												gradoIngresoEditor1: ["wm.Editor", {"caption":"Grado de ingreso","readonly":true,"formField":"gradoIngreso","width":"100%","height":"26px"}, {}, {
													editor: ["wm._TextEditor", {}, {}]
												}],
												layers8: ["wm.Layers", {}, {}, {
													layer8: ["wm.Layer", {"caption":"layer8","horizontalAlign":"left","verticalAlign":"top"}, {}]
												}]
											}]
										}]
									}]
								}],
								layer9: ["wm.Layer", {"caption":"Info. Familiar","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									viveConEditor1: ["wm.Editor", {"caption":"La persona vive con:","readonly":true,"formField":"viveCon","width":"60%","height":"26px","display":"Select","captionSize":"130%"}, {}, {
										editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Padre, Madre, Ambos"}, {}, {
											optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
										}]
									}],
									codigoFamiliaEditor1: ["wm.Editor", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"Código familiar","readonly":true,"formField":"codigoFamilia","width":"100%","height":"26px","disabled":true}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									fechaIngresoEditor1: ["wm.Editor", {"caption":"Fecha Ingreso","readonly":true,"formField":"fechaIngreso","width":"100%","height":"26px","display":"Date"}, {}, {
										editor: ["wm._DateEditor", {}, {}]
									}],
									panel19: ["wm.Panel", {"height":"26px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										spacer4: ["wm.Spacer", {"height":"48px","width":"411px"}, {}],
										hijoDeExalumnoEditor1: ["wm.Editor", {"caption":"¿Hijo de exalumno?","readonly":true,"formField":"hijoDeExalumno","width":"230px","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false","captionSize":"220%"}, {}, {
											editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
										}],
										nombrePadreExalumnoEditor1: ["wm.Editor", {"caption":"¿Padre/Madre exalumno?","readonly":true,"formField":"nombrePadreExalumno","width":"100%","height":"26px","display":"Select"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"Padre, Madre"}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}]
									}],
									promocionEditor1: ["wm.Editor", {"caption":"Promoción","readonly":true,"formField":"promocion","width":"100%","height":"26px"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}]
								}],
								layer16: ["wm.Layer", {"caption":"Info. Laboral","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									cargoEditor1: ["wm.Editor", {"caption":"Cargo","readonly":true,"formField":"cargo","width":"100%","height":"27px"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									profesionEditor1: ["wm.Editor", {"caption":"Profesión","readonly":true,"formField":"profesion","width":"100%","height":"26px"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									empresaEditor1: ["wm.Editor", {"caption":"Empresa","readonly":true,"formField":"empresa","width":"100%","height":"26px"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									panel20: ["wm.Panel", {"height":"26px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										spacer5: ["wm.Spacer", {"height":"100%","width":"434px"}, {}],
										direccionOficinaEditor1: ["wm.Editor", {"caption":"Dirección oficina","readonly":true,"formField":"direccionOficina","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										telefonoOficinaEditor1: ["wm.Editor", {"caption":"Teléfono oficina","readonly":true,"formField":"telefonoOficina","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}],
										celularEditor1: ["wm.Editor", {"caption":"Celular","readonly":true,"formField":"celular","width":"100%","height":"26px"}, {}, {
											editor: ["wm._TextEditor", {}, {}]
										}]
									}],
									panel21: ["wm.Panel", {"height":"48px","width":"100%","horizontalAlign":"left","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
										parentescoEditor1: ["wm.Editor", {"caption":"Parentesco","readonly":true,"formField":"parentesco","width":"100%","height":"26px","display":"Select"}, {}, {
											editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"HIJO, PADRE, MADRE, TIO-A, PADRASTRO/MADRASTRA, ABUELO-A, PRIMO-A, AMIGO-A"}, {}, {
												optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
											}]
										}]
									}]
								}],
								layer10: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"caption":"Info. Seguro y Emergencias","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									label7: ["wm.Label", {"_classes":{"domNode":["wm_Border_TopStyleCurved8px","wm_FontSizePx_14px","wm_BackgroundColor_SteelBlue"]},"height":"28px","width":"40%","border":"0","caption":"Información Seguro y Emergencias"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									epsEditor1: ["wm.Editor", {"caption":"Entidad Promotora de Salud (E.P.S)","readonly":true,"formField":"eps","width":"100%","height":"26px"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									saludPrepagadaEditor1: ["wm.Editor", {"caption":"Salud Prepagada","readonly":true,"formField":"saludPrepagada","width":"100%","height":"26px"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									numeroContratoSaludEditor1: ["wm.Editor", {"caption":"Número contrato salud","readonly":true,"formField":"numeroContratoSalud","width":"100%","height":"26px"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									clinicaEmergenciaEditor1: ["wm.Editor", {"caption":"Clínica emergencia","readonly":true,"formField":"clinicaEmergencia","width":"100%","height":"26px"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									tipoSangreEditor1: ["wm.Editor", {"caption":"Tipo Sangre","readonly":true,"formField":"tipoSangre","width":"100%","height":"26px","display":"Select"}, {}, {
										editor: ["wm._SelectEditor", {"displayField":"name","dataField":"dataValue","options":"A+,A-,B+,B-,O+,O-, AB+ , AB-"}, {}, {
											optionsVar: ["wm.Variable", {"type":"EntryData"}, {}]
										}]
									}]
								}],
								layer12: ["wm.Layer", {"caption":"Servicios","horizontalAlign":"left","verticalAlign":"top"}, {}, {
									label8: ["wm.Label", {"_classes":{"domNode":["wm_Border_TopStyleCurved8px","wm_FontSizePx_14px","wm_BackgroundColor_SteelBlue"]},"height":"28px","width":"40%","border":"0","caption":"Información Adicional"}, {}, {
										format: ["wm.DataFormatter", {}, {}]
									}],
									rutaMEditor1: ["wm.Editor", {"caption":"Ruta Mañana","readonly":true,"formField":"rutaM","width":"100%","height":"26px"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									rutaTEditor1: ["wm.Editor", {"caption":"Ruta Tarde","readonly":true,"formField":"rutaT","width":"100%","height":"26px"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}],
									tomaAlmuerzoEditor1: ["wm.Editor", {"caption":"¿Toma almuerzo?","readonly":true,"formField":"tomaAlmuerzo","width":"100%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false"}, {}, {
										editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
									}],
									tomaMediasNuevesEditor1: ["wm.Editor", {"caption":"¿Toma medias nueves?","readonly":true,"formField":"tomaMediasNueves","width":"100%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false"}, {}, {
										editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
									}],
									tomaSeguroAccidentesEditor1: ["wm.Editor", {"caption":"¿Toma seguro contra accidentes?","readonly":true,"formField":"tomaSeguroAccidentes","width":"100%","height":"26px","display":"CheckBox","displayValue":true,"emptyValue":"false"}, {}, {
										editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
									}],
									noPlaquetaEditor1: ["wm.Editor", {"caption":"No Plaqueta","readonly":true,"formField":"noPlaqueta","width":"100%","height":"26px"}, {}, {
										editor: ["wm._TextEditor", {}, {}]
									}]
								}]
							}],
							editPanel1: ["wm.EditPanel", {"liveForm":"personaLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1","lock":false,"roles":["7","10"]}, {}, {
								savePanel1: ["wm.Panel", {"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
									saveButton1: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
										}]
									}],
									cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
								}],
								operationPanel1: ["wm.Panel", {"_classes":{"domNode":["wm_FontSizePx_12px"]},"height":"100%","width":"100%","horizontalAlign":"right","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
									newButton1: ["wm.RoundedButton", {"caption":"NUEVO","width":"100px","height":"100%"}, {"onclick":"editPanel1.beginDataInsert"}],
									updateButton1: ["wm.RoundedButton", {"caption":"ACTUALIZAR","width":"130px","height":"100%","disabled":true}, {"onclick":"editPanel1.beginDataUpdate"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formUneditable","expression":undefined}, {}]
										}]
									}]
								}]
							}]
						}]
					}]
				}]
			}],
			tab_detalles_academicos: ["wm.Layer", {"caption":"Detalles académicos","horizontalAlign":"left","verticalAlign":"top"}, {"onShow":"tab_detalles_academicosShow"}, {
				panel22: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel","wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"210px","width":"100%","horizontalAlign":"left","verticalAlign":"top","border":"2","padding":"3","layoutKind":"left-to-right","borderColor":"#000000"}, {}, {
					tiny_img: ["wm.Picture", {"height":"100%","width":"187px","border":"0","source":"resources/images/ico/noImg.gif","aspect":"v"}, {}],
					layers12: ["wm.Layers", {}, {}, {
						layer20: ["wm.Layer", {"_classes":{"domNode":["wm_FontSizePx_14px"]},"caption":"layer20","horizontalAlign":"left","verticalAlign":"top"}, {}, {
							aux1: ["wm.TextEditor", {"caption":"Nombres","width":"390px","captionAlign":"left","captionSize":"70%","readonly":true}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							aux2: ["wm.TextEditor", {"caption":"Apellidos","width":"390px","captionAlign":"left","captionSize":"70%","readonly":true}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							aux3: ["wm.TextEditor", {"caption":"Tipo de documento","width":"390px","captionAlign":"left","captionSize":"70%","readonly":true}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							aux4: ["wm.TextEditor", {"caption":"No. Documento","width":"390px","captionAlign":"left","captionSize":"70%","readonly":true}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							aux5: ["wm.TextEditor", {"caption":"Curso Ingreso","width":"390px","captionAlign":"left","captionSize":"70%","readonly":true}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}],
							aux6: ["wm.TextEditor", {"caption":"E-mail contacto","width":"471px","captionAlign":"left","readonly":true}, {}, {
								editor: ["wm._TextEditor", {}, {}]
							}]
						}]
					}]
				}],
				inscalumasigLivePanel1: ["wm.LivePanel", {"verticalAlign":"top","horizontalAlign":"left"}, {}, {
					inscalumasigGridPanel: ["wm.FancyPanel", {"_classes":{"domNode":["wm_BackgroundGradient_Blue","wm_Border_DropShadow","wm_Border_BottomStyleCurved4px"]},"horizontalAlign":"left","verticalAlign":"top","title":"DETALLES ACADEMICOS","captionClasses":"wm_BackgroundGradient_Blue wm_Border_DropShadow wm_Border_BottomStyleCurved4px wm_FontSizePx_16px wm_FontColor_White wm_TextDecoration_Bold","margin":"2"}, {}, {
						panel24: ["wm.Panel", {"_classes":{"domNode":["wm_SilverBlueTheme_LightBlueInsetPanel"]},"height":"57px","width":"100%","horizontalAlign":"left","verticalAlign":"bottom","layoutKind":"left-to-right"}, {}, {
							label18: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_16px"]},"height":"37px","width":"431px","border":"0","caption":"BUSCAR DETALLES ACADEMICOS POR AÑO ESCOLAR:"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							caja_sy_detalles_academicos: ["wm.SelectEditor", {"_classes":{"captionNode":["wm_FontSizePx_14px"],"domNode":["wm_FontSizePx_16px"]},"width":"202px","caption":"Año escolar","height":"100%","disabled":true,"captionAlign":"left","captionPosition":"top"}, {"onchange":"Vista_Detalles_Academicos"}, {
								editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","required":true}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"targetProperty":"dataSet","source":"sylista","expression":undefined}, {}]
									}]
								}]
							}]
						}],
						tabla_detalles_academicos: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid","wm_FontSizePx_16px"]},"border":"0"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"Vista_Detalles_Academicos","expression":undefined}, {}]
							}],
							column2: ["wm.DataGridColumn", {"index":1,"caption":"●","field":"id.idAsignatura"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column1: ["wm.DataGridColumn", {"index":1,"caption":"Asignatura","field":"id.asignatura","columnWidth":"300px"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column3: ["wm.DataGridColumn", {"index":2,"caption":"Subject","field":"id.subject","columnWidth":"300px"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column4: ["wm.DataGridColumn", {"index":3,"caption":"Porcentaje","field":"id.porcentaje","columnWidth":"100px"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column5: ["wm.DataGridColumn", {"index":4,"caption":"Logrados","field":"id.logrados","columnWidth":"100px"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column6: ["wm.DataGridColumn", {"index":5,"caption":"Esperados","field":"id.esperados","columnWidth":"100px"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column7: ["wm.DataGridColumn", {"index":6,"caption":"Calificacion","field":"id.calificacion"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}],
							column8: ["wm.DataGridColumn", {"index":7,"caption":"Calificación (Char)","field":"id.califChar","columnWidth":"130px"}, {}, {
								format: ["wm.DataFormatter", {}, {}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}