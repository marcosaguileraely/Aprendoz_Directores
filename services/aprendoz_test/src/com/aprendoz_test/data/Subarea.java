
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.Subarea
 *  09/03/2013 10:31:08
 * 
 */
public class Subarea {

    private Integer idSubarea;
    private Area area;
    private String subarea;
    private Integer idSyIdIdSy;
    private Set<com.aprendoz_test.data.Eje> ejes = new HashSet<com.aprendoz_test.data.Eje>();

    public Subarea() {
    }

    public Subarea(Integer idSubarea, String subarea, Integer idSyIdIdSy) {
        this.idSubarea = idSubarea;
        this.subarea = subarea;
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Subarea(Integer idSubarea, Area area, String subarea, Integer idSyIdIdSy, Set<com.aprendoz_test.data.Eje> ejes) {
        this.idSubarea = idSubarea;
        this.area = area;
        this.subarea = subarea;
        this.idSyIdIdSy = idSyIdIdSy;
        this.ejes = ejes;
    }

    public Integer getIdSubarea() {
        return idSubarea;
    }

    public void setIdSubarea(Integer idSubarea) {
        this.idSubarea = idSubarea;
    }

    public Area getArea() {
        return area;
    }

    public void setArea(Area area) {
        this.area = area;
    }

    public String getSubarea() {
        return subarea;
    }

    public void setSubarea(String subarea) {
        this.subarea = subarea;
    }

    public Integer getIdSyIdIdSy() {
        return idSyIdIdSy;
    }

    public void setIdSyIdIdSy(Integer idSyIdIdSy) {
        this.idSyIdIdSy = idSyIdIdSy;
    }

    public Set<com.aprendoz_test.data.Eje> getEjes() {
        return ejes;
    }

    public void setEjes(Set<com.aprendoz_test.data.Eje> ejes) {
        this.ejes = ejes;
    }

}
