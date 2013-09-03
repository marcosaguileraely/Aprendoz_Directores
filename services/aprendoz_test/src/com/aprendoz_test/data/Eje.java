
package com.aprendoz_test.data;



/**
 *  aprendoz_test.Eje
 *  09/03/2013 10:31:08
 * 
 */
public class Eje {

    private Integer idEje;
    private Subarea subarea;
    private String ejeTematico;
    private String axis;
    private Boolean activo;

    public Eje() {
    }

    public Eje(Integer idEje, String ejeTematico, String axis, Boolean activo) {
        this.idEje = idEje;
        this.ejeTematico = ejeTematico;
        this.axis = axis;
        this.activo = activo;
    }

    public Eje(Integer idEje, Subarea subarea, String ejeTematico, String axis, Boolean activo) {
        this.idEje = idEje;
        this.subarea = subarea;
        this.ejeTematico = ejeTematico;
        this.axis = axis;
        this.activo = activo;
    }

    public Integer getIdEje() {
        return idEje;
    }

    public void setIdEje(Integer idEje) {
        this.idEje = idEje;
    }

    public Subarea getSubarea() {
        return subarea;
    }

    public void setSubarea(Subarea subarea) {
        this.subarea = subarea;
    }

    public String getEjeTematico() {
        return ejeTematico;
    }

    public void setEjeTematico(String ejeTematico) {
        this.ejeTematico = ejeTematico;
    }

    public String getAxis() {
        return axis;
    }

    public void setAxis(String axis) {
        this.axis = axis;
    }

    public Boolean getActivo() {
        return activo;
    }

    public void setActivo(Boolean activo) {
        this.activo = activo;
    }

}
