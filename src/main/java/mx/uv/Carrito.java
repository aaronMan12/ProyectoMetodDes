package mx.uv;

public class Carrito {
   Integer idCarrito;
    String nombre;
    float precio;
    Integer idProducto;
    Integer cantidad;

     public Carrito(Integer idCarrito, String nombre, float precio, Integer idProducto, Integer cantidad) {
        this.idCarrito = idCarrito;
        this.nombre = nombre;
        this.precio = precio;
        this.idProducto = idProducto;
        this.cantidad = cantidad;
    }




    public Carrito() {
    }




    public Integer getIdCarrito() {
        return idCarrito;
    }

    public void setIdCarrito(Integer idCarrito) {
        this.idCarrito = idCarrito;
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


    public Integer getIdProducto() {
        return idProducto;
    }


    public void setIdProducto(Integer idProducto) {
        this.idProducto = idProducto;
    }




    public Integer getCantidad() {
        return cantidad;
    }




    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }


}
