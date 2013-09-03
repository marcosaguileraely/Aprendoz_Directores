
package com.aprendoz_test;

import java.util.Date;
import java.util.List;
import com.aprendoz_test.data.output.ComplexSendMailRtnType;
import com.aprendoz_test.data.output.EnviarMailEventualidadesRtnType;
import com.aprendoz_test.data.output.GetMaxSubjectByGradeRtnType;
import com.aprendoz_test.data.output.GetTipoEventualidadByIdSubTipoRtnType;
import com.aprendoz_test.data.output.HQLlsCursosRtnType;
import com.aprendoz_test.data.output.HQLlsGradoRtnType;
import com.aprendoz_test.data.output.HQLlsPeriodoRtnType;
import com.aprendoz_test.data.output.HqlPersonaEventualidadRtnType;
import com.aprendoz_test.data.output.Hql_tipo_eventualidadRtnType;
import com.aprendoz_test.data.output.Last_accessHQLRtnType;
import com.aprendoz_test.data.output.LsCursosRtnType;
import com.aprendoz_test.data.output.SeachEventualidadHQLRtnType;
import com.aprendoz_test.data.output.SearchReportesAlumnosRtnType;
import com.aprendoz_test.data.output.SendMailHQLRtnType;
import com.aprendoz_test.data.output.ShowInformationUserRtnType;
import com.aprendoz_test.data.output.SubjectDetailsRtnType;
import com.aprendoz_test.data.output.SubjectsByGradeRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "aprendoz_test"
 *  09/03/2013 12:56:33
 * 
 */
@SuppressWarnings("unchecked")
public class Aprendoz_test
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<ComplexSendMailRtnType> complexSendMail(Integer ide) {
        return ((List<ComplexSendMailRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.complexSendMailQueryName), ide));
    }

    public List<SubjectsByGradeRtnType> subjectsByGrade(Integer _sy, Integer _grado) {
        return ((List<SubjectsByGradeRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.subjectsByGradeQueryName), _sy, _grado));
    }

    public List<LsCursosRtnType> lsCursos() {
        return ((List<LsCursosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.lsCursosQueryName)));
    }

    public com.aprendoz_test.data.output.GetCountGenderRtnType getCountGender(Integer sy, Integer curso) {
        List<com.aprendoz_test.data.output.GetCountGenderRtnType> rtn = ((List<com.aprendoz_test.data.output.GetCountGenderRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getCountGenderQueryName), sy, curso));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<HQLlsPeriodoRtnType> hQLlsPeriodo() {
        return ((List<HQLlsPeriodoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.HQLlsPeriodoQueryName)));
    }

    public List<HQLlsCursosRtnType> hQLlsCursos() {
        return ((List<HQLlsCursosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.HQLlsCursosQueryName)));
    }

    public List<EnviarMailEventualidadesRtnType> enviarMailEventualidades(Integer ide) {
        return ((List<EnviarMailEventualidadesRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.enviarMailEventualidadesQueryName), ide));
    }

    public List<GetTipoEventualidadByIdSubTipoRtnType> getTipoEventualidadByIdSubTipo(Integer id) {
        return ((List<GetTipoEventualidadByIdSubTipoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getTipoEventualidadByIdSubTipoQueryName), id));
    }

    public Integer crearPlan(String p1, String p2, String p3, Date fecha_plan, Integer id) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.crearPlanQueryName), p1, p2, p3, fecha_plan, id));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<HQLlsGradoRtnType> hQLlsGrado() {
        return ((List<HQLlsGradoRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.HQLlsGradoQueryName)));
    }

    public List<HqlPersonaEventualidadRtnType> hqlPersonaEventualidad(Integer ide) {
        return ((List<HqlPersonaEventualidadRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hqlPersonaEventualidadQueryName), ide));
    }

    public com.aprendoz_test.data.output.GetCountGenderFemaleRtnType getCountGenderFemale(Integer sy, Integer curso) {
        List<com.aprendoz_test.data.output.GetCountGenderFemaleRtnType> rtn = ((List<com.aprendoz_test.data.output.GetCountGenderFemaleRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getCountGenderFemaleQueryName), sy, curso));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.aprendoz_test.data.InscAlumActividad getInscAlumActividadById(Integer id) {
        List<com.aprendoz_test.data.InscAlumActividad> rtn = ((List<com.aprendoz_test.data.InscAlumActividad> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getInscAlumActividadByIdQueryName), id));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.aprendoz_test.data.output.GetFullNameRtnType getFullName(String usuario) {
        List<com.aprendoz_test.data.output.GetFullNameRtnType> rtn = ((List<com.aprendoz_test.data.output.GetFullNameRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getFullNameQueryName), usuario));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<Hql_tipo_eventualidadRtnType> hql_tipo_eventualidad() {
        return ((List<Hql_tipo_eventualidadRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.hql_tipo_eventualidadQueryName)));
    }

    public Integer deleteSubject(Integer idasignatura) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.deleteSubjectQueryName), idasignatura));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public com.aprendoz_test.data.output.GetTypeUserRtnType getTypeUser(String usuario) {
        List<com.aprendoz_test.data.output.GetTypeUserRtnType> rtn = ((List<com.aprendoz_test.data.output.GetTypeUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getTypeUserQueryName), usuario));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer actualizarClave(String clave, String usuario) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.actualizarClaveQueryName), clave, usuario));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<SearchReportesAlumnosRtnType> searchReportesAlumnos(String search) {
        return ((List<SearchReportesAlumnosRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.searchReportesAlumnosQueryName), search));
    }

    public List<GetMaxSubjectByGradeRtnType> getMaxSubjectByGrade(Integer idgrado, Integer idsy) {
        return ((List<GetMaxSubjectByGradeRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getMaxSubjectByGradeQueryName), idgrado, idsy));
    }

    public List<Last_accessHQLRtnType> last_accessHQL(String user) {
        return ((List<Last_accessHQLRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.last_accessHQLQueryName), user));
    }

    public List<SendMailHQLRtnType> sendMailHQL(Integer ide) {
        return ((List<SendMailHQLRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.sendMailHQLQueryName), ide));
    }

    public List<ShowInformationUserRtnType> showInformationUser(String user) {
        return ((List<ShowInformationUserRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.showInformationUserQueryName), user));
    }

    public com.aprendoz_test.data.output.GetCountGenderMaleRtnType getCountGenderMale(Integer sy, Integer curso) {
        List<com.aprendoz_test.data.output.GetCountGenderMaleRtnType> rtn = ((List<com.aprendoz_test.data.output.GetCountGenderMaleRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.getCountGenderMaleQueryName), sy, curso));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Integer deleteEventualidadPersona(Integer epid) {
        List<Integer> rtn = ((List<Integer> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.deleteEventualidadPersonaQueryName), epid));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public List<SeachEventualidadHQLRtnType> seachEventualidadHQL(String search) {
        return ((List<SeachEventualidadHQLRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.SeachEventualidadHQLQueryName), search));
    }

    public List<SubjectDetailsRtnType> subjectDetails(Integer idasignatura) {
        return ((List<SubjectDetailsRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (Aprendoz_testConstants.subjectDetailsQueryName), idasignatura));
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
