var resultView = new Vue({
    el: '#app',
    data: {
      text: "any text",
      backgroundImgStr: "",
      playerImgStr: "",
      settingsPanel: false,
    },
    methods: {
        openSettings: function(){
            this.settingsPanel = !this.settingsPanel;
        }
    }
  })
  