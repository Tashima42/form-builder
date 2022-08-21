formBuilder(forms)

function formBuilder(forms) {
  const formsContainer = document.getElementById("forms")
  buildForms(formsContainer, forms)

  function buildForms(formsContainer, forms) {
    for (const form of forms) {
      formsContainer.appendChild(
        buildForm(form)
      )
    }
  }

  function buildForm(form) {
    const formId = form.id
    const formContainer = document.createElement("div")
    formContainer.classList.add("form", "collpase")
    formContainer.id = `form-${formId}`

    const header = buildHeader(formId, form.title, form.description)
    formContainer.appendChild(header)

    buildInputs(formId, formContainer, form.inputs)

    const buttonLoadingGroup = buildButtonLoadingGroup(formId, form.button)
    formContainer.appendChild(buttonLoadingGroup)

    const responseJsonEditor = buildResponseJsonEditor(formId)
    formContainer.appendChild(responseJsonEditor)

    return formContainer
  }

  function buildHeader(formId, title, description) {
    const headerContainer = document.createElement("div")
    headerContainer.classList.add("form-header")
    headerContainer.id = `form-header-${formId}`

    const headerTitle = document.createElement("h1")
    headerTitle.classList.add("form-header-title");
    headerTitle.appendChild(document.createTextNode(title))
    headerContainer.appendChild(headerTitle);
    headerTitle.id = `form-header-title-${formId}`

    const headerDescription = document.createElement("p")
    headerDescription.innerHTML = description
    headerDescription.id = `form-header-description-${formId}`
    headerContainer.appendChild(headerDescription)

    return headerContainer
  }

  function buildInputs(formId, formContainer, inputs) {
    for (const input of inputs) {
      formContainer.appendChild(
        buildInput(formId, input.id, input.type, input.label, input.placeholder)
      )
    }

    function buildInput(formId, id, type, label, placeholder) {
      const formGroup = document.createElement("div")
      formGroup.classList.add("form-group")
      formGroup.id = `form-group-${formId}-${id}`

      const labelElement = document.createElement("label")
      labelElement.appendChild(document.createTextNode(label))
      labelElement.setAttribute("for", `label-${formId}-${id}`)
      labelElement.id = `label-${formId}-${id}`
      formGroup.appendChild(labelElement)

      const inputElement = document.createElement("input")
      inputElement.setAttribute("type", type)
      inputElement.setAttribute("placeholder", placeholder)
      inputElement.classList.add("form-control")
      inputElement.id = `input-${formId}-${id}`
      formGroup.appendChild(inputElement)

      return formGroup
    }
  }

  function buildButtonLoadingGroup(formId, button) {
    const buttonLoadingGroup = document.createElement("div")
    buttonLoadingGroup.classList.add("button-loading-group")
    buttonLoadingGroup.id = `button-loading-group-${formId}`

    const buttonElement = buildButton(formId, button.text, button.onClick)
    buttonLoadingGroup.appendChild(buttonElement)

    const loadingElement = buildLoading(formId)
    buttonLoadingGroup.appendChild(loadingElement)

    return buttonLoadingGroup

    function buildButton(formId, text, onClick) {
      const button = document.createElement("button")
      button.classList.add("btn", "btn-primary")
      button.appendChild(document.createTextNode(text))
      button.setAttribute("onClick", onClick)
      button.id = `button-${formId}`

      return button
    }

    function buildLoading(formId) {
      const loading = document.createElement("div")
      loading.classList.add("spinner-border", "text-danger")
      loading.id = `loading-${formId}`
      loading.setAttribute("role", "status")
      loading.id = `loading-${formId}`

      return loading
    }
  }

  function buildResponseJsonEditor(formId) {
    const jsonEditorContainer = document.createElement("div")
    jsonEditorContainer.classList.add("jsoneditor-container")
    jsonEditorContainer.id = `jsoneditor-container-${formId}`

    const jsonEditorResponseTitle = document.createElement("h4")
    jsonEditorResponseTitle.appendChild(document.createTextNode("Response"))
    jsonEditorContainer.appendChild(jsonEditorResponseTitle)

    const jsonEditor = document.createElement("div")
    jsonEditor.classList.add("jsoneditor")
    jsonEditor.id = `jsoneditor-${formId}`
    jsonEditorContainer.appendChild(jsonEditor)

    jsoneditor[`jsoneditor-${formId}`] = initJsonEditor(jsonEditor)

    return jsonEditorContainer

    function initJsonEditor(element) {
      const options = { mode: "code", mainMenuBar: false, statusBar: false }
      const editor = new JSONEditor(element, options)
      editor.aceEditor.setReadOnly(true)
      editor.aceEditor.renderer.setShowGutter(false)
      editor.aceEditor.renderer.setShowPrintMargin(false)
      return editor
    }
  }
}
