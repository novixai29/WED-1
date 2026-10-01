/* ==========================================================
   WED-001 — THE SEALED LETTER

   غيّر معلومات الزبون هنا فقط
========================================================== */

const WEDDING = {

  /* ========================================================
     COUPLE
  ======================================================== */

  groom: "سيف",

  bride: "زهراء",


  /* ========================================================
     PARENTS
  ======================================================== */

  groomFather:
    "السيد حامد رشيد",

  brideFather:
    "",


  /* ========================================================
     EVENT
  ======================================================== */

  startAt:
    "2027-10-14T18:00:00+03:00",

  durationHours:
    3,

  timeZone:
    "Asia/Baghdad",


  /* ========================================================
     LOCATION
  ======================================================== */

  venue:
    "قاعة النخبة للاحتفالات",

  city:
    "الموصل – نينوى",

  address:
    "الموصل - نينوى",


  /*
    ضع رابط Google Maps هنا إذا توفر.

    مثال:

    mapsUrl:
    "https://maps.app.goo.gl/xxxxxxxx"
  */

  mapsUrl:
    "",


  /*
    ضع رابط الدعوة بعد رفع الموقع.

    مثال:

    shareUrl:
    "https://saif-zahraa.inviteus.party"
  */

  shareUrl:
    "",


  /* ========================================================
     TEXT
  ======================================================== */

  title:
    "دعوة زفاف سيف وزهراء",


  closingMessage:
    "حضوركم يكتمل به فرحنا ويسعدنا أن تكونوا معنا في بداية هذا العمر.",


  /* ========================================================
     OPENING STORAGE
  ======================================================== */

  openingStorageKey:
    "WED001_SEALED_LETTER_OPENED"

};



/* ==========================================================
   HELPERS
========================================================== */

const $ = (selector) =>
  document.querySelector(selector);



function setText(
  selector,
  value
) {

  const element =
    $(selector);


  if (element) {

    element.textContent =
      value;

  }

}



/* ==========================================================
   DATE
========================================================== */

const EVENT_DATE =
  new Date(
    WEDDING.startAt
  );



function getArabicDateParts() {

  const weekday =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        weekday:
          "long",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const date =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        day:
          "numeric",

        month:
          "long",

        year:
          "numeric",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const time =
    new Intl.DateTimeFormat(
      "ar-IQ",
      {
        hour:
          "numeric",

        minute:
          "2-digit",

        hour12:
          true,

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  return {
    weekday,
    date,
    time
  };

}



function getEnglishDateParts() {

  const day =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        day:
          "2-digit",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  const month =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        month:
          "short",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      )
      .toUpperCase();


  const year =
    new Intl.DateTimeFormat(
      "en-GB",
      {
        year:
          "numeric",

        timeZone:
          WEDDING.timeZone
      }
    )
      .format(
        EVENT_DATE
      );


  return {
    day,
    month,
    year
  };

}



/* ==========================================================
   NAME HELPERS
========================================================== */

function cleanHonorific(
  name
) {

  return name
    .replace(
      /^السيد\s+/u,
      ""
    )
    .trim();

}



function getFirstArabicLetter(
  name
) {

  const cleaned =
    name.trim();


  return cleaned
    ? Array.from(
        cleaned
      )[0]
    : "س";

}



/* ==========================================================
   RENDER
========================================================== */

function renderWeddingData() {

  const arabicDate =
    getArabicDateParts();


  const englishDate =
    getEnglishDateParts();


  const couple =
    `${WEDDING.groom} × ${WEDDING.bride}`;


  const sealLetter =
    getFirstArabicLetter(
      WEDDING.groom
    );


  document.title =
    WEDDING.title;



  /* Opening */

  setText(
    "#previewNames",
    couple
  );


  setText(
    "#previewDate",
    `${englishDate.day} ${englishDate.month} ${englishDate.year}`
  );


  setText(
    "#sealInitial",
    sealLetter
  );



  /* Reference */

  setText(
    "#letterReference",
    `WED · ${englishDate.day} ${englishDate.month} ${englishDate.year}`
  );



  /* Host */

  setText(
    "#hostName",
    WEDDING.groomFather
  );


  setText(
    "#hostSignature",
    cleanHonorific(
      WEDDING.groomFather
    )
  );



  /* Invitation */

  setText(
    "#invitationLead",
    `بكل الفرح والسرور يتشرف ${WEDDING.groomFather} بدعوتكم لمشاركته فرحة زفاف ابنه`
  );


  setText(
    "#groomName",
    WEDDING.groom
  );


  setText(
    "#brideName",
    WEDDING.bride
  );


  setText(
    "#invitationCopy",
    `وذلك مساء يوم ${arabicDate.weekday} الموافق ${arabicDate.date} في ${WEDDING.venue}. ${WEDDING.closingMessage}`
  );



  /* Postmark */

  setText(
    "#postmarkDay",
    englishDate.day
  );


  setText(
    "#postmarkMonth",
    englishDate.month
  );


  setText(
    "#postmarkYear",
    englishDate.year
  );


  setText(
    "#heroWeekday",
    arabicDate.weekday
  );


  setText(
    "#heroTime",
    `الساعة ${arabicDate.time}`
  );


  setText(
    "#heroVenue",
    WEDDING.venue
  );



  /* Event */

  setText(
    "#eventDate",
    `${arabicDate.weekday}، ${arabicDate.date}`
  );


  setText(
    "#eventTime",
    arabicDate.time
  );


  setText(
    "#eventVenue",
    WEDDING.venue
  );


  setText(
    "#eventAddress",
    WEDDING.city
  );



  /* Location */

  setText(
    "#locationVenue",
    WEDDING.venue
  );


  setText(
    "#locationAddress",
    WEDDING.city
  );



  /* Closing */

  setText(
    "#closingSealInitial",
    sealLetter
  );


  setText(
    "#closingNames",
    couple
  );


  setText(
    "#closingDate",
    `${englishDate.day} ${englishDate.month} ${englishDate.year}`
  );


  setText(
    "#footerNames",
    couple
  );

}



/* ==========================================================
   ENVELOPE OPENING
========================================================== */

const envelopeGate =
  $("#envelopeGate");


const openInvitationButton =
  $("#openInvitation");


const invitationMain =
  $("#invitationMain");


const reduceMotion =
  window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );



function invitationWasOpened() {

  try {

    return (
      sessionStorage.getItem(
        WEDDING.openingStorageKey
      ) === "true"
    );

  } catch {

    return false;

  }

}



function rememberOpening() {

  try {

    sessionStorage.setItem(
      WEDDING.openingStorageKey,
      "true"
    );

  } catch {

    /* ignore */

  }

}



function completeOpening({
  focusMain = true
} = {}) {

  envelopeGate
    .classList
    .add(
      "is-complete"
    );


  envelopeGate
    .setAttribute(
      "aria-hidden",
      "true"
    );


  document.body
    .classList
    .add(
      "invitation-ready"
    );


  document.body.style.overflow =
    "";


  if (focusMain) {

    window.setTimeout(
      () => {

        invitationMain.focus({
          preventScroll: true
        });

      },
      80
    );

  }

}



function openInvitation() {

  if (
    envelopeGate
      .classList
      .contains(
        "is-opening"
      )
  ) {

    return;

  }


  rememberOpening();


  if (
    reduceMotion.matches
  ) {

    completeOpening();

    return;

  }


  /*
    STEP 1
    اختفاء الختم وفتح الغطاء
  */

  envelopeGate
    .classList
    .add(
      "is-opening"
    );


  /*
    STEP 2
    بعد أن يفتح الغطاء
    نضعه خلف الرسالة
  */

  window.setTimeout(
    () => {

      envelopeGate
        .classList
        .add(
          "flap-behind"
        );

    },
    390
  );


  /*
    STEP 3
    أهم إصلاح:
    الورقة تصعد فوق جيب الظرف بالكامل
  */

  window.setTimeout(
    () => {

      envelopeGate
        .classList
        .add(
          "letter-front"
        );

    },
    520
  );


  /*
    STEP 4
    نترك الرسالة ظاهرة كاملة للحظة
  */

  window.setTimeout(
    () => {

      envelopeGate
        .classList
        .add(
          "opening-finish"
        );

    },
    1280
  );


  /*
    STEP 5
    الانتقال للدعوة
  */

  window.setTimeout(
    () => {

      completeOpening();

    },
    1900
  );

}



function initializeOpening() {

  if (
    invitationWasOpened()
  ) {

    envelopeGate
      .classList
      .add(
        "is-complete"
      );


    envelopeGate
      .setAttribute(
        "aria-hidden",
        "true"
      );


    document.body
      .classList
      .add(
        "invitation-ready"
      );


    return;

  }


  document.body
    .classList
    .remove(
      "invitation-ready"
    );

}



openInvitationButton
  .addEventListener(
    "click",
    openInvitation
  );



/* ==========================================================
   COUNTDOWN
========================================================== */

let countdownTimer =
  null;



function formatCountdownNumber(
  number
) {

  return String(
    Math.max(
      0,
      number
    )
  ).padStart(
    2,
    "0"
  );

}



function updateCountdown() {

  const now =
    Date.now();


  const target =
    EVENT_DATE.getTime();


  const difference =
    target - now;


  if (
    difference <= 0
  ) {

    setText(
      "#days",
      "00"
    );


    setText(
      "#hours",
      "00"
    );


    setText(
      "#minutes",
      "00"
    );


    setText(
      "#seconds",
      "00"
    );


    setText(
      "#countdownStatus",
      "حل موعد الفرح"
    );


    if (
      countdownTimer
    ) {

      clearInterval(
        countdownTimer
      );

    }


    return;

  }


  const second =
    1000;


  const minute =
    second * 60;


  const hour =
    minute * 60;


  const day =
    hour * 24;


  const days =
    Math.floor(
      difference /
      day
    );


  const hours =
    Math.floor(
      (
        difference %
        day
      ) /
      hour
    );


  const minutes =
    Math.floor(
      (
        difference %
        hour
      ) /
      minute
    );


  const seconds =
    Math.floor(
      (
        difference %
        minute
      ) /
      second
    );


  setText(
    "#days",
    formatCountdownNumber(
      days
    )
  );


  setText(
    "#hours",
    formatCountdownNumber(
      hours
    )
  );


  setText(
    "#minutes",
    formatCountdownNumber(
      minutes
    )
  );


  setText(
    "#seconds",
    formatCountdownNumber(
      seconds
    )
  );

}



function initializeCountdown() {

  updateCountdown();


  countdownTimer =
    window.setInterval(
      updateCountdown,
      1000
    );

}



/* ==========================================================
   GOOGLE MAPS
========================================================== */

function getMapsUrl() {

  if (
    WEDDING.mapsUrl &&
    WEDDING.mapsUrl.trim()
  ) {

    return (
      WEDDING.mapsUrl.trim()
    );

  }


  const query =
    [
      WEDDING.venue,
      WEDDING.address
    ]
      .filter(Boolean)
      .join(" ");


  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      query
    )
  );

}



function initializeMaps() {

  const mapsButton =
    $("#mapsButton");


  mapsButton.href =
    getMapsUrl();

}



/* ==========================================================
   ICS
========================================================== */

function pad2(
  value
) {

  return String(
    value
  ).padStart(
    2,
    "0"
  );

}



function formatUtcForICS(
  date
) {

  return (
    date.getUTCFullYear() +

    pad2(
      date.getUTCMonth() + 1
    ) +

    pad2(
      date.getUTCDate()
    ) +

    "T" +

    pad2(
      date.getUTCHours()
    ) +

    pad2(
      date.getUTCMinutes()
    ) +

    pad2(
      date.getUTCSeconds()
    ) +

    "Z"
  );

}



function escapeICS(
  value
) {

  return String(
    value
  )
    .replace(
      /\\/g,
      "\\\\"
    )
    .replace(
      /\n/g,
      "\\n"
    )
    .replace(
      /,/g,
      "\\,"
    )
    .replace(
      /;/g,
      "\\;"
    );

}



function createICS() {

  const start =
    new Date(
      WEDDING.startAt
    );


  const end =
    new Date(
      start.getTime() +
      WEDDING.durationHours *
      60 *
      60 *
      1000
    );


  const now =
    new Date();


  const invitationUrl =
    getShareUrl();


  const description =
    `يسر ${WEDDING.groomFather} دعوتكم لحضور حفل زفاف ابنه ${WEDDING.groom} على ${WEDDING.bride}.${invitationUrl ? ` رابط الدعوة: ${invitationUrl}` : ""}`;


  const location =
    [
      WEDDING.venue,
      WEDDING.address
    ]
      .filter(Boolean)
      .join(" - ");


  const uid =
    `wed001-${start.getTime()}@inviteus.party`;


  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//InviteUs//The Sealed Letter//AR
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${uid}
DTSTAMP:${formatUtcForICS(now)}
DTSTART:${formatUtcForICS(start)}
DTEND:${formatUtcForICS(end)}
SUMMARY:${escapeICS(`زفاف ${WEDDING.groom} و${WEDDING.bride}`)}
DESCRIPTION:${escapeICS(description)}
LOCATION:${escapeICS(location)}
URL:${escapeICS(invitationUrl)}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

}



function downloadICS() {

  const content =
    createICS();


  const blob =
    new Blob(
      [content],
      {
        type:
          "text/calendar;charset=utf-8"
      }
    );


  const url =
    URL.createObjectURL(
      blob
    );


  const link =
    document.createElement(
      "a"
    );


  link.href =
    url;


  link.download =
    `wedding-${WEDDING.groom}-${WEDDING.bride}.ics`;


  document.body
    .appendChild(
      link
    );


  link.click();


  link.remove();


  window.setTimeout(
    () => {

      URL.revokeObjectURL(
        url
      );

    },
    500
  );


  showToast(
    "تم إنشاء ملف التقويم"
  );

}



$("#calendarButton")
  .addEventListener(
    "click",
    downloadICS
  );



/* ==========================================================
   SHARE
========================================================== */

function getShareUrl() {

  if (
    WEDDING.shareUrl &&
    WEDDING.shareUrl.trim()
  ) {

    return (
      WEDDING.shareUrl.trim()
    );

  }


  return (
    window.location.href
  );

}



function getShareText() {

  const date =
    getArabicDateParts();


  return (
    `يسر ${WEDDING.groomFather} دعوتكم لحضور حفل زفاف ابنه ` +
    `${WEDDING.groom} على الآنسة ${WEDDING.bride}، ` +
    `وذلك يوم ${date.weekday} ${date.date} ` +
    `في ${WEDDING.venue}.`
  );

}



async function copyToClipboard(
  text
) {

  if (
    navigator.clipboard &&
    window.isSecureContext
  ) {

    await navigator.clipboard
      .writeText(
        text
      );


    return;

  }


  const textarea =
    document.createElement(
      "textarea"
    );


  textarea.value =
    text;


  textarea.setAttribute(
    "readonly",
    ""
  );


  textarea.style.position =
    "fixed";


  textarea.style.opacity =
    "0";


  document.body
    .appendChild(
      textarea
    );


  textarea.select();


  document.execCommand(
    "copy"
  );


  textarea.remove();

}



async function shareInvitation() {

  const url =
    getShareUrl();


  const text =
    getShareText();


  const shareData = {

    title:
      WEDDING.title,

    text:
      text,

    url:
      url

  };


  if (
    navigator.share
  ) {

    try {

      await navigator.share(
        shareData
      );


      return;

    } catch (
      error
    ) {

      if (
        error?.name ===
        "AbortError"
      ) {

        return;

      }

    }

  }


  try {

    await copyToClipboard(
      `${text}\n${url}`
    );


    showToast(
      "تم نسخ نص الدعوة والرابط"
    );

  } catch {

    showToast(
      "تعذر نسخ الرابط"
    );

  }

}



$("#shareButton")
  .addEventListener(
    "click",
    shareInvitation
  );



/* ==========================================================
   TOAST
========================================================== */

let toastTimer =
  null;



function showToast(
  message
) {

  const toast =
    $("#toast");


  toast.textContent =
    message;


  toast.classList
    .add(
      "is-visible"
    );


  if (
    toastTimer
  ) {

    clearTimeout(
      toastTimer
    );

  }


  toastTimer =
    window.setTimeout(
      () => {

        toast.classList
          .remove(
            "is-visible"
          );

      },
      2600
    );

}



/* ==========================================================
   SCROLL REVEAL
========================================================== */

function initializeReveal() {

  const elements =
    document
      .querySelectorAll(
        ".reveal"
      );


  if (
    reduceMotion.matches ||
    !(
      "IntersectionObserver"
      in window
    )
  ) {

    elements.forEach(
      (element) => {

        element
          .classList
          .add(
            "is-visible"
          );

      }
    );


    return;

  }


  const observer =
    new IntersectionObserver(

      (entries) => {

        entries.forEach(
          (entry) => {

            if (
              entry.isIntersecting
            ) {

              entry.target
                .classList
                .add(
                  "is-visible"
                );


              observer
                .unobserve(
                  entry.target
                );

            }

          }
        );

      },

      {
        threshold:
          0.14,

        rootMargin:
          "0px 0px -35px 0px"
      }

    );


  elements.forEach(
    (element) => {

      observer.observe(
        element
      );

    }
  );

}



/* ==========================================================
   INITIALIZE
========================================================== */

function initialize() {

  renderWeddingData();

  initializeMaps();

  initializeCountdown();

  initializeOpening();

  initializeReveal();

}



document.addEventListener(
  "DOMContentLoaded",
  initialize
);
