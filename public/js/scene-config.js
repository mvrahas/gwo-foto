var elementsInfo
var title

var config = {
    clinic: {
        sceneElements: [
            {hoverable: true, clickable: true, back:false, xPos:0, yPos:0, zPos:350, rot: 3.2, xSize:320, ySize:210, img:'../assets/clinic/dentistThumbnail.png', img$:'../assets/clinic/dentistThumbnail$.png', id: "dentist", url: "7mzIujD_fmY", subtitles: "dentistSubtitles"},
            {hoverable: true, clickable: true, back:false, xPos:-350, yPos:0, zPos:0, rot: 1.7, xSize:320, ySize:210, img:'../assets/clinic/bordeauThumbnail.png', img$:'../assets/clinic/bordeauThumbnail$.png', id: "clinic", url: "xRdXqc79ShU", subtitles: "clinicSubtitles"},
            {hoverable: true, clickable: false, back:false, xPos:-300, yPos:-50, zPos:-260, rot: .6, xSize:200, ySize:160, img:'../assets/clinic/clinic1.png', img$:'../assets/clinic/clinic1$.png', id: "slide3", url: "", subtitles: ""},
            {hoverable: true, clickable: false, back:false, xPos:-100, yPos:-140, zPos:-360, rot: .2, xSize:200, ySize:160, img:'../assets/clinic/clinic2.png', img$:'../assets/clinic/clinic2$.png', id: "slide5", url: "", subtitles: ""},
            {hoverable: true, clickable: false, back:false, xPos:-100, yPos:80, zPos:-360, rot: .2, xSize:200, ySize:160, img:'../assets/clinic/clinic3.png', img$:'../assets/clinic/clinic3$.png', id: "slide5", url: "", subtitles: ""},
            {hoverable: true, clickable: false, back:true, xPos:100, yPos:0, zPos:-260, rot: -.4, xSize:100, ySize:100, img:'../assets/clinic/back.png', img$:'../assets/clinic/back$.png', id: "back", url: "", subtitles: ""}
        ],
        sceneParagraph: "The Primary Clinic is located in the hills of Jérémie and is the hub of all the activities at the foundation. The facility opened in <span class='numbers'>1988</span> as a dental clinic and has since expanded to include other primary health services such as x-ray, pharmacy, dental, general consultations, family planning, and even mental health. It currently serves over <span class='numbers'>120,000</span> patients per year and is funded with private donations.",
        titleImage: '../assets/clinic/title.png',
        backgroundImage: '../assets/clinic/test.jpg',
        audio: '../assets/clinic/audio.m4a'
    },
    goats: {
        sceneElements: [
            {hoverable: true, clickable: true, back:false, xPos:0, yPos:0, zPos:350, rot: 3.2, xSize:320, ySize:210, img:'../assets/goats/goatsThumbnail.png', img$:'../assets/goats/goatsThumbnail$.png', id: "goats", url: "o8fFUsJOkI4", subtitles: "goatsSubtitles"},
            {hoverable: true, clickable: false, back:false, xPos:-280, yPos:80, zPos:-240, rot: .8, xSize:200, ySize:160, img:'../assets/goats/goats1.png', img$:'../assets/goats/goats1$.png', id: "slide3", url: "", subtitles: ""},
            {hoverable: true, clickable: false, back:false, xPos:-330, yPos:-100, zPos:0, rot: 1.6, xSize:200, ySize:160, img:'../assets/goats/goats2.png', img$:'../assets/goats/goats2$.png', id: "slide5", url: "", subtitles: ""},
            {hoverable: true, clickable: false, back:false, xPos:-180, yPos:-140, zPos:-300, rot: .5, xSize:200, ySize:160, img:'../assets/goats/goats3.png', img$:'../assets/goats/goats3$.png', id: "slide5", url: "", subtitles: ""},
            {hoverable: true, clickable: false, back:false, xPos:-280, yPos:80, zPos:240, rot: 2.2, xSize:200, ySize:160, img:'../assets/goats/goats4.png', img$:'../assets/goats/goats4$.png', id: "slide5", url: "", subtitles: ""},
            {hoverable: true, clickable: false, back:true, xPos:100, yPos:0, zPos:-260, rot: -.4, xSize:100, ySize:100, img:'../assets/goats/back.png', img$:'../assets/goats/back$.png', id: "back", url: "", subtitles: ""}
        ],
        sceneParagraph: "Today, the foundation is distributing female breeding goats to families in the small town of Moron. This economic development program has a double benefit, as these goats not only provide food in the short-term but also opportunities to generate wealth in the long-term. Livestock represents an important source of wealth in Haiti, so these goats are much like low-risk loans that families can use to establish some financial security and start microenterprises. Unfortunately, not everybody can get an animal, but preference is given to those who demonstrate need as well as drive to turn opportunity into reality.",
        titleImage: '../assets/goats/title.png',
        backgroundImage: '../assets/goats/test.jpg',
        audio: '../assets/goats/audio.m4a'
    },
    houses: {
        sceneElements: [
            {hoverable: true, clickable: true, back:false, xPos:0, yPos:0, zPos:350, rot: 3.2, xSize:320, ySize:210, img:'../assets/houses/housesThumbnail.png', img$:'../assets/houses/housesThumbnail$.png', id: "houses", url: "zCK-9DvffHM", subtitles: "housesSubtitles"},
            {hoverable: true, clickable: false, back:false, xPos:-280, yPos:80, zPos:-240, rot: .8, xSize:200, ySize:160, img:'../assets/houses/houses3.png', img$:'../assets/houses/houses3$.png', id: "slide3", url: "", subtitles: ""},
            {hoverable: true, clickable: false, back:false, xPos:-330, yPos:-100, zPos:0, rot: 1.6, xSize:200, ySize:160, img:'../assets/houses/houses2.png', img$:'../assets/houses/houses2$.png', id: "slide5", url: "", subtitles: ""},
            {hoverable: true, clickable: false, back:false, xPos:-280, yPos:80, zPos:240, rot: 2.2, xSize:200, ySize:160, img:'../assets/houses/houses1.png', img$:'../assets/houses/houses1$.png', id: "slide5", url: "", subtitles: ""},
            {hoverable: true, clickable: false, back:true, xPos:100, yPos:0, zPos:-260, rot: -.4, xSize:100, ySize:100, img:'../assets/houses/back.png', img$:'../assets/houses/back$.png', id: "back", url: "", subtitles: ""}
        ],
        sceneParagraph: "For the poorest families living in the greater Jérémie area, new homes can have a transformative effect on quality of life and well being. Having a stable and secure home to live in allows families, especially young children, to develop psychosocially and reach their full potential. Not everybody can be built a new house, but preference is given to families who are living in the most unfortunate circumstances, often in structures open to the elements.",
        titleImage: '../assets/houses/title.png',
        backgroundImage: '../assets/houses/test.jpg',
        audio: '../assets/houses/audio.m4a'
    },
    mobileclinic: {
        sceneElements: [
            {hoverable: true, clickable: true, back:false, xPos:0, yPos:0, zPos:350, rot: 3.2, xSize:320, ySize:210, img:'../assets/mobile-clinic/serviceThumbnail.png', img$:'../assets/mobile-clinic/serviceThumbnail$.png', id: "service", url: "kYYOCqilECo", subtitles: "serviceSubtitles"},
            {hoverable: true, clickable: true, back:false, xPos:-350, yPos:0, zPos:0, rot: 1.7, xSize:320, ySize:210, img:'../assets/mobile-clinic/zikaThumbnail.png', img$:'../assets/mobile-clinic/zikaThumbnail$.png', id: "zika", url: "B7kpwVYk-dQ", subtitles: "zikaSubtitles"},
            {hoverable: true, clickable: false, back:false, xPos:-260, yPos:100, zPos:-260, rot: .6, xSize:200, ySize:160, img:'../assets/mobile-clinic/mobile1.png', img$:'../assets/mobile-clinic/mobile1$.png', id: "slide3", url: "", subtitles: ""},
            {hoverable: true, clickable: false, back:false, xPos:-100, yPos:-100, zPos:-360, rot: .2, xSize:200, ySize:160, img:'../assets/mobile-clinic/mobile2.png', img$:'../assets/mobile-clinic/mobile2$.png', id: "slide5", url: "", subtitles: ""},
            {hoverable: true, clickable: false, back:true, xPos:100, yPos:0, zPos:-260, rot: -.4, xSize:100, ySize:100, img:'../assets/mobile-clinic/back.png', img$:'../assets/mobile-clinic/back$.png', id: "back", url: "", subtitles: ""}
        ],
        sceneParagraph: "Welcome to the mobile clinic at Fond Bayard, a small village tucked away deep in the mountains. This facility brings primary health services such as consultations, pharmacy, vaccinations, and family planning, to people who would not otherwise have access given their remote location in the mountains. There is no public transportation in this village which means patients are a three hour walk away from the nearest hospital in Jérémie. Mobile clinics organized by the foundation are also a venue for health related education in topics such as childrearing, nutrition, food safety, recognizing bacterial infections and illnesses, family planning, hygiene and dental care, and more.",
        titleImage: '../assets/mobile-clinic/title.png',
        backgroundImage: '../assets/mobile-clinic/test.jpg',
        audio: '../assets/mobile-clinic/audio.m4a'
    } 
}

var showTitle = false



loadScene = function (sceneToLoad) {
    elementsInfo = config[sceneToLoad].sceneElements
    titleImagePath = config[sceneToLoad].titleImage
    backgroundImagePath = config[sceneToLoad].backgroundImage
    audioPath = config[sceneToLoad].audio
    paragraphText = config[sceneToLoad].sceneParagraph

    //Local Storage
    var $paragraphContainer = document.getElementById("paragraph-container")
    var $smokeScreen = document.getElementById("smoke-screen")
    var $paragraph = document.getElementById("paragraph")
    $paragraph.innerHTML = paragraphText

    if(localStorage.getItem(sceneToLoad + 'Intro') == "played"){
        disableScene = false;
        $smokeScreen.style.display = "none";
        showTitle = true
    }
    if(localStorage.getItem(sceneToLoad + 'Intro') == "waiting"){
        disableScene = true;
        $paragraphContainer.style.display = "block";
        $smokeScreen.style.display = "block";
        localStorage.setItem(sceneToLoad + 'Intro', "played");
        showTitle = false
    }

    localStorage.setItem(sceneToLoad + "Location", "visited");

}