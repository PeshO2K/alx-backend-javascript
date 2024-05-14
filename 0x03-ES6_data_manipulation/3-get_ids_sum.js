export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (sumIds, curStudent) => sumIds + curStudent.id,
      0,
    );
  }
  return 0;
}
