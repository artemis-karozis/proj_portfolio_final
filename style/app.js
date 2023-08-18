var pageContent = document.getElementById("nav"),
  pagecopy = pageContent.cloneNode(true),
  blurryContent = document.getElementById("blurryscroll");
blurryContent.appendChild(pagecopy);
window.onscroll = function () {
  blurryContent.scrollTop = window.pageYOffset;
};
