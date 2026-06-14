import type { CampsiteConfig } from "../types";

const IMG = "/campsites/parktherme";

const parktherme: CampsiteConfig = {
  name: "Campingplatz der Parktherme Bad Radkersburg",
  shortName: "Parktherme",
  slug: "parktherme",
  ort: "Bad Radkersburg",
  region: "Steiermark",
  brandKind: "Thermencamping",
  regionLong: "Thermen- & Vulkanland · Steiermark · Österreich",

  heroVariant: "center",

  claim: "Camping zwischen Therme, Altstadt und Murauen",
  claimEmphasis: "Therme, Altstadt und Murauen",
  emailDetail: "euer Campingplatz direkt neben der Parktherme",
  intro:
    "Direkt neben der Parktherme, fünf Gehminuten von der historischen Altstadt und am Rand der Murauen: Auf 88 befestigten Stellplätzen startest du hier mitten im Süden der Steiermark in deinen Urlaub.",

  statement: {
    text: "Hier badest du im Thermalwasser, schläfst im Schlaffass und bist in fünf Minuten in der Altstadt.",
    emphasis: "im Schlaffass",
  },

  pillars: [
    {
      title: "Therme direkt nebenan",
      text: "Die Becken der Parktherme liegen nur wenige Schritte vom Stellplatz entfernt — als Aufenthaltsgast badest du zum Vorteilspreis.",
      image: { src: `${IMG}/hero-683ac71612.webp`, alt: "Luftbild der Parktherme Bad Radkersburg mit ihren Becken" },
    },
    {
      title: "Mitten in der Natur",
      text: "Der Platz liegt in ruhiger Lage zwischen Parktherme und Murauen — am Rand des UNESCO-Biosphärenparks Unteres Murtal.",
      image: { src: `${IMG}/hero-3d7b464d44.webp`, alt: "Luftaufnahme des Campingplatzes der Parktherme neben den Murauen" },
    },
    {
      title: "Schlaffässer Riesling & Traminer",
      text: "Übernachten der besonderen Art: zwei nach steirischen Weinsorten benannte Schlaffässer mit Doppelbett, Klimaanlage und gemütlicher Sitzecke.",
      image: { src: `${IMG}/gallery-35a8e036df.webp`, alt: "Schlaffässer am Campingplatz der Parktherme Bad Radkersburg" },
    },
  ],

  usps: [
    "88 Stellplätze mit Strom",
    "Direkt an der Parktherme",
    "Kinder bis 15,9 gratis",
    "Schlaffass-Übernachtung",
    "Radverleih am Platz",
    "Haustiere willkommen",
  ],

  trust: {
    heading: "Warum Camper gern an die Parktherme kommen",
    headingEmphasis: "an die Parktherme",
    intro:
      "Modern, barrierefrei und mittendrin: Hier verbindest du unkompliziertes Campen mit Thermalwasser, Altstadt-Flair und der weiten Auenlandschaft an der Mur — alles fußläufig erreichbar.",
  },

  awards: [],

  saison: { von: "Februar", bis: "Dezember" },

  hero: {
    aerial: {
      src: `${IMG}/hero-832c62fea2.webp`,
      alt: "Luftbild: Campingplatz der Parktherme zwischen Therme, Mur und Altstadt Bad Radkersburg",
    },
  },

  breather: {
    image: { src: `${IMG}/hero-3351676ea4.webp`, alt: "Sonnenaufgang über dem Campingplatz der Parktherme" },
    line: "Morgens zuerst die Ruhe — dann die Therme.",
  },

  camping: {
    heading: "Alles da beim Thermencamping",
    intro:
      "88 befestigte Stellplätze mit Strom, 65 davon mit Wasser- und Abwasseranschluss, ein 380 m² großer Zeltplatz und barrierefreie Sanitäranlagen — hier machst du es dir einfach gemütlich.",
    features: [
      {
        title: "Direkt an der Parktherme",
        text: "Vom Stellplatz sind es nur wenige Schritte ins Thermalwasser — als Aufenthaltsgast zu vergünstigten Eintrittspreisen.",
        image: { src: `${IMG}/accommodation-9497009f7a.webp`, alt: "Wohnmobil direkt an den Becken der Parktherme" },
      },
      {
        title: "88 Stellplätze mit Strom",
        text: "Befestigte, ebene Plätze für Wohnwagen, Wohnmobil und Campingbus — 65 davon zusätzlich mit Wasser- und Abwasseranschluss.",
        image: { src: `${IMG}/accommodation-d30ac4e6b7.webp`, alt: "Wohnwagen-Stellplatz am Campingplatz der Parktherme" },
      },
      {
        title: "380 m² Zeltplatz",
        text: "Eine eigene Zeltwiese am Rand des Platzes, eingebettet zwischen Gräsern und Bäumen — mit Pavillon zum Verweilen.",
        image: { src: `${IMG}/gallery-0f1059bb46.webp`, alt: "Frau am Zelt mit Fahrrad am Campingplatz der Parktherme" },
      },
      {
        title: "Barrierefreie Sanitäranlagen",
        text: "Moderne, barrierefrei erreichbare Sanitäranlagen mit Duschen, Waschkabinen sowie Waschmaschine und Wäschetrockner.",
        image: { src: `${IMG}/gallery-7d38cdcf76.webp`, alt: "Sanitärbereich am Campingplatz der Parktherme" },
      },
      {
        title: "Haustiere willkommen",
        text: "Hund, Katze & Co dürfen mit — an der Leine geführt, mit eigener Hundebademöglichkeit nur rund 500 m entfernt.",
        image: { src: `${IMG}/gallery-a543eabeda.webp`, alt: "Camperin mit Hund am Campingplatz der Parktherme" },
      },
      {
        title: "Fünf Gehminuten zur Altstadt",
        text: "Die historische Altstadt von Bad Radkersburg liegt rund 500 m entfernt — Lebensmittelgeschäft und Öffis nur 300 m weg.",
        image: { src: `${IMG}/gallery-fa7c94dd0c.webp`, alt: "Hauptplatz der Altstadt von Bad Radkersburg" },
      },
    ],
  },

  mobilheime: {
    heading: "Schlaffässer Riesling & Traminer",
    intro:
      "Schlafen im Fass: Unsere beiden nach regionalen Weinsorten benannten Schlaffässer sind ab zwei Nächten buchbar.",
    items: [
      {
        name: "Schlaffässer Riesling & Traminer",
        kind: "Schlaffass",
        text: "Gemütliches Doppelbett (200 × 200 cm), Sitzecke mit zwei umbaubaren Schlafmöglichkeiten, Infrarotheizung und Klimaanlage — dazu eine Sitzecke mit Sonnenschirm zwischen den Fässern.",
        image: { src: `${IMG}/gallery-7b6aa93197.webp`, alt: "Schlaffass „Traminer“ am Campingplatz der Parktherme" },
        priceFrom: 33,
        features: ["Doppelbett 200 × 200 cm", "Infrarotheizung & Klimaanlage", "ab 2 Nächten buchbar"],
      },
    ],
  },

  kinder: {
    heading: "Wasserspaß für Klein & Groß",
    intro:
      "Kinderspielplatz am Platz, Kids Club ab drei Jahren und die Erlebnisbecken der Parktherme gleich nebenan — und bis 15,9 Jahre campen Kinder gratis.",
    features: [
      {
        title: "Erlebnis- & Babybecken",
        text: "In den Erlebnisbecken drinnen und draußen wird geplanscht und getobt — die Kleinsten haben eigene Babybecken mit Elefanten-Rutsche.",
        image: { src: `${IMG}/kids-a0ee0ea727.webp`, alt: "Familie im Außen-Babybecken der Parktherme" },
      },
      {
        title: "Wasserrutschen",
        text: "Der Wildwasserbach und die Rutsche mit Stripe-Effekt sorgen für mitreißendes Vergnügen — Geschwindigkeitsrekorde inklusive.",
        image: { src: `${IMG}/kids-bd73f3ef70.webp`, alt: "Kinder in der Wasserrutsche der Parktherme" },
      },
      {
        title: "Spielwelt Fluidum",
        text: "Im 5 ha großen Park warten Wasserspielplatz, Sandanlagen und Motorikstrecken — gleich neben dem Campingplatz und im Eintritt inkludiert.",
        image: { src: `${IMG}/kids-8728b92756.webp`, alt: "Familie auf dem Wasserspielplatz Fluidum der Parktherme" },
      },
    ],
  },

  aktivitaeten: {
    heading: "Region erleben rund um Bad Radkersburg",
    intro:
      "Thermalwasser und Sauna, Radwege durch die Murauen, Golf und Tennis und eine 800 Jahre alte Altstadt — die Südoststeiermark liegt direkt vor dem Vorzelt.",
    items: [
      {
        title: "Therme & Saunadorf",
        text: "Quell- und Vitalbecken, ein 50-m-Sportbecken und ein weitläufiges Saunadorf mit acht Saunen — alles wenige Schritte entfernt.",
        image: { src: `${IMG}/amenity-d33e9a0dba.webp`, alt: "Sauna im Saunadorf der Parktherme" },
      },
      {
        title: "Genussradeln",
        text: "Die RADregion Bad Radkersburg lädt zu Touren durch Weinhügel und Auen — bestens gewartete Leihräder gibt es direkt am Campingplatz.",
        image: { src: `${IMG}/gallery-1d95e0e14d.webp`, alt: "Radfahrer in der Altstadt von Bad Radkersburg" },
      },
      {
        title: "Murauen & Biosphärenpark",
        text: "Österreichs zweitgrößtes Auwaldgebiet im UNESCO-Biosphärenpark Unteres Murtal — ideal zum Wandern, Walken und Radeln.",
        image: { src: `${IMG}/gallery-6ef2f603df.webp`, alt: "Rad- und Wanderweg durch die Murauen bei Bad Radkersburg" },
      },
      {
        title: "Historische Altstadt",
        text: "Romantische Gassen, der belebte Hauptplatz und 800 Jahre Geschichte — die Altstadt liegt nur fünf Gehminuten entfernt.",
        image: { src: `${IMG}/gallery-e1958f071d.webp`, alt: "Altstadt von Bad Radkersburg am Abend" },
      },
      {
        title: "Golf in den Weinhügeln",
        text: "Die 18-Loch-Anlage des Traminer Golf Klöch liegt mitten in den südoststeirischen Weinhügeln mit weiten Ausblicken.",
        image: { src: `${IMG}/activity-e5c47d3932.webp`, alt: "Golfplatz Traminer Golf Klöch in den Weinhügeln" },
      },
      {
        title: "Thermentennis",
        text: "Großzügige Außen- und Innenplätze ein Stück Mur-abwärts — nach dem Spiel lädt das Tennisstüberl zur Stärkung ein.",
        image: { src: `${IMG}/activity-58a688f477.webp`, alt: "Tennisplatz beim Thermentennis Bad Radkersburg" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg nach Bad Radkersburg",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A9 oder A2 bis in den Großraum Graz, dann der Beschilderung Richtung Bad Radkersburg und zur Thermenstraße folgen.",
      },
      {
        title: "Mit der Bahn",
        text: "Bahnhof Bad Radkersburg, von dort sind es wenige Minuten zum Platz; öffentliche Verkehrsmittel halten rund 300 m entfernt.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Graz liegt rund 60 km entfernt — von dort etwa eine Stunde mit dem Auto in den steirischen Süden.",
      },
    ],
  },

  galerie: {
    heading: "Eindrücke vom Thermencamping",
    headingEmphasis: "Thermencamping",
    intro:
      "Therme, Schlaffässer, Buschenschank und die weite Au — ein paar Bilder von deinem Campingurlaub an der Parktherme.",
    tag: "Bad Radkersburg · Steiermark",
    moreCount: 24,
    images: [
      { src: `${IMG}/gallery-5b1a58334e.webp`, alt: "Pärchen im Bademantel auf der Herzbank an der Mur" },
      { src: `${IMG}/gallery-2799168242.webp`, alt: "Schlaffass von innen am Campingplatz der Parktherme" },
      { src: `${IMG}/gallery-9749d71af9.webp`, alt: "Steirische Jause im Buschenschank" },
      { src: `${IMG}/hero-e1810994aa.webp`, alt: "Luftaufnahme des Campingplatzes der Parktherme" },
    ],
  },

  booking: {
    heading: "Sichere dir deinen Stellplatz",
    headingEmphasis: "deinen Stellplatz",
    intro:
      "Wähle Zeitraum und Personenzahl — das Team der Parktherme meldet sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Hauptsaison-Richtpreise (2 Erw.): Stellplatz (Wohnwagen/Wohnmobil) Standgebühr € 16,80 + Campinggebühr € 11,70 je Erw. · Zeltplatz Standgebühr € 9,60 + Campinggebühr € 11,70 je Erw. · Kinder bis 15,9 J. gratis · zzgl. Nächtigungs- (€ 2) & Kurabgabe (€ 1) p. P. ab 16 J.",
    highlight: {
      title: "Direkt an der Therme",
      text: "Vom Stellplatz sind es nur wenige Schritte ins Thermalwasser.",
    },
    categories: [
      { id: "stellplatz", label: "Stellplatz", perNight: 40.2, perExtraGuest: 11.7 },
      { id: "zelt", label: "Zeltplatz", perNight: 33, perExtraGuest: 11.7 },
    ],
  },

  kontakt: {
    coords: { lat: 46.688047, lng: 15.978347 },
    tel: "+43 3476 2677-556",
    telHref: "tel:+4334762677556",
    mail: "camping@parktherme.at",
    facebook: "https://www.facebook.com/ParkthermeBR",
    adresse: "Thermenstraße 30 · 8490 Bad Radkersburg · Steiermark",
  },

  languages: ["DE", "EN"],

  nav: [
    {
      label: "Camping",
      href: "#camping",
      children: [
        { label: "Stellplätze", href: "#camping" },
        { label: "Schlaffässer", href: "#mobilheime" },
        { label: "Sanitär", href: "#camping" },
      ],
    },
    { label: "Familie", href: "#kinder" },
    { label: "Region", href: "#aktivitaeten" },
    {
      label: "Preise & Lage",
      href: "#booking",
      children: [
        { label: "Preise", href: "#booking" },
        { label: "Anreise", href: "#anreise" },
      ],
    },
  ],
};

export default parktherme;
