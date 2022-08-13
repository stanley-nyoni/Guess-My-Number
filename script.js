const hidden = document.querySelector(`.hidden`);
const input = document.querySelector(`.input`);
const guess = document.querySelector(`.guess`);

const enter = document.querySelector(`.enter-number`);
const num = document.querySelector(`.num`);
const chance = document.querySelector(`.chances`);
const body = document.querySelector(`body`);

const hiddenNumber = Math.trunc(Math.random() * 10 + 1);
let maxChance = 3;
let game = true;
guess.addEventListener(`click`, function () {
  if (maxChance >= 1 && game) {
    const inn = Number(input.value);

    const styleBackground = function (name) {
      let color;
      if (inn === hiddenNumber) {
        color = `green`;
      } else if (maxChance === 0) {
        color = ` rgba(0, 0, 0, 0.6)`;
      }
      return (name.style.backgroundColor = color);
    };

    if (inn >= 1 && inn <= 10) {
      if (inn === hiddenNumber) {
        hidden.textContent = hiddenNumber;
        styleBackground(body);
        styleBackground(hidden);
        styleBackground(input);
        styleBackground(guess);

        chance.textContent = `You won🥳️🥳️`;
        enter.textContent = `You lucky number was ${hiddenNumber}`;
        game = false;
      } else if (inn !== hiddenNumber) {
        enter.textContent = `Number too ${
          inn > hiddenNumber ? `high 📈️` : `low 📉️`
        } Try again`;

        maxChance--;
        num.textContent = maxChance;
        if (maxChance === 0) {
          chance.textContent = ` You Lost😩️😩️`;
          styleBackground(body);
          styleBackground(hidden);
          styleBackground(input);
          styleBackground(guess);
        }
      }
    } else {
      enter.textContent = `Invalid Number`;
    }
  }
});
