export const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];
export function getPairs(arrStudents) {
    const result = [];
    const girls = [];
    const boys = [];
    for (let i = 0; i < arrStudents.length; i++){
        if (arrStudents[i].endsWith("а") || arrStudents[i].endsWith("я")){
            girls.push(arrStudents[i]);
        } else{
            boys.push(arrStudents[i]);
        }
    }
    for (let j = 0; j < arrStudents.length / 2; j++){
        result.unshift([girls[j], boys[j]]);
    }
    return result

}