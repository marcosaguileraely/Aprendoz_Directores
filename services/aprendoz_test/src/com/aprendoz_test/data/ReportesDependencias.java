
package com.aprendoz_test.data;



/**
 *  aprendoz_test.ReportesDependencias
 *  09/03/2013 10:31:09
 * 
 */
public class ReportesDependencias {

    private Integer idReporteDependencia;
    private TipoDependencia tipoDependencia;
    private Reportes reportes;

    public ReportesDependencias() {
    }

    public ReportesDependencias(Integer idReporteDependencia) {
        this.idReporteDependencia = idReporteDependencia;
    }

    public ReportesDependencias(Integer idReporteDependencia, TipoDependencia tipoDependencia, Reportes reportes) {
        this.idReporteDependencia = idReporteDependencia;
        this.tipoDependencia = tipoDependencia;
        this.reportes = reportes;
    }

    public Integer getIdReporteDependencia() {
        return idReporteDependencia;
    }

    public void setIdReporteDependencia(Integer idReporteDependencia) {
        this.idReporteDependencia = idReporteDependencia;
    }

    public TipoDependencia getTipoDependencia() {
        return tipoDependencia;
    }

    public void setTipoDependencia(TipoDependencia tipoDependencia) {
        this.tipoDependencia = tipoDependencia;
    }

    public Reportes getReportes() {
        return reportes;
    }

    public void setReportes(Reportes reportes) {
        this.reportes = reportes;
    }

}
