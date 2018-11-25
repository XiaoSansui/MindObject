package com.dc.base.listener;

import com.dc.base.constants.ConstantsBase;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import java.io.File;

public class WebappListener implements ServletContextListener {
    public void contextInitialized(ServletContextEvent sce) {
        //获取项目真实路径（根路径）
        String webAppRootKey=sce.getServletContext().getRealPath(File.separator);
        //设置系统属性 webapp.root（名） webAppRootKey（值）
        System.setProperty(ConstantsBase.WEBAPP_ROOT,webAppRootKey+File.separator);
        //根据路径新建文件
        File file=new File(webAppRootKey);
        //设置文件名
        System.setProperty(ConstantsBase.PROJECT_NAME,file.getName());
        //项目输出路径
        System.setProperty(ConstantsBase.WEBAPP_CLASSES,webAppRootKey+File.separator+"WEB-INF"+
                File.separator+"classes"+File.separator);

    }


    public void contextDestroyed(ServletContextEvent sce) {

    }
}
