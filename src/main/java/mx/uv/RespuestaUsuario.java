package mx.uv;

public class RespuestaUsuario {
    private int estado;
    private String contenido;
    private Usuario usuario;


    public RespuestaUsuario() {
    }


    public RespuestaUsuario(int estado, String contenido, Usuario usuario) {
        this.estado = estado;
        this.contenido = contenido;
        this.usuario = usuario;
    }


    public int getEstado() {
        return estado;
    }


    public void setEstado(int estado) {
        this.estado = estado;
    }


    public String getContenido() {
        return contenido;
    }


    public void setContenido(String contenido) {
        this.contenido = contenido;
    }


    public Usuario getUsuario() {
        return usuario;
    }


    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
    
    
    
}
