const controller = {
  addDice: (actorDOM, action, putToDOM) => {
    $(actorDOM).on(action, function () {
      console.log(model.getWat())
      $(putToDOM).append(view.createDice())
    })
  },
  rollDice: (actorDOM, action, putToDOM) => {
    $(actorDOM).on(action, function () {
      $(putToDOM).each(function (k, die) {
        $(die).text(model.getRandom())
      })
    })
  }
}
