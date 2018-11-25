package com.dc.pojo;

import com.wordnik.swagger.annotations.ApiModelProperty;

public class MyeesTime {
    @ApiModelProperty(value = "商家名称")
    private String merchant_id;
    @ApiModelProperty(value = "账号/工号")
    private String user_id;
    @ApiModelProperty(value = "姓名")
    private String user_name;
    @ApiModelProperty(value = "性别")
    private String user_sex;
    @ApiModelProperty(value = "小时")
    private int h_time;
    @ApiModelProperty(value = "分钟")
    private int min_time;
    @ApiModelProperty(value = "秒")
    private int s_time;

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("Myees_time{");
        sb.append("merchant_id='").append(merchant_id).append('\'');
        sb.append(", user_id='").append(user_id).append('\'');
        sb.append(", user_name='").append(user_name).append('\'');
        sb.append(", user_sex='").append(user_sex).append('\'');
        sb.append(", h_time=").append(h_time);
        sb.append(", min_time=").append(min_time);
        sb.append(", s_time=").append(s_time);
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

    public int getH_time() {
        return h_time;
    }

    public void setH_time(int h_time) {
        this.h_time = h_time;
    }

    public int getMin_time() {
        return min_time;
    }

    public void setMin_time(int min_time) {
        this.min_time = min_time;
    }

    public int getS_time() {
        return s_time;
    }

    public void setS_time(int s_time) {
        this.s_time = s_time;
    }
}
