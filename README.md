# Share-Event

Share-Event is a lightweight no-dependency Javascript plugin to share your events, supporting Outlook (online and desktop), iCalendar, Google, and Yahoo calendars.

## Installation

Just download shareEvent.js and shareEvent.css 🐣

## Usage

You need to have an element with a data-share-event="share-event" attribute. This will be your container.  
Inside, place a button with a data-share-event="btn-toggle" attribute. Modify the code below to your needs.

```html

    <article data-share-event="share-event">
      <button data-share-event="btn-toggle">Share Event</button>
      <ul data-share-event="options" aria-expanded="false">
        <a href="#" data-share-event="google"> </a>
        <a href="#" data-share-event="outlook-online"> </a>
        <a href="#" data-share-event="outlook"> </a>
        <a href="#" data-share-event="icalendar"> </a>
        <a href="#" data-share-event="yahoo"> </a>
      </ul>
    </article>
    <script type="text/javascript" src="shareEvent.js"></script>
  </body>
  <script>
    window.addEventListener("DOMContentLoaded", function() {
      var event = {
        title: "Test event",
        description: "This is a random test event",
        start: new Date("March 9, 2020 15:00"),
        end: new Date("March 9, 2020 17:00"),
        location: "Random street 947"
      };
      shareEvent.init(event);
    });
  </script>
</html>
```

## Live demo

There is a live demo available here: https://santiagoh1997.github.io/share-event-demo/

## License

[ISC](https://choosealicense.com/licenses/isc/)
