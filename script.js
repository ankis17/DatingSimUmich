// var addChars = setInterval(function(txt, curr_txt, currently_scrolling) {
//   let i = 0;
//   // _this.currently_scrolling = true;
//   if (i < txt.length) {
//     curr_txt += txt.charAt(i);
//     $(".mainText").text(curr_txt);
//     i++;
//   }
//   else {
//     // _this.currently_scrolling = false;
//     currently_scrolling = false;
//     clearInterval(addChars);
//   }
// }, 10);

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
    textScrollSpeed: 10,
    currently_scrolling: false,

    background_img: ["images/winter_diag.jpg", "images/1.jpg", "images/2.jpg", "images/3.jpg"],

    scene: [
      {background: 0, speaker: "Narrator", nextScene: 1, story: "It's another cold day at the University of Michigan. You are a new freshman ready to start your first college experience. How will this new environment treat you?"},
      {background: 0, speaker: "Narrator", nextScene: 2, story: "Out of the corner of your eye, you see a person approach you. Who could it be?"},
      {background: 0, speaker: "???", nextScene: 3, story: "Hey! How’s it going? Are you a new student here? I saw you walking around and you looked a bit confused as to where to go."},
      {background: 0, speaker: "You", nextScene: 4, story: "(wow, he looks like he works out a lot) Yeah, this is my first day on campus, so I’m a bit lost. I can’t figure out how to get to the STAMPS building. What’s your name?"},
      {background: 0, speaker: "Billy", nextScene: 5, story: "I’m Billy Magic-"},
      {background: 0, speaker: "Unknown Voice", nextScene: 6, story: "BILLY MAGIC"},
      {background: 0, speaker: "Billy", nextScene: 7, story: "-an upperclassman here at Michigan! Let me introduce you to… Magic Bus!"},
      {background: 0, speaker: "You", nextScene: 8, story: "(where did that loud voice come from? weird.)"},
      {background: 0, speaker: "Billy", nextScene: 9, story: "This is the Central Campus Transit Center, also known as CC Little. All the blue buses, which are the university buses that take you around campus, stop here. And, they’re free!"},
      {background: 0, speaker: "You", nextScene: 10, story: "Nice to meet you Billy, I’m [PLAYER NAME]. That’s the bus system right? Which one should I take to get to north campus?"},
      {background: 0, speaker: "Billy", nextScene: 11, story: "Well, you have a lot of options. I would recommend Bursley-Baits or Northwood, those are usually the fastest! Anyways, I’ve got to head to a bus convention soon, but let’s meet up again later so I can show you around a bit more! *wink*"},
      {background: 0, speaker: "You", nextScene: 12, story: "Thanks a lot Billy, I’ll see you later!"},
      {background: 0, speaker: "Narrator", nextScene: 13, story: "You get on Bursley-Baits and find yourself a seat. After a rather uneventful ride, you find yourself on North Campus."},
      {background: 0, speaker: "You", nextScene: 14, story: "(hmm, I have a lot of time before my first class, and I’m kind of hungry, maybe I should get some food)"},
      {background: 0, speaker: "Narrator", nextScene: 15, story: "In the corner of your eye, you spot a restaurant called Pamda Express. "},
      {background: 0, speaker: "You", nextScene: 16, story: "(wow, that looks good! I think I’ll eat there)"},
      {background: 0, speaker: "Narrator", nextScene: 17, story: "You order a bowl of fried rice and orange chicken and make your way to the checkout."},
      {background: 0, speaker: "Pamda Express Employee", nextScene: 18, story: "...Drink? Donation?"},
      {background: 0, speaker: "You", button: [{text: "Yes", goto: 19}, {text: "No", goto: 20}]},
      {background: 0, speaker: "You", nextScene: 21, story: "Sure, round it up please."},
      {background: 0, speaker: "You", nextScene: 21, story: "No thank you.", is_final: true}
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

      // First scene
      this.typeWriter(this.scene[0]['story']);
    },

    goToMainMenu() {
      this.settingsPanel = false;
      this.game_window = false;
      this.main_menu = true;
      this.current_scene = -1;
    },

    getBackgroundString() {
      // return "'images/" + this.current_scene + ".jpg'";
      return "'" + this.background_img[this.scene[this.current_scene].background] + "'";
    },

    goToScene(index) {
      console.log(index);
      console.log(this.scene[this.current_scene].button[index].goto);
      this.current_scene = this.scene[this.current_scene].button[index].goto;
    },

    nextScene() {
      // If text is currently scrolling, clicking the textbox again will show the entire 
      if (this.currently_scrolling) {
        console.log("done");
        this.currently_scrolling = false;
        $(".mainText").text(this.scene[this.current_scene]['story']);
        return;
      }
      if(this.scene[this.current_scene].button === undefined) {
        console.log('current scene: ' + this.current_scene);
        console.log('next scene: ' + this.scene[this.current_scene].nextScene);
        console.log('going to next scene');
        this.current_scene = this.scene[this.current_scene].nextScene;
        this.typeWriter(this.scene[this.current_scene]['story']);
      }
      else {
        console.log("click deferred, button options available");
      }
    },

    typeWriter(txt) {
      let i = 0;
      let curr_txt = "";
      var _this = this;
      _this.currently_scrolling = true;
      var addChars = setInterval(function() {
        if (i < txt.length && _this.currently_scrolling) {
          curr_txt += txt.charAt(i);
          $(".mainText").text(curr_txt);
          i++;
        }
        else {
          _this.currently_scrolling = false;
          clearInterval(addChars);
        }
      }, this.textScrollSpeed)
      // addChars(txt, "", 10, this.currently_scrolling);
      // this.currently_scrolling = true;
    },
  }
})