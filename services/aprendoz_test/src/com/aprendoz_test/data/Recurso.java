
package com.aprendoz_test.data;



/**
 *  aprendoz_test.Recurso
 *  09/03/2013 10:31:08
 * 
 */
public class Recurso {

    private Integer idRecurso;
    private Subtopico subtopico;
    private TipoRecurso tipoRecurso;
    private String recurso;
    private byte[] documento;
    private String ubicacion;
    private Integer idSyIdIdSy;

    public Recurso() {
    }

    public Recurso(Integer idRecurso, String recurso, String ubicacion, Integer idSyIdIdSy) {
        this.idRecurso = idRecurso;
        this.recurso = recurso;
        this.ubicacion = ubicacion;
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Recurso(Integer idRecurso, Subtopico subtopico, TipoRecurso tipoRecurso, String recurso, byte[] documento, String ubicacion, Integer idSyIdIdSy) {
        this.idRecurso = idRecurso;
        this.subtopico = subtopico;
        this.tipoRecurso = tipoRecurso;
        this.recurso = recurso;
        this.documento = documento;
        this.ubicacion = ubicacion;
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Integer getIdRecurso() {
        return idRecurso;
    }

    public void setIdRecurso(Integer idRecurso) {
        this.idRecurso = idRecurso;
    }

    public Subtopico getSubtopico() {
        return subtopico;
    }

    public void setSubtopico(Subtopico subtopico) {
        this.subtopico = subtopico;
    }

    public TipoRecurso getTipoRecurso() {
        return tipoRecurso;
    }

    public void setTipoRecurso(TipoRecurso tipoRecurso) {
        this.tipoRecurso = tipoRecurso;
    }

    public String getRecurso() {
        return recurso;
    }

    public void setRecurso(String recurso) {
        this.recurso = recurso;
    }

    public byte[] getDocumento() {
        return documento;
    }

    public void setDocumento(byte[] documento) {
        this.documento = documento;
    }

    public String getUbicacion() {
        return ubicacion;
    }

    public void setUbicacion(String ubicacion) {
        this.ubicacion = ubicacion;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

}
