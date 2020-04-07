var resultView = new Vue({
  el: '#app',
  data: {
    text: "any text",
    backgroundImgStr: "",
    playerImgStr: "",
    playerName:"",
    main_menu: true,
    game_window: false,
    settingsPanel: false,
    playerInfo: false,

    background_img: ["images/winter_diag.jpg", "images/1.jpg", "images/2.jpg", "images/3.jpg"],

    scene: [
      {background: 0, story: "this is scene 0", button: [{text: "go to 1", goto: 1}, {text: "go to 2", goto: 2}, {text: "go to 3", goto: 3}]},
      {background: 1, story: "this is scene 1", button: [{text: "go to 2", goto: 2}, {text: "go to 3", goto: 3}]},
      {background: 2, story: "this is scene 2", button: [{text: "go to 2", goto: 2}, {text: "go to 3", goto: 3}]},
      {background: 3, story: "this is scene 3, the final scene", is_final: true},
    ],

    current_scene: -1,

  },
  methods: {
    openSettings: function () {
      this.settingsPanel = !this.settingsPanel;
    },

    closeSettings() {
      this.settingsPanel = false;
    },

    playerInfoPanel() {
      console.log(this.playerInfo)
      this.main_menu = false;
      this.playerInfo = true;
    },

    startGame() {
      this.game_window = true;
      this.playerInfo = false;
      this.current_scene = 0;
    },

    goToMainMenu() {
      this.settingsPanel = false;
      this.game_window = false;
      this.main_menu = true;
      this.current_scene = -1;
    },

    getBackgroundString() {
      // return "'images/" + this.current_scene + ".jpg'";
      return "'" + this.background_img[this.current_scene] + "'";
    },

    goToScene(index) {
      console.log(index);
      console.log(this.scene[this.current_scene].button[index].goto);
      this.current_scene = this.scene[this.current_scene].button[index].goto;
    },
  }
})