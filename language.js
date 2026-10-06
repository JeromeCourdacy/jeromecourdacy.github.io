const frenchTranslations = {
  "Projects": "Projets",
  "Experience": "Expérience",
  "Education": "Formation",
  "Hi, I’m": "Bonjour, je m’appelle",
  "Website language": "Langue du site",
  "Main navigation": "Navigation principale",
  "Contact links": "Liens de contact",
  "Portrait of Jérôme Courdacy": "Portrait de Jérôme Courdacy",
  "I’m a robotics master’s student at EPFL with a minor in data science. I’m interested in robotics, computer vision, and machine learning.": "Je suis étudiant en master de robotique à l’EPFL, avec un mineur en science des données. Je m’intéresse à la robotique, à la vision par ordinateur et à l’apprentissage automatique.",
  "Here are some projects I’ve been working on.": "Voici quelques-uns des projets sur lesquels je travaille ou auxquels j’ai participé.",
  "Edge AI for Biodiversity Monitoring": "IA embarquée au service de la biodiversité",
  "— Present": "— Aujourd’hui",
  "I’m working on edge AI and ESP32 software for automated biodiversity monitoring using audio machine learning with GenoRobotics.": "Chez GenoRobotics, je développe le logiciel pour ESP32 et travaille sur l’IA embarquée pour le suivi de la biodiversité, à partir de l’analyse des sons.",
  "The project brings bird-call classification and localization to ESP32-based hardware for real-time, on-device inference. My work focuses on deploying machine learning models and developing the software that runs on the ESP32.": "L’objectif est de reconnaître et de localiser les chants d’oiseaux en analysant le son directement sur un ESP32, en temps réel. Je m’occupe du déploiement des modèles d’apprentissage automatique et du développement du logiciel embarqué.",
  "Suspension Load-Cell Integration": "Intégration de capteurs de force",
  "I’m leading the integration of suspension load cells for the EPFL Racing Team to improve vehicle dynamics modelling and support control development.": "Je dirige l’intégration de capteurs de force dans la suspension de la voiture de l’EPFL Racing Team. Ces mesures permettront d’affiner les modèles de dynamique du véhicule et d’aider au développement des systèmes de commande.",
  "I defined sensing requirements and evaluated hardware solutions, including outreach to potential industry sponsors. I’m developing the mechanical, electrical, and software integration of the sensors.": "J’ai défini les besoins de mesure, comparé plusieurs solutions matérielles et contacté des entreprises susceptibles de soutenir le projet. Je travaille maintenant sur l’intégration mécanique, électrique et logicielle des capteurs.",
  "Robotics Competition": "Compétition de robotique",
  "Our team won a robotics competition organized by Robopoly with an autonomous robot we designed and built from scratch. The robot followed lines, navigated corridors, acquired targets, and shot at them.": "Avec mon équipe, nous avons remporté une compétition organisée par Robopoly grâce à un robot autonome que nous avons conçu et construit de A à Z. Il devait suivre des lignes, se déplacer dans des couloirs, repérer des cibles et tirer dessus.",
  "We set ourselves an extra challenge: use a single camera for all perception tasks. With a Raspberry Pi and a Pi Camera, we tackled every stage of the competition using the same visual input.": "Nous avons choisi de relever un défi supplémentaire : n’utiliser qu’une seule caméra pour percevoir l’environnement. Toutes les épreuves ont ainsi été réalisées à partir des images d’une Pi Camera, traitées sur un Raspberry Pi.",
  "Open webots simulation demo": "Voir la démonstration dans Webots",
  "Open crazyflie hardware demo": "Voir la démonstration du Crazyflie",
  "Vision-Based Autonomous Drone Racing": "Course de drones autonomes par vision",
  "Our team developed the vision and control components for a Crazyflie quadcopter, with the goal of flying through a series of gates as quickly as possible. We first built the system in Webots simulation, then implemented it on the real quadcopter in the lab, taking the project from a simulated environment to physical hardware. The pipeline combined gate detection, navigation, and closed-loop control, with real-time gate finding and autonomous navigation on the physical platform.": "Avec mon équipe, nous avons développé un système de vision et de commande pour un drone Crazyflie, afin de lui faire franchir une série de portes le plus vite possible. Nous l’avons d’abord testé en simulation dans Webots, puis déployé sur le drone au laboratoire. Le système détecte les portes en temps réel et combine navigation autonome et commande en boucle fermée pour guider le drone sur le parcours.",
  "UNO Vision Challenge": "UNO Vision Challenge",
  "Our team participated in the UNO Vision Challenge, developing a vision pipeline to reconstruct the state of an UNO game from a single image across varied backgrounds. It identifies the cards held by each player, the cards in the center, and the current player.": "Notre équipe a participé au UNO Vision Challenge : le défi consistait à reconstituer l’état d’une partie de UNO à partir d’une seule photo, quel que soit l’arrière-plan. Nous avons développé un système qui repère les cartes de chaque joueur, celles posées au centre et le joueur dont c’est le tour.",
  "We combined classical computer vision techniques with a neural network we built and trained to classify UNO card symbols, using Python and PyTorch. Our solution achieved 98% accuracy on the test dataset, up from a baseline of 63%, and placed second on the challenge leaderboard.": "Notre approche associe des méthodes classiques de vision par ordinateur à un réseau de neurones que nous avons conçu et entraîné pour reconnaître les symboles des cartes, avec Python et PyTorch. Nous avons obtenu 98 % de bonnes prédictions sur le jeu de test, contre 63 % pour la solution de référence, et terminé deuxièmes au classement du challenge.",
  "Open mobile robot navigation demo": "Voir la démonstration de navigation du robot mobile",
  "Autonomous Mobile Robotics": "Robotique mobile autonome",
  "Our team built a Thymio robot navigation system that reached a target while avoiding mapped obstacles and reacting to unexpected obstacles using proximity sensors.": "Nous avons développé un système de navigation permettant à un robot Thymio d’atteindre une destination en évitant les obstacles présents sur la carte. Ses capteurs de proximité lui permettaient aussi de réagir aux obstacles imprévus.",
  "The system combined overhead camera tracking with ArUco markers, A* path planning, and an Extended Kalman Filter to fuse vision and wheel odometry.": "Une caméra placée au-dessus du terrain suivait le robot grâce à des marqueurs ArUco. L’algorithme A* calculait le chemin à suivre, tandis qu’un filtre de Kalman étendu combinait les mesures de la caméra et l’odométrie des roues pour estimer la position du robot.",
  "Analyzing Politicians’ Stock Trades": "Analyse des transactions boursières des politiciens",
  "Can copying politicians’ stock trades outperform the market? For EPFL’s Applied Data Analysis course, our team combined US congressional trading disclosures with historical stock prices to study politicians’ portfolios and simulate strategies that copy their trades after disclosure.": "Peut-on battre le marché en copiant les transactions boursières des politiciens ? Pour le cours Applied Data Analysis de l’EPFL, nous avons croisé les déclarations des membres du Congrès américain avec les cours historiques des actions. Nous avons ensuite étudié leurs portefeuilles et simulé des stratégies qui reproduisent leurs transactions une fois celles-ci rendues publiques.",
  "We explored how disclosure delays and the selection of politicians affect performance, comparing returns and risk-adjusted metrics against an S&P 500 benchmark. The project brings together data preparation, portfolio simulation, statistical analysis, and a dedicated data story website. We identified a market-outperforming strategy based on public disclosures of US politicians’ trades in our analysis.": "Nous avons mesuré l’influence du délai de publication et du choix des politiciens sur les résultats, en comparant les rendements et les performances ajustées au risque à ceux du S&P 500. De la préparation des données aux simulations de portefeuilles et à l’analyse statistique, nous avons présenté notre démarche sur un site dédié. Dans nos simulations, une des stratégies fondées sur ces déclarations publiques a dépassé les performances du marché.",
  "Explore the data story →": "Découvrir l’analyse →",
  "Computer Vision Student Researcher": "Étudiant chercheur en vision par ordinateur",
  "Wasteflow AI · Lausanne, Switzerland": "Wasteflow AI · Lausanne, Suisse",
  "EPFL · Lausanne, Switzerland": "EPFL · Lausanne, Suisse",
  "Lausanne, Switzerland": "Lausanne, Suisse",
  "École des Métiers de Lausanne · Lausanne, Switzerland": "École des Métiers de Lausanne · Lausanne, Suisse",
  "I benchmark and evaluate computer vision methods to improve an industrial waste instance-segmentation pipeline for edge deployment. I assess waste detection, instance segmentation, and mass estimation on conveyor belts under real-time constraints, and build a comparative evaluation framework to identify methods suitable for integration into the production pipeline.": "Chez Wasteflow AI, je compare des méthodes de vision par ordinateur pour améliorer un système industriel d’analyse des déchets destiné à fonctionner sur du matériel embarqué. J’étudie la détection des déchets sur convoyeur, leur segmentation et l’estimation de leur masse, avec des contraintes de temps réel. Je développe également un cadre d’évaluation pour comparer les méthodes et déterminer lesquelles peuvent être intégrées au système de production.",
  "Teaching Assistant": "Assistant étudiant",
  "Supported students in Linear Algebra and Calculus II exercise sessions and helped instructors organize examinations.": "J’ai encadré les séances d’exercices d’algèbre linéaire et d’analyse II, accompagné les étudiants dans la résolution des problèmes et participé à l’organisation des examens.",
  "R&D Intern": "Stagiaire en R&D",
  "Validated and benchmarked DICOM-to-NIfTI conversion pipelines for medical imaging, checking 3D volumes for spatial orientation, scaling, and resolution. Automated the processing of over 1,000 CT scans and developed Python tools to correct scan orientations and slicing planes. Resolved conversion edge cases, performed CT segmentation quality assurance, and annotated X-ray and CT datasets to support computer vision model training.": "J’ai testé et comparé des outils de conversion DICOM vers NIfTI pour l’imagerie médicale, en vérifiant l’orientation, l’échelle et la résolution des volumes 3D. J’ai automatisé le traitement de plus de 1 000 examens de scanner et développé des outils Python pour corriger l’orientation des images et les plans de coupe. J’ai aussi résolu des problèmes de conversion, vérifié la qualité des segmentations et annoté des radiographies et des images de scanner pour entraîner des modèles de vision par ordinateur.",
  "Machining Intern": "Stagiaire en usinage",
  "Trained in the manual use of lathes, milling machines, and welding. Independently machined parts from technical drawings.": "J’ai appris à utiliser des tours et des fraiseuses conventionnels, ainsi qu’à souder. J’ai ensuite réalisé des pièces en autonomie à partir de dessins techniques.",
  "Other experience": "Autres expériences",
  "Thermodynamics Tutor": "Tuteur en thermodynamique",
  "Provided thermodynamics lessons to a first-year student.": "J’ai accompagné un étudiant de première année avec des cours particuliers de thermodynamique.",
  "Microengineering Section Coach": "Coach de la section de microtechnique",
  "Helped a group of microengineering students settle into life at EPFL, providing guidance and helping organize events to support their integration into the university community.": "J’ai aidé un groupe d’étudiants en microtechnique à prendre leurs repères à l’EPFL, en les conseillant et en participant à l’organisation d’événements pour faciliter leur intégration.",
  "Volunteer": "Bénévole",
  "Helped organize and distribute essential supplies donated by food banks.": "J’ai participé à l’organisation et à la distribution de produits de première nécessité provenant de banques alimentaires.",
  "Expected completion": "Diplôme prévu",
  "Master’s in Robotics": "Master en robotique",
  "Minor in Data Science.": "Mineur en science des données.",
  "View master’s transcript (PDF) ↗": "Voir le relevé de notes du master (PDF) ↗",
  "Bachelor’s in Microengineering": "Bachelor en microtechnique",
  "Average grade: 5.25/6.": "Moyenne : 5,25/6.",
  "View bachelor’s transcript (PDF) ↗": "Voir le relevé de notes du bachelor (PDF) ↗",
  "Exchange Year · Electrical Engineering and Computer Science": "Année d’échange · Génie électrique et informatique",
  "KTH Royal Institute of Technology · Stockholm, Sweden": "Institut royal de technologie KTH · Stockholm, Suède",
  "Selected for an exchange year during my bachelor’s degree.": "J’ai été sélectionné pour effectuer une année d’échange pendant mon bachelor.",
  "International Baccalaureate Option (OIB) · American Section": "Option internationale du baccalauréat (OIB) · Section américaine",
  "Result: 17.43/20, with honors. French Aeronautics Initiation Certificate (BIA).": "Baccalauréat obtenu avec une moyenne de 17,43/20 et la mention très bien. Également titulaire du brevet d’initiation aéronautique (BIA).",
  "Skills": "Compétences",
  "Programming & tools": "Programmation et outils",
  "Assembly": "Assembleur",
  "Spoken languages": "Langues",
  "French · Native": "Français · Langue maternelle",
  "English · C2": "Anglais · C2",
  "Spanish · B2": "Espagnol · B2",
  "Interests": "Centres d’intérêt",
  "Outside my studies, I enjoy being outdoors, whether hiking in nature or exploring underwater while scuba diving. Judo and tennis keep me active, and I also like slowing down with a good book or playing the saxophone.": "En dehors de mes études, j’aime passer du temps dans la nature, partir en randonnée ou explorer les fonds marins en plongée. Je pratique aussi le judo et le tennis. J’aime aussi prendre le temps de lire un bon livre ou de jouer du saxophone.",
  "Back to top ↑": "Retour en haut ↑",
  "GenoRobotics project logo": "Logo du projet GenoRobotics",
  "GenoRobotics logo": "Logo de GenoRobotics",
  "EPFL Racing Team project photo": "Photo du projet EPFL Racing Team",
  "EPFL Racing Team race car": "Voiture de course de l’EPFL Racing Team",
  "Robopoly project photos": "Photos du projet Robopoly",
  "Robopoly competition team celebrating with their first-place trophy and robot": "L’équipe Robopoly célèbre sa victoire avec le trophée et son robot",
  "The autonomous red robot navigating the competition course": "Le robot rouge autonome sur le parcours de la compétition",
  "Overhead view of the robot and competition track": "Vue de dessus du robot et du parcours de la compétition",
  "Robot assembly with Raspberry Pi, camera, motors, and chassis components": "Assemblage du robot avec Raspberry Pi, caméra, moteurs et éléments du châssis",
  "Drone racing demonstrations": "Démonstrations de course de drones",
  "Webots simulation demo": "Démonstration en simulation dans Webots",
  "Crazyflie hardware demo": "Démonstration du drone Crazyflie",
  "UNO game state recognition results": "Résultats de la reconnaissance de l’état d’une partie de UNO",
  "UNO vision pipeline output with detected cards, players, and current-player token": "Analyse d’une partie de UNO : cartes, joueurs et marqueur du joueur actif détectés",
  "Autonomous mobile robotics demonstration": "Démonstration de robotique mobile autonome",
  "Mobile robot navigation demo": "Démonstration de navigation du robot mobile",
  "Copycat Portfolios data story": "Présentation de l’analyse Copycat Portfolios",
  "Copycat Portfolios data story preview": "Aperçu de l’analyse Copycat Portfolios",
  "Previous project media": "Photo ou vidéo précédente",
  "Next project media": "Photo ou vidéo suivante",
  "Jérôme Courdacy — EPFL Robotics master’s student with a Data Science minor. Computer vision research, autonomous robotics, embedded AI, and engineering projects.": "Jérôme Courdacy — Étudiant en master de robotique à l’EPFL avec un mineur en science des données. Recherche en vision par ordinateur, robotique autonome, IA embarquée et projets d’ingénierie.",
  "Sep 2026": "Sept. 2026",
  "Aug 2026": "Août 2026",
  "Sep 2025": "Sept. 2025",
  "Jun 2026": "Juin 2026",
  "Feb 2026": "Févr. 2026",
  "Dec 2026": "Déc. 2026",
  "Sep 2026 — Present": "Sept. 2026 — Aujourd’hui",
  "Sep 2025 — Jul 2026": "Sept. 2025 — Juil. 2026",
  "Jun — Jul 2025": "Juin — Juil. 2025",
  "Jul 2024": "Juil. 2024",
  "Feb — Jun 2024": "Févr. — Juin 2024",
  "Sep 2023 — Jul 2024": "Sept. 2023 — Juil. 2024",
  "Sep 2021 — Jun 2022": "Sept. 2021 — Juin 2022",
  "Sep 2025 — Jul 2028": "Sept. 2025 — Juil. 2028",
  "Sep 2022 — Jul 2025": "Sept. 2022 — Juil. 2025",
  "Aug 2024 — Jun 2025": "Août 2024 — Juin 2025",
  "Sep 2019 — Jul 2022": "Sept. 2019 — Juil. 2022"
};

(() => {
    const normalize = (text) => text.replace(/\s+/g, ' ').trim();
    const textEntries = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
        const node = walker.currentNode;
        if (node.parentElement.closest('script, style, .language-switch')) continue;
        const french = frenchTranslations[normalize(node.nodeValue)];
        if (french) textEntries.push({ node, english: node.nodeValue, french });
    }
    const attributeEntries = [];
    document.querySelectorAll('[alt], [aria-label], meta[name="description"]').forEach((element) => {
        if (element.closest('.language-switch button')) return;
        ['alt', 'aria-label', 'content'].forEach((attribute) => {
            const english = element.getAttribute(attribute);
            const french = frenchTranslations[english];
            if (french) attributeEntries.push({ element, attribute, english, french });
        });
    });
    const buttons = document.querySelectorAll('[data-language]');
    const setLanguage = (language) => {
        const french = language === 'fr';
        document.documentElement.lang = french ? 'fr' : 'en';
        textEntries.forEach((entry) => {
            entry.node.nodeValue = french ? entry.french : entry.english;
        });
        attributeEntries.forEach((entry) => {
            entry.element.setAttribute(entry.attribute, french ? entry.french : entry.english);
        });
        buttons.forEach((button) => {
            button.setAttribute('aria-pressed', String(button.dataset.language === document.documentElement.lang));
        });
        try { localStorage.setItem('portfolio-language', document.documentElement.lang); } catch {}
    };
    buttons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
    let savedLanguage;
    try { savedLanguage = localStorage.getItem('portfolio-language'); } catch {}
    setLanguage(savedLanguage === 'fr' ? 'fr' : 'en');
})();
