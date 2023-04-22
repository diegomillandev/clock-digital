// variables dark mode
const switchIcon = document.querySelector(".swith-icon");
const iconMoonSun = switchIcon.querySelector("i");

// variables clock
const clockDays = document.querySelectorAll(".clock-days li");
const switchAmPm = document.querySelectorAll(".am-pm span");

const date = new Date();

const daysWeek = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thuesday",
    5: "friday",
    6: "saturday",
};

// events
switchIcon.addEventListener("click", darkMode);
window.addEventListener("DOMContentLoaded", () => {
    clock();
    activeDay(date.getDay());
    formatDayMonth(date.getDay(), date.getMonth() + 1);
    activeAmPm(date.getHours());
});

function darkMode() {
    document.querySelector("body").classList.toggle("darkMode");

    if (iconMoonSun.classList.contains("bxs-sun")) {
        iconMoonSun.classList.remove("bxs-sun");
        iconMoonSun.classList.add("bxs-moon");
    } else {
        iconMoonSun.classList.remove("bxs-moon");
        iconMoonSun.classList.add("bxs-sun");
    }
}

function activeDay(date) {
    clockDays.forEach((day) => {
        if (day.classList.contains(daysWeek[date])) {
            day.classList.add("active");
        } else {
            day.classList.remove("active");
        }
    });
}

function formatDayMonth(day, month) {
    const dayDate = document.querySelector(".month-day .day");
    const monthDate = document.querySelector(".month-day .month");
    dayDate.textContent = `${day > 9 ? day : "0" + day}`;
    monthDate.textContent = `${month > 9 ? month : "0" + month}`;
}

function activeAmPm(hours) {
    switchAmPm.forEach((span) => {
        if (hours < 12 && span.classList.contains("am")) {
            span.classList.add("active");
        } else if (hours >= 12 && span.classList.contains("pm")) {
            span.classList.add("active");
        } else {
            span.classList.remove("active");
        }
    });
}

function clock() {
    const dateClock = new Date();
    const hours =
        dateClock.getHours() > 12
            ? dateClock.getHours() - 12
            : dateClock.getHours();
    const min = dateClock.getMinutes();
    const seg = dateClock.getSeconds();

    if (hours < 10) {
        document.querySelector(".wrapper-span .hours-tenth").textContent = 0;
        document.querySelector(".wrapper-span .hours-units").textContent =
            hours;
    } else {
        let hoursArray = hours.toString();
        document.querySelector(".wrapper-span .hours-tenth").textContent =
            hoursArray[0];
        document.querySelector(".wrapper-span .hours-units").textContent =
            hoursArray[1];
    }
    if (min < 10) {
        document.querySelector(".wrapper-span .minutes-tenth").textContent = 0;
        document.querySelector(".wrapper-span .minutes-units").textContent =
            min;
    } else {
        let minArray = min.toString();
        document.querySelector(".wrapper-span .minutes-tenth").textContent =
            minArray[0];
        document.querySelector(".wrapper-span .minutes-units").textContent =
            minArray[1];
    }
    if (seg < 10) {
        document.querySelector(".wrapper-span .seconds-tenth").textContent = 0;
        document.querySelector(".wrapper-span .seconds-units").textContent =
            seg;
    } else {
        let segArray = seg.toString();
        document.querySelector(".wrapper-span .seconds-tenth").textContent =
            segArray[0];
        document.querySelector(".wrapper-span .seconds-units").textContent =
            segArray[1];
    }
    document.title = `Digital Clock | ${hours}:${min < 10 ? "0" + min : min}:${
        seg < 10 ? "0" + seg : seg
    } ${dateClock.getHours() > 12 ? "pm" : "am"}`;
}

setInterval(() => {
    clock();
    activeDay(date.getDay());
    formatDayMonth(date.getDate(), date.getMonth() + 1);
    activeAmPm(date.getHours());
}, 1000);
