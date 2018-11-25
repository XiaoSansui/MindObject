package com.dc.pojo;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.wordnik.swagger.annotations.ApiModelProperty;
import org.joda.time.DateTime;
import org.springframework.format.annotation.DateTimeFormat;

import java.text.SimpleDateFormat;
import java.util.Date;

public class User {
    @ApiModelProperty(value = "身份")
    private int id;
    @ApiModelProperty(value = "账号/工号")
    private String user_id;
    @ApiModelProperty(value = "密码")
    private String password;
    @ApiModelProperty(value = "姓名")
    private String username;
    @ApiModelProperty(value = "性别")
    private String user_sex;
    @ApiModelProperty(value = "出生日期")
    private Date brithday;
    @ApiModelProperty(value = "身份证号码")
    private String id_card;
    @ApiModelProperty(value = "联系方式")
    private String phone;
    @ApiModelProperty(value = "商家号")
    private String merchat_id;
    @ApiModelProperty(value = "商家名称")
    private String shop_name;
    @ApiModelProperty(value = "注册时间")
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")//返回页面值的时候
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")//页面传值给后台的时候
    private Date user_time;
    @ApiModelProperty(value = "是否删除")
    private int is_deleteuser;

    @Override
    public String toString() {
        final StringBuffer sb = new StringBuffer("User{");
        sb.append("id=").append(id);
        sb.append(", user_id='").append(user_id).append('\'');
        sb.append(", password='").append(password).append('\'');
        sb.append(", username='").append(username).append('\'');
        sb.append(", user_sex='").append(user_sex).append('\'');
        sb.append(", brithday=").append(brithday);
        sb.append(", id_card='").append(id_card).append('\'');
        sb.append(", phone='").append(phone).append('\'');
        sb.append(", merchat_id='").append(merchat_id).append('\'');
        sb.append(", shop_name='").append(shop_name).append('\'');
        sb.append(", user_time=").append(user_time);
        sb.append(", is_deleteuser=").append(is_deleteuser);
        sb.append('}');
        return sb.toString();
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUser_sex() {
        return user_sex;
    }

    public void setUser_sex(String user_sex) {
        this.user_sex = user_sex;
    }

    public Date getBrithday() {
        return brithday;
    }

    public void setBrithday(Date brithday) {
        this.brithday = brithday;
    }

    public String getId_card() {
        return id_card;
    }

    public void setId_card(String id_card) {
        this.id_card = id_card;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getMerchat_id() {
        return merchat_id;
    }

    public void setMerchat_id(String merchat_id) {
        this.merchat_id = merchat_id;
    }

    public String getShop_name() {
        return shop_name;
    }

    public void setShop_name(String shop_name) {
        this.shop_name = shop_name;
    }

    public Date getUser_time() {
        return user_time;
    }

    public void setUser_time(Date user_time) {
        this.user_time = user_time;
    }

    public int getIs_deleteuser() {
        return is_deleteuser;
    }

    public void setIs_deleteuser(int is_deleteuser) {
        this.is_deleteuser = is_deleteuser;
    }
}
