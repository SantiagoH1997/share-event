# Share-Event

Share-Event is a lightweight no-dependenc Javascript plugin to share your events, supporting Outlook (online and desktop), iCalendar, Google, and Yahoo calendars.

## Installation

```bash
npm install share-event
```

Or just download shareEvent.min.js from the /dist folder 🐣

## Usage

```html
<script type="text/javascript" src="shareEvent.min.js"></script></body>
<script>
window.addEventListener("DOMContentLoaded", function() {
        var event = {
          title: "Test event",
          description:
            "This is a random test event",
          start: new Date("March 9, 2020 15:00"),
          end: new Date("March 9, 2020 17:00"),
          location: "Random street 947"
        };
        shareEvent.init(event);
      });
</script>
```

## License

[ISC](https://choosealicense.com/licenses/isc/)
