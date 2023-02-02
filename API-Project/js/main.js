import { DOM } from "./dom";
import { displayCreation } from "./display";
import { sortingValues } from "./display";
import { arrayDisplay } from "./display";
import { conversionFunction } from "./button";
import { clear } from "./button";
import { reset } from "./button";
import { formSubmit } from "./button";
import { ordering } from "./button";

const URL = "https://api.exchangerate.host/latest";

// let data = await (await fetch(URL)).json();
let data = fetch(URL).then(response.json());
console.log(data.rates);
let entries = Object.entries(data.rates);

setTimeout(displayCreation.createDropDown(data.rates, DOM.dropDownBase), 5000);
displayCreation.createDropDown(data.rates, DOM.dropDownConverted);

arrayDisplay.execute(
  entries,
  conversionFunction.execute,
  DOM.output,
  data.rates
);

sortingValues.display(DOM.outputRankings, entries, (a, b) => b[1] - a[1]);

formSubmit.execute(
  DOM.form,
  conversionFunction.execute,
  DOM.output,
  data.rates,
  reset.execute
);

clear.execute(DOM.clearButton, DOM.output);

ordering.execute(
  DOM.leastValued,
  sortingValues.display,
  DOM.outputRankings,
  entries,
  (a, b) => b[1] - a[1]
);

ordering.execute(
  DOM.mostValued,
  sortingValues.display,
  DOM.outputRankings,
  entries,
  (a, b) => a[1] - b[1]
);

/* 
DOM.leastValued.addEventListener("click", function () {
  sortingValues.display(DOM.outputRankings, entries, (a, b) => b[1] - a[1]);
});

DOM.mostValued.addEventListener("click", function () {
  sortingValues.display(DOM.outputRankings, entries, (a, b) => a[1] - b[1]);
});
 */