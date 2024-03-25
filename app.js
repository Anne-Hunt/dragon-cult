let upgrades = [
    {
        name: 'bullhorn',
        power: 2,
        timer: 0,
        count: 0,
        cost: 10
    },
    {
        name: 'tv show',
        power: 40,
        timer: 0,
        count: 0,
        cost: 1000
    },
    {
        name: 'cult leaders',
        power: 20,
        timer: 3000,
        count: 0,
        cost: 500
    },
    {
        name: 'mlm',
        power: 100,
        timer: 300000,
        count: 0,
        cost: 10000
    }
]

let totalFollowing = 0
let followers = 0
let clock = upgrades[2].timer
let power = 1
let humansSacrificed = 0
let dragons = 0
let automatic = 0

drawStats()

function mineFollowers() {
    followers += 1 + power
    drawStats()
    // dragonBaby()
}

function addOutreach(upgradeName) {
    let improvement = upgrades.find(upgrade => upgrade.name == upgradeName)
    if (followers >= improvement.cost) {
        followers -= improvement.cost
        improvement.count++
        power += improvement.power
        improvement.cost = improvement.cost * 2
    } else {
        window.alert('You need more followers to sacrifice!')
    }
    if (power >= 100000) {
        power = 100000
    }
    drawStats()
}

function addAutomatic() {
    followers += automatic
    drawStats()
}

function runCult() {
    if (followers >= upgrades[2].cost) {
        upgrades[2].count++
        automatic += upgrades[2].power
        followers -= upgrades[2].cost
        let cultBtn = document.getElementById('oneCult')
        cultBtn.setAttribute("disabled", "")
        drawStats()
    }
}

function runMLM() {
    if (followers >= upgrades[3].cost) {
        upgrades[3].count++
        automatic += upgrades[3].power
        followers -= upgrades[3].cost
        let mlmBtn = document.getElementById('oneMLM')
        mlmBtn.setAttribute("disabled", "")
        drawStats()
    }
}


setInterval(addAutomatic, 3000)

function drawStats() {
    if (power >= 100000) {
        power = 100000
    }

    let bullhornElem = document.getElementById('bullhorn');
    let tvshowElem = document.getElementById('tvshow');
    let cultLeaderElem = document.getElementById('cultLeader');
    let mlmElem = document.getElementById('mlm');
    let bullhorndescElem = document.getElementById('bullhorndesc');
    let tvshowdescElem = document.getElementById('tvshowdesc');
    let cultdescElem = document.getElementById('cultdesc');
    let mlmdescElem = document.getElementById('mlmdesc');
    let automaticElem = document.getElementById('automatic');
    let followerElem = document.getElementById('followersCount');
    let powerElem = document.getElementById('power');
    let bullhornBtnElem = document.getElementById('bullhornbtn');
    let tvshowBtnElem = document.getElementById('tvshowbtn');
    let cultleaderBtnElem = document.getElementById('cultleaderbtn');
    let mlmbtnElem = document.getElementById('mlmbtn');

    followerElem.innerHTML = `<span class="mdi mdi-account-multiple-plus"></span><span> ${followers}</span>`
    automaticElem.innerHTML = `<span class="mdi mdi-account-group"></span><span> ${automatic}</span>`
    powerElem.innerHTML = `<span class="mdi mdi-account-plus"></span><span> ${power}</span>`

    bullhorndescElem.innerHTML = `Bullhorn<span class="mdi mdi-arm-flex p-1"></span> ${upgrades[0].power}`
    tvshowdescElem.innerHTML = `TV Show<span class="mdi mdi-arm-flex p-1"></span> ${upgrades[1].power}`
    cultdescElem.innerHTML = `Cult Leader<span class="mdi mdi-arm-flex p-1"></span> ${upgrades[2].power}`
    mlmdescElem.innerHTML = `Own an MLM<span class="mdi mdi-arm-flex p-1"></span> ${upgrades[3].power}`
    bullhornBtnElem.innerHTML = `<span
    class="mdi mdi-bullhorn-variant"></span><span> ${upgrades[0].cost}</span>`
    tvshowBtnElem.innerHTML = `<span
    class="mdi mdi-television-classic"></span><span> ${upgrades[1].cost}</span>`
    cultleaderBtnElem.innerHTML = `<span
    class="mdi mdi-human-handsup"></span><span> ${upgrades[2].cost}</span>`
    mlmbtnElem.innerHTML = `<span class="mdi mdi-pyramid"></span><span> ${upgrades[3].cost}</span>`

    mlmElem.innerHTML = `<span class="mdi mdi-pyramid rounded border border-light shadow text-light p-1 px-2 stat-w text-center"></span><span class="p-1">Own An MLM</span><span class="mdi mdi-clock-plus-outline p-1"></span><span class="rounded border border-light shadow text-light p-1 px-2 stat-w text-center"> ${upgrades[3].count}</span>`
    cultLeaderElem.innerHTML = `<span
    class="mdi mdi-human-handsup rounded border border-light shadow text-light p-1 px-2 stat-w text-center"></span><span class="p-1">Cult Leaders</span><span class="mdi mdi-clock-plus-outline p-1"></span><span class="rounded border border-light shadow text-light p-1 px-2 stat-w text-center"> ${upgrades[2].count}</span>`
    tvshowElem.innerHTML = `<span
    class="mdi mdi-television-classic rounded border border-light shadow text-light p-1 px-2 stat-w text-center"></span><span class="p-1">TV Show</span><span class="mdi mdi-cash-sync"></span><span class="rounded border border-light shadow text-light p-1 px-2 stat-w text-center"> ${upgrades[1].count}</span>`
    bullhornElem.innerHTML = `<span
    class="mdi mdi-bullhorn-variant rounded border border-light shadow text-light p-1 px-2 stat-w text-center"></span><span class="p-1">Bullhorn</span><span class="mdi mdi-cash-sync"></span><span class="rounded border border-light shadow text-light p-1 px-2 stat-w text-center"> ${upgrades[0].count}</span>`
}

function reset() {
    totalFollowing = 0
    followers = 0
    power = 0
    humansSacrificed = 0
    dragons = 0
    for (let i = 0; i < upgrades.length; i++) {
        upgrades[i].count = 0
    }
    drawStats()
}
