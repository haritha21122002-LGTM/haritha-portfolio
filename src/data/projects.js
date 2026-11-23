// "github" / "demo": add real URLs. Empty = GitHub button is disabled, Live Demo is hidden.
// "preview": graphic drawn on the card (bars | dashboard | scatter | clusters | terminal)
export const categories = ["All", "Data Analytics", "Machine Learning", "Python", "Power BI"];

const projects = [
  {
    id: 1,
    title: "ATM Management System",
    description:
      "Developed a console-based ATM Management System using Python and MySQL to manage account access, balances, deposits, withdrawals, and PIN changes. Designed relational database tables to store customer information and transaction history. Implemented data validation and transaction processing.",
    tech: ["Python", "MySQL"],
    categories: ["Python"],
    preview: "terminal",
    github: "",
    demo: "",
  },
  {
    id: 2,
    title: "Blinkit Sales Dashboard",
    description:
      "Designed an interactive dashboard to analyze sales performance, product distribution, and customer reviews. Created KPI measures and visualizations to present business insights.",
    tech: ["Power BI", "DAX", "Power Query"],
    categories: ["Data Analytics", "Power BI"],
    preview: "dashboard",
    github: "",
    demo: "",
  },
  {
    id: 3,
    title: "Sales Dashboard – Power BI",
    description:
      "Developed an interactive Power BI dashboard to analyze sales, profit, quantity, product categories, cities, and payment methods. Created KPI cards, DAX measures, and interactive filters.",
    tech: ["Power BI", "DAX", "Power Query", "Data Modeling"],
    categories: ["Data Analytics", "Power BI"],
    preview: "bars",
    github: "",
    demo: "",
  },
  {
    id: 4,
    title: "Bengaluru House Price Prediction",
    description:
      "Developed a Random Forest Regression model to estimate house prices using property-related features. Performed data cleaning, preprocessing, feature encoding, and missing-value handling. Integrated the trained model with a Flask web application featuring an interactive prediction form.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask"],
    categories: ["Machine Learning", "Python"],
    preview: "scatter",
    github: "",
    demo: "",
  },
  {
    id: 5,
    title: "Customer Segmentation",
    description:
      "Developed a K-Means clustering model to segment customers based on Age, Annual Income, and Spending Score. Applied data cleaning and StandardScaler preprocessing. Used the Elbow Method and Silhouette Score to evaluate clustering performance. Built a Flask dashboard to display customer segments.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "Flask"],
    categories: ["Machine Learning", "Python", "Data Analytics"],
    preview: "clusters",
    github: "",
    demo: "",
  },
  {
    id: 6,
    title: "Bank Marketing Subscription Prediction",
    description:
      "Cleaned and preprocessed bank marketing data, then trained a scikit-learn neural network to predict term deposit subscriptions. Compared predictions with classification metrics and visualized model performance. The workflow also stores cleaned records in MySQL.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "MySQL", "Matplotlib", "Seaborn"],
    categories: ["Machine Learning", "Python", "Data Analytics"],
    preview: "scatter",
    github: "",
    demo: "",
  },
];
export default projects;
