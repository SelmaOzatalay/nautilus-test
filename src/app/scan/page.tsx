import { fetchCategories } from "@/lib/fetchers";
import ModelSelector from "@/components/ModelSelector/ModelSelector";
import CategoriesSelector from "@/components/CategoriesSelector/CategoriesSelector";
import ScanLevelSelector from "@/components/ScanLevelSelector/ScanLevelSelector";
import ResumeScanAndRun from "@/components/ResumeScanAndRun/ResumeScanAndRun";
import style from "./scan.module.scss";

export default async function ReportPage() {

  const categories = await fetchCategories();

  return (
    <div className={style.grid}>
      <div className={style.modelBox}><ModelSelector/></div>
      <div className={style.levelBox}><ScanLevelSelector/></div>
      <div className={style.categoriesBox}><CategoriesSelector categories={categories}/></div>
      <div className={style.resultBox}><ResumeScanAndRun/></div>
    </div>
  );
}
