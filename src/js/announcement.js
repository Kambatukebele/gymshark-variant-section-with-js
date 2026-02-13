const announcements = document.querySelectorAll(".announcement"); // grap all the announcement text
let currentAnnouncementIndex = 0;
let totalAnnouncement = announcements.length;

//show the announcement
function showAnnouncement(show) {
  show.classList.remove("translate-y-6", "opacity-0");
  show.classList.add("translate-y-0", "opacity-100");
}
// hide the announcement
function hideAnnouncement(hide) {
  hide.classList.add("translate-y-6", "opacity-0");
  hide.classList.remove("translate-y-0", "opacity-100");
}

function handleAnnouncement() {
  // hide the current announcement
  hideAnnouncement(announcements[currentAnnouncementIndex]);
  //increment the current index to +1
  currentAnnouncementIndex++;

  // reset index to 0 if it exceeds the totalAnnouncement
  if (currentAnnouncementIndex >= totalAnnouncement) {
    currentAnnouncementIndex = 0;
  }

  // show the next annoucement
  showAnnouncement(announcements[currentAnnouncementIndex]);
}

window.addEventListener("load", (e) => {
  showAnnouncement(announcements[currentAnnouncementIndex]);

  let hangleAnnimation = setInterval(() => {
    handleAnnouncement();
  }, 5000);
});
