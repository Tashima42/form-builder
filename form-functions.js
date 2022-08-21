function formBuilderExample() {
  // You can toggle a loading spinner using `loading-{formId}`
  toggleLoading("loading-1", true)

  // You can get the value of a input with `input-{formId}-{inputId}`
  const firstInput = document.getElementById("input-1-1").value
  const secondInput = document.getElementById("input-1-2").value

  // With this function, you can show a toas!
  showToast(`Nice, you clickd a button! Input1: ${firstInput}, Input2: ${secondInput}`)

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(async res => {
      const body = await res.json()

      // If you need to show some json infromation, use the jsoneditor with `jsoneditor-{formId}`
      updateJsonEditor("jsoneditor-1", body)
      // And turn off the loading with `loading-{formId}`
      toggleLoading("loading-1", false)
    })
}
