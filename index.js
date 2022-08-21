const jsoneditor = {}

// HELPERS
function showToast(bodyMessage) {
  const toast = document.getElementById('liveToast')
  document.getElementById("toast-body").innerText = bodyMessage
  new bootstrap.Toast(toast).show()
}

function toggleLoading(id, show) {
  document.getElementById(id).style.display = show === true ? "block" : "none";
}

function updateJsonEditor(id, content) {
  jsoneditor[id].set(content)
}
