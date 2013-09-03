
package com.aprendoz_test.data;



/**
 *  aprendoz_test.CafeteriaGartinuras
 *  09/03/2013 10:31:08
 * 
 */
public class CafeteriaGartinuras {

    private Integer idGarnituras;
    private String garnitura;
    private String descripcion;
    private String imageLink;

    public CafeteriaGartinuras() {
    }

    public CafeteriaGartinuras(Integer idGarnituras, String garnitura, String descripcion, String imageLink) {
        this.idGarnituras = idGarnituras;
        this.garnitura = garnitura;
        this.descripcion = descripcion;
        this.imageLink = imageLink;
    }

    public Integer getIdGarnituras() {
        return idGarnituras;
    }

    public void setIdGarnituras(Integer idGarnituras) {
        this.idGarnituras = idGarnituras;
    }

    public String getGarnitura() {
        return garnitura;
    }

    public void setGarnitura(String garnitura) {
        this.garnitura = garnitura;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

}
