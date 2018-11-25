package com.dc.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.wordnik.swagger.annotations.ApiModelProperty;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class Single {
    @ApiModelProperty(value = "商家号")
    private String merchant_id;
    @ApiModelProperty(value = "订单号")
    private String order_id;
    @ApiModelProperty(value = "商品单号")
    private String items_id;
    @ApiModelProperty(value = "商品类型")
    private String items_type;
    @ApiModelProperty(value = "品牌名称")
    private String brand_name;
    @ApiModelProperty(value = "品牌型号")
    private String brand_type;
    @ApiModelProperty(value = "收银员姓名")
    private String user_name;
    @ApiModelProperty(value = "退单金额")
    private double single_money;
    @ApiModelProperty(value = "操作员姓名")
    private String users_names;
    @ApiModelProperty(value = "退单时间")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")//返回页面值的时候
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")//页面传值给后台的时候
    private Date single_time;
    @ApiModelProperty(value = "收银员工号")
    private String user_id;
    @ApiModelProperty(value = "操作员工号")
    private String users_ids;

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Single{");
        sb.append("merchant_id='").append(merchant_id).append('\'');
        sb.append(", order_id='").append(order_id).append('\'');
        sb.append(", items_id='").append(items_id).append('\'');
        sb.append(", items_type='").append(items_type).append('\'');
        sb.append(", brand_name='").append(brand_name).append('\'');
        sb.append(", brand_type='").append(brand_type).append('\'');
        sb.append(", user_name='").append(user_name).append('\'');
        sb.append(", single_money=").append(single_money);
        sb.append(", users_names='").append(users_names).append('\'');
        sb.append(", single_time=").append(single_time);
        sb.append(", user_id='").append(user_id).append('\'');
        sb.append(", users_ids='").append(users_ids).append('\'');
        sb.append('}');
        return sb.toString();
    }

    public String getMerchant_id() {
        return merchant_id;
    }

    public void setMerchant_id(String merchant_id) {
        this.merchant_id = merchant_id;
    }

    public String getOrder_id() {
        return order_id;
    }

    public void setOrder_id(String order_id) {
        this.order_id = order_id;
    }

    public String getItems_id() {
        return items_id;
    }

    public void setItems_id(String items_id) {
        this.items_id = items_id;
    }

    public String getItems_type() {
        return items_type;
    }

    public void setItems_type(String items_type) {
        this.items_type = items_type;
    }

    public String getBrand_name() {
        return brand_name;
    }

    public void setBrand_name(String brand_name) {
        this.brand_name = brand_name;
    }

    public String getBrand_type() {
        return brand_type;
    }

    public void setBrand_type(String brand_type) {
        this.brand_type = brand_type;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public double getSingle_money() {
        return single_money;
    }

    public void setSingle_money(double single_money) {
        this.single_money = single_money;
    }

    public String getUsers_names() {
        return users_names;
    }

    public void setUsers_names(String users_names) {
        this.users_names = users_names;
    }

    public Date getSingle_time() {
        return single_time;
    }

    public void setSingle_time(Date single_time) {
        this.single_time = single_time;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getUsers_ids() {
        return users_ids;
    }

    public void setUsers_ids(String users_ids) {
        this.users_ids = users_ids;
    }
}
