
package com.aprendoz_test.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  aprendoz_test.AprLogradosId
 *  09/03/2013 10:31:08
 * 
 */
public class AprLogradosId
    implements Serializable
{

    private Integer personaIdPersona;
    private Date fechaLogro;
    private Long count___;
    private Integer syIdSy;
    private Integer idAsignatura;

    public AprLogradosId() {
    }

    public AprLogradosId(Integer personaIdPersona, Date fechaLogro, Long count___, Integer syIdSy, Integer idAsignatura) {
        this.personaIdPersona = personaIdPersona;
        this.fechaLogro = fechaLogro;
        this.count___ = count___;
        this.syIdSy = syIdSy;
        this.idAsignatura = idAsignatura;
    }

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof AprLogradosId)) {
            return false;
        }
        AprLogradosId other = ((AprLogradosId) o);
        if (this.personaIdPersona == null) {
            if (other.personaIdPersona!= null) {
                return false;
            }
        } else {
            if (!this.personaIdPersona.equals(other.personaIdPersona)) {
                return false;
            }
        }
        if (this.fechaLogro == null) {
            if (other.fechaLogro!= null) {
                return false;
            }
        } else {
            if (!this.fechaLogro.equals(other.fechaLogro)) {
                return false;
            }
        }
        if (this.count___ == null) {
            if (other.count___!= null) {
                return false;
            }
        } else {
            if (!this.count___.equals(other.count___)) {
                return false;
            }
        }
        if (this.syIdSy == null) {
            if (other.syIdSy!= null) {
                return false;
            }
        } else {
            if (!this.syIdSy.equals(other.syIdSy)) {
                return false;
            }
        }
        if (this.idAsignatura == null) {
            if (other.idAsignatura!= null) {
                return false;
            }
        } else {
            if (!this.idAsignatura.equals(other.idAsignatura)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.personaIdPersona!= null) {
            rtn = (rtn + this.personaIdPersona.hashCode());
        }
        rtn = (rtn* 37);
        if (this.fechaLogro!= null) {
            rtn = (rtn + this.fechaLogro.hashCode());
        }
        rtn = (rtn* 37);
        if (this.count___!= null) {
            rtn = (rtn + this.count___.hashCode());
        }
        rtn = (rtn* 37);
        if (this.syIdSy!= null) {
            rtn = (rtn + this.syIdSy.hashCode());
        }
        rtn = (rtn* 37);
        if (this.idAsignatura!= null) {
            rtn = (rtn + this.idAsignatura.hashCode());
        }
        return rtn;
    }

    public Integer getPersonaIdPersona() {
        return personaIdPersona;
    }

    public void setPersonaIdPersona(Integer personaIdPersona) {
        this.personaIdPersona = personaIdPersona;
    }

    public Date getFechaLogro() {
        return fechaLogro;
    }

    public void setFechaLogro(Date fechaLogro) {
        this.fechaLogro = fechaLogro;
    }

    public Long getCount___() {
        return count___;
    }

    public void setCount___(Long count___) {
        this.count___ = count___;
    }

    public Integer getSyIdSy() {
        return syIdSy;
    }

    public void setSyIdSy(Integer syIdSy) {
        this.syIdSy = syIdSy;
    }

    public Integer getIdAsignatura() {
        return idAsignatura;
    }

    public void setIdAsignatura(Integer idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

}
