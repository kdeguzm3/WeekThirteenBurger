$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");

      // Send the PUT request.
      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: { devoured: true }
      }).then(
        function() {
          console.log("changed devoured to true");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#bg").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});
  