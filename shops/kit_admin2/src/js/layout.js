layui.define(function (exports) {


  var template = {
    layout: ['<div class="layui-layout layui-layout-admin">', '{{content}}', '</div>'],
    header: [
      '<div class="layui-logo">',
      '<div class="layui-logo-toggle" id="toggle-side" data-toggle="on">',
      '<i class="layui-icon">&#xe65a;</i>',
      '</div>',
      '<div class="layui-logo-brand">',
      '<div>TOP服装商家收银系统</div>',
      '</div>',
      '</div>'
    ]
  };

  //输出layout接口
  exports('layout', {});
});
