
package com.aprendoz_test.data;



/**
 *  aprendoz_test.ReporteDavivienda
 *  09/03/2013 10:31:08
 * 
 */
public class ReporteDavivienda {

    private Integer idReporteSapiensDavivienda;
    private String tarjetadav;
    private String numidres;
    private Float valor;
    private String nombres;
    private String nit;
    private String nnombre;
    private String cursoact;

    public ReporteDavivienda() {
    }

    public ReporteDavivienda(Integer idReporteSapiensDavivienda, String tarjetadav, String numidres, Float valor, String nombres, String nit, String nnombre, String cursoact) {
        this.idReporteSapiensDavivienda = idReporteSapiensDavivienda;
        this.tarjetadav = tarjetadav;
        this.numidres = numidres;
        this.valor = valor;
        this.nombres = nombres;
        this.nit = nit;
        this.nnombre = nnombre;
        this.cursoact = cursoact;
    }

    public Integer getIdReporteSapiensDavivienda() {
        return idReporteSapiensDavivienda;
    }

    public void setIdReporteSapiensDavivienda(Integer idReporteSapiensDavivienda) {
        this.idReporteSapiensDavivienda = idReporteSapiensDavivienda;
    }

    public String getTarjetadav() {
        return tarjetadav;
    }

    public void setTarjetadav(String tarjetadav) {
        this.tarjetadav = tarjetadav;
    }

    public String getNumidres() {
        return numidres;
    }

    public void setNumidres(String numidres) {
        this.numidres = numidres;
    }

    public Float getValor() {
        return valor;
    }

    public void setValor(Float valor) {
        this.valor = valor;
    }

    public String getNombres() {
        return nombres;
    }

    public void setNombres(String nombres) {
        this.nombres = nombres;
    }

    public String getNit() {
        return nit;
    }

    public void setNit(String nit) {
        this.nit = nit;
    }

    public String getNnombre() {
        return nnombre;
    }

    public void setNnombre(String nnombre) {
        this.nnombre = nnombre;
    }

    public String getCursoact() {
        return cursoact;
    }

    public void setCursoact(String cursoact) {
        this.cursoact = cursoact;
    }

}
