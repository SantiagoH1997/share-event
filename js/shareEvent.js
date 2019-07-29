const shareEvent = {
  // Format date
  formatDate(date) {
    return date.toISOString().replace(/-|:|\.\d+/g, "");
  },
  formatDuration(ms) {
    var minutes = Math.floor((ms / (1000 * 60)) % 60),
      hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return hours + "" + minutes;
  },

  event: { title: "", start: "", end: "", description: "", location: "" },

  // Google
  google(event) {
    var e = {
      ...this.event,
      ...event
    };
    return `https://www.google.com/calendar/event?action=TEMPLATE&text=${encodeURI(
      e.title
    )}&dates=${this.formatDate(e.start)}/${this.formatDate(
      e.end
    )}&details=${encodeURI(e.description)}&location=${encodeURI(e.location)}`;
  },

  // Outlook Online
  outlookOnline(event) {
    var e = {
      ...this.event,
      ...event
    };
    return `https://outlook.live.com/owa/?path=%2fcalendar%2faction%2fcompose#startdt=${this.formatDate(
      e.start
    )}&enddt=${this.formatDate(e.end)}&subject=${encodeURI(
      e.title
    )}&location=${encodeURI(e.location)}&body=${encodeURI(e.description)}`;
  },
  // Yahoo
  yahoo(event) {
    var e = {
      ...this.event,
      ...event
    };
    var duracion = this.formatDuration(e.end - e.start);
    return `https://calendar.yahoo.com/?v=60&view=d&type=20&title=${encodeURI(
      e.title
    )}&st=${this.formatDate(e.start)}&dur=${duracion}&desc=${encodeURI(
      e.description
    )}&in_loc=${encodeURI(e.location)}`;
  },

  // ICS
  ics(event) {
    var e = {
      ...this.event,
      ...event
    };

    var data = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "DTSTART:" + this.formatDate(e.start),
      "DTEND:" + this.formatDate(e.end),
      "SUMMARY:" + e.title,
      "DESCRIPTION:" + e.description,
      "LOCATION:" + e.location,
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\n");

    return encodeURI("data:text/calendar;charset=utf8," + data);
  },

  toggleOptions: function(btnToggle, options) {
    btnToggle.addEventListener("click", function() {
      let expanded = options.getAttribute("aria-expanded");
      expanded == "true"
        ? options.setAttribute("aria-expanded", false)
        : options.setAttribute("aria-expanded", true);
    });
  },

  // Init
  init(event) {
    const btnGoogle = document.querySelector("[data-share-event='google']"),
      btnOutlookOnline = document.querySelector(
        "[data-share-event='outlook-online']"
      ),
      btnOutlook = document.querySelector("[data-share-event='outlook']"),
      btnICalendar = document.querySelector("[data-share-event='icalendar']"),
      btnYahoo = document.querySelector("[data-share-event='yahoo']"),
      btnToggle = document.querySelector("[data-share-event='btn-toggle']"),
      options = document.querySelector("[data-share-event='options']");

    if (btnGoogle) {
      btnGoogle.href = this.google(event);
      btnGoogle.rel = "noopener noreferrer";
      btnGoogle.target = "_blank";
      var liGoogle = document.createElement("li");
      liGoogle.innerHTML = btnGoogle.innerHTML + "Google Calendar";
      btnGoogle.appendChild(liGoogle);
    }
    if (btnOutlookOnline) {
      btnOutlookOnline.href = this.outlookOnline(event);
      btnOutlookOnline.rel = "noopener noreferrer";
      btnOutlookOnline.target = "_blank";
      var liOutlookOnline = document.createElement("li");
      liOutlookOnline.innerHTML = btnOutlookOnline.innerHTML + "Outlook Online";
      btnOutlookOnline.appendChild(liOutlookOnline);
    }
    if (btnOutlook) {
      btnOutlook.href = this.ics(event);
      var liOutlook = document.createElement("li");
      liOutlook.innerHTML = btnOutlook.innerHTML + "Outlook";
      btnOutlookOnline.appendChild(liOutlook);
    }
    if (btnICalendar) {
      btnICalendar.href = this.ics(event);
      var liICal = document.createElement("li");
      liICal.innerHTML = btnICalendar.innerHTML + "iCalendar";
      btnICalendar.appendChild(liICal);
    }
    if (btnYahoo) {
      btnYahoo.href = this.yahoo(event);
      btnYahoo.rel = "noopener noreferrer";
      btnYahoo.target = "_blank";
      var liYahoo = document.createElement("li");
      liYahoo.innerHTML = btnYahoo.innerHTML + "Yahoo";
      btnYahoo.appendChild(liYahoo);
    }
    if (btnToggle && options) {
      this.toggleOptions(btnToggle, options);
    }
  }
};
