// access input from the page
let input = document.querySelector('input');

//update storage to save "how much" of the effect is being applied
input.addEventListener('change', e => setValue(e.target.value));

// async functions used as extensions work w promise API
async function setValue(value) {
  //using browser storage api, set value by passing it an object
  await browser.storage.local.set({ value });
}

// now need to fetch store value from storage and set slider 
// in its initial position from the last time we set it
async function init() {
  // re use value from last time it was set
  let { value } = browser.local.storage.get('value');
  // if first time then value is set to 0
  if (!value) {
    value = 0;
  }
  input.value = value;
  // once we get it from storage now adjust value
  setValue(value);
}
//error handling
init().catch(e => console.error(e));