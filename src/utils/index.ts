export const ageString = (age: number): string => {
    const years = age % 100;
    const lastDigit = years % 10;
    if (years >= 11 && years <= 19) {
        return age + " лет";
    } else if (lastDigit === 1) {
        return age + " год";
    } else if (lastDigit >= 2 && lastDigit <= 4) {
        return age + " года";
    } else {
        return age + " лет";
    }
}

