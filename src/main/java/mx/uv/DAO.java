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
                Producto producto= new Producto(rs.getInt("idProducto"), rs.getString("nombre"), rs.getFloat("precio"), rs.getString("fotografia"));
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

    public static String ActualizarUsuario(Usuario u) {
        String mjs = "";
        PreparedStatement st;
        Conexion conn = null;
        conn = (Conexion) Conexion.getConnection();
        try {
            String actualizacion = "update usuarios set ? where id=1";
            st = (PreparedStatement) conn.prepareStatement(actualizacion);
            st.setInt(1, u.getIdUsuario());
            // stm = (PreparedStatement) conn.prepareStatement(sql);

            if (st.executeUpdate(actualizacion) == 1) {
                System.out.println("Actualizacion realizada");
            }
        } catch (Exception e) {
            System.out.println(e);
        }

        return mjs;
    }

    public static String crearUsuario(Usuario u) {
        PreparedStatement stm = null;
        Connection conn = null;
        String msj = "";

        conn = Conexion.getConnection();
        try {
            String sql = "INSERT INTO usuarios (nombre, password, correo) values (?,?,?)";
            stm = (PreparedStatement) conn.prepareStatement(sql);
            stm.setString(1, u.getNombre());
            stm.setString(2, u.getPassword());
            stm.setString(3, u.getCorreo());
            if (stm.executeUpdate() > 0)
                msj = "usuario agregado";
            else
                msj = "usuario no agregado";

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
        RespuestaUsuario respuesta=new RespuestaUsuario();
        respuesta.setEstado(400);
        /*
         * stm = (Statement) conn.createStatement();
         * rs = stm.executeQuery(sql);
         */
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
            //respuesta.setEstado(400);
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

}
