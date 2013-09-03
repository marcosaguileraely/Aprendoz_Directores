
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.DimensionCurricular
 *  09/03/2013 10:31:08
 * 
 */
public class DimensionCurricular {

    private Integer idDimension;
    private String dimensionCurricular;
    private Set<com.aprendoz_test.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_test.data.Aprendizaje>();

    public DimensionCurricular() {
    }

    public DimensionCurricular(Integer idDimension, String dimensionCurricular) {
        this.idDimension = idDimension;
        this.dimensionCurricular = dimensionCurricular;
    }

    public DimensionCurricular(Integer idDimension, String dimensionCurricular, Set<com.aprendoz_test.data.Aprendizaje> aprendizajes) {
        this.idDimension = idDimension;
        this.dimensionCurricular = dimensionCurricular;
        this.aprendizajes = aprendizajes;
    }

    public Integer getIdDimension() {
        return idDimension;
    }

    public void setIdDimension(Integer idDimension) {
        this.idDimension = idDimension;
    }

    public String getDimensionCurricular() {
        return dimensionCurricular;
    }

    public void setDimensionCurricular(String dimensionCurricular) {
        this.dimensionCurricular = dimensionCurricular;
    }

    public Set<com.aprendoz_test.data.Aprendizaje> getAprendizajes() {
        return aprendizajes;
    }

    public void setAprendizajes(Set<com.aprendoz_test.data.Aprendizaje> aprendizajes) {
        this.aprendizajes = aprendizajes;
    }

}
