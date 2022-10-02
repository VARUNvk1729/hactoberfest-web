var id = setTimeout(
  function () {
    $("#exampleModal").modal("show");
  },
  5000 /// milliseconds = 5 seconds
);

document.getElementById("send-but").addEventListener("click", () => {
  var name = $("#form-modal #recipient-name").val().trim();
  var phone = $("#form-modal #recipient-phone").val().trim();
  var email = $("#form-modal #recipient-email").val().trim();

  console.log("send button press");

  window.open(`mailto:poornima@digion.in?subject=${subject}&body=Name: ${name} Number: ${phone} Email: ${email}`);
  clearTimeout(id);
});
