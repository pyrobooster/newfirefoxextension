//need to listen for shanges on "storage" object then change dom
//to make changes visible
let style = document.createElement('style');
document.body.appendChild(style);

broswer.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && 'value' in changes) {
    update(changes.value.newValue);
  }
});

function update(value) {
  style.innerText = `html { filter: sepia(${value}%) !important}`;
}

broswer.storage.local.get('value').then(result => update(result.value));