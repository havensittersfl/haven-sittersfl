// =========================================================
// Haven Sitters: sitter showcase
//
// To add a sitter, copy one { ... } block, paste it into the
// list, and fill it in. Put their photo in this same folder.
// Only add a sitter after they've said yes to being on the site.
// =========================================================

const sitters = [
  // Example (delete the // at the start of each line to use it):
  // {
  //   name: "Sophia",                 // first name only
  //   photo: "sophia.jpg",     // a photo they approved
  //   major: "Elementary Education",
  //   favorite: "Blanket forts and story time",
  //   funFact: "Has two little brothers"
  // },
];

const list = document.getElementById("sitter-list");

if (sitters.length === 0) {
  // Shows until you add your first sitter
  list.innerHTML = '<p class="empty-note">We\'re interviewing our first sitters now. Meet the team here soon!</p>';
} else {
  sitters.forEach(function (sitter) {
    const card = document.createElement("article");
    card.className = "person";
    card.innerHTML =
      '<img src="' + sitter.photo + '" alt="' + sitter.name + ', Haven Sitters sitter" loading="lazy">' +
      "<h3>" + sitter.name + "</h3>" +
      '<p class="role">' + sitter.major + "</p>" +
      '<p class="sitter-fact"><strong>Favorite activity:</strong> ' + sitter.favorite + "</p>" +
      '<p class="sitter-fact"><strong>Fun fact:</strong> ' + sitter.funFact + "</p>";
    list.appendChild(card);
  });
}
