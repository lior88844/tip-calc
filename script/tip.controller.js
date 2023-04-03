"use strict"

function onSetTotalTip(tipAmount) {
    setTotalTip(tipAmount)
    renderWaiters()
}
function onAddWaiter(ev, elForm) {
    ev.preventDefault()
    const waiterName = elForm.querySelector('input[name="waiterName"]').value
    const waiterHours = elForm.querySelector('input[name="waiterHours"]').value
    if (!waiterName || !waiterHours) return
    addWaiter(waiterName, waiterHours)
    renderWaiters()
    elForm.reset()
}
function onRemoveWaiter(waiterId) {
    removeWaiter()
    renderWaiters()
}
function renderWaiters() {
    const waiters = getWaiters()
    const elList = document.querySelector('.waiters-list')
    let strHtml = waiters.map(waiter => {
        return `<li><button onclick="onRemoveWaiter('${waiter.id}')">x</button><p>${waiter.name} מקבל/ת ${waiter.tip} &#8362</p><p>  עבור ${waiter.hours} שעות</p>
    </li>`
    }).join('')
    elList.innerHTML = strHtml
}
function onRoundTips() {
    roundTips()
    renderWaiters()
}