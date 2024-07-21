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

  constructor(value) {
    this.#render();
    if (value) {
      const [y, m, d] = value.split("-");
      this.#year = parseInt(y, 10);
      this.#month = parseInt(m, 10) - 1; // 월은 0부터 시작
      this.#today = new Date(this.#year, this.#month, parseInt(d, 10));
    } else {
      this.#today = new Date();
      this.#month = this.#today.getMonth();
      this.#year = this.#today.getFullYear();
    }

    this.#showMonthAndYear();
    this.#settingCalendarGrid();

    document.querySelector("#prev").addEventListener("click", () => this.#prevMonth());
    document.querySelector("#next").addEventListener("click", () => this.#nextMonth());
		document.querySelector("#calendarInfo").addEventListener("click", (event) => {
			if (event.target.classList.contains("day")) this.#selectDate(event.target.textContent);
		});
  }

  #render() {
    document.querySelector(".calendar").innerHTML = `<nav class="calendar-nav">
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
    const $year = document.querySelector("#year");
    const $month = document.querySelector("#month");

    $year.textContent = this.#year;
    $month.textContent = this.#monthList[this.#month];
  }

  #settingCalendarGrid() {
    const $calendarGrid = document.querySelector("#calendarInfo");
    const firstDay = new Date(this.#year, this.#month, 1).getDay();
    const lastDate = new Date(this.#year, this.#month + 1, 0).getDate();
    const prevLastDate = new Date(this.#year, this.#month, 0).getDate();

    const cells = $calendarGrid.querySelectorAll(".day");
    cells.forEach((cell) => cell.remove());

    for (let i = firstDay; i > 0; i--) {
      const day = document.createElement("div");
      day.className = "day other-month";
      day.textContent = prevLastDate - i + 1;
      $calendarGrid.appendChild(day);
    }

    for (let day = 1; day <= lastDate; day++) {
      const dayElement = document.createElement("div");
      dayElement.className = "day";
      if (
        day === this.#today.getDate() &&
        this.#month === this.#today.getMonth() &&
        this.#year === this.#today.getFullYear()
      ) {
        dayElement.classList.add("today");
      }
      if ((firstDay + day - 1) % 7 === 0 || (firstDay + day - 1) % 7 === 6) {
        dayElement.classList.add("weekend");
      }
      dayElement.textContent = day;
      $calendarGrid.appendChild(dayElement);
    }

    const totalCells = firstDay + lastDate;
    const nextDays = 7 - (totalCells % 7);
    if (nextDays < 7) {
      for (let i = 1; i <= nextDays; i++) {
        const day = document.createElement("div");
        day.className = "day other-month";
        day.textContent = i;
        $calendarGrid.appendChild(day);
      }
    }
  }

  #prevMonth() {
    if (this.#month === 0) {
      this.#month = 11;
      this.#month--;
    } else {
      this.#month--;
    }
    this.#settingCalendarGrid();
  }

  #nextMonth() {
    if (this.#month === 11) {
      this.#month = 0;
      this.#month++;
    } else {
      this.#month++;
    }
    this.#settingCalendarGrid();
  }

  #selectDate(day) {
    const selectedDate = new Date(this.#year, this.#month, day);
    const formattedDate = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, "0")}-${String(selectedDate.getDate()).padStart(2, "0")}`;
    document.querySelector("#date-input").value = formattedDate;
		console.log(formattedDate)
    this.#hideCalendar();
  }

  #hideCalendar() {
    document.querySelector(".calendar").style.display = "none";
  }

  #showCalendar() {
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
}

export default Calendar;
