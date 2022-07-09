class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.dismissed = false;
    }
    // Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
    getInfo() {
        return `${this.course}, ${this.university}, ${this.fullName}`;
    }

    // Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
    get getMarks() {
        if (this.dismissed) {
            return null;
        }
        return this.marks;
    }

    // Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
    set setMark(value) {
        if (this.dismissed) {
            return null;
        }
        this.marks.push(value);
    }

    // Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
    get getAverageMark() {
        const result = (this.marks.reduce((prev, val) => prev += val) / this.marks.length).toFixed(1);
        if (this.dismissed) {
            return null;
        }
        return result;
    }

    // Створіть метод this.dismissed, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
    dismissedStudent() {
        this.dismissed = true;
    }

    // Створіть метод this.recover, який дозволить поновити студента
    recoverStudent() {
            this.dismissed = false;
    }
}
const studentInfo = new Student("Вищої Школи Психотерапії", "Студент 1-го курсу", "Остап Бендер", [5, 4, 4, 5]);
export default studentInfo
