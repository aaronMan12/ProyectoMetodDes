package mx.uv;

public class Producto {
    private int idProducto;
    private String nombre;
    private float precio;
    private String fotografia;
    
    public Producto(){

    }

    public Producto(int idProducto, String nombre, float precio, String fotografia) {
        this.idProducto=idProducto;
        this.nombre = nombre;
        this.precio = precio;
        this.fotografia = fotografia;
    }

    public int getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(int idProducto) {
        this.idProducto = idProducto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public String getFotografia() {
        return fotografia;
    }

    public void setFotografia(String fotografia) {
        this.fotografia = fotografia;
    }

    

    

}