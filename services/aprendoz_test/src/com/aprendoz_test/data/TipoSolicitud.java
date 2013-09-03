
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.TipoSolicitud
 *  09/03/2013 10:31:08
 * 
 */
public class TipoSolicitud {

    private Integer idTipoSolicitud;
    private String solicitud;
    private Set<com.aprendoz_test.data.TransporteNovedades> transporteNovedadeses = new HashSet<com.aprendoz_test.data.TransporteNovedades>();

    public TipoSolicitud() {
    }

    public TipoSolicitud(Integer idTipoSolicitud, String solicitud) {
        this.idTipoSolicitud = idTipoSolicitud;
        this.solicitud = solicitud;
    }

    public TipoSolicitud(Integer idTipoSolicitud, String solicitud, Set<com.aprendoz_test.data.TransporteNovedades> transporteNovedadeses) {
        this.idTipoSolicitud = idTipoSolicitud;
        this.solicitud = solicitud;
        this.transporteNovedadeses = transporteNovedadeses;
    }

    public Integer getIdTipoSolicitud() {
        return idTipoSolicitud;
    }

    public void setIdTipoSolicitud(Integer idTipoSolicitud) {
        this.idTipoSolicitud = idTipoSolicitud;
    }

    public String getSolicitud() {
        return solicitud;
    }

    public void setSolicitud(String solicitud) {
        this.solicitud = solicitud;
    }

    public Set<com.aprendoz_test.data.TransporteNovedades> getTransporteNovedadeses() {
        return transporteNovedadeses;
    }

    public void setTransporteNovedadeses(Set<com.aprendoz_test.data.TransporteNovedades> transporteNovedadeses) {
        this.transporteNovedadeses = transporteNovedadeses;
    }

}
