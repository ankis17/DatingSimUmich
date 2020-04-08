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
      {background: 0, story: "It's another cold day at the University of Michigan. You are a new transfer student from a neighboring school. How will this new environment treat you?", speaker: "Narrator", nextScene: 1},
      {background: 0, story: "Out of the corner of your eye, you see a person approach you. Who could it be?", speaker: "Narrator", nextScene: 2},
      {background: 0, story: "Hey! How’s it going? Are you a new student here? I saw you walking around and you looked a bit confused as to where to go.", speaker: "???", nextScene: 3},
      {background: 3, story: "this is scene 3, the final scene", is_final: true},
    ],

    // storyText: {
      
    // },

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
      console.log("'" + this.background_img[this.scene[this.current_scene].background] + "'");
      return "'" + this.background_img[this.current_scene] + "'";
    },

    goToScene(index) {
      console.log(index);
      console.log(this.scene[this.current_scene].button[index].goto);
      this.current_scene = this.scene[this.current_scene].button[index].goto;
    },

    nextScene() {
      if(this.scene[this.current_scene].button === undefined) {
        console.log('current scene: ' + this.current_scene);
        console.log('next scene: ' + this.scene[this.current_scene].nextScene);
        console.log('going to next scene');
        this.current_scene = this.scene[this.current_scene].nextScene;
      }
      else {
        console.log("click deferred, button options available");
      }
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