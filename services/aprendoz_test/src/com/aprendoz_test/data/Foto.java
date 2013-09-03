
package com.aprendoz_test.data;



/**
 *  aprendoz_test.Foto
 *  09/03/2013 10:31:09
 * 
 */
public class Foto {

    private String codigo;
    private byte[] foto;

    public Foto() {
    }

    public Foto(String codigo) {
        this.codigo = codigo;
    }

    public Foto(String codigo, byte[] foto) {
        this.codigo = codigo;
        this.foto = foto;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public byte[] getFoto() {
        return foto;
    }

    public void setFoto(byte[] foto) {
        this.foto = foto;
    }

}
