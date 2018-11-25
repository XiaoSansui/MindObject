package com.dc.dao;

import com.dc.pojo.CommodityInformation;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommodityInformationDao {
    //收银员查询全部商品
    List<CommodityInformation> selectAllByPage(@Param("likeName") String likeName);
}
