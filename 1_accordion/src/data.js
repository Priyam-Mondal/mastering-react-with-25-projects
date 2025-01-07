const data = [
  {
    id: "faq_001",
    question: "What is the purpose of the timetable generation system?",
    answer:
      "The system automates the process of scheduling classes, ensuring no conflicts for teachers, students, or classrooms.",
  },
  {
    id: "faq_002",
    question: "Which algorithm is used for conflict resolution?",
    answer:
      "The system uses the Graph Coloring Algorithm to assign time slots to classes without overlapping conflicts.",
  },
  {
    id: "faq_003",
    question: "What technologies are used in the project?",
    answer:
      "The project utilizes the MERN stack, including MongoDB, Express.js, React.js, and Node.js.",
  },
  {
    id: "faq_004",
    question: "How are time slots assigned?",
    answer:
      "Time slots are assigned based on the greedy graph coloring strategy to minimize conflicts.",
  },
  {
    id: "faq_005",
    question: "Can administrators manually edit the timetable?",
    answer:
      "Yes, administrators can manually override the generated timetable if needed.",
  },
  {
    id: "faq_006",
    question: "Is the system scalable for multiple institutions?",
    answer:
      "Yes, the system is designed to handle scalability and can support multiple institutions with proper configuration.",
  },
];

export default data;
