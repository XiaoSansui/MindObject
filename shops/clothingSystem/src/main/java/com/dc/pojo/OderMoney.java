package com.dc.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.wordnik.swagger.annotations.ApiModelProperty;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class OderMoney {
    @ApiModelProperty(value = "商家名称")
    private String merchant_id;
    @ApiModelProperty(value = "订单号")
    private String order_id;
    @ApiModelProperty(value = "总金额")
    private double total_price;
    @ApiModelProperty(value = "实付金额")
    private double actual_money;
    @ApiModelProperty(value = "找零")
    private double change;
    @ApiModelProperty(value = "收银员姓名")
    private String user_name;
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")//返回页面值的时候
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")//页面传值给后台的时候
    @ApiModelProperty(value = "下单时间")
    private Date shopping_time;
}
