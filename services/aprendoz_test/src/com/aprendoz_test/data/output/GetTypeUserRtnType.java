
package com.aprendoz_test.data.output;

import com.aprendoz_test.data.TipoPersona;


/**
 * Generated for query "getTypeUser" on 09/03/2013 12:55:04
 * 
 */
public class GetTypeUserRtnType {

    private String apodo;
    private TipoPersona idtipo;

    public GetTypeUserRtnType() {
    }

    public GetTypeUserRtnType(String apodo, TipoPersona idtipo) {
        this.apodo = apodo;
        this.idtipo = idtipo;
    }

    public String getApodo() {
        return apodo;
    }

    public void setApodo(String apodo) {
        this.apodo = apodo;
    }

    public TipoPersona getIdtipo() {
        return idtipo;
    }

    public void setIdtipo(TipoPersona idtipo) {
        this.idtipo = idtipo;
    }

}
