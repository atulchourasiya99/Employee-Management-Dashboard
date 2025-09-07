localStorage.clear();

const employees = [
    {
        "id": 1,
        "firstName": "Aarav",
        "email": "A@e.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "TaskTitle": "Fix Login Bug",
                "TaskDescription": "Resolve issue where users cannot log in with valid credentials.",
                "TaskDate": "2025-09-01",
                "TaskCategory": "Bug Fix",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "TaskTitle": "Database Optimization",
                "TaskDescription": "Optimize SQL queries to reduce response time.",
                "TaskDate": "2025-08-29",
                "TaskCategory": "Database",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "TaskTitle": "JWT Authentication",
                "TaskDescription": "Implement JWT-based authentication for secure login.",
                "TaskDate": "2025-08-30",
                "TaskCategory": "Backend",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Ishita",
        "email": "employee2@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "TaskTitle": "React Component Development",
                "TaskDescription": "Build reusable components for dashboard widgets.",
                "TaskDate": "2025-09-02",
                "TaskCategory": "Frontend",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "TaskTitle": "Unit Testing",
                "TaskDescription": "Write Jest tests for the authentication service.",
                "TaskDate": "2025-08-27",
                "TaskCategory": "Testing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "TaskTitle": "Code Refactoring",
                "TaskDescription": "Clean redundant functions from utils directory.",
                "TaskDate": "2025-08-29",
                "TaskCategory": "Code Quality",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "TaskTitle": "API Documentation",
                "TaskDescription": "Document REST APIs using Swagger.",
                "TaskDate": "2025-08-31",
                "TaskCategory": "Documentation",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Rohan",
        "email": "employee3@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "TaskTitle": "Deployment Setup",
                "TaskDescription": "Deploy latest build to staging server.",
                "TaskDate": "2025-09-01",
                "TaskCategory": "DevOps",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "TaskTitle": "Error Logging",
                "TaskDescription": "Integrate error logging with Winston.",
                "TaskDate": "2025-08-30",
                "TaskCategory": "Monitoring",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "TaskTitle": "API Integration",
                "TaskDescription": "Integrate payment gateway APIs.",
                "TaskDate": "2025-08-29",
                "TaskCategory": "Backend",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Sneha",
        "email": "employee4@example.com",
        "password": "123",
        "taskCounts": {
            "active": 1,
            "newTask": 2,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "TaskTitle": "Bug Reproduction",
                "TaskDescription": "Reproduce and document reported UI bugs.",
                "TaskDate": "2025-08-28",
                "TaskCategory": "QA",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "TaskTitle": "Feature Development",
                "TaskDescription": "Develop profile management feature for users.",
                "TaskDate": "2025-09-03",
                "TaskCategory": "Feature",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "TaskTitle": "API Testing",
                "TaskDescription": "Create Postman collections for APIs.",
                "TaskDate": "2025-08-31",
                "TaskCategory": "Testing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "TaskTitle": "Code Cleanup",
                "TaskDescription": "Remove unused imports and variables.",
                "TaskDate": "2025-08-29",
                "TaskCategory": "Code Quality",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Arjun",
        "email": "employee5@example.com",
        "password": "123",
        "taskCounts": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "TaskTitle": "Performance Tuning",
                "TaskDescription": "Optimize image loading and bundle size.",
                "TaskDate": "2025-09-02",
                "TaskCategory": "Performance",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "TaskTitle": "Responsive Fixes",
                "TaskDescription": "Fix layout issues on mobile devices.",
                "TaskDate": "2025-08-30",
                "TaskCategory": "Frontend",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "TaskTitle": "Database Migration",
                "TaskDescription": "Migrate database schema to new version.",
                "TaskDate": "2025-08-29",
                "TaskCategory": "Database",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            },
            {
                "TaskTitle": "Checkout Flow Fix",
                "TaskDescription": "Resolve errors in checkout process.",
                "TaskDate": "2025-09-01",
                "TaskCategory": "Bug Fix",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    }
];



const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]


export const setLocalStorage = (key, value) => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = (key) => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employees, admin };
}
