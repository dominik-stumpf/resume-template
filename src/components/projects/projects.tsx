import { resumeData } from '@/src/app/resume-data';
import { ListSection } from '@/src/components/list-section/list-section';
import { GitHubRepository } from './projects-types';

const api = 'https://api.github.com/users/dominik-stumpf/repos';

async function fetchRepositories() {
  const res = await fetch(api, { cache: 'force-cache' });

  if (!res.ok) {
    throw new Error('Failed to fetch repositories');
  }

  return res.json() as Promise<GitHubRepository[]>;
}

export default async function Projects() {
  const repos = await fetchRepositories();
  const targetRepos = resumeData.projects;

  const filteredRepos = repos.filter((repo) => targetRepos.includes(repo.name));

  return filteredRepos.map((repo) => (
    <ListSection key={repo.name} tight>
      {{ title: repo.name, paragraph: repo.description }}
    </ListSection>
  ));
}
