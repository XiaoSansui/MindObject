package com.dc.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.wordnik.swagger.annotations.ApiModelProperty;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class EmloyeesTime {
    @ApiModelProperty(value = "商家名称")
    private String merchant_id;
    @ApiModelProperty(value = "账号/工号")
    private String user_id;
    @ApiModelProperty(value = "员工姓名")
    private String user_name;
    @ApiModelProperty(value = "性别")
    private String user_sex;
    @ApiModelProperty(value = "上线时间")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")//返回页面值的时候
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")//页面传值给后台的时候
    private Date online_time;
    @ApiModelProperty(value = "下线时间")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")//返回页面值的时候
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")//页面传值给后台的时候
    private Date offine_time;
    @ApiModelProperty(value = "在线时长")
    @JsonFormat(pattern="HH:mm:ss")//返回页面值的时候
    @DateTimeFormat(pattern = "HH:mm:ss")//页面传值给后台的时候
    private Date in_time;

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Emloyees_time{");
        sb.append("merchant_id='").append(merchant_id).append('\'');
        sb.append(", user_id='").append(user_id).append('\'');
        sb.append(", user_name='").append(user_name).append('\'');
        sb.append(", user_sex='").append(user_sex).append('\'');
        sb.append(", online_time=").append(online_time);
        sb.append(", offine_time=").append(offine_time);
        sb.append(", in_time=").append(in_time);
        sb.append('}');
        return sb.toString();
    }

    public String getMerchant_id() {
        return merchant_id;
    }

    public void setMerchant_id(String merchant_id) {
        this.merchant_id = merchant_id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_sex() {
        return user_sex;
    }

    public void setUser_sex(String user_sex) {
        this.user_sex = user_sex;
    }

    public Date getOnline_time() {
        return online_time;
    }

    public void setOnline_time(Date online_time) {
        this.online_time = online_time;
    }

    public Date getOffine_time() {
        return offine_time;
    }

    public void setOffine_time(Date offine_time) {
        this.offine_time = offine_time;
    }

    public Date getIn_time() {
        return in_time;
    }

    public void setIn_time(Date in_time) {
        this.in_time = in_time;
    }
}
