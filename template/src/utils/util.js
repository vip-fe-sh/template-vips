import Vue from 'vue';

let initSpinner = (target) => {
  let opts = {
    lines: 12,
    length: 6,
    width: 3,
    radius: 8,
    scale: 1.0,
    corners: 1,
    color: '#fff',
    opacity: 0.2,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 100,
    fps: 30,
    zIndex: 99999,
    className: 'spinner',
    top: '50%',
    left: '50%',
    shadow: false,
    hwaccel: false,
    position: 'absolute'
  };
  window.Spinner && new window.Spinner(opts).spin(target);
};

let request = (url, callback) => {
  let target = document.getElementById('spin');
  target.classList.remove('hidden');
  initSpinner(target);

  Vue.http.get(url).then((res) => {
    if (res.ok) {
      window.setTimeout(() => {
        callback(res.data);
        target.classList.add('hidden');
      }, 1000);
    }
  });
};

module.exports = {
  request: request
};
