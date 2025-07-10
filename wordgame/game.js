let modalCanBeClosed = true;
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");
const correctSound = document.getElementById("correctSound");
const incorrectSound = document.getElementById("incorrectSound");
const timerElement = document.getElementById("timer");
const timerSound = document.getElementById("timerSound");

// Define explanations audio elements
const explanations = {
  1: document.getElementById("1"),
  2: document.getElementById("2"),
  3: document.getElementById("3"),
  4: document.getElementById("4"),
  5: document.getElementById("5"),
  6: document.getElementById("6"),
  7: document.getElementById("7"),
  8: document.getElementById("8"),
  9: document.getElementById("9"),
  10: document.getElementById("10"),
  11: document.getElementById("11"),
  12: document.getElementById("12"),
  13: document.getElementById("13"),
  14: document.getElementById("14"),
  15: document.getElementById("15"),
  16: document.getElementById("16"),
  17: document.getElementById("17"),
  18: document.getElementById("18"),
  19: document.getElementById("19"),
  20: document.getElementById("20"),
  21: document.getElementById("21"),
  22: document.getElementById("22"),
  23: document.getElementById("23"),
  24: document.getElementById("24"),
  25: document.getElementById("25"),
  26: document.getElementById("26"),
  27: document.getElementById("27"),
  28: document.getElementById("28"),
  29: document.getElementById("29"),
  30: document.getElementById("30"),



  // Add more mappings as needed
};

// Modal elements
const feedbackModal = document.getElementById("feedbackModal");
const feedbackText = document.getElementById("feedbackText");
const feedbackImg = document.getElementById("feedbackImg");
const closeModal = document.querySelector(".close");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let timer;
let timeLeft = 8; // Set timer to 8 seconds
let isModalOpen = false; // Track modal state
let currentExplanationAudio = null; // Store the current explanation audio


let questions = [
  {
    question: " Standing at a height of 80 feet, the statue of Our Lady of Miraculous Medal on top of a hill, holds the distinction of being the Philippines' second tallest Marian Statue and ranks seventh among all statues of veneration in the country. What is the name of this shrine? ",
    choice1: "a.  Sacred Heart of Shrine",
    choice2: "b.  Meditation Hills",
    choice3: "c.  Agtalin Shrine",
    choice4: "d.  Fatima Shrine",
    answer: 3,
    explanationAudio: 1, // Map to corresponding explanation audio
    explanation: "The Agtalin Shrine is home to the 80-foot statue of Our Lady of the Miraculous Medal, which is the second tallest Marian statue in the Philippines and ranks seventh among all statues of veneration in the country.",
    explanationImg: "./../wordgame/agtalin.jpg",
  },
  {
    question: "The Dakung Lingganay or populary known as the ____________ was cast from coins contributed by the townsfolk. It is 7 ft. in diameter, has a height of 5 ft., weighs 10.4 tons, and is recognized as the Largest Catholic Church Bell in Southeast Asia, with a sound that can be heard from 8 kilometers away.",
    choice1: "a.  a.  Martin of Tours Bell",
    choice2: "b.  b.  Big Bell",
    choice3: "c.  Panay Bell",
    choice4: "d.  Cathedral Bell",
    answer: 3,
    explanationAudio: 2, // Map to corresponding explanation audio
    explanation: "Dakung Lingga-nay or populary known as the Panay Bell was cast from coins contributed by the townsfolk. It is 7 ft. in diameter, has a height of 5 ft., weighs 10.4 tons, and is recognized as the Largest Catholic Church Bell in Southeast Asia.",
    explanationImg: "./../wordgame/panaybell.jpg",
  },
  {
    question: "Who is the National Artist for Theater named in 1999 from Capiz? She is best remembered for her portrayal of Candida Marasigan in the stage and film versions of Nick Joaquin’s Portrait of the Artist as Filipino.",
    choice1: "a.  Candida Belo",
    choice2: "b.  Jovita Fuentes",
    choice3: "c.  Daisy Hontiveros-Avellana",
    choice4: "d.  Kakai Bautista",
    answer: 3,
    explanationAudio: 3, // Map to corresponding explanation audio
    explanation: "Daisy Hontiveros-Avellana, a National Artist for Theater from Capiz, was honored in 1999 for her significant contributions to Philippine theater. She is best remembered for her iconic portrayal of Candida Marasigan in both the stage and film adaptations of Nick Joaquin’s Portrait of the Artist as Filipino.",
    explanationImg: "./../wordgame/Daisy Hontiveros-Avellana.jpg",
  },
  {
    question: "The CAPIZ ECOLOGY PARK AND CULTURAL VILLAGE is nestled within a 14-hectare landmass of undulating terrain covered with green vegetation, including trees, shrubs, and bamboos, among others. In which town is this tourist attraction located?",
    choice1: "a.  Roxas City",
    choice2: "b.  Cuartero",
    choice3: "c.  Dumarao",
    choice4: "d.  Ivisan",
    answer: 2,
    explanationAudio: 4, // Map to corresponding explanation audio
    explanation: "The Capiz Ecology Park and Cultural Village is located in the town of Cuartero. This 14-hectare park features rolling terrain covered with lush vegetation, including trees, shrubs, and bamboo, making it a popular eco-tourism destination for nature lovers and visitors seeking a peaceful retreat.",
    explanationImg: "./../wordgame/ecopark.jpg",
  },
  {
    question: "Identify this historic government building which was erected in 1911, during the administration of Capiz Governor Jose Cortes Altavas.",
    choice1: "a.  Birthplace of Manuel A. Roxas",
    choice2: "b.  Capiz Provincial Capitol",
    choice3: "c.  Roxas City Hall",
    choice4: "d.  Rizal Monument",
    answer: 2,
    explanationAudio: 5, // Map to corresponding explanation audio
    explanation: "The Capiz Provincial Capitol is a historic government building constructed in 1911 during the tenure of Governor Jose Cortes Altavas. This landmark serves as the center of provincial governance in Capiz and is recognized for its architectural and historical significance.",
    explanationImg: "./../wordgame/capitol.jpg",
  },
  {
    question: " _____________𝗶𝘀 𝗮 Capisnon dance, assessing the strength and endurance of a newly-built house by testing the housewarming through a sequence of jumps, hops, stomps, and lively movements.",
    choice1: "a.  Binanog",
    choice2: "b.  Kuratsa Capiceña",
    choice3: "c.  Karansa",
    choice4: "d.  Escotis",
    answer: 4,
    explanationAudio: 6, // Map to corresponding explanation audio
    explanation: "Escotis is a Capisnon dance performed to assess the strength and endurance of a newly-built house. During a housewarming, the dance involves a lively sequence of jumps, hops, and stomps, symbolizing the testing of the house’s durability through vibrant and energetic movements.",
    explanationImg: "./../wordgame/escotis.jpg",
  },
  {
    question: "8) Tourists can reach Capiz from Manila via airplanes. As of 2023, how many airlines are servicing Capisnons and tourists alike between Capiz and Manila vice versa? ",
    choice1: "a.  1",
    choice2: "b.  2",
    choice3: "c.  3",
    choice4: "d.  4",
    answer: 3,
    explanationAudio: 7, // Map to corresponding explanation audio
    explanation: "As of 2023, three airlines—Cebu Pacific, Philippine Airlines, and AirAsia—provide flight services between Capiz and Manila, making travel convenient for both Capisnons and tourists.",
    explanationImg: "./../wordgame/tourist.jpg",
  },
  {
    question: "Fill in the missing word in the Capiz Hymn. Capiz probinsiya nga pinasahi, Bilidhon ang mga __________Ipadayon, palig-onon, itib-ong Capiznon Tanan magahugpong.",
    choice1: "a.  Palanublion",
    choice2: "b.  Pamatan-on",
    choice3: "c.  Manggad",
    choice4: "d.  Bitoon",
    answer: 1,
    explanationAudio: 8, // Map to corresponding explanation audio
    explanation: "In the Capiz Hymn, the word Palanublion refers to the heritage or legacy that is valued by the people of Capiz. The line emphasizes the importance of preserving and strengthening this heritage, with the unity of all Capisnons in mind.",
    explanationImg: "./../wordgame/23.jpg",
  },
  {
    question: "Located a kilometer away from the shoreline of Baybay Beach, Roxas City, this spot has been identified by the Department of Tourism as an ideal destination for scuba divers and a perfect location for sailboat (dilayag) and kayaking contests. Recently named Good Luck Island by DOT consultants, local fisherfolk believe it to be a source of luck. They inscribe the names of their fishing boats on the sides of the island before their maiden fishing voyages. What is the name of this island? ",
    choice1: "a.  Olotayan Island",
    choice2: "b.  Mantalinga Island",
    choice3: "c.  Tuad Island",
    choice4: "d.  Marukol Dako Island",
    answer: 2,
    explanationAudio: 9, // Map to corresponding explanation audio
    explanation: "Mantalinga Island, located about a kilometer from the shoreline of Baybay Beach in Roxas City, is recognized as an ideal destination for scuba diving and various water activities like sailboat racing and kayaking. Recently named Good Luck Island by the Department of Tourism, it is considered a source of good fortune by local fisherfolk, who traditionally inscribe their boat names on the island before embarking on their first fishing trips.",
    explanationImg: "./../wordgame/Mantalinga.jpg",
  },
  {
    question: "December 20th of every year marks an annual commemoration of the _____________, paying homage to our war veterans and freedom fighters who valiantly fought for the privileges of freedom that we enjoy today. ",
    choice1: "a.  Liberation of Capiz",
    choice2: "b.  Liberation of Panay",
    choice3: "c.  Evilio Javier Day",
    choice4: "d.  Rizal Day",
    answer: 1,
    explanationAudio: 10, // Map to corresponding explanation audio
    explanation: "December 20th each year marks the annual commemoration of the Liberation of Capiz. This event honors the war veterans and freedom fighters who bravely fought for the freedoms and privileges that are enjoyed today.",
    explanationImg: "./../wordgame/Liberation of Capiz.jpg",
  },
  // Add 5 more questions here...
    {
    question: "The Province of Aklan separated from the Province of Capiz on April 25, 1956, through a law signed by President Ramon Magsaysay. What was the law that mandated the separation?",
    choice1: "a.  Act No. 115 ",
    choice2: "b.  RA 9395 ",
    choice3: "c.  RA 10066 ",
    choice4: "d.  RA 1414 ",
    answer: 4,
    explanationAudio: 11, // Map to corresponding explanation audio
    explanation: " Republic Act 1414 is the law that mandated the separation of the Province of Aklan from the Province of Capiz, which took effect on April 25, 1956, under the administration of President Ramon Magsaysay.",
    explanationImg: "./../wordgame/aklan.jpg",
  },



      {
    question: "For the fourth year, the Province of Capiz once again brings you SAOT CAPIZ: Capisnon Folk Dance Competition, showcasing Capisnon folk dances. As of 2024, how many Capisnon folk dances have been published so far?",
    choice1: "a.  28 ",
    choice2: "b.  29 ",
    choice3: "c.  30 ",
    choice4: "d.  31 ",
    answer: 4,
    explanationAudio: 12, // Map to corresponding explanation audio
    explanation: "As of 2024, a total of 31 Capisnon folk dances have been published, reflecting the rich cultural heritage showcased in the SAOT CAPIZ: Capisnon Folk Dance Competition. ",
    explanationImg: "./../wordgame/folk.jpg",
  },



      {
    question: "4) One of the Province of Capiz's most renowned delicacies, exclusively available in the town of Panay, is known as 𝑷𝒖𝒔𝒐. This sweet treat consists of steamed sticky rice mixed with 𝒕𝒂𝒎-𝒊𝒔, which serves as a syrup since it can only be obtained from the initial batch of ____ wine.",
    choice1: "a.  Nipa  ",
    choice2: "b.  Coconut  ",
    choice3: "c.  Rice ",
    choice4: "d.  Bignay ",
    answer: 1,
    explanationAudio: 13, // Map to corresponding explanation audio
    explanation: "Puso is a renowned delicacy from the town of Panay in the Province of Capiz. It is a sweet treat made from steamed sticky rice mixed with tam-is, a syrup obtained from the initial batch of nipa wine. Nipa wine is derived from the sap of the nipa palm, which contributes to the unique flavor of the treat.",
    explanationImg: "./../wordgame/puso.jpg",
  },



      {
    question: "_____________ represents a distinctive traditional method of storytelling within the Panay Bukidnon community. With just a needle, thread, and katsa or cotton cloth, the narratives of the highlanders come to life.",
    choice1: "a.  Panubok ",
    choice2: "b.  Tinubok ",
    choice3: "c.  Binanog ",
    choice4: "d.  Ambahan ",
    answer: 1,
    explanationAudio: 14, // Map to corresponding explanation audio
    explanation: " Panubok is a traditional storytelling method used by the Panay Bukidnon community. It involves creating intricate designs and narratives on cotton cloth (katsa) using just a needle and thread. This unique craft brings the rich stories and heritage of the highlanders to life through embroidery.",
    explanationImg: "./../wordgame/Panubok.jpg",
  },



      {
    question: "____________ in Brgy. Tamulalod, Dumarao, Capiz, is home to the vibrant Ati Community. Surrounded by lush landscapes, they showcase their rich indigenous products, tantalizing cuisine, and impart the essence of their cultural heritage.",
    choice1: "a.  Mt. Tag-ao ",
    choice2: "b.  Mt. Nangtud ",
    choice3: "c.  Mt. Agudo ",
    choice4: "d.  Mt. Panginraon ",
    answer: 1,
    explanationAudio: 15, // Map to corresponding explanation audio
    explanation: "Mount Tag-ao in Brgy. Tamulalod, Dumarao, Capiz, is home to the vibrant Ati Community. This area is surrounded by lush landscapes where the community showcases their rich indigenous products, tantalizing cuisine, and the essence of their cultural heritage. ",
    explanationImg: "./../wordgame/ati.jpg",
  },



      {
    question: "The event showcases historical parades and performances, featuring grand floats with elaborate displays depicting pivotal events in the historical timeline of the Province of Capiz, spanning from the pre-colonial to the colonial and post-colonial eras.",
    choice1: "a.  Maragtas sang Capisnon: Historical Parade and Performances",
    choice2: "b.  Maragtas sang Capiz: Dance Drama Competition ",
    choice3: "c.  Gab-i sang Maragtas ",
    choice4: "d.  Maragtas Capisnon Historical Dance ",
    answer: 1,
    explanationAudio: 16, // Map to corresponding explanation audio
    explanation: "This event features historical parades and performances with grand floats that depict pivotal events in the Province of Capiz's history, from the pre-colonial era through to the colonial and post-colonial periods. It highlights the rich cultural heritage and historical timeline of the region. ",
    explanationImg: "./../wordgame/maragtas.jpg",
  },



      {
    question: "The Rizal monument, situated in front of the Capiz Provincial Capitol, is acknowledged as the country's second oldest monument of Rizal. It was erected in 1911, thanks to the initiatives of the then-governor, Jose Cortes Altavas. Engraved on its die are the Spanish words: Patria, Justicia, and ________, which were the names of Gov. Altavas' three daughters. ",
    choice1: "a.  Libertad ",
    choice2: "b.  Patriotismo",
    choice3: "c.  Lealtad ",
    choice4: "d.  Nacion ",
    answer: 1,
    explanationAudio: 17, // Map to corresponding explanation audio
    explanation: "The Rizal monument in front of the Capiz Provincial Capitol is the country's second oldest monument dedicated to José Rizal. Erected in 1911 through the efforts of Governor Jose Cortes Altavas, the monument features the Spanish words Patria, Justicia, and Libertad engraved on its die. These words were named after the governor's three daughters. ",
    explanationImg: "./../wordgame/rizal.jpg",
  },



      {
    question: "President Manuel Roxas passed away on April 15, 1948, due to a heart attack. He was only __________ years old when he died as the President of the Republic of the Philippines.",
    choice1: "a.  52",
    choice2: "b.  53 ",
    choice3: "c.  56 ",
    choice4: "d.  58 ",
    answer: 3,
    explanationAudio: 18, // Map to corresponding explanation audio
    explanation: " President Manuel Roxas passed away on April 15, 1948, due to a heart attack. He was 56 years old at the time of his death.",
    explanationImg: "./../wordgame/President Manuel Roxas.jpg",
  },



      {
    question: "The giant statue of the Sacred Heart of Jesus, considered the largest life-like statue of Jesus Christ in the Philippines, is located in Pueblo de Panay, Dinginan, Roxas City, Capiz. It has already surpassed the height of the renowned Christ the Redeemer Statue in Rio de Janeiro, Brazil. How tall is the statue of Sacred Heart of Jesus from the ground?",
    choice1: "a.  199 ft (60m) ",
    choice2: "b.  225 ft (68 m) ",
    choice3: "c.  80 ft (24m) ",
    choice4: " d. 132 ft (40m)",
    answer: 4,
    explanationAudio: 19, // Map to corresponding explanation audio
    explanation: "The giant statue of the Sacred Heart of Jesus, located in Pueblo de Panay, Dinginan, Roxas City, Capiz, stands 132 feet (40 meters) tall from the ground. It is recognized as the largest life-like statue of Jesus Christ in the Philippines and has surpassed the height of the famous Christ the Redeemer statue in Rio de Janeiro, Brazil. ",
    explanationImg: "./../wordgame/Sacred Heart of Jesus.jpg",
  },



     
      {
    question: " The Province of Capiz was named after a world-famous shell, locally known as 'pios' and 'lampirong.' What is the scientific name of the Capiz shell?",
    choice1: "A.  Placuna capinensis ",
    choice2: "B.  Placuna placenta ",
    choice3: "C.  Placuna sativa ",
    choice4: "D.  Placuna domesticus ",
    answer: 2,
    explanationAudio: 20, // Map to corresponding explanation audio
    explanation: "The Capiz shell, locally known as 'pios' and 'lampirong,' is scientifically named Placuna placenta. This shell is well-known for its use in various crafts and decorations, and it has given its name to the Province of Capiz. ",
    explanationImg: "./../wordgame/lampirong.jpg",
  },




     
      {
    question: "How many coastal city and municipalities in the Province of Capiz rely on fishing as their source of income? ",
    choice1: "A) 7 ",
    choice2: "B) 6 ",
    choice3: "C) 5 ",
    choice4: "D) 4 ",
    answer: 1,
    explanationAudio: 21, // Map to corresponding explanation audio
    explanation: " ",
    explanationImg: "./../wordgame/map.png",
  },


  

     
      {
    question: "The Province of Capiz comprises 16 municipalities and one city, Roxas City, serving as the provincial capital. The province is divided into two legislative districts. How many municipalities are situated in the second district of Capiz? ",
    choice1: "A)  6 ",
    choice2: "B)  5 ",
    choice3: "C)  7",
    choice4: "D) 10 ",
    answer: 4,
    explanationAudio: 22, // Map to corresponding explanation audio
    explanation: "In the Province of Capiz, the second legislative district comprises 10 municipalities: Cuartero, Dao, Dumalag, Dumarao, Ivisan, Jamindan, Mambusao, Sapian, Sigma, and Tapaz. ",
    explanationImg: "./../wordgame/map.png",
  },


  

     
      {
    question: " Name this historic site and tourist spot: The ______ Hill in the Municipality of Pilar, Capiz played a significant role in Philippine history as the site of the famous Battle between the Cazadores-Spanish soldiers and the Capisnon freedom fighters. This battle resulted in mass casualties among the Spanish colonial forces. It was here that the Capiz revolutionaries routed the Spanish soldiers and where Gen. Juan Arce of Sigma met his demise. ",
    choice1: "A)    Agtalin Hill",
    choice2: "B)   Balisong Hill",
    choice3: "C) Mt. Panginra-on ",
    choice4: "D) Mt. Agudo ",
    answer: 2,
    explanationAudio: 23, // Map to corresponding explanation audio
    explanation: "Balisong Hill in the Municipality of Pilar, Capiz, is a historic site where a significant battle took place between the Cazadores (Spanish soldiers) and the Capisnon freedom fighters. The battle resulted in significant casualties among the Spanish forces, and it was here that the Capiz revolutionaries achieved a notable victory, including the death of Gen. Juan Arce of Sigma. ",
    explanationImg: "./../wordgame/Balisong Hill.jpg",
  },


  

     
      {
    question: "In 1569, Miguel Lopez de Legazpi decided to leave Cebu and settle in Bamban, which became the second oldest Spanish settlement in the Philippines. What is the present name of the town now? ",
    choice1: "A.  Dumalag ",
    choice2: "B.  Mambusao ",
    choice3: "C.  Panay ",
    choice4: "D.  Cuartero ",
    answer: 3,
    explanationAudio: 24, // Map to corresponding explanation audio
    explanation: "In 1569, Miguel Lopez de Legazpi initially settled in Bamban, which is now known as Panay. It became the second oldest Spanish settlement in the Philippines. ",
    explanationImg: "./../wordgame/panay.jpg",
  },


  

     
      {
    question: " _____________is held in celebration of the Founding Anniversary of the Civil Government of Capiz since its establishment in 1901. ",
    choice1: "A.  Halaran ",
    choice2: "B.  Sinadya ",
    choice3: "C.  Kaadlawan ",
    choice4: "D.  Capiztahan ",
    answer: 4,
    explanationAudio: 25, // Map to corresponding explanation audio
    explanation: "Capiztahan is held in celebration of the Founding Anniversary of the Civil Government of Capiz, which was established in 1901. This annual event marks the province's historical significance and its development over the years. ",
    explanationImg: "./../wordgame/capiztahan.png",
  },


  

     
      {
    question: " Name this famous tourist spot: ______________Located in Sitio Cablatan, Brgy. Cagay, Roxas City. The river bank lined with mangroves is about 1 km in length not including the tributaries. ",
    choice1: "A.  Cadimahan River Tour ",
    choice2: "B.  Palina Greenbelt Eco-Park ",
    choice3: "C.  Culajao Mangrove Ecopark ",
    choice4: "D.  Cagay Mangrove Ecopark ",
    answer: 2,
    explanationAudio: 26, // Map to corresponding explanation audio
    explanation: "The Palina Greenbelt Eco-Park, located in Sitio Cablatan, Brgy. Cagay, Roxas City, is known for its riverbank lined with mangroves extending about 1 km in length, excluding the tributaries. It is a popular tourist spot that showcases the natural beauty and ecological importance of the mangrove area. ",
    explanationImg: "./../wordgame/palina.jpg",
  },


  

     
      {
    question: "If there are six coastal municipalities in the Province of Capiz, how many municipalities are landlocked? ",
    choice1: "A)    6",
    choice2: "B)    5 ",
    choice3: "C)    7",
    choice4: "D)    10 ",
    answer: 4,
    explanationAudio: 27, // Map to corresponding explanation audio
    explanation: "In the Province of Capiz, there are ten landlocked municipalities: Cuartero, Dao, Dumalag, Dumarao, Jamindan, Maayon, Panitan, Mambusao, Sigma, and Tapaz. These municipalities are not situated along the coast. ",
    explanationImg: "./../wordgame/map.png",
  },


  

     
      {
    question: "She was a Capisnon and the first Filipina soprano opera singer to conquer the international stage. In 1976, she was named the National Artist for Music, the first Filipina to earn such recognition in the field of Music. ",
    choice1: "A.  Amparo Acuna ",
    choice2: "B.  Josefa Abiertas ",
    choice3: "C.  Jovita Fuentes ",
    choice4: "D.  Dionisia Bacanto ",
    answer: 3,
    explanationAudio: 28, // Map to corresponding explanation audio
    explanation: " Jovita Fuentes was a renowned Capisnon soprano opera singer who made significant strides on the international stage. In 1976, she was honored as the National Artist for Music, becoming the first Filipina to receive such recognition in the field of music.",
    explanationImg: "./../wordgame/jovita.jpg",
  },


  

     
      {
    question: "Capiz is home to two Indigenous Peoples Communities, which have preserved their culture by faithfully passing it on from generation to generation. Aside from the Ati, which other Indigenous Peoples (IP) group is found in the province? ",
    choice1: "A.   Ligbok  ",
    choice2: "B.  Sulodnon ",
    choice3: "C.   Panay Bukidnon ",
    choice4: "D.   Tumandok ",
    answer: 3,
    explanationAudio: 29, // Map to corresponding explanation audio
    explanation: "In addition to the Ati, the Panay Bukidnon is another Indigenous Peoples (IP) group found in Capiz. Both communities have worked to preserve and pass on their rich cultural heritage through generations. ",
    explanationImg: "./../wordgame/Panay Bukidnon.jpg",
  },


  

     
      {
    question: "President Manuel Acuña Roxas, who rose from the modest streets of Capiz (now Roxas City), ascended to the presidency of the Commonwealth of the Philippines and later, the Third Philippine Republic. In what year did he pass and top the Philippine Bar Examinations? ",
    choice1: "A. 1945 ",
    choice2: "B. 1711 ",
    choice3: "C. 1994 ",
    choice4: "D. 1913 ",
    answer: 4,
    explanationAudio: 30, // Map to corresponding explanation audio
    explanation: "President Manuel Acuña Roxas passed the Philippine Bar Examinations in 1913.",
    explanationImg: "./../wordgame/President Manuel Acuña Roxas.jpg",
  },


    
];

//CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

const shuffleQuestions = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = shuffleQuestions([...questions]).slice(0, MAX_QUESTIONS);
  getNewQuestion();
};

const getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("./../wordgame/end.html");
  }
  
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;

  startTimer();
};

const startTimer = () => {
  timeLeft = 15; // Reset timer to 15 seconds
  timerElement.innerText = `Time Left: ${timeLeft}`; // Display timer (optional)
  timerSound.play();
  if (timer) clearInterval(timer); // Clear any existing timer

  timer = setInterval(() => {
    if (!isModalOpen) { // Only count down if modal is not open
      timeLeft--;
      timerElement.innerText = `Time Left: ${timeLeft}`; // Update timer display (optional)
      if (timeLeft <= 0) {
        clearInterval(timer);
        timerSound.pause();
        timerSound.currentTime = 0; // Reset sound
        handleTimeOut();
      }
    }
  }, 1000);
};

const handleTimeOut = () => {
  const classToApply = "incorrect";
  showModalFeedback(classToApply);
};

const showModalFeedback = (classToApply) => {
  modalCanBeClosed = false; // Add this line to lock the modal
  
  
  isModalOpen = true; // Modal is now open
  
  // Debugging: Log image source
  console.log("Setting image source:", currentQuestion.explanationImg);
  
  // Set explanation image and text
  feedbackText.innerText = currentQuestion.explanation;
  feedbackImg.src = currentQuestion.explanationImg;
  
  // Debugging: Check if image element exists and is accessible
  console.log("Image element:", feedbackImg);
  
  feedbackImg.style.display = currentQuestion.explanationImg ? "block" : "none"; // Ensure image is visible if src is valid
  
  feedbackModal.style.display = "block";

  const soundToPlay = classToApply === "correct" ? correctSound : incorrectSound;
  soundToPlay.play();

  soundToPlay.onended = () => {
    feedbackText.innerText = currentQuestion.explanation;
    feedbackImg.src = currentQuestion.explanationImg; // Ensure this is correct
    feedbackModal.style.display = "block";
    const explanationAudio = explanations[currentQuestion.explanationAudio];
    if (explanationAudio) {
      currentExplanationAudio = explanationAudio;
      explanationAudio.play();
    }
  };
  
    // Add this timeout to unlock the modal after 500ms
  setTimeout(() => {
    modalCanBeClosed = true;
  }, 500); 
};

const closeModalHandler = () => {
   if (!modalCanBeClosed) return; // Add this line to check if closing is allowed
  
  clearInterval(timer); // Add this line
  feedbackModal.style.display = "none";
  isModalOpen = false; // Modal is now closed
  if (currentExplanationAudio) {
    currentExplanationAudio.pause(); // Stop the explanation audio
    currentExplanationAudio.currentTime = 0; // Reset the explanation audio
    currentExplanationAudio = null; // Clear the reference
  }
  getNewQuestion(); // Proceed to the next question
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    clearInterval(timer); // Stop the timer when an answer is selected
    timerSound.pause();
    timerSound.currentTime = 0; // Reset sound

    showModalFeedback(classToApply);
  });
});

const incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

// Close modal on click
closeModal.addEventListener("click", closeModalHandler);

// Close modal on clicking outside the modal
window.addEventListener("click", (event) => {
  if (event.target === feedbackModal) {
    closeModalHandler();
  }
});

// Inactivity timeout logic
let inactivityTime = 3 * 60 * 1000; // 1 minute
let inactivityTimer;

function resetInactivityTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        console.log("Redirecting due to inactivity..."); // Debugging log
        window.location.href = "../index_1.html"; // Redirect to index.html after inactivity
    }, inactivityTime);
}

// Reset timer on user activity
document.addEventListener("mousemove", resetInactivityTimer);
document.addEventListener("keypress", resetInactivityTimer);
document.addEventListener("touchstart", resetInactivityTimer);
document.addEventListener("scroll", resetInactivityTimer);

// Start the inactivity timer when the page loads
resetInactivityTimer();


startGame();