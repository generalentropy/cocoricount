import ExcelJS from "exceljs";

export default function exportUserData() {
  const workbook = new ExcelJS.Workbook();
  workbook.creator = "CocoriCount";
  workbook.created = new Date();

  const worksheet = workbook.addWorksheet("CocoriCountStats");

  worksheet.columns = [
    { header: "Date", key: "date", width: 15 },
    { header: "Count", key: "count", width: 10 },
  ];

  const data = [
    {
      date: "2023-12-09",
      count: 10,
    },
    {
      date: "2023-12-09",
      count: 10,
    },
    {
      date: "2023-12-09",
      count: 10,
    },
  ];

  data.forEach((item) => {
    worksheet.addRow(item);
  });
}
