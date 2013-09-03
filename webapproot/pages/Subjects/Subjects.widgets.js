Subjects.widgets = {
	ls_subjects: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"subjectsByGrade"}, {}, {
		input: ["wm.ServiceInput", {"type":"subjectsByGradeInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"_grado","source":"select_grade.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"_sy","source":"select_sy.dataValue"}, {}]
			}]
		}]
	}],
	subjectById: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"subjectDetails"}, {"onSuccess":"subjectByIdSuccess"}, {
		input: ["wm.ServiceInput", {"type":"subjectDetailsInputs"}, {}]
	}],
	ls_area: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Area"}, {}],
	ls_subareas: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Subarea"}, {}],
	updateSubjects: ["wm.Variable", {"type":"com.aprendoz_test.data.Asignatura"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"targetProperty":"asignatura","source":"subject_asignatura.dataValue"}, {}],
			wire2: ["wm.Wire", {"targetProperty":"descripAsigEspaniol","source":"subject_descripcion.dataValue"}, {}],
			wire3: ["wm.Wire", {"targetProperty":"descripAsigIngles","source":"subject_description.dataValue"}, {}],
			wire5: ["wm.Wire", {"targetProperty":"esperadostotal","source":"subject_esperados.dataValue"}, {}],
			wire6: ["wm.Wire", {"targetProperty":"idArea1","source":"subject_area1.dataValue"}, {}],
			wire7: ["wm.Wire", {"targetProperty":"idArea2","source":"subject_area2.dataValue"}, {}],
			wire8: ["wm.Wire", {"targetProperty":"idArea3","source":"subject_area3.dataValue"}, {}],
			wire9: ["wm.Wire", {"targetProperty":"idSubarea1","source":"subject_sub1.dataValue"}, {}],
			wire10: ["wm.Wire", {"targetProperty":"idSubarea2","source":"subject_sub2.dataValue"}, {}],
			wire11: ["wm.Wire", {"targetProperty":"idSubarea3","source":"subject_sub3.dataValue"}, {}],
			wire12: ["wm.Wire", {"targetProperty":"ihA1","source":"subject_iha1.dataValue"}, {}],
			wire13: ["wm.Wire", {"targetProperty":"ihA2","source":"subject_iha2.dataValue"}, {}],
			wire14: ["wm.Wire", {"targetProperty":"ihA3","source":"subject_iha3.dataValue"}, {}],
			wire15: ["wm.Wire", {"targetProperty":"intensidadHoraria","source":"subject_ihtotal.dataValue"}, {}],
			wire16: ["wm.Wire", {"targetProperty":"meses","source":"subject_meses.dataValue"}, {}],
			wire17: ["wm.Wire", {"targetProperty":"peso","source":"subject_peso.dataValue"}, {}],
			wire18: ["wm.Wire", {"targetProperty":"salonIdSalon","source":"subject_salon.dataValue"}, {}],
			wire19: ["wm.Wire", {"targetProperty":"subject","source":"subject_subject.dataValue"}, {}],
			wire22: ["wm.Wire", {"targetProperty":"tipoInscAsig.idTipoInscAsig","source":"subject_tipo.dataValue"}, {}],
			wire: ["wm.Wire", {"targetProperty":"idAsignatura","source":"subject_idasignatura.dataValue"}, {}],
			wire4: ["wm.Wire", {"targetProperty":"grado.idGrado","source":"subject_grado.dataValue"}, {}],
			wire20: ["wm.Wire", {"targetProperty":"sy.idSy","source":"subject_sy.dataValue"}, {}]
		}]
	}],
	getNewIdSubject: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"getMaxSubjectByGrade"}, {}, {
		input: ["wm.ServiceInput", {"type":"getMaxSubjectByGradeInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"idgrado","source":"select_grade.dataValue"}, {}],
				wire1: ["wm.Wire", {"targetProperty":"idsy","source":"select_sy.dataValue"}, {}]
			}]
		}]
	}],
	deleteSubject: ["wm.ServiceVariable", {"service":"aprendoz_test","operation":"deleteSubject"}, {"onSuccess":"deleteSubjectSuccess"}, {
		input: ["wm.ServiceInput", {"type":"deleteSubjectInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"targetProperty":"idasignatura","source":"subject_idasignatura.dataValue"}, {}]
			}]
		}]
	}],
	ejeLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.ejeLiveView1","matchMode":"anywhere"}, {}],
	areaLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"startUpdate":false,"liveSource":"app.areaLiveView1","matchMode":"anywhere"}, {"onSuccess":"areaLiveVariable1Success"}],
	sy: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Sy","orderBy":"desc: idSy"}, {}],
	grados: ["wm.LiveVariable", {"liveSource":"com.aprendoz_test.data.Grado"}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","width":"100%","horizontalAlign":"left","verticalAlign":"top","padding":"20"}, {}, {
		__: ["wm.Panel", {"height":"46px","horizontalAlign":"left","width":"100%","verticalAlign":"bottom","layoutKind":"left-to-right"}, {}, {
			asignatura_button: ["wm.Button", {"height":"40px","width":"110px","caption":"Asignaturas","borderColor":"#C1272D","margin":"4,4,0,4","iconUrl":"resources/images/buttons/subjects.png","iconWidth":"20px","iconMargin":"0 5px 0 0","iconHeight":"20px"}, {"onclick":"asignatura_buttonClick"}],
			areas_button: ["wm.Button", {"height":"40px","width":"96px","caption":"Areas","borderColor":"#C1272D","margin":"4,4,0,4","iconUrl":"resources/images/buttons/area2.png","iconWidth":"20px","iconMargin":"0 5px 0 0","iconHeight":"20px"}, {"onclick":"areas_buttonClick"}],
			ejes_button: ["wm.Button", {"height":"40px","width":"96px","caption":"Ejes","borderColor":"#C1272D","margin":"4,4,0,4","iconUrl":"resources/images/buttons/eje2.png","iconWidth":"20px","iconMargin":"0 5px 0 0","iconHeight":"20px"}, {"onclick":"ejes_buttonClick"}]
		}],
		subjects: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true}, {}, {
			left_menu: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"100%","horizontalAlign":"left","width":"35%","verticalAlign":"top","padding":"10"}, {}, {
				panel2: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"34px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					label3: ["wm.Label", {"caption":"ASIGNATURAS","height":"100%","width":"100%","border":"0"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				subject_top_message: ["wm.Label", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_Border_BottomStyleCurved4px"]},"caption":"Instrucciones sobre Asignaturas: <br><br>En este módulo usted podrá realizar acciones sobre las asignaturas: Crear - Actualizar - Eliminar (Dependiendo de su perfil de seguridad). <br><br>1). Para empezar seleccione el Año escolar y Grado para visualizar las asignaturas relacionadas.  <br><br>2). A continuación seleccione la asignatura a modificar.<br><br>3). Una vez el formulario muestre la asignatura seleccionada y todos sus detalles, proceda a realizar las acciones indicadas en el formulario.","height":"210px","width":"100%","border":"0","padding":"8","singleLine":false}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				select_sy: ["wm.SelectEditor", {"width":"100%","caption":"Año escolar"}, {}, {
					editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"sy","expression":undefined}, {}]
						}]
					}]
				}],
				select_grade: ["wm.SelectEditor", {"width":"150%","caption":"Grados"}, {"onchange":"select_gradeChange"}, {
					editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"targetProperty":"dataSet","source":"grados","expression":undefined}, {}]
						}]
					}]
				}],
				asignaturas: ["wm.List", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","width":"100%","border":"0","dataFields":"id, asignatura","columnWidths":"20%,80%"}, {"onselect":"asignaturasSelect","ondeselect":"asignaturasDeselect"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_subjects","expression":undefined}, {}]
					}]
				}]
			}],
			main_form: ["wm.Panel", {"height":"100%","horizontalAlign":"center","width":"75%","verticalAlign":"top","padding":"0,10,10,10","autoScroll":true}, {}, {
				subject_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_Border_TopStyleCurved8px"]},"height":"44px","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					subject_newRecord: ["wm.Button", {"height":"100%","width":"96px","caption":"Nuevo","borderColor":"#0044cc","disabled":true}, {"onclick":"subject_newRecordClick"}],
					subject_updateRecord: ["wm.Button", {"height":"100%","width":"96px","caption":"Actualizar","borderColor":"#0044cc","disabled":true}, {"onclick":"subject_updateRecordClick"}],
					subject_saveNewRecord: ["wm.Button", {"height":"100%","width":"96px","caption":"Guardar","borderColor":"#cccccc","showing":false}, {"onclick":"subject_saveNewRecordClick"}],
					subject_saveUpdateRecord: ["wm.Button", {"height":"100%","width":"96px","caption":"Guardar","borderColor":"#cccccc","showing":false}, {"onclick":"subject_saveUpdateRecordClick"}],
					subject_cancelOperation: ["wm.Button", {"_classes":{"domNode":["wm_Border_TopStyleCurved4px","wm_Border_BottomStyleCurved4px"]},"height":"100%","width":"96px","caption":"Cancelar","borderColor":"#cccccc","showing":false}, {"onclick":"subject_cancelOperationClick"}],
					subject_deleteRecord: ["wm.Button", {"height":"100%","width":"96px","caption":"Borrar","borderColor":"#bd362f","disabled":true}, {"onclick":"subject_deleteRecordClick"}]
				}],
				subject_content_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					subject_content_left_col: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
						subject_idasignatura: ["wm.NumberEditor", {"caption":"Id","readonly":true,"width":"100%"}, {}, {
							editor: ["wm._NumberEditor", {}, {}]
						}],
						subject_asignatura: ["wm.TextEditor", {"width":"100%","caption":"Asignatura","readonly":true}, {}, {
							editor: ["wm._TextEditor", {"required":true}, {}]
						}],
						subject_descripcion: ["wm.TextAreaEditor", {"height":"120px","width":"100%","caption":"Descripción","singleLine":false,"readonly":true}, {}, {
							editor: ["wm._TextAreaEditor", {"required":true}, {}]
						}],
						subject_sy: ["wm.SelectEditor", {"width":"100%","caption":"Año escolar","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"sy","expression":undefined}, {}]
								}]
							}]
						}],
						subject_area1: ["wm.SelectEditor", {"width":"100%","caption":"Area No.1","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"area","dataField":"idArea","required":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_area","expression":undefined}, {}]
								}]
							}]
						}],
						subject_area2: ["wm.SelectEditor", {"width":"100%","caption":"Area No.2","emptyValue":"zero","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"area","dataField":"idArea"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_area","expression":undefined}, {}]
								}]
							}]
						}],
						subject_area3: ["wm.SelectEditor", {"width":"100%","caption":"Area No.3","emptyValue":"zero","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"area","dataField":"idArea"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_area","expression":undefined}, {}]
								}]
							}]
						}],
						subject_iha1: ["wm.NumberEditor", {"caption":"Inten Area No.1","readonly":true,"display":"Text","width":"100%"}, {"onchange":"subject_iha1Change"}, {
							editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
						}],
						subject_iha2: ["wm.NumberEditor", {"caption":"Inten Area No.2","readonly":true,"display":"Text","width":"100%"}, {"onchange":"subject_iha2Change"}, {
							editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
						}],
						subject_iha3: ["wm.NumberEditor", {"caption":"Inten Area No.3","readonly":true,"display":"Text","width":"100%"}, {"onchange":"subject_iha3Change"}, {
							editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
						}],
						subject_ihtotal: ["wm.NumberEditor", {"caption":"* Intensidad Total","readonly":true,"display":"Text","width":"100%"}, {}, {
							editor: ["wm._TextEditor", {}, {}]
						}]
					}],
					subject_content_right_col: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
						subject_electiva: ["wm.CheckBoxEditor", {"width":"100%","caption":"Electiva","readonly":true}, {}, {
							editor: ["wm._CheckBoxEditor", {}, {}]
						}],
						subject_subject: ["wm.TextEditor", {"width":"100%","caption":"Subject","readonly":true}, {}, {
							editor: ["wm._TextEditor", {"required":true}, {}]
						}],
						subject_salon: ["wm.TextEditor", {"width":"100%","caption":"Salon","showing":false,"readonly":true}, {}, {
							editor: ["wm._TextEditor", {}, {}]
						}],
						subject_tipo: ["wm.TextEditor", {"width":"100%","caption":"Tipo Asignatura","showing":false,"readonly":true}, {}, {
							editor: ["wm._TextEditor", {}, {}]
						}],
						subject_description: ["wm.TextEditor", {"width":"100%","caption":"Description","height":"120px","singleLine":false,"readonly":true}, {}, {
							editor: ["wm._TextEditor", {"required":true}, {}]
						}],
						subject_grado: ["wm.SelectEditor", {"width":"100%","caption":"Grado","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"grado","dataField":"idGrado"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"grados","expression":undefined}, {}]
								}]
							}]
						}],
						subject_sub1: ["wm.SelectEditor", {"width":"100%","caption":"Sub area No.1","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"subarea","dataField":"idSubarea","required":true}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_subareas","expression":undefined}, {}]
								}]
							}]
						}],
						subject_sub2: ["wm.SelectEditor", {"width":"100%","caption":"Sub area No.2","emptyValue":"zero","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"subarea","dataField":"idSubarea"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_subareas","expression":undefined}, {}]
								}]
							}]
						}],
						subject_sub3: ["wm.SelectEditor", {"width":"100%","caption":"Sub area No.3","emptyValue":"zero","readonly":true}, {}, {
							editor: ["wm._SelectEditor", {"displayField":"subarea","dataField":"idSubarea"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ls_subareas","expression":undefined}, {}]
								}]
							}]
						}],
						subject_esperados: ["wm.NumberEditor", {"caption":"Esperados Año","readonly":true,"width":"100%"}, {}, {
							editor: ["wm._NumberEditor", {}, {}]
						}],
						subject_meses: ["wm.NumberEditor", {"caption":"No. Meses","readonly":true,"display":"Text","width":"100%"}, {}, {
							editor: ["wm._TextEditor", {}, {}]
						}],
						subject_peso: ["wm.NumberEditor", {"caption":"Peso asignatura","readonly":true,"display":"Text","width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataValue","source":"subject_ihtotal.dataValue"}, {}]
							}],
							editor: ["wm._TextEditor", {}, {}]
						}]
					}]
				}],
				subjectDataForm: ["wm.LiveForm", {"height":"84px","verticalAlign":"top","horizontalAlign":"left","readonly":true,"width":"400px","showing":false}, {"onInsertData":"subjectDataFormInsertData","onSuccess":"ls_subjects","onUpdateData":"subjectDataFormUpdateData","onDeleteData":"subjectDataFormDeleteData"}],
				subject_footer: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray","wm_Border_BottomStyleCurved8px"]},"height":"48px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}]
			}]
		}],
		axis: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
			axis_left_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","width":"70%","verticalAlign":"top"}, {}, {
				panel4: ["wm.Panel", {"height":"37px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					label2: ["wm.Label", {"caption":"EJES","height":"100%","width":"100%","border":"0"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				search_panel: ["wm.Panel", {"height":"65px","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
					search_axis_label: ["wm.Label", {"caption":"Ingrese a continuación el nombre del eje a buscar","height":"30px","width":"100%","border":"0"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					search_axis_textEditor: ["wm.TextEditor", {"width":"100%","height":"28px"}, {"onchange":"search_axis_textEditorChange"}, {
						editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
					}]
				}],
				panel_axis_header: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"34px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					header_axis_label: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"FORMULARIO DE EJES","height":"100%","width":"100%","border":"0"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				ejeLiveForm1: ["wm.LiveForm", {"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"validateBeforeSave":true}, {"onSuccess":"ejeLiveVariable1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ejeDataGrid1.selectedItem","expression":undefined}, {}]
					}],
					idEjeEditor1: ["wm.Editor", {"caption":"Id Eje","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idEje"}, {}, {
						editor: ["wm._NumberEditor", {"required":true}, {}]
					}],
					ejeTematicoEditor1: ["wm.Editor", {"caption":"Eje","width":"100%","height":"26px","readonly":true,"formField":"ejeTematico"}, {}, {
						editor: ["wm._TextEditor", {}, {}]
					}],
					axisEditor1: ["wm.Editor", {"caption":"Axis","width":"100%","height":"26px","readonly":true,"formField":"axis"}, {}, {
						editor: ["wm._TextEditor", {}, {}]
					}],
					activoEditor1: ["wm.Editor", {"caption":"Activo","width":"100%","height":"26px","display":"CheckBox","readonly":true,"formField":"activo","displayValue":true,"emptyValue":"false"}, {}, {
						editor: ["wm._CheckBoxEditor", {"dataType":"boolean"}, {}]
					}],
					editPanel1: ["wm.EditPanel", {"liveForm":"ejeLiveForm1","savePanel":"savePanel1","operationPanel":"operationPanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
							saveButton1: ["wm.RoundedButton", {"caption":"Guardar","width":"100px","height":"100%"}, {"onclick":"editPanel1.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel1.formInvalid","expression":undefined}, {}]
								}]
							}],
							cancelButton1: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel1.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							newButton1: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel1.beginDataInsert"}],
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
					}]
				}]
			}],
			ejeDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"ejeLiveVariable1","expression":undefined}, {}]
				}],
				idEje1: ["wm.DataGridColumn", {"caption":"+","field":"idEje","columnWidth":"52px","display":"Number","autoSize":undefined}, {}, {
					format: ["wm.NumberFormatter", {}, {}]
				}],
				ejeTematico1: ["wm.DataGridColumn", {"caption":"Ejes","field":"ejeTematico","columnWidth":"100%","index":1}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				axis1: ["wm.DataGridColumn", {"caption":"Axis","field":"axis","columnWidth":"100%","index":2}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				activo1: ["wm.DataGridColumn", {"caption":"Activo","field":"activo","columnWidth":"50px","index":3}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}],
		areas: ["wm.Panel", {"height":"100%","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","lock":true,"showing":false}, {}, {
			area_left_panel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","width":"70%","verticalAlign":"top"}, {}, {
				areas_header_panel: ["wm.Panel", {"height":"37px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					label1: ["wm.Label", {"caption":"AREAS","height":"100%","width":"100%","border":"0"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				panel3: ["wm.Panel", {"height":"65px","horizontalAlign":"left","width":"100%","verticalAlign":"top"}, {}, {
					search_axis_label1: ["wm.Label", {"caption":"Ingrese a continuación el nombre del area a buscar","height":"30px","width":"100%","border":"0"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					search_areas_textEditor: ["wm.TextEditor", {"width":"100%","height":"28px"}, {"onchange":"search_areas_textEditorChange"}, {
						editor: ["wm._TextEditor", {"changeOnKey":true,"changeOnEnter":true}, {}]
					}]
				}],
				panel1: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundColor_VeryLightGray"]},"height":"34px","horizontalAlign":"left","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
					header_axis_label1: ["wm.Label", {"_classes":{"domNode":["wm_TextDecoration_Bold"]},"caption":"FORMULARIO DE AREAS","height":"100%","width":"100%","border":"0"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}],
				areaLiveForm1: ["wm.LiveForm", {"height":"100%","verticalAlign":"top","horizontalAlign":"left","readonly":true,"validateBeforeSave":true}, {"onSuccess":"areaLiveVariable1"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"targetProperty":"dataSet","source":"areaDataGrid1.selectedItem","expression":undefined}, {}]
					}],
					idAreaEditor1: ["wm.Editor", {"caption":"Id Area","width":"100%","height":"26px","display":"Number","readonly":true,"formField":"idArea"}, {}, {
						editor: ["wm._NumberEditor", {}, {}]
					}],
					areaEditor1: ["wm.Editor", {"caption":"Area","width":"100%","height":"26px","readonly":true,"formField":"area"}, {}, {
						editor: ["wm._TextEditor", {"required":true}, {}]
					}],
					areaNameEditor1: ["wm.Editor", {"caption":"Area (English)","width":"100%","height":"26px","readonly":true,"formField":"areaName"}, {}, {
						editor: ["wm._TextEditor", {"required":true}, {}]
					}],
					idSyIdIdSyEditor1: ["wm.Editor", {"caption":"Año escolar","width":"100%","height":"26px","display":"Select","readonly":true,"formField":"idSyIdIdSy"}, {}, {
						editor: ["wm._SelectEditor", {"displayField":"schoolYear","dataField":"idSy","required":true}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"targetProperty":"dataSet","source":"sy","expression":undefined}, {}]
							}]
						}]
					}],
					editPanel2: ["wm.EditPanel", {"liveForm":"areaLiveForm1","savePanel":"savePanel2","operationPanel":"operationPanel2"}, {}, {
						savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right","showing":false}, {}, {
							saveButton2: ["wm.RoundedButton", {"caption":"Guardar Area","width":"130px","height":"100%"}, {"onclick":"editPanel2.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"targetProperty":"disabled","source":"editPanel2.formInvalid","expression":undefined}, {}]
								}]
							}],
							cancelButton2: ["wm.RoundedButton", {"caption":"Cancelar","width":"100px","height":"100%"}, {"onclick":"editPanel2.cancelEdit"}]
						}],
						operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","width":"100%","verticalAlign":"top","layoutKind":"left-to-right"}, {}, {
							newButton2: ["wm.RoundedButton", {"caption":"Nuevo","width":"100px","height":"100%"}, {"onclick":"editPanel2.beginDataInsert"}],
							updateButton2: ["wm.RoundedButton", {"caption":"Actualizar","width":"100px","height":"100%","disabled":true}, {"onclick":"editPanel2.beginDataUpdate"}, {
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
			areaDataGrid1: ["wm.DataGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"targetProperty":"dataSet","source":"areaLiveVariable1"}, {}]
				}],
				idArea1: ["wm.DataGridColumn", {"caption":"+","field":"idArea","columnWidth":"52px","display":"Number"}, {}, {
					format: ["wm.NumberFormatter", {}, {}]
				}],
				area1: ["wm.DataGridColumn", {"caption":"Area","field":"area","columnWidth":"100%","index":1}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}],
				areaName1: ["wm.DataGridColumn", {"caption":"AreaName","field":"areaName","columnWidth":"100%","index":2}, {}, {
					format: ["wm.DataFormatter", {}, {}]
				}]
			}]
		}]
	}]
}