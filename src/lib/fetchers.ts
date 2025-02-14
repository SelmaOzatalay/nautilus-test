import { fakeCategories, fakeReport } from "./data";
import { IssueCategory, Report } from "./types";

/**
 * Fetches a report containing metrics and issues related to AI model behavior
 * and safety.
 */
export async function fetchReport(): Promise<Report> {
  // This is a mock, it's fine like this, no need to edit ;)
  return Promise.resolve(fakeReport);
}

/**
 * Fetches the list of issue categories.
 */
export async function fetchCategories(): Promise<IssueCategory[]> {
  // This is a mock, it's fine like this, no need to edit ;)
  return Promise.resolve(fakeCategories);
}
