package com.dc.service.impl;

import com.dc.base.vo.BaseModel;
import com.dc.dao.CommodityInformationDao;
import com.dc.pojo.CommodityInformation;
import com.dc.service.CommodityInformationService;
import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CommodityInformationServiceimpl implements CommodityInformationService {
    @Autowired
    //收银员查询全部商品
    private CommodityInformationDao commodityInformationDao;
    public BaseModel selectAllByPage(BaseModel baseModel, Integer page, Integer maxSize, String likeName){
        PageHelper.startPage(page,maxSize);//开启分页
        List<CommodityInformation> users = commodityInformationDao.selectAllByPage(likeName);
        PageInfo pageInfo=new PageInfo(users,5);
        baseModel.setResultCode(0);
        baseModel.setMessage("分页查询用户成功");
        baseModel.setData(pageInfo);
        return baseModel;
    }
}
