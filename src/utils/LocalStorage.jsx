const employees = [
  {
    id: 1,
    firstName: "Rahul",
    email: "e@e.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Design Login Page",
        taskDescription: "Create a responsive login page with email and password fields.",
        taskdDate: "2026-10-24",
        
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update Dashboard UI",
        taskDescription: "Improve the dashboard layout and make it mobile responsive.",
        taskdDate: "2026-10-25",
        
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Navbar Bug",
        taskDescription: "Fix the navigation menu issue on smaller screens.",
        taskdDate: "2026-10-22",
        
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Build Profile Page",
        taskDescription: "Create a profile page with editable user details.",
        taskdDate: "2026-10-26",
        
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "API Integration",
        taskDescription: "Integrate the user API. The task failed because the API was unavailable.",
        taskdDate: "2026-10-21",
        
        category: "API Integration",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Develop Signup Form",
        taskDescription: "Build a signup form with input validation.",
        taskdDate: "2026-10-24",
        
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Create Contact Page",
        taskDescription: "Add a contact form with name, email, and message fields.",
        taskdDate: "2026-10-25",
      
        category: "Development",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Optimize Images",
        taskDescription: "Compress website images to improve loading speed.",
        taskdDate: "2026-10-22",
        
        category: "Optimization",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Write Unit Tests",
        taskDescription: "Write tests for the authentication components.",
        taskdDate: "2026-10-27",
      
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Deploy Staging Build",
        taskDescription: "Deployment failed due to a configuration error.",
        taskdDate: "2026-10-23",
      
        category: "Deployment",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    firstName: "Amit",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Build Product Cards",
        taskDescription: "Create reusable product cards using React components.",
        taskdDate: "2026-10-24",
          
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Implement Search",
        taskDescription: "Add search functionality to filter products by name.",
        taskdDate: "2026-10-26",
          
        category: "Feature",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix CSS Layout",
        taskDescription: "Correct spacing and alignment issues across pages.",
        taskdDate: "2026-10-22",
          
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Add Pagination",
        taskDescription: "Implement pagination for the product listing page.",
        taskdDate: "2026-10-28",
          
        category: "Feature",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Connect Payment API",
        taskDescription: "Payment integration could not be completed because credentials were missing.",
        taskdDate: "2026-10-23",
          
        category: "API Integration",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Create Admin Panel",
        taskDescription: "Build an admin dashboard for managing application data.",
        taskdDate: "2026-10-24",
           
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Add User Filters",
        taskDescription: "Add filters for user role, status, and registration date.",
        taskdDate: "2026-10-26",
           
        category: "Feature",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Update Documentation",
        taskDescription: "Document the admin panel features and usage instructions.",
        taskdDate: "2026-10-22",
           
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Implement Role Access",
        taskDescription: "Restrict dashboard features based on user roles.",
        taskdDate: "2026-10-27",
           
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Export User Reports",
        taskDescription: "Report export failed because of a formatting issue.",
        taskdDate: "2026-10-23",
           
        category: "Reporting",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        taskTitle: "Develop Notification UI",
        taskDescription: "Create a notification panel for application alerts.",
        taskdDate: "2026-10-24",
         
        category: "UI Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Add Dark Mode",
        taskDescription: "Implement a theme toggle for light and dark modes.",
        taskdDate: "2026-10-26",
         
        category: "Feature",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Form Validation",
        taskDescription: "Resolve validation errors in the employee registration form.",
        taskdDate: "2026-10-22",
         
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Improve App Performance",
        taskDescription: "Reduce unnecessary React component re-renders.",
        taskdDate: "2026-10-28",
         
        category: "Optimization",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Configure Email Alerts",
        taskDescription: "Email notifications failed because the SMTP configuration was incorrect.",
        taskdDate: "2026-10-23",
         
        category: "Configuration",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    firstName: "Arjun",
    email: "admin1@example.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  let employees = JSON.parse(localStorage.getItem("employees"));
  let admin = JSON.parse(localStorage.getItem("admin"));

  if (!Array.isArray(employees) || !Array.isArray(admin)) {
    setLocalStorage();
    employees = JSON.parse(localStorage.getItem("employees"));
    admin = JSON.parse(localStorage.getItem("admin"));
  }

  return { employees, admin };
};