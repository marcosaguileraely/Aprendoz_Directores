
package com.aprendoz_test.data;



/**
 *  aprendoz_test.ReportesTipoPersona
 *  09/03/2013 10:31:08
 * 
 */
public class ReportesTipoPersona {

    private Integer idreportestipopersona;
    private Reportes reportes;
    private TipoPersona tipoPersona;

    public ReportesTipoPersona() {
    }

    public ReportesTipoPersona(Integer idreportestipopersona) {
        this.idreportestipopersona = idreportestipopersona;
    }

    public ReportesTipoPersona(Integer idreportestipopersona, Reportes reportes, TipoPersona tipoPersona) {
        this.idreportestipopersona = idreportestipopersona;
        this.reportes = reportes;
        this.tipoPersona = tipoPersona;
    }

    public Integer getIdreportestipopersona() {
        return idreportestipopersona;
    }

    public void setIdreportestipopersona(Integer idreportestipopersona) {
        this.idreportestipopersona = idreportestipopersona;
    }

    public Reportes getReportes() {
        return reportes;
    }

    public void setReportes(Reportes reportes) {
        this.reportes = reportes;
    }

    public TipoPersona getTipoPersona() {
        return tipoPersona;
    }

    public void setTipoPersona(TipoPersona tipoPersona) {
        this.tipoPersona = tipoPersona;
    }

}
