package mx.uv;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

// Data Access Object
public class DAO {
    // en el dao se establece la conexion a la BD
    // private static Conexion c = new Conexion();

    // este metodo regresa un conjunto de usuarios que cumpla un criterio
    public static List<Producto> dameProductos() {
        Statement stm = null;
        ResultSet rs = null;
        Connection conn = null;
        List<Producto> listaDeProductos = new ArrayList<>();

        conn = Conexion.getConnection();

        try {
            String sql = "SELECT * from producto";
            stm = (Statement) conn.createStatement();
            rs = stm.executeQuery(sql);

            while (rs.next()) {
                Producto producto = new Producto(rs.getInt("idProducto"), 
                rs.getString("nombre"),
                rs.getFloat("precio"),
                rs.getString("fotografia"),
                rs.getString("categoria"));
                listaDeProductos.add(producto);
            }
        } catch (Exception e) {
            System.out.println(e);
        } finally {
            if (rs != null)
                try {
                    rs.close();
                } catch (SQLException e) {
                    System.out.println(e);
                }
            rs = null;
            if (stm != null) {
                try {
                    stm.close();
                } catch (Exception e) {
                    System.out.println(e);
                }
                stm = null;
            }
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }

        return listaDeProductos;
    }


     public static List<Producto> dameProductosPorCategoria(String categoria) {
        PreparedStatement stm = null;
        ResultSet rs = null;
        Connection conn = null;
        List<Producto> listaDeProductos = new ArrayList<>();

        conn = Conexion.getConnection();

        try {
            String sql = "SELECT * FROM producto WHERE categoria = ?";
            stm = (PreparedStatement) conn.prepareStatement(sql);
            stm.setString(1, categoria);
            //stm.executeUpdate();
            rs = stm.executeQuery();
            while (rs.next()) {
                Producto producto = new Producto(rs.getInt("idProducto"), 
                rs.getString("nombre"),
                rs.getFloat("precio"),
                rs.getString("fotografia"),
                rs.getString("categoria"));
                listaDeProductos.add(producto);
            }
        } catch (Exception e) {
            System.out.println(e);
        } finally {
            if (rs != null)
                try {
                    rs.close();
                } catch (SQLException e) {
                    System.out.println(e);
                }
            rs = null;
            if (stm != null) {
                try {
                    stm.close();
                } catch (Exception e) {
                    System.out.println(e);
                }
                stm = null;
            }
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }

        return listaDeProductos;
    }



    public static String agregarProducto(Producto u) {
        PreparedStatement stm = null;
        Connection conn = null;
        String msj = "";

        conn = Conexion.getConnection();
        try {
            String sql = "INSERT INTO producto (nombre, precio, fotografia) values (?,?,?)";
            stm = (PreparedStatement) conn.prepareStatement(sql);
            stm.setString(1, u.getNombre());
            stm.setFloat(2, u.getPrecio());
            stm.setString(3, u.getFotografia());
            if (stm.executeUpdate() > 0)
                msj = "Producto agregado";
            else
                msj = "El producto no se pudo agregar";

        } catch (Exception e) {
            System.out.println(e);
        } finally {
            if (stm != null) {
                try {
                    stm.close();
                } catch (Exception e) {
                    System.out.println(e);
                }
                stm = null;
            }
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println(e);
                msj = "Error:" + e;
            }
        }
        return msj;
    }

    public static RespuestaUsuario logingUs(String correo, String password) {
        PreparedStatement pst;
        ResultSet rs = null;
        Connection conexion;
        conexion = Conexion.getConnection();
        Usuario usuario = new Usuario();
        RespuestaUsuario respuesta = new RespuestaUsuario();
        respuesta.setEstado(400);

        try {
            String sql = "select * from usuario where correo= ? and password= ?";
            pst = (PreparedStatement) conexion.prepareStatement(sql);
            pst.setString(1, correo);
            pst.setString(2, password);
            rs = pst.executeQuery();
            while (rs.next()) {

                usuario.setIdUsuario(rs.getInt("idUsuario"));
                usuario.setNombre(rs.getString("nombre"));
                usuario.setPassword(rs.getString("password"));
                usuario.setCorreo(rs.getString("correo"));
                respuesta.setEstado(200);
                respuesta.setContenido("Loging exitoso");
                respuesta.setUsuario(usuario);

            }

        } catch (Exception e) {
            System.out.println(e);
            // respuesta.setEstado(400);
            respuesta.setContenido(e.toString());

        } finally {
            try {
                conexion.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }
        return respuesta;

    }

    public static String actualizarProducto(Producto producto) {
        Connection connection;
        String mjs = null;
        PreparedStatement st;

        connection = Conexion.getConnection();
        try {
            String actualizacion = " update producto set nombre=?, precio=?, fotografia=?  where idProducto=?";
            st = (PreparedStatement) connection.prepareStatement(actualizacion);
            st.setString(1, producto.getNombre());
            st.setFloat(2, producto.getPrecio());
            st.setString(3, producto.getFotografia());
            st.setInt(4, producto.getIdProducto());

            int respuesta = st.executeUpdate();

            if (respuesta != 0) {
                mjs = "Actualizacion realizada";
            } else {

                mjs = "Error al actualizar el procuato";
            }
        } catch (Exception e) {
            System.out.println("Error de parametros" + e);

        }
        try {
            connection.close();
        } catch (SQLException e) {

            e.printStackTrace();
        }

        return mjs;
    }

    public static String borrarProducto(Integer idProducto) {
        Connection connection;
        connection = Conexion.getConnection();
        PreparedStatement pst;
        String msj = null;

        try {
            String borrarProducto = "DELETE FROM producto WHERE idProducto = ?";
            pst = connection.prepareStatement(borrarProducto);
            pst.setInt(1, idProducto);
            int respuesta = pst.executeUpdate();
            
            if (respuesta != 0) {
                msj = "Se realizo el borrado el producto con id:" + idProducto;

            } else {
                msj = "No se pudo borrar el producto";
            }

        } catch (Exception e) {
            System.out.println(e);
        }
        try {
            connection.close();
        } catch (SQLException e) {

            e.printStackTrace();
        }

        return msj;
    }
    
        public static String agregarAlCarrito(int idProducto){
         PreparedStatement stm = null;
        Connection conn = null;
        String msj = "";

        conn = Conexion.getConnection();
        
        try {
        
            String addToCartQuery = "INSERT INTO carrito (idCarrito, idProducto) VALUES (?,?) ON DUPLICATE KEY UPDATE cantidad = cantidad + 1 ";   
            stm = (PreparedStatement) conn.prepareStatement(addToCartQuery);
            stm.setInt(1, idProducto);
            stm.setInt(2, idProducto);
            if (stm.executeUpdate() > 0)
                msj = "Producto agregado al carrito";
            else
                msj = "El producto no se pudo agregar";

        }catch (Exception e) {
            System.out.println(e);
        } finally {
            if (stm != null) {
                try {
                    stm.close();
                } catch (Exception e) {
                    System.out.println(e);
                }
                stm = null;
            }
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println(e);
                msj = "Error:" + e;
            }
        }
        return msj;
    }

    public static List<Carrito> ListaCarrito() {
         Statement stm = null;
        ResultSet rs = null;
        Connection conn = null;
         List<Carrito> listaCarrito = new ArrayList<>();
        conn = Conexion.getConnection();
        try {
             String sql = "SELECT idCarrito,p.nombre, p.precio,p.idProducto, sc.cantidad FROM carrito sc JOIN producto p ON sc.idProducto = p.idProducto";
            stm = (Statement) conn.createStatement();
            rs = stm.executeQuery(sql);
                    while (rs.next()) {
                        Integer cantidad = rs.getInt("cantidad");
                        Integer idProducto = rs.getInt("idProducto");
                        Integer idCarrito = rs.getInt("idCarrito");
                        String productName = rs.getString("nombre");
                        float price = rs.getFloat("precio");
                        listaCarrito.add(new Carrito(idCarrito,productName, price,idProducto,cantidad));
                    }
            
        } catch (Exception e) {
            System.out.println(e);
        } finally {
            if (rs != null)
                try {
                    rs.close();
                } catch (SQLException e) {
                    System.out.println(e);
                }
            rs = null;
            if (stm != null) {
                try {
                    stm.close();
                } catch (Exception e) {
                    System.out.println(e);
                }
                stm = null;
            }
            try {
                conn.close();
            } catch (Exception e) {
                System.out.println(e);
            }
        }

        return listaCarrito;
  
    }

    public static String borrarProductodelCarrito(Integer idProducto) {
        Connection connection;
        connection = Conexion.getConnection();
        PreparedStatement pst;
        String msj = null;

        try {
            String borrarProducto = "DELETE  FROM carrito WHERE idProducto= ?";
            pst = connection.prepareStatement(borrarProducto);
            pst.setInt(1, idProducto);
            int respuesta = pst.executeUpdate();
            
            if (respuesta != 0) {
                msj = "Se realizo el borrado el producto con id:" + idProducto;

            } else {
                msj = "No se pudo borrar el producto";
            }

        } catch (Exception e) {
            System.out.println(e);
        }
        try {
            connection.close();
        } catch (SQLException e) {

            e.printStackTrace();
        }

        return msj;
    }


}
