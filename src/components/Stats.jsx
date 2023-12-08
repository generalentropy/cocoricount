import PropTypes from "prop-types";

Stats.propTypes = {
  userData: PropTypes.array,
};

export default function Stats({ userData }) {
  const filterByCurrentTimePeriods = function (data) {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0-11
    const currentDate = now.getDate();
    const currentWeek = getWeekNumber(now);

    const filteredByYear = data.filter(
      (item) => new Date(item.date).getFullYear() === currentYear
    );
    const filteredByMonth = data.filter((item) => {
      const itemDate = new Date(item.date);

      return (
        itemDate.getFullYear() === currentYear &&
        itemDate.getMonth() === currentMonth
      );
    });

    const filteredByWeek = data.filter((item) => {
      const itemDate = new Date(item.date);
      return (
        itemDate.getFullYear() === currentYear &&
        getWeekNumber(itemDate) === currentWeek
      );
    });

    const filteredByDay = data.filter((item) => {
      const itemDate = new Date(item.date);
      return (
        itemDate.getFullYear() === currentYear &&
        itemDate.getMonth() === currentMonth &&
        itemDate.getDate() === currentDate
      );
    });

    const totalAlltime = data.reduce((acc, curr) => acc + curr.count, 0);
    const totalYear = filteredByYear.reduce((acc, curr) => acc + curr.count, 0);
    const totalDay = filteredByDay.reduce((acc, curr) => acc + curr.count, 0);
    const totalWeek = filteredByWeek.reduce((acc, curr) => acc + curr.count, 0);
    const totalMonth = filteredByMonth.reduce(
      (acc, curr) => acc + curr.count,
      0
    );

    return {
      totalDay: totalDay,
      totalWeek: totalWeek,
      totalMonth: totalMonth,
      totalYear: totalYear,
      totalAlltime: totalAlltime,
    };
  };

  function getWeekNumber(d) {
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    return weekNo;
  }

  const { totalAlltime, totalWeek, totalMonth, totalYear } =
    filterByCurrentTimePeriods(userData);

  return (
    <div className="stats-wrapper">
      <div className="stats-title">Statistiques</div>
      <div className="stats">
        <div className="stat">
          <p className="stat-label">semaine</p>
          <p className="stat-number">{totalWeek}</p>
        </div>
        <div className="stat">
          <p className="stat-label">mois</p>
          <p className="stat-number">{totalMonth}</p>
        </div>
        <div className="stat">
          <p className="stat-label">année</p>
          <p className="stat-number">{totalYear}</p>
        </div>
        <div className="stat">
          <p className="stat-label">toujours</p>
          <p className="stat-number">{totalAlltime}</p>
        </div>
      </div>
    </div>
  );
}
