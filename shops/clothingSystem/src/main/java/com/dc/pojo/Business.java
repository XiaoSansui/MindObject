package com.dc.pojo;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.wordnik.swagger.annotations.ApiModelProperty;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;


public class Business {
    @ApiModelProperty(value = "商家号")
    private String merchant_id;
    @ApiModelProperty(value = "营业时间")
    @JsonFormat(pattern="yyyy-MM-dd")//返回页面值的时候
    @DateTimeFormat(pattern = "yyyy-MM-dd")//页面传值给后台的时候
    private Date business_time;
    @ApiModelProperty(value = "营业额")
    private double business_money;
    @ApiModelProperty(value = "退单数量")
    private int single_number;
    @ApiModelProperty(value = "退单金额")
    private double single_money;
    @ApiModelProperty(value = "净营业额")
    private double actual_business_money;

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Business{");
        sb.append("merchant_id='").append(merchant_id).append('\'');
        sb.append(", business_time=").append(business_time);
        sb.append(", business_money=").append(business_money);
        sb.append(", single_number=").append(single_number);
        sb.append(", single_money=").append(single_money);
        sb.append(", actual_business_money=").append(actual_business_money);
        sb.append('}');
        return sb.toString();
    }

    public String getMerchant_id() {
        return merchant_id;
    }

    public void setMerchant_id(String merchant_id) {
        this.merchant_id = merchant_id;
    }

    public Date getBusiness_time() {
        return business_time;
    }

    public void setBusiness_time(Date business_time) {
        this.business_time = business_time;
    }

    public double getBusiness_money() {
        return business_money;
    }

    public void setBusiness_money(double business_money) {
        this.business_money = business_money;
    }

    public int getSingle_number() {
        return single_number;
    }

    public void setSingle_number(int single_number) {
        this.single_number = single_number;
    }

    public double getSingle_money() {
        return single_money;
    }

    public void setSingle_money(double single_money) {
        this.single_money = single_money;
    }

    public double getActual_business_money() {
        return actual_business_money;
    }

    public void setActual_business_money(double actual_business_money) {
        this.actual_business_money = actual_business_money;
    }
}
