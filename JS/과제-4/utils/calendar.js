class Calendar {
  #month;
  #year;
  #today;
  #monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  constructor() {
		this.#initializeDate();
    this.#render();
    this.#showMonthAndYear();
    this.#setupEventListeners();
  }

	#initializeDate() {
    this.#today = new Date();
    this.#month = this.#today.getMonth();
    this.#year = this.#today.getFullYear();
  }

  #render() {
    document.querySelector(".calendar").innerHTML = `
			<nav class="calendar-nav">
				<button id="prev">&#9664;</button>
				<div class="nav-info">
					<h2 id="month" class="month"></h2>
					<h3 id="year" class="year"></h3>
				</div>
				<button id="next">&#9654;</button>
			</nav>
			<div class="calendar-grid" id="calendarInfo">
				<div class="week">SUN</div>
				<div class="week">MON</div>
				<div class="week">TUE</div>
				<div class="week">WED</div>
				<div class="week">THU</div>
				<div class="week">FRI</div>
				<div class="week">SAT</div>
			</div>`;
  }

  #showMonthAndYear() {
    document.querySelector("#year").textContent = this.#year;
    document.querySelector("#month").textContent = this.#monthList[this.#month];
  }

  #setupEventListeners() {
    document.querySelector("#prev").addEventListener("click", () => this.#changeMonth(-1));
    document.querySelector("#next").addEventListener("click", () => this.#changeMonth(1));
    document.querySelector("#calendarInfo").addEventListener("click", (event) => {
      if (event.target.classList.contains("day") && !event.target.classList.contains("other-month")) {
        this.#selectDate(event.target.textContent);
      }
    });
  }

  #settingCalendarGrid() {
    const $calendarGrid = document.querySelector("#calendarInfo");
    const firstDay = new Date(this.#year, this.#month, 1).getDay();
    const lastDate = new Date(this.#year, this.#month + 1, 0).getDate();
    const prevLastDate = new Date(this.#year, this.#month, 0).getDate();
    $calendarGrid.querySelectorAll(".day").forEach((cell) => cell.remove());

    for (let i = firstDay; i > 0; i--) {
      this.#addDayElement($calendarGrid, prevLastDate - i + 1, "other-month", "day");
    }

    for (let day = 1; day <= lastDate; day++) {
      const classes = ["day"];
      if (this.#isToday(day)) classes.push("today");
      if (this.#isWeekend(firstDay + day - 1)) classes.push("weekend");
      this.#addDayElement($calendarGrid, day, ...classes);
    }

    const totalCells = firstDay + lastDate;
    const nextDays = 7 - (totalCells % 7);
    if (nextDays < 7) {
      for (let i = 1; i <= nextDays; i++) {
        this.#addDayElement($calendarGrid, i, "other-month", "day");
      }
    }
  }

  #addDayElement(parent, text, ...classes) {
    const dayElement = document.createElement("div");
    dayElement.className = classes.join(" ");
    dayElement.textContent = text;
    parent.appendChild(dayElement);
  }

  #isToday(day) {
    return (
      day === this.#today.getDate() &&
      this.#month === this.#today.getMonth() &&
      this.#year === this.#today.getFullYear()
    );
  }

  #isWeekend(dayIndex) {
    return dayIndex % 7 === 0 || dayIndex % 7 === 6;
  }

	#changeMonth(offset) {
    this.#month += offset;
    if (this.#month > 11) {
			this.#month = 0;
			this.#year += 1;
		}
    if (this.#month < 0) {
			this.#month = 11;
			this.#year -= 1;
		}
		this.#showMonthAndYear();
    this.#settingCalendarGrid();
  }

  #selectDate(day) {
    this.#today = new Date(this.#year, this.#month, day);
    const formattedDate = `${this.#today.getFullYear()}-${String(this.#today.getMonth() + 1).padStart(2, "0")}-${String(this.#today.getDate()).padStart(2, "0")}`;
    document.querySelector("#date-input").value = formattedDate;
		console.log(formattedDate);
    this.#hideCalendar();
  }

  #hideCalendar() {
    document.querySelector(".calendar").style.display = "none";
  }

  #showCalendar() {
		this.#settingCalendarGrid();
    document.querySelector(".calendar").style.display = "block";
  }

  static init(value) {
    const calendar = new Calendar(value);
    document.querySelector("#date-input").addEventListener("focus", () => calendar.#showCalendar());
    document.addEventListener("click", (event) => {
      if (
        !document.querySelector(".calendar").contains(event.target) &&
        event.target.id !== "date-input"
      ) calendar.#hideCalendar();
    });
  }

  static setCalendarSize(size) {
    document.documentElement.style.setProperty('--calendar-size', size + 'px');
  }
}

export default Calendar;
