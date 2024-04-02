export interface Course {
    course_code: string;
    course_name: string;
    instructor: string,
    discipline: string,
    tags: string[],
    description: string,
}

export const localCourses: Course[] = [
    {
        course_code: "CS101",
        course_name: "Introduction to Computer Science",
        instructor: "John Doe",
        discipline: "Computer Science",
        tags: ["beginner", "programming"],
        description: "This course provides an introduction to computer science concepts and programming fundamentals.",
    },
    {
        course_code: "ENG202",
        course_name: "English Literature",
        instructor: "Jane Smith",
        discipline: "English",
        tags: ["literature", "analysis"],
        description: "Explore various works of English literature and develop critical analysis skills.",
    },
    // Add more courses as needed
];