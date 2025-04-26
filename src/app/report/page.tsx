import { fetchCategories, fetchReport } from "@/lib/fetchers";
import Gauge from "@/components/ReportCharts/Gauge";
import Polar from "@/components/ReportCharts/Polar";
import BarHorizontal from "@/components/ReportCharts/BarHorizontal";
import LineWithLabels from "@/components/ReportCharts/Line";
import ReportIssues from "@/components/ReportIssues/ReportIssues";
import style from "./report.module.scss";


export default async function ReportPage() {
  const report = await fetchReport();
  const categories = await fetchCategories();


  return (
    <div className={style.grid}>

      <div className={style.colWrapper}>

      <header className={`light-bg ${style.header}`}>
        <div> 
          <h2>{report.model.name} <br/><span>(version {report.model.version})</span></h2>
          <div className={style.barChartWrapper}>
            <BarHorizontal 
              series={report.metrics.map((metric)=>{return metric.value*100})} 
              labels={report.metrics.map((metric)=>{return metric.name + ': ' +metric.value*100})}
            />
          </div>
        </div>

        <div className={style.gaugeContainer}> 
          <Gauge 
            series={report.metrics.map((metric)=>{return metric.value*100})} 
            labels={report.metrics.map((metric)=>{return metric.name})}
          />
          <div>
            <p><span>Date:</span> {report.createdAt.toLocaleDateString()}</p> 
            <p><span>Level: </span>{report.level}</p>
          </div>
          <div className={style.buttonsWrapper}>
            <button className={`button ${style.downloadBtn}`}>Export</button>
            <button className={`button ${style.downloadBtn}`}>Share</button>
          </div>
        </div>
      </header>

      <div className={`light-bg ${style.chartsBox}`}>
        <h2>Past scans comparison</h2>
        <LineWithLabels 
          // series={report.metrics.map((metric)=>{return metric.value*100})} 
          // labels={report.metrics.map((metric)=>{return metric.name + ': ' +metric.value*100})}
        />
        {/* <Polar series={report.metrics.map((metric)=>{return metric.value*100})} labels={report.metrics.map((metric)=>{return metric.name + ' ' +metric.value*100 + ' / 100'})}/> */}
      </div>

      </div>

      <div className={`${style.colWrapper}`}>
        <div className={`light-bg ${style.issuesBox}`}>
          <h2>Issues</h2>
          <ReportIssues issues={report.issues} categories={categories}/>
        </div>
        <div className={`light-bg ${style.chartsPolarBox}`}>
          <h2>Metrics</h2>
          <Polar series={report.metrics.map((metric)=>{return metric.value*100})} labels={report.metrics.map((metric)=>{return metric.name + ' ' +metric.value*100 + ' / 100'})}/>
        </div>

      </div>
    </div>
  );
}
