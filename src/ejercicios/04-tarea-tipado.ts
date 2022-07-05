/*
    ===== Código de TypeScript =====
*/
interface Prize {
    cost: number,
    currency: string
}


interface Course {
    name: string,
    web: string,
    time: number,
    prize: Prize,
    topics: string[],
    getTime: () => number,
}


const course: Course =
{
    name: "Angular",
    web: "Udemy",
    time: 45,
    prize: {
        cost: 10,
        currency: '€'
    },
    topics: ['Typescript', 'Angular', 'Firebase'],
    getTime() {
        return this.time;
    }
}

const time = course.getTime();
console.log(time);








