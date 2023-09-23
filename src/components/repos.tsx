import { RepoTemplateType } from './repo-template';
import { Fragment } from 'react';

export async function Repos() {
  const targetRepos = ['chot', 'astral-playland'];

  const repos: RepoTemplateType = await (
    await fetch('https://api.github.com/users/dominik-stumpf/repos', {
      cache: 'force-cache',
    })
  ).json();

  // console.log(repos);
  const filteredRepos = repos.filter((repo) => targetRepos.includes(repo.name));

  return filteredRepos.map((repo) => (
    <Fragment key={repo.name}>
      <h3>{repo.name}</h3>
      <p>{repo.description}</p>
    </Fragment>
  ));
}
