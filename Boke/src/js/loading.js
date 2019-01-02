//页面加载loding动画
document.onreadystatechange = completeLoading;
function completeLoading() {
  if (document.readyState == "complete") {
    var loadingMask = document.querySelector('.Loading');
    loadingMask.style.cssText='transition:.5s;opacity:0;z-index:-1;';
  }
}
