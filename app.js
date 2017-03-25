$(document).ready(function () {
  controller.addDice('#roller button.add', 'click', '.dice')
  controller.rollDice('#roller button.roll', 'click', '.die')
})
