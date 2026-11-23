import { FaBrain, FaChartBar, FaDatabase, FaLaptopCode, FaTable, FaWrench } from "react-icons/fa";

const skills = [
  { title: "Programming", icon: FaLaptopCode, items: ["Python", "SQL"] },
  { title: "Libraries", icon: FaTable, items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"] },
  { title: "Tools", icon: FaWrench, items: ["Power BI", "Excel", "Flask", "GitHub", "DAX", "Power Query"] },
  { title: "Analytics", icon: FaChartBar, items: ["Data Cleaning", "Exploratory Data Analysis", "Data Transformation", "Data Validation", "Data Visualization", "Dashboard Development", "KPI Analysis"] },
  { title: "Data Infrastructure", icon: FaDatabase, items: ["MySQL", "Data Modeling"] },
  { title: "Concepts", icon: FaBrain, items: ["Machine Learning", "Random Forest", "K-Means Clustering", "Model Evaluation"] },
];

export default skills;
