package com.dc.service;

import com.dc.base.vo.BaseModel;
import com.dc.pojo.CommodityInformation;

public interface CommodityInformationService {
    //收银员查询全部商品
    public BaseModel selectAllByPage(BaseModel baseModel,Integer page,Integer maxSize,String likeName);
    //
}
