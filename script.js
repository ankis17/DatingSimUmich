var resultView = new Vue({
  el: '#app',
  data: {
    text: "any text",
    backgroundImgStr: "",
    playerImgStr: "",
    playerName:"Your Name Here",
    main_menu: true,
    game_window: false,
    settingsPanel: false,
    playerInfo: false,
    textScrollSpeed: 15,

    background_img: ["images/winter_diag.jpg", "images/1.jpg", "images/2.jpg", "images/3.jpg"],

    scene: [
      {background: 0, story: "this is scene 0", button: [{text: "go to 1", goto: 1}, {text: "go to 2", goto: 2}, {text: "go to 3", goto: 3}]},
      {background: 1, story: "this is scene 1", button: [{text: "go to 2", goto: 2}, {text: "go to 3", goto: 3}]},
      {background: 2, story: "this is scene 2", button: [{text: "go to 2", goto: 2}, {text: "go to 3", goto: 3}]},
      {background: 3, story: "this is scene 3, the final scene", is_final: true},
    ],

    storyText: {
      
    },

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

    typeWriter() {
      let i = 0;
      let txt = "Very Dramatic Story Here. According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible."
      let curr_txt = "";
      var addChars = setInterval(function() {
        if (i < txt.length) {
          curr_txt += txt.charAt(i);
          $(".mainText").text(curr_txt);
          i++;
        }
        else {
          clearInterval(addChars);
        }
      }, this.textScrollSpeed)
    },
  }
})