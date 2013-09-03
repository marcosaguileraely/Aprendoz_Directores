//importar librerias y complementos
import java.awt.*;
import com.aprendoz_test.*;
import org.hibernate.Session;
import com.wavemaker.runtime.RuntimeAccess;
import com.wavemaker.runtime.server.DownloadResponse;
import java.net.URL;
import net.sf.jasperreports.engine.util.JRLoader;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import java.io.ByteArrayOutputStream;
import java.io.ByteArrayInputStream;
import java.util.Map;
import java.util.HashMap;
import com.wavemaker.runtime.server.ParamName;
import org.springframework.mail.javamail.ConfigurableMimeFileTypeMap;
//--------------------------------

import net.sf.jasperreports.engine.JRResultSetDataSource;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.xml.JRXmlLoader;
import java.util.*;
import java.io.*;
import com.wavemaker.runtime.RuntimeAccess;

public class Certificado extends com.wavemaker.runtime.javaservice.JavaServiceSuperClass {

   public DownloadResponse getReport(String idPersona, String sy, String com1, String com2) throws Exception { 
   System.out.println("aqui----");
        System.out.println(idPersona);
        System.out.println(sy);
        System.out.println(com1);
        System.out.println(com2);
        int idp=Integer.valueOf(idPersona);
        int idsy=Integer.valueOf(sy);
        System.out.println(idp);
        System.out.println(idsy);
       DownloadResponse ret= new DownloadResponse();
       ConfigurableMimeFileTypeMap mimeFileTypeMap = new ConfigurableMimeFileTypeMap();
  
       try {
        System.out.println("Ingreso al TRY");
          Aprendoz_test service = (Aprendoz_test) RuntimeAccess.getInstance().getService(Aprendoz_test.class);
          service.begin();
          Session session= service.getDataServiceManager().getSession();
          
          //enviar parametros al reporte
          Map parameters= new HashMap();
           parameters.put("IdPersona", idp);
           parameters.put("IdSy", idsy);    
           parameters.put("comentarioSuperior", com1);
           parameters.put("comentarioInferior", com2);
           System.out.println("captura PARAMETROS");      
          //direccion del archivo Jasper
          URL fileUrl = this.getClass().getResource("Certificado.jasper");
          System.out.println("Carga el jasper"); 
          //para cargar el jasper
          JasperReport report2 = (JasperReport)JRLoader.loadObject(fileUrl);
          System.out.println("cargar conexion"); 
          //cargar conexion de la base de datos al reporte y el archivo Jasper
          JasperPrint jasperPrint = JasperFillManager.fillReport(report2,parameters,session.connection());
          System.out.println("exportar pdf"); 
          //exportar a pdf
          ByteArrayOutputStream out= new ByteArrayOutputStream();
          JasperExportManager.exportReportToPdfStream(jasperPrint, out);
          System.out.println("respuesta de descarga"); 
          //cargar pdf como una respuesta de descarga
          ret.setContentType(mimeFileTypeMap.getContentType("Certificado.jasper"));
          ret.setContents(new ByteArrayInputStream(out.toByteArray()));
          ret.setFileName("CertificadoAprendoz.pdf");
           
  
       } catch(Exception e) {
          System.out.println("Error al crear pdf");
          e.printStackTrace();
       }
       return ret;
    }    

}
