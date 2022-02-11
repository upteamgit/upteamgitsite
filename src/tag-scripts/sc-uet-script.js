// https://ui.ads-int.microsoft.com/campaign/smart?aid=339244211&cid=308093028&uid=181574221#/campaign/1012711483/ConversionGoalsSetup
export default function (w, d, t, r, u) {
  var f, n, i;
  (w[u] = w[u] || []),
    (f = function () {
      var o = { ti: "111070384" };
      (o.q = w[u]), (w[u] = new UET(o)), w[u].push("pageLoad");
    }),
    (n = d.createElement(t)),
    (n.src = r),
    (n.async = 1),
    (n.onload = n.onreadystatechange = function () {
      var s = this.readyState;
      (s && s !== "loaded" && s !== "complete") ||
        (f(), (n.onload = n.onreadystatechange = null));
    }),
    (i = d.getElementsByTagName(t)[0]),
    i.parentNode.insertBefore(n, i);
}