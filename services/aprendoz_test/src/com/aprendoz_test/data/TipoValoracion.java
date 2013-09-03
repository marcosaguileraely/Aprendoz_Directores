
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoValoracion
 *  09/03/2013 10:31:09
 * 
 */
public class TipoValoracion {

    private Integer idTipoValoracion;
    private String tipoValoracion;
    private Set<com.aprendoz_test.data.Actividad> actividads = new HashSet<com.aprendoz_test.data.Actividad>();

    public TipoValoracion() {
    }

    public TipoValoracion(Integer idTipoValoracion, String tipoValoracion) {
        this.idTipoValoracion = idTipoValoracion;
        this.tipoValoracion = tipoValoracion;
    }

    public TipoValoracion(Integer idTipoValoracion, String tipoValoracion, Set<com.aprendoz_test.data.Actividad> actividads) {
        this.idTipoValoracion = idTipoValoracion;
        this.tipoValoracion = tipoValoracion;
        this.actividads = actividads;
    }

    public Integer getIdTipoValoracion() {
        return idTipoValoracion;
    }

    public void setIdTipoValoracion(Integer idTipoValoracion) {
        this.idTipoValoracion = idTipoValoracion;
    }

    public String getTipoValoracion() {
        return tipoValoracion;
    }

    public void setTipoValoracion(String tipoValoracion) {
        this.tipoValoracion = tipoValoracion;
    }

    public Set<com.aprendoz_test.data.Actividad> getActividads() {
        return actividads;
    }

    public void setActividads(Set<com.aprendoz_test.data.Actividad> actividads) {
        this.actividads = actividads;
    }

}
