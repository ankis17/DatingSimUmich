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

// function GameScreen(title, href, imageUri, description) {
//   this.title = title;
//   this.href = href;
//   this.imageUri = imageUri;
//   this.description = description;
// }

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
    adventure: false,
    textScrollSpeed: 15,
    currently_scrolling: false,
    scene:[],

    background_img: ["images/winter_diag.jpg", "images/cctcbackground.jpg", "images/blueBus.jpg", "images/pierpont.jpg", "images/pierpontPanda.jpg", "images/pandaServing.jpg", "images/pandaCashier.jpg", "images/pandaFood.webp", "images/pandaBag.jpg", "images/outsideFight.png", "images/inFight.png", "images/snowball.jpg", "images/pingpongBBB.jpg", "images/ggbrown.jpg", "images/markley.jpg"],
    character_img: ["images/billy_magic.png", "images/noCharacter.png", "images/snowballCharacter.png", "images/throwingCharacter.png", "images/bagely.png"],
    CentralScene: [
    {background: 14, character: 1, speaker: "Narrator", nextScene: 1, story: "You are a new freshman ready to start your college experience at the University of Michigan. You recently transferred from Ohio State University, a horrifying circus school. You shudder as you remember your first semester, but promise yourself that this time, things will be different."},
    {background: 14, character: 1, speaker: "Narrator", nextScene: 2, story: "This time, you're determined to meet new people, make new friends... and maybe... even find someone special this cuffing season...?"},
    {background: 14, character: 1, speaker: "Narrator", nextScene: 3, story: "The thought makes your heartbeat quicken."},
    {background: 14, character: 1, speaker: "Narrator", nextScene: 4, story: "You can't help but sit back and daydream about all the wonderful people you might end up with. Maybe you might even meet Sasha Obama!"},
    {background: 14, character: 1, speaker: "Narrator", nextScene: 5, story: "Suddenly, the door behind you opens."},
    {background: 14, character: 4, speaker: "Bagely", nextScene: 6, story: "\"Hey.\""},
    {background: 14, character: 4, speaker: "Bagely", nextScene: 7, story: "Bagely's massive 6'7\" frame takes up the entire width of the hallway. His gigantic, hulking musculature smashes entirely through your doorway, flinging dust and rubble all over your room, and leaving a gaping O-shaped hole where your door used to be."},
    {background: 14, character: 4, speaker: "Bagely", nextScene: 8, story: "\"Whoops, my bad.\""},
    {background: 14, character: 4, speaker: "Bagely", nextScene: 9, story: "\"Uh. I'm your new roommate.\""},
    {background: 14, character: 4, speaker: "Bagely", nextScene: 10, story: "(plotline to be continued)"}
  ],
    NorthScene: [
      // {background: 0, character: 1, speaker: "Narrator", nextScene: 1, story: "It's another cold day at the University of Michigan. You are a transfer student ready to start your first day at Umich. How will this new environment treat you?"},
      {background: 0, character: 1, speaker: "Narrator", nextScene: 1, story: "You are a new freshman ready to start your college experience at the University of Michigan. You recently transferred from Ohio State University, a horrifying circus school. You shudder as you remember your first semester, but promise yourself that this time, things will be different."},
      {background: 0, character: 1, speaker: "Narrator", nextScene: 2, story: "This time, you're determined to meet new people, make new friends... and maybe... even find someone special this cuffing season...?"},
      {background: 0, character: 1, speaker: "Narrator", nextScene: 3, story: "Out of the corner of your eye, you see a person approach you. Who could it be?"},
      {background: 0, character: 0, speaker: "???", nextScene: 4, story: "Hey! How's it going? Are you a new student here? I saw you walking around and you looked a bit confused as to where to go."},
      {background: 0, character: 0, speaker: "You", nextScene: 5, story: "(wow, he looks like he works out a lot) Yeah, this is my first day on campus, so I'm a bit lost. I can't figure out how to get to the STAMPS building. What's your name?"},
      {background: 0, character: 0, speaker: "Billy", nextScene: 6, story: "I'm Billy Magic-"},
      {background: 0, character: 0, speaker: "Unknown Voice", nextScene: 7, story: "BILLY MAGIC"},
      {background: 0, character: 0, speaker: "Billy", nextScene: 8, story: "-an upperclassman here at Michigan! Let me introduce you to… Magic Bus!"},
      {background: 0, character: 0, speaker: "You", nextScene: 9, story: "(where did that loud voice come from? weird.)"},
      {background: 1, character: 0, speaker: "Billy", nextScene: 10, story: "This is the Central Campus Transit Center, also known as CC Little. All the blue buses, which are the university buses that take you around campus, stop here. And, they're free!"},
      {background: 1, character: 0, speaker: "You", nextScene: 11, story: "Nice to meet you Billy. That's the bus system right? Which one should I take to get to north campus?"},
      {background: 1, character: 0, speaker: "Billy", nextScene: 12, story: "Well, you have a lot of options. I would recommend Bursley-Baits or Northwood, those are usually the fastest, you can always check the app Magic Bus to see which one is arriving soonest - definitely useful in these cold times! Anyways, I've got to head to a bus convention soon, but let's meet up again later so I can show you around a bit more! *wink*"},
      {background: 1, character: 0, speaker: "You", nextScene: 13, story: "Thanks a lot Billy, I'll see you later!"},
      {background: 2, character: 1, speaker: "Narrator", nextScene: 14, story: "You get on Bursley-Baits and find yourself a seat. After a rather uneventful ride, you find yourself on North Campus."},
      {background: 3, character: 1, speaker: "You", nextScene: 15, story: "(hmm, I have a lot of time before my first class, and I'm kind of hungry, maybe I should get some food)"},
      {background: 4, character: 1, speaker: "Narrator", nextScene: 16, story: "In the corner of your eye, you spot a restaurant called Panda Express. "},
      {background: 4, character: 1, speaker: "You", nextScene: 17, story: "(wow, that looks good! I think I'll eat there)"},
      {background: 5, character: 1, speaker: "Narrator", nextScene: 18, story: "You order a bowl of fried rice and orange chicken and make your way to the checkout."},
      {background: 6, character: 1, speaker: "Panda Express Employee", story: "...Drink? Donation?", button: [{text: "Yes", goto: 19}, {text: "No", goto: 20}]},
      // {background: 6, character: 1, speaker: "You", button: [{text: "Yes", goto: 21}, {text: "No", goto: 22}]},
      {background: 6, character: 1, speaker: "You", nextScene: 21, story: "Sure, round it up please."},
      {background: 6, character: 1, speaker: "You", nextScene: 21, story: "No thank you."},
      {background: 7, character: 1, speaker: "You", nextScene: 22, story: "This look so great ... can't wait to dig in!"},
      {background: 8, character: 1, speaker: "You", nextScene: 23, story: "Wow, what a great meal .. I'm so full, let me pack the rest to go. "},
      {background: 9, character: 1, speaker: "Narrator", nextScene: 24, story: "You look out of the window to see a snowball fight going on."},
      {background: 9, character: 1, speaker: "You", nextScene: 25, story: "I still have so much time to kill. Seems like there's a snowball fight going on outside.. Maybe I'll join! "},
      {background: 10, character: 1, speaker: "Narrator", nextScene: 26, story: "You walk over to the people snowball fighting in front of the BBB"},
      {background: 10, character: 2, speaker: "Snowball Fight Player", nextScene: 27, story: "Hey, do you want to join us?"},
      {background: 10, character: 2, speaker: "You", nextScene: 28, story: "Of course!", },
      {background: 10, character: 3, speaker: "Snowball Fight Player", nextScene: 29, story: "Be careful what you wish for!", },
      {background: 11, character: 1, speaker: "You", nextScene: 30, story: "Whoa!!", },
      {background: 10, character: 2, speaker: "Snowball Fight Player", nextScene: 31, story: "Hahhaha, my name is Carton. I'm actually getting pretty cold, do you want to go into the BBB and play some pingpong with me?", },
      {background: 10, character: 2, speaker: "You", nextScene: 32, story: "Yeah sure", },
      {background: 12, character: 1, speaker: "You", nextScene: 33, story: "Shoot! I forgot about class!! Sorry Calton, I gotta go ", },
      {background: 13, character: 1, speaker: "You", nextScene: 34, story: "Ah, finally GG Brown - can't wait to take my first Umich EECS course", },
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
      console.log(this.playerName);
    },

    pickAdv(){
      if (this.playerName === "") {
        alert("Name cannot be empty");
      }
      else {
        this.adventure = true;
        this.playerInfo = false;
      }
    },

    whichCampus(input){
      if(input == "North"){
        this.scene = this.NorthScene;
      }
      else{
        this.scene = this.CentralScene;
      }
      this.startGame();
    },

    startGame() {
        console.log(this.playerName);
      this.game_window = true;
      this.adventure = false;
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

    getCharacterString() {
        // return "'images/" + this.current_scene + ".jpg'";
        return this.character_img[this.scene[this.current_scene].character];
      },

    goToScene(index) {
      console.log(index);
      console.log(this.scene[this.current_scene].button[index].goto);
      this.current_scene = this.scene[this.current_scene].button[index].goto;
      this.typeWriter(this.scene[this.current_scene]['story']);
    },

    nextScene() {
        console.log(this.playerName);
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
        if (txt!=undefined && i < txt.length && _this.currently_scrolling ) {
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