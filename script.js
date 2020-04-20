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
    settingsButton: true,
    playerInfo: false,
    adventure: false,
    textScrollSpeed: 15,
    currently_scrolling: false,
    scene:[],
    billyPts: 0,
    bagelyPts: 0,
    audioSettings: false,
 

    background_img: ["images/winter_diag.jpg", "images/cctcbackground.jpg", "images/blueBus.jpg", "images/black.jpg", "images/markley.jpg", "images/squad.png", "images/dark_and_snowy.jpg", "images/frat_house_outside.jpg", "images/frat_interior.png", "images/yost.jpeg"],
    character_img: ["images/billy_magic.png", "images/noCharacter.png", "images/snowballCharacter.png", "images/throwingCharacter.png", "images/bagely.png", "images/charlie.png", "images/fat_mac.png", "images/dennis.png"],
    CentralScene: [
    {background: 4, character: 1, speaker: "Narrator", nextScene: 1, story: "You are a new freshman ready to start your college experience at the University of Michigan. You recently transferred from Ohio State University, a horrifying circus school. You shudder as you remember your first semester, but promise yourself that this time, things will be different."},
    {background: 4, character: 1, speaker: "Narrator", nextScene: 2, story: "This time, you're determined to meet new people, make new friends... and maybe... even find someone special this cuffing season...?"},
    {background: 4, character: 1, speaker: "Narrator", nextScene: 3, story: "The thought makes your heartbeat quicken."},
    {background: 4, character: 1, speaker: "Narrator", nextScene: 4, story: "You can't help but sit back and daydream about all the wonderful people you might end up with. Maybe you might even meet Sasha Obama!"},
    {background: 4, character: 1, speaker: "Narrator", nextScene: 5, story: "Suddenly, the door behind you opens."},
    {background: 4, character: 4, speaker: "Bagely", nextScene: 6, story: "\"Hey.\""},
    {background: 4, character: 4, speaker: "Bagely", nextScene: 7, story: "Bagely's massive 6'7\" frame takes up the entire width of the hallway. His gigantic, hulking musculature smashes entirely through your doorway, flinging dust and rubble all over your room, and leaving a gaping O-shaped hole where your door used to be."},
    {background: 4, character: 4, speaker: "Bagely", nextScene: 8, story: "\"Whoops, my bad.\""},
    {background: 4, character: 4, speaker: "Bagely", nextScene: 9, story: "\"Uh. I'm your new roommate.\""},
    {background: 4, character: 4, speaker: "", nextScene: 10, story: "\"Oh, it's nice to meet you. Are you also a freshman?\""},
    {background: 4, character: 4, speaker: "Bagely", nextScene: 11, story: "\"Yeah, I’m in Ross, haha, pretty awesome right? I heard the classes were really hard though, so I’m a bit worried. What are you studying?\""},
    {background: 4, character: 4, speaker: "", nextScene: 12, story: "\"I'm still undecided.\""},
    {background: 4, character: 4, speaker: "Bagely", nextScene: 13, story: "\"Oh, that’s cool. Yeah, I don’t want to brag or anything, but I took a lot of AP classes in high school, so I’m technically a junior right now.\""},
    {background: 4, character: 4, speaker: "Narrator", nextScene: 14, story: "Bagely’s bagel hole curls into a buttery smile."},
    {background: 4, character: 4, speaker: "Bagely", nextScene: 15, story: "\"Anyways, it was really nice talking to you, but I’ve got to go work on a powerpoint presentation with my group. Catch you later!\""},
    {background: 4, character: 4, speaker: "Narrator", nextScene: 16, story: "Bagely quickly turns around, smashing through a second wall on his way out. Debris and sesame seeds scatter across your room."},
    {background: 4, character: 4, speaker: "Narrator", nextScene: 17, story: "You look up at the clock. Bagely’s not the only one with places to be! You’ve got to get to class!"},
    {background: 1, character: 1, speaker: "Narrator", nextScene: 18, story: "On the way to class, you get a bit confused with where the buses stop and go."},
    {background: 1, character: 1, speaker: "???", nextScene: 19, story: "\"Hey! How’s it going? Are you a new student here? I saw you walking around and you looked a bit confused as to where to go.\""},
    {background: 1, character: 1, speaker: "", nextScene: 20, story: "\"Yeah, this is my first day on campus, so I’m a bit lost. I can’t figure out how to get to the STAMPS building. What’s your name?\""},
    {background: 1, character: 0, speaker: "Billy Magic", nextScene: 21, story: "\"I’m Billy Magic, an upperclassman here at Michigan! Let me introduce you to… Magic Bus!\""},
    {background: 1, character: 0, speaker: "Billy Magic", nextScene: 22, story: "\"This is the Central Campus Transit Center, also known as CC Little. All the blue buses, which are the university buses that take you around campus, stop here. Magic Bus is a convenient app that will let you know bus arrival times. It's especially helpful in these freezing times.\""},
    {background: 1, character: 0, speaker: "", nextScene: 23, story: "\"That’s the bus system right? Which one should I take to get to North Campus?\""},
    {background: 1, character: 0, speaker: "Billy Magic", nextScene: 24, story: "\"Well, you have a lot of options. I’d recommend Bursley-Baits or Northwood, those are usually the fastest! Anyways, I’ve got to head to a bus convention soon, but let’s meet up again later so I can show you around a bit more!\" *wink*"},
    {background: 2, character: 1, speaker: "Narrator", nextScene: 25, story: "You get on Bursley-Baits and find yourself a seat."},
    {background: 3, character: 1, speaker: "...", nextScene: 26, story: "..."}, // Black screen 
    {background: 5, character: 1, speaker: "Narrator", nextScene: 27, story: "After a long day of classes, you decide to stop by South Quad dining hall to grab some dinner. You bring along tupperware to steal from the cookie stations. "},
    {background: 5, character: 1, speaker: "Narrator", nextScene: 28, story: "As you’re walking along the food stations, you see both Billy and Bagely eating at different tables. "},
    {background: 5, character: 1, speaker: "Narrator", story: "Who do you want to sit with?", button: [{text: "Billy", goto: 29, character_pt: 1}, {text: "Bagely", goto: 43, character_pt: 2}]},
    {background: 5, character: 1, speaker: "Narrator", nextScene: 30, story: "You walk over and sit down next to Billy."},
    {background: 5, character: 0, speaker: "Billy Magic", nextScene: 31, story: "\"Oh hey! I didn’t expect you to be here!\""},
    {background: 5, character: 0, speaker: "", nextScene: 32, story: "\"Hi Billy. Thanks again for the help earlier today, by the way.\""},
    {background: 5, character: 0, speaker: "Billy Magic", nextScene: 33, story: "\"Oh, no problem, I love teaching people about the blue bus system, it's one of my favorite things!\""},
    {background: 5, character: 0, speaker: "Narrator",  story: "He really likes buses.", button: [{text: "How do you know so much about buses anyways?", goto: 34, character_pt: false}, {text: "Uh, what's so great about buses anyways?", goto: 35, character_pt: false}]},
    {background: 5, character: 0, speaker: "Narrator", nextScene: 36, story: "Billy’s face immediately becomes more serious."},
    {background: 5, character: 0, speaker: "Narrator", nextScene: 36, story: "Billy gives you a murderous look."},
    {background: 5, character: 0, speaker: "Billy Magic", nextScene: 37, story: "\"I come from a long line of bus drivers. My grandfather was a great bus driver, and his father before him, and so on until long before recorded human history. I too will take upon the great bus driving tradition.\""},
    {background: 5, character: 0, speaker: "Billy Magic", nextScene: 38, story: "\"That’s why I’m majoring in buses here!\""},
    {background: 5, character: 0, speaker: "", nextScene: 39, story: "\"Wow, that’s quite the explanation. What’s your favorite bus, then?\""},
    {background: 5, character: 0, speaker: "Billy Magic", nextScene: 40, story: "\"Hmm, well let’s see, there are so many metrics to go by…\""},
    {background: 5, character: 0, speaker: "Narrator", nextScene: 41, story: "For the rest of the dinner, Billy goes on long discussions about the pros and cons of his favorite bus models. "},
    {background: 5, character: 1, speaker: "Narrator", nextScene: 42, story: "It starts to get pretty late in the evening, so you and Billy decide to head your separate ways. "},
    {background: 4, character: 1, speaker: "Narrator", nextScene: 53, story: "You head back to your room and go to bed, excited for the next day on campus. "},
    {background: 5, character: 1, speaker: "Narrator", nextScene: 44, story: "You walk over and sit down next to Bagely."},
    {background: 5, character: 4, speaker: "Bagely", nextScene: 45, story: "\"Hey, how’s it going? I just finished networking with some professors.\""},
    {background: 5, character: 4, speaker: "", story: "\"I've been good.\"", button: [{text: "Have you thought about any clubs you might want to join?", goto: 46, character_pt: false}, {text: "So you're in Ross right?", goto: 48, character_pt: false}]},
    {background: 5, character: 4, speaker: "Bagely", nextScene: 47, story: "\"Oh yeah, I’ve got my mind set on a consulting club. Every freshman wants to get into one. Getting into Bond Consulting would be my dream. If I can’t get into Bond, I guess Nexecon works too.\""},
    {background: 5, character: 4, speaker: "", nextScene: 48, story: "\"Wow, it seems like you’ve got everything figured out already!\""},
    {background: 5, character: 4, speaker: "Bagely", nextScene: 49, story: "\"Yeah, I’m also thinking about doing a CS minor, but I went to a lecture and the smell was unbearable in there. It really ruffled my seeds. I saw this one professor with super long hair that was cool though.\""},
    {background: 5, character: 4, speaker: "", nextScene: 50, story: "\"I was also thinking about taking some minors. Do you know any other ones that could be fun?\""},
    {background: 5, character: 4, speaker: "Bagely", nextScene: 51, story: "\"Hmm, well, I would consider...\""},
    {background: 5, character: 4, speaker: "Narrator", nextScene: 52, story: "You spend the rest of the dinner talking with Bagely."},
    {background: 5, character: 1, speaker: "Narrator", nextScene: 53, story: "Before long, it gets late in the evening, so you head back to your room and go to bed, excited for the next day on campus."},
    {background: 3, character: 1, speaker: "...", nextScene: 54, story: "..."}, // Black Screen
    {background: 4, character: 1, speaker: "Narrator", nextScene: 55, story: "You wake up, full of energy and ready for your second day on campus."},
    {background: 0, character: 1, speaker: "Narrator", story: "After getting dressed, you start your morning walk to class. Along the way, you see Bagely standing around outside a building. Do you go up to say hi?", button: [{text: "Approach Bagely.", goto: 56, character_pt: 2}, {text: "Leave him alone.", goto: 65, character_pt: false}]},
    {background: 0, character: 4, speaker: "", nextScene: 57, story: "\"Hi Bagely. What brings you here?\""},
    {background: 0, character: 4, speaker: "Bagely", nextScene: 58, story: "\"Wow, we just keep bumping into each other. I got a job working here at the Alumni Association. Students come and grab pieces of bagel off my body for a snack and then I just grow it back. Pretty cool huh?\""},
    {background: 0, character: 4, speaker: "Narrator", nextScene: 59, story: "You’re a bit creeped out by the idea of it, but it makes sense when you think about it."},
    {background: 0, character: 4, speaker: "", nextScene: 60, story: "\"Umm, well I guess it’s great that you have a job on campus to make some extra money.\""},
    {background: 0, character: 4, speaker: "Bagely", nextScene: 61, story: "\"Yeah, it’s a pretty sweet gig. I’m making some pretty good money on the side that I can put towards a cool new winter jacket. I’ve been looking at this one brand called Canada Goose, have you heard of it?\""},
    {background: 0, character: 4, speaker: "", nextScene: 62, story: "\"Nope. Sounds fancy though! I’ve never seen anyone wear those around here.\""},
    {background: 0, character: 4, speaker: "Narrator", nextScene: 63, story: "You look down at your watch and realize you’re going to be late if you don’t hurry up!"},
    {background: 0, character: 4, speaker: "", nextScene: 64, story: "\"Shoot, I gotta go Bagely! I’m gonna miss my lecture. See you later!\""},
    {background: 0, character: 4, speaker: "Bagely", nextScene: 66, story: "\"See ya!\""},
    {background: 0, character: 1, speaker: "Narrator", nextScene: 66, story: "You decide not to bother Bagely."},
    {background: 6, character: 1, speaker: "Narrator", nextScene: 67, story: "...After a productive day, you start walking back to the dorm, but Billy Magic notices you from across the street."},
    {background: 6, character: 0, speaker: "Billy Magic", nextScene: 68, story: "\"Hey! I was just looking for you!\""},
    {background: 6, character: 0, speaker: "Narrator", nextScene: 69, story: "Billy beams. His teeth momentarily blinds you."},
    {background: 6, character: 0, speaker: "Billy Magic", story: "\"I was wondering if you wanted to come with me to this sick rager at Delta Alpha Beta right now.\"", button: [{text: "Sure, I'd love to!", goto: 70, character_pt: 1}, {text: "Oh, no... I don't really like to have fun.", goto: 102, character_pt: false}]},
    {background: 6, character: 0, speaker: "Narrator", nextScene: 71, story: "Billy's wide smile is incandescent. You have to squint your eyes."},
    {background: 6, character: 0, speaker: "Billy Magic", nextScene: 72, story: "\"YES!!! It'll be so much fun - I promise!\""},
    {background: 6, character: 0, speaker: "Narrator", nextScene: 73, story: "He takes your arm and starts bringing you towards Tappan."},
    {background: 6, character: 0, speaker: "Narrator", story: "However, you notice that Billy's stride seems awkward, quite unlike his usual confident and assertive grace.", button: [{text: "Say nothing.", goto: 77, character_pt: false}, {text: "Is there something bothering you...?", goto: 74, character_pt: 1}]},
    {background: 6, character: 0, speaker: "Narrator", nextScene: 75, story: "He seems relieved you noticed, as if he's been waiting all day and night to show you something. He reaches down into his pants."},
    {background: 6, character: 0, speaker: "Billy Magic", nextScene: 76, story: "\"Yeah! It's my Bursley-Baits miniature!\" He takes out a familiar Blue-Bus to show you. It's in exquisite condition. Oh my god. It even has a watermark."},
    {background: 6, character: 0, speaker: "Billy Magic", nextScene: 77, story: "\"Looks pretty good, huh? I built it myself.\""},
    {background: 7, character: 0, speaker: "Narrator", nextScene: 78, story: "Eventually, you and Billy approach Delta Alpha Beta. Two Brothers guard the entrance. As Billy gets closer, the brothers’ eyes light up."},
    {background: 7, character: 5, speaker: "Brother 1", nextScene: 79, story: "\“Oh my god. Bro, are you Billy Magic?\”"},
    {background: 7, character: 6, speaker: "Brother 2", nextScene: 80, story: "\“Bro, bro, bro!\”"},
    {background: 7, character: 5, speaker: "Brother 1", nextScene: 81, story: "\"I saw you on Blue-Bus Daily! You broke the Comm. South world record! 35 minutes round trip? I’m your biggest fan!\""},
    {background: 7, character: 6, speaker: "Brother 2", nextScene: 82, story: "\“BRO, BRO, BRO!\”"},
    {background: 7, character: 1, speaker: "Narrator", nextScene: 83, story: "You and Billy are enthusiastically let into the party. Billy winks at you. You didn’t realize he was so well connected"},
    {background: 8, character: 1, speaker: "Narrator", nextScene: 84, story: "Epilepsy-inducing strobe lights cover the frat’s sticky dance floor. A Brother is mixing Absolut, Natty Light, Purple Kool Aid, and bubble tea into a trash can. He looks up to see you. "},
    {background: 8, character: 7, speaker: "Brother", nextScene: 85, story: "\“You want some?\” He hands you a drink."},
    {background: 8, character: 7, speaker: "Narrator", story: "You eye the red solo cup.", button: [{text: "Take the drink.", goto: 86, character_pt: 1}, {text: "Decline.", goto: 91, character_pt: false}]},
    {background: 8, character: 0, speaker: "Billy Magic", nextScene: 87, story: "\“Woah... aren’t you underage? You said you were a freshman, right?\""},
    {background: 8, character: 0, speaker: "", nextScene: 88, story: "\“Nah, I’m actually 25. Took a few gap years.\”"},
    {background: 8, character: 0, speaker: "Billy Magic", nextScene: 89, story: "\“Oh, okay, that makes sense.\”"},
    {background: 8, character: 0, speaker: "Narrator", nextScene: 90, story: "You and Billy slam some brewskis together. You get on your knees as Billy pours Svedka and chocolate syrup into your mouth. "},
    {background: 8, character: 0, speaker: "Narrator", nextScene: 91, story: "Billy smashes a White Claw over his head, splattering seltzer into his mouth and the surrounding area. You and Billy take turns doing a keg stand. Luckily, with the help of your Stay In The Blue app, you’re able to keep track of exactly how many drinks you’ve had. Now available on the app store."},
    {background: 8, character: 0, speaker: "Narrator", nextScene: 92, story: "It is sweaty and hot. This party is violating every fire code known to man. You and Billy start dancing. "},
    {background: 8, character: 0, speaker: "Billy Magic", nextScene: 93, story: "\“Hey... I need to tell you something.\” Billy is slurring his words."},
    {background: 8, character: 0, speaker: "", nextScene: 94, story: "\“What is it...?\”"},
    {background: 8, character: 0, speaker: "Billy Magic", nextScene: 95, story: "\"I think... I really like you...!\"", button: [{text: "Lean in for a kiss...", goto: 95, character_pt: 1}, {text: "“Oh… I think you’ve had too much, Billy.”", goto: 96, character_pt: false}]},
    {background: 8, character: 0, speaker: "Narrator", nextScene: 97, story: "You lean in closer to Billy..."},
    {background: 8, character: 0, speaker: "Narrator", nextScene: 97, story: "Billy looks disappointed, but understanding. "},
    {background: 8, character: 6, speaker: "Brother", nextScene: 98, story: "“BRO, DPSS!”"},
    {background: 8, character: 1, speaker: "Narrator", nextScene: 99, story: "DPSS barges into the room with riot shields. Screaming freshmen sprint out the back door as squads of heavily-geared officers flood the dance floor. Luckily, you are 25, and not underage. "},
    {background: 8, character: 0, speaker: "Billy Magic", nextScene: 100, story: "“Ah crap. I guess we gotta get out of here.”"},
    {background: 7, character: 1, speaker: "Narrator", nextScene: 101, story: "You and Billy call Ubers and return to your dorms. "},
    {background: 4, character: 1, speaker: "Narrator", nextScene: 106, story: "After a long night of partying, you go home and fall asleep."},
    {background: 6, character: 0, speaker: "Narrator", nextScene: 103, story: "Billy's face falls. He makes a sad bus sound."},
    {background: 6, character: 0, speaker: "Billy Magic", nextScene: 104, story: "\"Oh. Alright then. Maybe another time.\""},
    {background: 4, character: 1, speaker: "Narrator", nextScene: 105, story: "You go back to your dorm to an uneventful night."},
    {background: 3, character: 1, speaker: "...", nextScene: 106, story: "..."},
    {background: 4, character: 1, speaker: "Narrator", nextScene: 107, story: "It’s the weekend. You see a post online for the Yost Ice Skating arena."},
    {background: 4, character: 1, speaker: "Narrator", nextScene: 108, story: "You've met a great guy and a great bagel this week. But you can only ask one of them out."},
    {background: 4, character: 1, speaker: "Narrator", story: "Who do you want to go Ice Skating with?", button: [{text: "Billy", goto: 109, character_pt: false}, {text: "Bagely", goto: 116, character_pt: false}]},
    {background: 4, character: 1, speaker: "Narrator", nextScene: 110, story: "You call up Billy and ask them to go ice skating with you."},
    {background: 4, character: 0, speaker: "Billy Magic", nextScene: 111, story: "I’d love to!"},
    {background: 9, character: 0, speaker: "Narrator", nextScene: 112, story: "You and Billy arrive at the Yost Ice Arena. Time for some fun!"},
    {background: 9, character: 0, speaker: "Billy Magic", nextScene: 113, story: "I’m really glad to have met you. These last few days have been pretty fun."},
    {background: 9, character: 0, speaker: "Narrator", nextScene: 114, story: "As the two of you skate around the rink, you feel warm inside despite the cold Michigan weather. It’s only been a week since you arrived on campus, but you already feel like part of the UMich community! "},
    {background: 9, character: 0, speaker: "Narrator", nextScene: 114, story: "As you skate one final lap around the rink, you and Billy make eye contact and you can’t help but smile. Who knows what the future will hold? (GOOD END) [Return to Main Menu in the Settings to play again.]"},
    {background: 4, character: 0, speaker: "Billy Magic", nextScene: 115, story: "Oh sorry... I think I’ve already got plans. Maybe another time... (BAD END) [Return to Main Menu in the Settings to play again.]"},
    {background: 4, character: 1, speaker: "Narrator", nextScene: 117, story: "You call up Bagely and ask them to go ice skating with you."},
    {background: 4, character: 4, speaker: "Bagely", nextScene: 118, story: "I’d love to!"},
    {background: 9, character: 4, speaker: "Narrator", nextScene: 119, story: "You and Bagely arrive at the Yost Ice Arena. Time for some fun!"},
    {background: 9, character: 4, speaker: "Bagely", nextScene: 120, story: "I’m really glad to have met you. These last few days have been pretty fun."},
    {background: 9, character: 4, speaker: "Narrator", nextScene: 121, story: "As the two of you skate around the rink, you feel warm inside despite the cold Michigan weather. It’s only been a week since you arrived on campus, but you already feel like part of the UMich community! "},
    {background: 9, character: 4, speaker: "Narrator", nextScene: 121, story: "As you skate one final lap around the rink, you and Bagely make eye contact and you can’t help but smile. Who knows what the future will hold? (GOOD END) [Return to Main Menu in the Settings to play again.]"},
    {background: 4, character: 4, speaker: "Bagely", nextScene: 122, story: "Oh sorry... I think I’ve already got plans. Maybe another time... (BAD END) [Return to Main Menu in the Settings to play again.]"},
    
    
  ],


    // storyText: {
      
    // },

    current_scene: -1,
    

  },
  methods: {
    
    openSettings: function () {
      this.settingsPanel = !this.settingsPanel;
      this.settingsButton = false;
    },

    closeSettings() {
      this.audioSettings = false;
      this.settingsPanel = false;
      this.settingsButton = true;
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
        this.playMusic();
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
      if (this.playerName === "") {
        alert("Name cannot be empty");
        return;
      }
      // this.adventure = false;
      this.settingsButton = true;
      this.playerInfo = false;
      this.playMusic();
      this.scene = this.CentralScene;
      this.game_window = true;
      this.current_scene = 0;

      // First scene
      this.typeWriter(this.scene[0]['story']);
    },
    turnRed(){
      $('.settingsBtn').css('background-color', 'red');
    },
    turnBack(){
      $('.settingsBtn').css('background-color', ' rgb(177, 177, 187)');
    },
    goToMainMenu() {
      if (confirm('Are you sure you want to go back to the Main Menu? All progress will be lost.')) {
        // Save it!
        this.settingsPanel = false;
        this.game_window = false;
        this.main_menu = true;
        this.current_scene = -1;
        var jazzMusic = document.getElementById("audio-jazz");
        jazzMusic.pause();
        var music = document.getElementById("audio-mobamba");
        music.pause();
        
      } 
      else {
        // Do nothing!
        
       
      }
      
    },

    audioChange() {
      this.audioSettings = true;
    },

    getBackgroundString() {
      // return "'images/" + this.current_scene + ".jpg'";
      return "'" + this.background_img[this.scene[this.current_scene].background] + "'";
    },

    getCharacterString() {
        // return "'images/" + this.current_scene + ".jpg'";
        return this.character_img[this.scene[this.current_scene].character];
      },

    goToScene(index, character_pt) {

      if (character_pt === 1) {
        this.billyPts += 1;
      }
      if (character_pt === 2) {
        this.bagelyPts += 1;
      }

      console.log(this.billyPts);

      console.log(index);
      console.log(this.scene[this.current_scene].button[index].goto);
      this.current_scene = this.scene[this.current_scene].button[index].goto;
      this.typeWriter(this.scene[this.current_scene]['story']);
    },

    playMusic() {
      // pure js, but it's the easiest way to play music
      var jazzMusic = document.getElementById("audio-jazz");
      jazzMusic.volume = 0.2;
      jazzMusic.play();
    },

    nextScene() {
      // play mo bamba 
      if (this.current_scene === 83) {
        let jazzMusic = document.getElementById("audio-jazz");
        jazzMusic.pause();

        let music = document.getElementById("audio-mobamba");
        music.volume = 0.3;
        music.play();
      }
      if (this.current_scene === 105) {
        let music = document.getElementById("audio-mobamba");
        music.pause();

        let jazzMusic = document.getElementById("audio-jazz");
        jazzMusic.volume = 0.2;
        jazzMusic.play();
      }
      // Billy Ending
      if (this.current_scene === 109) {
        if (this.billyPts >= 3) {
          this.scene[this.current_scene].nextScene = 111;
        }
        else {
          this.scene[this.current_scene].nextScene = 115;
        }
      }
      if (this.current_scene === 116) {
        if (this.bagelyPts >= 2) {
          this.scene[this.current_scene].nextScene = 117;
        }
        else {
          this.scene[this.current_scene].nextScene = 122;
        }
      }
      // If text is currently scrolling, clicking the textbox again will show the entire 
      if (this.currently_scrolling) {
        console.log("done");
        this.currently_scrolling = false;
        $(".mainText").text(this.scene[this.current_scene]['story']);
        return;
      }
      if(this.scene[this.current_scene].button === undefined) {
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