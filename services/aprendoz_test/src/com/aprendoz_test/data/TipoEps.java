
package com.aprendoz_test.data;



/**
 *  aprendoz_test.TipoEps
 *  09/03/2013 10:31:08
 * 
 */
public class TipoEps {

    private Integer ideps;
    private String eps;
    private String direccion;
    private String web;

    public TipoEps() {
    }

    public TipoEps(Integer ideps, String eps, String direccion, String web) {
        this.ideps = ideps;
        this.eps = eps;
        this.direccion = direccion;
        this.web = web;
    }

    public Integer getIdeps() {
        return ideps;
    }

    public void setIdeps(Integer ideps) {
        this.ideps = ideps;
    }

    public String getEps() {
        return eps;
    }

    public void setEps(String eps) {
        this.eps = eps;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getWeb() {
        return web;
    }

    public void setWeb(String web) {
        this.web = web;
    }

}
