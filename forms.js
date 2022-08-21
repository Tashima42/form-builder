const forms = [
  {
    id: 1,
    title: "Form Builder Example",
    description: `<p>Here, you can put HTML, like an <a href="https://www.w3schools.com/tags/tag_a.asp">a tag</a></p>`,
    inputs: [
      {
        id: 1,
        type: "text",
        label: "You can also create inputs",
        placeholder: "And specify placeholders!",
      },
      {
        id: 2,
        type: "password",
        label: "Right now, there's only support for text inputs, not select and etc.",
        placeholder: "But you can try to use, something else, like password and email",
      },
    ],
    button: {
      text: "You can trigger onclick funtions",
      onClick: "formBuilderExample()",
    }
  },
]
