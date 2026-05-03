const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Car Sales Analytics",
    description: "An interactive Tableau dashboard analyzing car sales data to uncover trends, top-performing models, and regional sales performance.",
    image: `${base}carsales.png`,
    tags: ["Tableau", "Data Analytics"],
    github: "https://github.com/viveeeeek13/Car_Sales_Analytics",
    live: "https://public.tableau.com/views/CarSalesDashboard_17773691235740/CarSalesDashboard?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
  },
  {
    name: "Egypt Real Estate Analyzer",
    description: "A data-driven analysis of the Egyptian real estate market using Tableau and Python to identify pricing patterns and investment opportunities.",
    image: `${base}Egypt-RealEstateAnalyzer.png`,
    tags: ["Tableau", "Python", "Data Analytics"],
    github: "https://github.com/viveeeeek13/SectionE_G-5_Egypt-RealEstateAnalyzer",
    live: "https://public.tableau.com/app/profile/rahul.dwivedi6526/viz/DVACapstoneDashboard/Welcome"
  },
  {
    name: "Cardiovascular Risk Analysis Dashboard",
    description: "A comprehensive Excel-based dashboard for analyzing cardiovascular risk factors, visualizing health trends and patient data insights.",
    image: `${base}Cardiovascular.png`,
    tags: ["Excel", "Data Analytics"],
    github: "https://github.com/viveeeeek13/G11_DVA_Capstone",
    live: "https://docs.google.com/spreadsheets/d/1dVobtSoNHChjNenFJMySHrMrgC1mQeF01C8QnAsywV8/edit?usp=sharing"
  },
]

export default projects
