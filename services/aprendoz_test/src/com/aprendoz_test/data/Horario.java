
package com.aprendoz_test.data;



/**
 *  aprendoz_test.Horario
 *  09/03/2013 10:31:08
 * 
 */
public class Horario {

    private Integer idHorario;
    private Curso curso;
    private Asignatura asignatura;
    private Sy sy;
    private TipoSemana tipoSemana;
    private Integer numeroSesion;
    private Integer dia;

    public Horario() {
    }

    public Horario(Integer idHorario, Integer numeroSesion, Integer dia) {
        this.idHorario = idHorario;
        this.numeroSesion = numeroSesion;
        this.dia = dia;
    }

    public Horario(Integer idHorario, Curso curso, Asignatura asignatura, Sy sy, TipoSemana tipoSemana, Integer numeroSesion, Integer dia) {
        this.idHorario = idHorario;
        this.curso = curso;
        this.asignatura = asignatura;
        this.sy = sy;
        this.tipoSemana = tipoSemana;
        this.numeroSesion = numeroSesion;
        this.dia = dia;
    }

    public Integer getIdHorario() {
        return idHorario;
    }

    public void setIdHorario(Integer idHorario) {
        this.idHorario = idHorario;
    }

    public Curso getCurso() {
        return curso;
    }

    public void setCurso(Curso curso) {
        this.curso = curso;
    }

    public Asignatura getAsignatura() {
        return asignatura;
    }

    public void setAsignatura(Asignatura asignatura) {
        this.asignatura = asignatura;
    }

    public Sy getSy() {
        return sy;
    }

    public void setSy(Sy sy) {
        this.sy = sy;
    }

    public TipoSemana getTipoSemana() {
        return tipoSemana;
    }

    public void setTipoSemana(TipoSemana tipoSemana) {
        this.tipoSemana = tipoSemana;
    }

    public Integer getNumeroSesion() {
        return numeroSesion;
    }

    public void setNumeroSesion(Integer numeroSesion) {
        this.numeroSesion = numeroSesion;
    }

    public Integer getDia() {
        return dia;
    }

    public void setDia(Integer dia) {
        this.dia = dia;
    }

}
