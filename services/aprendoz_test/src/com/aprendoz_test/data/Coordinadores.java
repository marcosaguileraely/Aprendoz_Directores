
package com.aprendoz_test.data;



/**
 *  aprendoz_test.Coordinadores
 *  09/03/2013 10:31:08
 * 
 */
public class Coordinadores {

    private CoordinadoresId id;
    private Curso curso;
    private Sy sy;
    private Persona persona;

    public Coordinadores() {
    }

    public Coordinadores(CoordinadoresId id, Curso curso, Sy sy, Persona persona) {
        this.id = id;
        this.curso = curso;
        this.sy = sy;
        this.persona = persona;
    }

    public CoordinadoresId getId() {
        return id;
    }

    public void setId(CoordinadoresId id) {
        this.id = id;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public Persona getPersona() {
        return persona;
    }

    public void setPersona(Persona persona) {
        this.persona = persona;
    }

}
