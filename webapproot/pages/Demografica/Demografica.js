dojo.declare("Demografica", wm.Page, {
  start: function() {
    
  },
  boton_limpiarClick: function(inSender, inEvent) {
    try {
      
      this.cfamilia.clear();
      this.n1.clear();
      this.n2.clear();
      this.a1.clear();
      this.a2.clear();
      this.codigo.clear();
      this.Vista_Personas_Demografica.clearData();
      this.personaLiveVariable1.clearData();
      this.Vista_Detalles_Academicos.clearData();
      
    } catch(e) {
      console.error('ERROR IN boton_limpiarClick: ' + e); 
    } 
  },
  boton_detallesClick: function(inSender, inEvent) {
    try {
      this.iradetalles.update();
     
    } catch(e) {
      console.error('ERROR IN boton_detallesClick: ' + e); 
    } 
  },

  tipoPersonaLookup1Change: function(inSender, inDisplayValue, inDataValue) {
    try {
     if(this.tipoPersonaLookup1.dataValue=="Estudiante"){  
      
      this.nivelAcademicoEditor1.disable();
      
                }  
      if(this.tipoPersonaLookup1.dataValue!="Estudiante"){  
     
       this.nivelAcademicoEditor1.enable();
                }  
            } catch(e) {
      console.error('ERROR IN tipoPersonaLookup1Change: ' + e); 
    } 
  },
  tab_detalles_academicosShow: function(inSender) {
    try {
     this.sylista.update();
      this.aux1.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().apellido1+" "+this.personaDataGrid1.selectedItem.getData().apellido2);
      this.aux2.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().nombre1+ " "+this.personaDataGrid1.selectedItem.getData().nombre2);
      this.aux3.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().tipoDocumento);
      this.aux4.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().noDocumento);
      this.aux5.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().cursoIngreso);
      this.aux6.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().email);
      
    } catch(e) {
      console.error('ERROR IN tab_detalles_academicosShow: ' + e); 
    } 
  },
  layer13Show: function(inSender) {
    try {
      this.aux7.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().apellido1+" "+this.personaDataGrid1.selectedItem.getData().apellido2);
      this.aux8.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().nombre1+ " "+this.personaDataGrid1.selectedItem.getData().nombre2);
      this.aux9.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().tipoDocumento);
      this.aux10.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().noDocumento);
      this.aux11.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().cursoIngreso);
      this.aux12.setValue("dataValue", this.personaDataGrid1.selectedItem.getData().email);
      
    } catch(e) {
      console.error('ERROR IN layer13Show: ' + e); 
    } 
  },
  
  Tabla_personas_docentesSelected: function(inSender, inIndex) {
    try {
      this.boton_detalles.enable();
       this.caja_sy_detalles_academicos.enable();
        this.tiny_img.setSource("http://aprendoz.rochester.edu.co/stds/"+this.Tabla_personas_docentes.selectedItem.getData().id.codigo+".jpg");
         this.personaLiveVariable1.update();
      
    } catch(e) {
      console.error('ERROR IN personaDataGrid2Selected: ' + e); 
    } 
  },
  Tabla_personas_docentesDeselected: function(inSender, inIndex) {
    try {
      this.boton_detalles.disable();
       this.caja_sy_detalles_academicos.disable();      
    } catch(e) {
      console.error('ERROR IN personaDataGrid2Deselected: ' + e); 
    } 
  },
  personaDataGrid1Selected: function(inSender, inIndex) {
    try {
    this.ls_tipo_persona.update();
     this.listaPais.update();
      
    } catch(e) {
      console.error('ERROR IN personaDataGrid1Selected: ' + e); 
    } 
  },
  ls_tipo_personaBeforeUpdate: function(inSender, ioInput) {
    try {
      app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN ls_tipo_personaBeforeUpdate: ' + e); 
    } 
  },
  ls_tipo_personaSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
      
    } catch(e) {
      console.error('ERROR IN ls_tipo_personaSuccess: ' + e); 
    } 
  },
  listaPaisBeforeUpdate: function(inSender, ioInput) {
    try {
       app.pageDialog.showPage("Loading_message", true, 456,90);
      
    } catch(e) {
      console.error('ERROR IN listaPaisBeforeUpdate: ' + e); 
    } 
  },
  listaPaisSuccess: function(inSender, inDeprecated) {
    try {
      app.pageDialog.dismiss("Loading_message");
      
    } catch(e) {
      console.error('ERROR IN listaPaisSuccess: ' + e); 
    } 
  },
  _end: 0
});