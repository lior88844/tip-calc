"use strict"
var gWaiters = []
var gTip = 0

function setTotalTip(amount) {
    gTip = amount
    calcTips()
}

function getWaiters() {
    return JSON.parse(JSON.stringify(gWaiters))
}

function addWaiter(name, hours) {
    const waiter = _createWaiter(name, +hours)
    gWaiters.push(waiter)
    calcTips()
}
function removeWaiter(waiterId) {
    const waiterIdx = gWaiters.findIndex(waiter => waiter.id === waiterId)
    gWaiters.splice(waiterIdx, 1)
    calcTips()
}

function roundTips() {
    gWaiters.forEach(waiter => waiter.tip = Math.round(waiter.tip))
    console.log(gWaiters);
}

function _createWaiter(name, hours) {
    const waiter = {
        id: makeId(),
        name,
        hours,
        tip: 0
    }
    return waiter
}

function calcTips() {
    const totalHours = gWaiters.reduce((acc, waiter) => {
        return acc + waiter.hours
    }, 0)
    const tipPerHour = totalHours ? gTip / totalHours : 0;
    gWaiters.forEach(waiter => {
        waiter.tip = +(waiter.hours * tipPerHour).toFixed(2)
    })
    console.log(gWaiters);
}