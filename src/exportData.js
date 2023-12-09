async function exportUserData(userData) {
  const ExcelJS = await import("exceljs");

  const workbook = new ExcelJS.Workbook();
  workbook.creator = "CocoriCount";
  workbook.created = new Date();

  const worksheet = workbook.addWorksheet("CocoriCountStats");

  worksheet.columns = [
    { header: "Date", key: "date", width: 15 },
    { header: "Récolte", key: "count", width: 20 },
  ];

  const convertedUserData = userData.map((el) => {
    const date = new Date(el.date);
    const formattedDate = date.toLocaleDateString();
    return { date: formattedDate, count: el.count };
  });

  console.log(convertedUserData);

  convertedUserData.forEach((item) => {
    worksheet.addRow(item);
  });

  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  console.log(year, month, day);

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `CocoriCountStats_${day}_${month}_${year}.xlsx`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  console.log("hello");
}

export default exportUserData;
