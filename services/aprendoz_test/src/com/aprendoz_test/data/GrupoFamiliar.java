
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.GrupoFamiliar
 *  09/03/2013 10:31:08
 * 
 */
public class GrupoFamiliar {

    private Integer idGrupoFamiliar;
    private String grupoFamiliar;
    private String grupoLdap;
    private Set<com.aprendoz_test.data.TransporteRutas> transporteRutases = new HashSet<com.aprendoz_test.data.TransporteRutas>();
    private Set<com.aprendoz_test.data.Persona> personas = new HashSet<com.aprendoz_test.data.Persona>();
    private Set<com.aprendoz_test.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars = new HashSet<com.aprendoz_test.data.InscPersonaGrupoFamiliar>();
    private Set<com.aprendoz_test.data.ActualizacionGrupoFamiliar> actualizacionGrupoFamiliars = new HashSet<com.aprendoz_test.data.ActualizacionGrupoFamiliar>();

    public GrupoFamiliar() {
    }

    public GrupoFamiliar(Integer idGrupoFamiliar, String grupoFamiliar, String grupoLdap) {
        this.idGrupoFamiliar = idGrupoFamiliar;
        this.grupoFamiliar = grupoFamiliar;
        this.grupoLdap = grupoLdap;
    }

    public GrupoFamiliar(Integer idGrupoFamiliar, String grupoFamiliar, String grupoLdap, Set<com.aprendoz_test.data.TransporteRutas> transporteRutases, Set<com.aprendoz_test.data.Persona> personas, Set<com.aprendoz_test.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars, Set<com.aprendoz_test.data.ActualizacionGrupoFamiliar> actualizacionGrupoFamiliars) {
        this.idGrupoFamiliar = idGrupoFamiliar;
        this.grupoFamiliar = grupoFamiliar;
        this.grupoLdap = grupoLdap;
        this.transporteRutases = transporteRutases;
        this.personas = personas;
        this.inscPersonaGrupoFamiliars = inscPersonaGrupoFamiliars;
        this.actualizacionGrupoFamiliars = actualizacionGrupoFamiliars;
    }

    public Integer getIdGrupoFamiliar() {
        return idGrupoFamiliar;
    }

    public void setIdGrupoFamiliar(Integer idGrupoFamiliar) {
        this.idGrupoFamiliar = idGrupoFamiliar;
    }

    public String getGrupoFamiliar() {
        return grupoFamiliar;
    }

    public void setGrupoFamiliar(String grupoFamiliar) {
        this.grupoFamiliar = grupoFamiliar;
    }

    public String getGrupoLdap() {
        return grupoLdap;
    }

    public void setGrupoLdap(String grupoLdap) {
        this.grupoLdap = grupoLdap;
    }

    public Set<com.aprendoz_test.data.TransporteRutas> getTransporteRutases() {
        return transporteRutases;
    }

    public void setTransporteRutases(Set<com.aprendoz_test.data.TransporteRutas> transporteRutases) {
        this.transporteRutases = transporteRutases;
    }

    public Set<com.aprendoz_test.data.Persona> getPersonas() {
        return personas;
    }

    public void setPersonas(Set<com.aprendoz_test.data.Persona> personas) {
        this.personas = personas;
    }

    public Set<com.aprendoz_test.data.InscPersonaGrupoFamiliar> getInscPersonaGrupoFamiliars() {
        return inscPersonaGrupoFamiliars;
    }

    public void setInscPersonaGrupoFamiliars(Set<com.aprendoz_test.data.InscPersonaGrupoFamiliar> inscPersonaGrupoFamiliars) {
        this.inscPersonaGrupoFamiliars = inscPersonaGrupoFamiliars;
    }

    public Set<com.aprendoz_test.data.ActualizacionGrupoFamiliar> getActualizacionGrupoFamiliars() {
        return actualizacionGrupoFamiliars;
    }

    public void setActualizacionGrupoFamiliars(Set<com.aprendoz_test.data.ActualizacionGrupoFamiliar> actualizacionGrupoFamiliars) {
        this.actualizacionGrupoFamiliars = actualizacionGrupoFamiliars;
    }

}
