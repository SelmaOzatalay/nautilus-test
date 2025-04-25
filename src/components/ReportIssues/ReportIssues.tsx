"use client";
import { ReactNode, useEffect, useState } from 'react';
import { Issue, IssueCategory } from '@/lib/types';
import { Tabs } from '../Tabs/Tabs';
// import style from './ReportIssues.module.scss';

type IssuesProps = {
  issues: Issue[];
  categories: IssueCategory[];
};

export default function ReportIssues({issues, categories}:IssuesProps) {

  const [data, setData] = useState<{ label: string; content: ReactNode }[]>([]);
  
  useEffect(() => {

    const categorizedIssues = categories.map((category) => {
      const categoryIssues = issues.filter(
        (issue) => issue.categoryId === category.id 
      );
      return {
        ...category,
        name: category.name + ' (' + categoryIssues.length + ')',
        issues: categoryIssues,
      };
    });

    const tabData = categorizedIssues.filter((cat)=>cat.issues.length).map((category) => ({
      label: category.name,
      content: (
        <ul>
          {category.issues.map((issue) => (
            <li key={issue.id}>
              <h3>{issue.title}</h3>
              <p className='description'>{issue.description}</p>
              {issue.severity !== 'low' &&
                <h4 className='severity'>Severity: <span className={issue.severity}>{issue.severity}</span></h4>
              }
              <ul>
                <li><h4>Example:</h4></li>
                {issue.example.map((example, index) => (
                  <li key={index}>
                    <b>{example.role}</b>: {example.content}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ),
    }));

    setData(tabData);
  },[issues, categories])   
  
  return data.length > 0 ? <Tabs tabs={data} /> : null;
}