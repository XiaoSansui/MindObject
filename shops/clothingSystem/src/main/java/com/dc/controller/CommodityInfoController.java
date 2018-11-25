package com.dc.controller;

import com.dc.base.vo.BaseModel;
import com.dc.service.CommodityInformationService;
import com.wordnik.swagger.annotations.ApiImplicitParam;
import com.wordnik.swagger.annotations.ApiImplicitParams;
import com.wordnik.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
@RequestMapping("/commodity")
public class CommodityInfoController {
    @Autowired
    private CommodityInformationService commodityInformationService;

    //收银员查询全部商品
    @ApiImplicitParams({
            @ApiImplicitParam(name = "page",value = "当前页码",dataType = "Integer",defaultValue = "1"),
            @ApiImplicitParam(name = "maxSize",value = "一页最大的数据条数",dataType = "Integer",defaultValue = "10"),
            @ApiImplicitParam(name = "likeName",value = "模糊查询值",dataType = "String",required = false)
    })
    @ApiOperation(value="查询全部商品",tags = "查询商品",httpMethod = "GET")
    @RequestMapping(value = "/selectAllCommon",method = RequestMethod.GET)
    @ResponseBody
    public BaseModel selectAllByPage(BaseModel baseModel,@RequestParam(value = "page",defaultValue = "1") Integer page,
                                     @RequestParam(value = "maxSize",defaultValue = "10") Integer maxSize,
                                     @RequestParam(value = "likeName",required = false) String likeName){
        return commodityInformationService.selectAllByPage(baseModel,page,maxSize,likeName);
    }

    //
}
