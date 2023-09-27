import { ListSection } from '../list-section/list-section';
import { GitHubRepository } from './projects-types';
import { resumeData } from '@/src/app/resume-data';

const api = 'https://api.github.com/users/dominik-stumpf/repos';

async function fetchRepositories() {
  const res = await fetch(api, { cache: 'force-cache' });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<GitHubRepository[]>;
}

export default async function Projects() {
  const repos = await fetchRepositories();
  const targetRepos = resumeData.projects;

  const filteredRepos = repos.filter((repo) => targetRepos.includes(repo.name));

  return filteredRepos.map((repo) => (
    <ListSection tight>
      {{ title: repo.name, paragraph: repo.description }}
    </ListSection>
  ));
}
