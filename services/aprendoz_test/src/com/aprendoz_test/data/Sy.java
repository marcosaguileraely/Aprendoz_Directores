
package com.aprendoz_test.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  aprendoz_test.Sy
 *  09/03/2013 10:31:08
 * 
 */
public class Sy {

    private Integer idSy;
    private String schoolYear;
    private Set<com.aprendoz_test.data.Promocion> promocions = new HashSet<com.aprendoz_test.data.Promocion>();
    private Set<com.aprendoz_test.data.InscAlumCosto> inscAlumCostos = new HashSet<com.aprendoz_test.data.InscAlumCosto>();
    private Set<com.aprendoz_test.data.InscCoordinadoresCurso> inscCoordinadoresCursos = new HashSet<com.aprendoz_test.data.InscCoordinadoresCurso>();
    private Set<com.aprendoz_test.data.CoordinacionDeGrupo> coordinacionDeGrupos = new HashSet<com.aprendoz_test.data.CoordinacionDeGrupo>();
    private Set<com.aprendoz_test.data.InscAlumCurso> inscAlumCursos = new HashSet<com.aprendoz_test.data.InscAlumCurso>();
    private Set<com.aprendoz_test.data.BimestreSy> bimestreSies = new HashSet<com.aprendoz_test.data.BimestreSy>();
    private Set<com.aprendoz_test.data.Cronograma> cronogramas = new HashSet<com.aprendoz_test.data.Cronograma>();
    private Set<com.aprendoz_test.data.Semana> semanas = new HashSet<com.aprendoz_test.data.Semana>();
    private Set<com.aprendoz_test.data.Horario> horarios = new HashSet<com.aprendoz_test.data.Horario>();
    private Set<com.aprendoz_test.data.Periodo> periodos = new HashSet<com.aprendoz_test.data.Periodo>();
    private Set<com.aprendoz_test.data.InscAlumArea> inscAlumAreas = new HashSet<com.aprendoz_test.data.InscAlumArea>();
    private Set<com.aprendoz_test.data.Asignatura> asignaturas = new HashSet<com.aprendoz_test.data.Asignatura>();
    private Set<com.aprendoz_test.data.Coordinadores> coordinadoreses = new HashSet<com.aprendoz_test.data.Coordinadores>();
    private Set<com.aprendoz_test.data.Costos> costoses = new HashSet<com.aprendoz_test.data.Costos>();
    private Set<com.aprendoz_test.data.Matricula> matriculas = new HashSet<com.aprendoz_test.data.Matricula>();
    private Set<com.aprendoz_test.data.SesionNivel> sesionNivels = new HashSet<com.aprendoz_test.data.SesionNivel>();
    private Set<com.aprendoz_test.data.Coordinacion> coordinacions = new HashSet<com.aprendoz_test.data.Coordinacion>();

    public Sy() {
    }

    public Sy(Integer idSy, String schoolYear) {
        this.idSy = idSy;
        this.schoolYear = schoolYear;
    }

    public Sy(Integer idSy, String schoolYear, Set<com.aprendoz_test.data.Promocion> promocions, Set<com.aprendoz_test.data.InscAlumCosto> inscAlumCostos, Set<com.aprendoz_test.data.InscCoordinadoresCurso> inscCoordinadoresCursos, Set<com.aprendoz_test.data.CoordinacionDeGrupo> coordinacionDeGrupos, Set<com.aprendoz_test.data.InscAlumCurso> inscAlumCursos, Set<com.aprendoz_test.data.BimestreSy> bimestreSies, Set<com.aprendoz_test.data.Cronograma> cronogramas, Set<com.aprendoz_test.data.Semana> semanas, Set<com.aprendoz_test.data.Horario> horarios, Set<com.aprendoz_test.data.Periodo> periodos, Set<com.aprendoz_test.data.InscAlumArea> inscAlumAreas, Set<com.aprendoz_test.data.Asignatura> asignaturas, Set<com.aprendoz_test.data.Coordinadores> coordinadoreses, Set<com.aprendoz_test.data.Costos> costoses, Set<com.aprendoz_test.data.Matricula> matriculas, Set<com.aprendoz_test.data.SesionNivel> sesionNivels, Set<com.aprendoz_test.data.Coordinacion> coordinacions) {
        this.idSy = idSy;
        this.schoolYear = schoolYear;
        this.promocions = promocions;
        this.inscAlumCostos = inscAlumCostos;
        this.inscCoordinadoresCursos = inscCoordinadoresCursos;
        this.coordinacionDeGrupos = coordinacionDeGrupos;
        this.inscAlumCursos = inscAlumCursos;
        this.bimestreSies = bimestreSies;
        this.cronogramas = cronogramas;
        this.semanas = semanas;
        this.horarios = horarios;
        this.periodos = periodos;
        this.inscAlumAreas = inscAlumAreas;
        this.asignaturas = asignaturas;
        this.coordinadoreses = coordinadoreses;
        this.costoses = costoses;
        this.matriculas = matriculas;
        this.sesionNivels = sesionNivels;
        this.coordinacions = coordinacions;
    }

    public Integer getIdSy() {
        return idSy;
    }

    public void setIdSy(Integer idSy) {
        this.idSy = idSy;
    }

    public String getSchoolYear() {
        return schoolYear;
    }

    public void setSchoolYear(String schoolYear) {
        this.schoolYear = schoolYear;
    }

    public Set<com.aprendoz_test.data.Promocion> getPromocions() {
        return promocions;
    }

    public void setPromocions(Set<com.aprendoz_test.data.Promocion> promocions) {
        this.promocions = promocions;
    }

    public Set<com.aprendoz_test.data.InscAlumCosto> getInscAlumCostos() {
        return inscAlumCostos;
    }

    public void setInscAlumCostos(Set<com.aprendoz_test.data.InscAlumCosto> inscAlumCostos) {
        this.inscAlumCostos = inscAlumCostos;
    }

    public Set<com.aprendoz_test.data.InscCoordinadoresCurso> getInscCoordinadoresCursos() {
        return inscCoordinadoresCursos;
    }

    public void setInscCoordinadoresCursos(Set<com.aprendoz_test.data.InscCoordinadoresCurso> inscCoordinadoresCursos) {
        this.inscCoordinadoresCursos = inscCoordinadoresCursos;
    }

    public Set<com.aprendoz_test.data.CoordinacionDeGrupo> getCoordinacionDeGrupos() {
        return coordinacionDeGrupos;
    }

    public void setCoordinacionDeGrupos(Set<com.aprendoz_test.data.CoordinacionDeGrupo> coordinacionDeGrupos) {
        this.coordinacionDeGrupos = coordinacionDeGrupos;
    }

    public Set<com.aprendoz_test.data.InscAlumCurso> getInscAlumCursos() {
        return inscAlumCursos;
    }

    public void setInscAlumCursos(Set<com.aprendoz_test.data.InscAlumCurso> inscAlumCursos) {
        this.inscAlumCursos = inscAlumCursos;
    }

    public Set<com.aprendoz_test.data.BimestreSy> getBimestreSies() {
        return bimestreSies;
    }

    public void setBimestreSies(Set<com.aprendoz_test.data.BimestreSy> bimestreSies) {
        this.bimestreSies = bimestreSies;
    }

    public Set<com.aprendoz_test.data.Cronograma> getCronogramas() {
        return cronogramas;
    }

    public void setCronogramas(Set<com.aprendoz_test.data.Cronograma> cronogramas) {
        this.cronogramas = cronogramas;
    }

    public Set<com.aprendoz_test.data.Semana> getSemanas() {
        return semanas;
    }

    public void setSemanas(Set<com.aprendoz_test.data.Semana> semanas) {
        this.semanas = semanas;
    }

    public Set<com.aprendoz_test.data.Horario> getHorarios() {
        return horarios;
    }

    public void setHorarios(Set<com.aprendoz_test.data.Horario> horarios) {
        this.horarios = horarios;
    }

    public Set<com.aprendoz_test.data.Periodo> getPeriodos() {
        return periodos;
    }

    public void setPeriodos(Set<com.aprendoz_test.data.Periodo> periodos) {
        this.periodos = periodos;
    }

    public Set<com.aprendoz_test.data.InscAlumArea> getInscAlumAreas() {
        return inscAlumAreas;
    }

    public void setInscAlumAreas(Set<com.aprendoz_test.data.InscAlumArea> inscAlumAreas) {
        this.inscAlumAreas = inscAlumAreas;
    }

    public Set<com.aprendoz_test.data.Asignatura> getAsignaturas() {
        return asignaturas;
    }

    public void setAsignaturas(Set<com.aprendoz_test.data.Asignatura> asignaturas) {
        this.asignaturas = asignaturas;
    }

    public Set<com.aprendoz_test.data.Coordinadores> getCoordinadoreses() {
        return coordinadoreses;
    }

    public void setCoordinadoreses(Set<com.aprendoz_test.data.Coordinadores> coordinadoreses) {
        this.coordinadoreses = coordinadoreses;
    }

    public Set<com.aprendoz_test.data.Costos> getCostoses() {
        return costoses;
    }

    public void setCostoses(Set<com.aprendoz_test.data.Costos> costoses) {
        this.costoses = costoses;
    }

    public Set<com.aprendoz_test.data.Matricula> getMatriculas() {
        return matriculas;
    }

    public void setMatriculas(Set<com.aprendoz_test.data.Matricula> matriculas) {
        this.matriculas = matriculas;
    }

    public Set<com.aprendoz_test.data.SesionNivel> getSesionNivels() {
        return sesionNivels;
    }

    public void setSesionNivels(Set<com.aprendoz_test.data.SesionNivel> sesionNivels) {
        this.sesionNivels = sesionNivels;
    }

    public Set<com.aprendoz_test.data.Coordinacion> getCoordinacions() {
        return coordinacions;
    }

    public void setCoordinacions(Set<com.aprendoz_test.data.Coordinacion> coordinacions) {
        this.coordinacions = coordinacions;
    }

}
