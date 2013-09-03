
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.DimensionComprension
 *  09/03/2013 10:31:08
 * 
 */
public class DimensionComprension {

    private Integer idDimension;
    private String dimensionComprension;
    private Set<com.aprendoz_test.data.Aprendizaje> aprendizajes = new HashSet<com.aprendoz_test.data.Aprendizaje>();

    public DimensionComprension() {
    }

    public DimensionComprension(Integer idDimension, String dimensionComprension) {
        this.idDimension = idDimension;
        this.dimensionComprension = dimensionComprension;
    }

    public DimensionComprension(Integer idDimension, String dimensionComprension, Set<com.aprendoz_test.data.Aprendizaje> aprendizajes) {
        this.idDimension = idDimension;
        this.dimensionComprension = dimensionComprension;
        this.aprendizajes = aprendizajes;
    }

    public Integer getIdDimension() {
        return idDimension;
    }

    public void setIdDimension(Integer idDimension) {
        this.idDimension = idDimension;
    }

    public String getDimensionComprension() {
        return dimensionComprension;
    }

    public void setDimensionComprension(String dimensionComprension) {
        this.dimensionComprension = dimensionComprension;
    }

    public Set<com.aprendoz_test.data.Aprendizaje> getAprendizajes() {
        return aprendizajes;
    }

    public void setAprendizajes(Set<com.aprendoz_test.data.Aprendizaje> aprendizajes) {
        this.aprendizajes = aprendizajes;
    }

}
