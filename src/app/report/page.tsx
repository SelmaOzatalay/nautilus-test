import { fetchCategories, fetchReport } from "@/lib/fetchers";
import Gauge from "@/components/ReportCharts/Gauge";
import Polar from "@/components/ReportCharts/Polar";
import ReportIssues from "@/components/ReportIssues/ReportIssues";
import style from "./report.module.scss";


export default async function ReportPage() {
  const report = await fetchReport();
  const categories = await fetchCategories();


  return (
    <div className={style.grid}>
      <header className={`light-bg ${style.header}`}>
        <div> 
          <h2>{report.model.name} (version {report.model.version})</h2>

          <p>Date: {report.createdAt.toLocaleDateString()}</p> 
          <p>Level: {report.level}</p>

        </div>

        <div> 
          <Gauge 
          series={report.metrics.map((metric)=>{return metric.value*100})} 
          labels={report.metrics.map((metric)=>{return metric.name})}/>
        </div>
      </header>
      <div className={`light-bg ${style.chartsBox}`}>
        <h2>Metrics</h2>
        <Polar series={report.metrics.map((metric)=>{return metric.value*100})} labels={report.metrics.map((metric)=>{return metric.name + ' ' +metric.value*100 + ' / 100'})}/>
        {/* <ul>
          {report.metrics.map((metric) => (
            <li key={metric.id}>
              {metric.name}: {metric.value}
            </li>
          ))}
        </ul> */}
      </div>



      <div className={`light-bg ${style.issuesBox}`}>
      <h2>Issues</h2>
        <ReportIssues issues={report.issues} categories={categories}/>
      </div>
    </div>
  );
}
