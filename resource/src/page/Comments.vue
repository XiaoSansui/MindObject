<template>
  <div class="commentWrap clearfix">
    <textarea id="editor" placeholder="Balabala" autofocus></textarea>
    <remote-js src="http://pv.sohu.com/cityjson?ie=utf-8"></remote-js>
    <div class="submit"><el-button type="primary" @click="submitComment">提交留言</el-button></div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import '../../static/jquery-1.11.3.min.js'
  export default {
    data(){
      return{
        editor:'',//富文本编辑器实例
        comments:'',  //留言文本信息
        ip:'', //ip地址
        cityName:'',//城市名称
      }
    },
    computed:{
      ...mapState(['citys']),
    },
    methods:{
      submitComment(){
        this.ip = returnCitySN["cip"];
        this.comments = this.editor.getValue().replace('<p>','').replace('</p>','')
        //let url = 'http://ip.taobao.com/service/getIpInfo.php?ip='+this.ip
        //this.$store.dispatch('getCitys',this.ip)
        var data={ip:returnCitySN.cip,address:returnCitySN.cname,content:this.comments};
        $.ajax({
          url: "http://47.107.83.220/home/message/message",
          type: "get",
          data:data,
          success: function (result) {
          }
        });

      }
    },
    components:{
      'remote-js': {
        render(createElement) {
          return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
        },
        props: {
          src: { type: String, required: true },
        },
      },
    },
    mounted(){
      this.$nextTick(()=>{
        this.editor = new Simditor({
          textarea: $('#editor'),
          toolbar:[
            'title',
            'bold',
            'italic',
            'underline',
            'strikethrough',
            'fontScale',
            'color',
            'ol',
            'ul',
            'blockquote',
            'code',
            'table',
            'link',
            'hr',
            'indent',
            'outdent',
            'alignment',
          ]
        });
      })
    },
    watch:{
      citys(){
        if(citys){
          this.cityName = this.$store.state.citys
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .commentWrap{
    background-color: white;
    margin-bottom: 10px;
    border-radius: 5px;
    .submit{
      width: 100%;
      text-align: center;
      margin: 5px;
    }
  }

</style>
