let upgrades = [
    {
        name: 'bullhorn',
        power: 5,
        timer: 0,
        count: 0,
        cost: 10
    },
    {
        name: 'tv show',
        power: 15,
        timer: 0,
        count: 0,
        cost: 100
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
        cost: 1000
    }
]

let totalFollowing = 0
let followers = 0
let clock = upgrades[2].timer
let power = 0

drawStats()

function mineFollowers() {
    if (power > 1) {
        followers += power
    } else {
        followers++
    }
    drawStats()
}

function addOutreach(upgradeName) {
    let improvement = upgrades.find(upgrade => upgrade.name == upgradeName)
    if (totalFollowing >= improvement.cost) {
        totalFollowing -= improvement.cost
        improvement.count++
        improvement.value
        power += improvement.power
        improvement.cost = improvement.cost * 2
    } else {
        window.alert('You need more followers to sacrifice!')
    }
    drawStats()
}

function addCultLeader() {
    upgrades[2].count++
    drawStats()
}

setInterval(addCultLeader, upgrades[2].timer)

setInterval(moveFollowers, 5000)

function moveFollowers() {
    totalFollowing += followers
    followers = 0
    drawStats()
}

function drawStats() {
    let bullhornElem = document.getElementById('bullhorn');
    let tvshowElem = document.getElementById('tvshow');
    let cultLeaderElem = document.getElementById('cultLeader');
    let mlmElem = document.getElementById('mlm');
    let clockElem = document.getElementById('clockCount');
    let followingElem = document.getElementById('totalFollowingCount');
    let followerElem = document.getElementById('followersCount');
    let bullhornBtnElem = document.getElementById('bullhornbtn');
    let tvshowBtnElem = document.getElementById('tvshowbtn');
    let cultleaderBtnElem = document.getElementById('cultleaderbtn');
    let mlmbtnElem = document.getElementById('mlmbtn');

    followerElem.innerHTML = `<span class="mdi mdi-account-multiple-plus"></span><span> ${followers}</span>`
    followingElem.innerHTML = `<span class="mdi mdi-account-group"></span><span> ${totalFollowing}</span>`
    clockElem.innerHTML = `<span class="mdi mdi-clock-plus-outline"></span><span> ${clock}</span>`
    bullhornBtnElem.innerHTML = `<span
    class="mdi mdi-bullhorn-variant"></span><span> ${upgrades[0].cost}</span>`
    tvshowBtnElem.innerHTML = `<span
    class="mdi mdi-television-classic"></span><span> ${upgrades[1].cost}</span>`
    cultleaderBtnElem.innerHTML = `<span
    class="mdi mdi-human-handsup"></span><span> ${upgrades[2].cost}</span>`
    mlmbtnElem.innerHTML = `<span class="mdi mdi-pyramid"></span><span> ${upgrades[3].cost}</span>`
    mlmElem.innerHTML = `<span class="mdi mdi-pyramid"><span> ${upgrades[3].count}</span>`
    cultLeaderElem.innerHTML = `<span
    class="mdi mdi-human-handsup"><span> ${upgrades[2].count}</span>`
    tvshowElem.innerHTML = `<span
    class="mdi mdi-television-classic"><span> ${upgrades[1].count}</span>`
    bullhornElem.innerHTML = `<span
    class="mdi mdi-bullhorn-variant"><span> ${upgrades[0].count}</span>`
}

function reset() {
    totalFollowing = 0
    followers = 0
    for (let i = 0; i < upgrades.length; i++) {
        upgrades[i].count = 0
    }
    drawStats()
}
