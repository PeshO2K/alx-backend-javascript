export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const departmentEmployees of Object.values(report.allEmployees)) {
    allEmployees = [...allEmployees, ...departmentEmployees];
  }
  return allEmployees;
}
