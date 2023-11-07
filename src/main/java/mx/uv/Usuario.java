package mx.uv;
public class Usuario {
  private  Integer idUsuario;
  private  String nombre;
  private  String password;
  private  String correo;

    public Usuario(){}

    public Usuario(Integer idUsuario, String usuario, String password, String correo) {
        this.idUsuario = idUsuario;
        this.nombre = usuario;
        this.password = password;
        this.correo=correo;
    }

    public Integer getIdUsuario() {
        return idUsuario;
    }
    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario=idUsuario;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String usuario) {
        this.nombre = usuario;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }

    public String getCorreo() {
        return correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }
    
}
