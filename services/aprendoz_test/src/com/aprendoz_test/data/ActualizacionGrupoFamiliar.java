
package com.aprendoz_test.data;

import java.util.Date;


/**
 *  aprendoz_test.ActualizacionGrupoFamiliar
 *  09/03/2013 10:31:08
 * 
 */
public class ActualizacionGrupoFamiliar {

    private Integer idActualizacionGrupoFamiliar;
    private GrupoFamiliar grupoFamiliar;
    private Date fecha;
    private Byte actualizado;

    public ActualizacionGrupoFamiliar() {
    }

    public ActualizacionGrupoFamiliar(Integer idActualizacionGrupoFamiliar, Date fecha, Byte actualizado) {
        this.idActualizacionGrupoFamiliar = idActualizacionGrupoFamiliar;
        this.fecha = fecha;
        this.actualizado = actualizado;
    }

    public ActualizacionGrupoFamiliar(Integer idActualizacionGrupoFamiliar, GrupoFamiliar grupoFamiliar, Date fecha, Byte actualizado) {
        this.idActualizacionGrupoFamiliar = idActualizacionGrupoFamiliar;
        this.grupoFamiliar = grupoFamiliar;
        this.fecha = fecha;
        this.actualizado = actualizado;
    }

    public Integer getIdActualizacionGrupoFamiliar() {
        return idActualizacionGrupoFamiliar;
    }

    public void setIdActualizacionGrupoFamiliar(Integer idActualizacionGrupoFamiliar) {
        this.idActualizacionGrupoFamiliar = idActualizacionGrupoFamiliar;
    }

    public GrupoFamiliar getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(GrupoFamiliar grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }

    public Byte getActualizado() {
        return actualizado;
    }

    public void setActualizado(Byte actualizado) {
        this.actualizado = actualizado;
    }

}
