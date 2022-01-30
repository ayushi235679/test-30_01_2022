function productUpdate() {
  if ($("#name").val() != null && $("#name").val() != '') {
      // Add product to Table
      productAddToTable();

      // Clear form fields
      formClear();

      // Focus to product name field
      $("#name").focus();
  }
}
function productAddToTable() {
  // First check if a <tbody> tag exists, add one if not
  if ($("#productTable tbody").length == 0) {
      $("#productTable").append("<tbody></tbody>");
  }

  // Append product to the table
  $("#productTable tbody").append(
      "<tr>" +
      "<td>" + $("#name").val() + "</td>" +
      "<td>" + $("#email").val() + "</td>" +
      "<td>" + $("#number").val() + "</td>" +
      "<td>" +
      "<button type='button' onclick='productDelete(this);'class='btn btn-default'>delete</button>" +
      "</td>" +
      "</tr>");
}

function formClear() {
  $("#name").val("");
  $("#email").val("");
  $("#number").val("");
}
function productDelete(ctl) {
  $(ctl).parents("tr").remove();
}
