import { fetchCategories, fetchReport } from "@/lib/fetchers";

export default async function ReportPage() {
  const report = await fetchReport();
  const categories = await fetchCategories();

  // This is the code that our intern wrote, it's not working very well, but
  // it's a good starting point! Well, maybe you should just start from scratch
  // and do it better?

  return (
    <div>
      <h1>
        Scan Report (date = {report.createdAt.toLocaleDateString()}, level ={" "}
        {report.level})
      </h1>

      <h2>Model</h2>
      <p>
        {report.model.name} (version {report.model.version})
      </p>

      <h2>Metrics</h2>
      <ul>
        {report.metrics.map((metric) => (
          <li key={metric.id}>
            {metric.name}: {metric.value}
          </li>
        ))}
      </ul>

      <h2>Issues</h2>
      <ul>
        {report.issues.map((issue) => (
          <li key={issue.id}>
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <p>Severity: {issue.severity}</p>
            <p>
              Category:
              {
                categories.find((category) => category.id === issue.categoryId)
                  ?.name
              }
            </p>
            <p>Example:</p>
            <ul>
              {issue.example.map((example, index) => (
                <li key={index}>
                  {example.role}: {example.content}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
