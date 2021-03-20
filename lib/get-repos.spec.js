import getRepos from "./get-repos";
import config from "./config";

it("can get an activity feed for a given user", async () => {
  const githubToken = config.githubToken;
  const repoNames = [
    "gavinhenderson/gavinhenderson.me",
    "appleboy/ssh-action",
    "xdanaux/moderncv",
  ];

  const repos = await getRepos({ githubToken, repoNames });

  expect(repos[0]).toMatchObject({
    id: 324808584,
    node_id: "MDEwOlJlcG9zaXRvcnkzMjQ4MDg1ODQ=",
    name: "gavinhenderson.me",
    full_name: "gavinhenderson/gavinhenderson.me",
    private: true,
    owner: {
      login: "gavinhenderson",
      id: 1359202,
      node_id: "MDQ6VXNlcjEzNTkyMDI=",
      avatar_url: "https://avatars.githubusercontent.com/u/1359202?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/gavinhenderson",
      html_url: "https://github.com/gavinhenderson",
      followers_url: "https://api.github.com/users/gavinhenderson/followers",
      following_url:
        "https://api.github.com/users/gavinhenderson/following{/other_user}",
      gists_url: "https://api.github.com/users/gavinhenderson/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/gavinhenderson/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/gavinhenderson/subscriptions",
      organizations_url: "https://api.github.com/users/gavinhenderson/orgs",
      repos_url: "https://api.github.com/users/gavinhenderson/repos",
      events_url:
        "https://api.github.com/users/gavinhenderson/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/gavinhenderson/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/gavinhenderson/gavinhenderson.me",
    description: "Source code for gavinhenderson.me",
    fork: false,
    url: "https://api.github.com/repos/gavinhenderson/gavinhenderson.me",
    forks_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/forks",
    keys_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/teams",
    hooks_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/hooks",
    issue_events_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/events",
    assignees_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/tags",
    blobs_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/languages",
    stargazers_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/stargazers",
    contributors_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/contributors",
    subscribers_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/subscribers",
    subscription_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/subscription",
    commits_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/merges",
    archive_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/downloads",
    issues_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/labels{/name}",
    releases_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/gavinhenderson/gavinhenderson.me/deployments",
    created_at: "2020-12-27T17:02:33Z",
    updated_at: "2021-03-20T17:15:27Z",
    pushed_at: "2021-03-20T17:15:25Z",
    git_url: "git://github.com/gavinhenderson/gavinhenderson.me.git",
    ssh_url: "git@github.com:gavinhenderson/gavinhenderson.me.git",
    clone_url: "https://github.com/gavinhenderson/gavinhenderson.me.git",
    svn_url: "https://github.com/gavinhenderson/gavinhenderson.me",
    homepage: null,
    size: 16475,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Nunjucks",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    forks: 0,
    open_issues: 2,
    watchers: 0,
    default_branch: "main",
    permissions: { admin: true, push: true, pull: true },
    allow_squash_merge: true,
    allow_merge_commit: true,
    allow_rebase_merge: true,
    delete_branch_on_merge: false,
    network_count: 0,
    subscribers_count: 1,
  });
  expect(repos[1]).toMatchObject({
    id: 186202082,
    node_id: "MDEwOlJlcG9zaXRvcnkxODYyMDIwODI=",
    name: "ssh-action",
    full_name: "appleboy/ssh-action",
    private: false,
    owner: {
      login: "appleboy",
      id: 21979,
      node_id: "MDQ6VXNlcjIxOTc5",
      avatar_url: "https://avatars.githubusercontent.com/u/21979?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/appleboy",
      html_url: "https://github.com/appleboy",
      followers_url: "https://api.github.com/users/appleboy/followers",
      following_url:
        "https://api.github.com/users/appleboy/following{/other_user}",
      gists_url: "https://api.github.com/users/appleboy/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/appleboy/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/appleboy/subscriptions",
      organizations_url: "https://api.github.com/users/appleboy/orgs",
      repos_url: "https://api.github.com/users/appleboy/repos",
      events_url: "https://api.github.com/users/appleboy/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/appleboy/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/appleboy/ssh-action",
    description: "GitHub Actions for executing remote ssh commands.",
    fork: false,
    url: "https://api.github.com/repos/appleboy/ssh-action",
    forks_url: "https://api.github.com/repos/appleboy/ssh-action/forks",
    keys_url: "https://api.github.com/repos/appleboy/ssh-action/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/appleboy/ssh-action/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/appleboy/ssh-action/teams",
    hooks_url: "https://api.github.com/repos/appleboy/ssh-action/hooks",
    issue_events_url:
      "https://api.github.com/repos/appleboy/ssh-action/issues/events{/number}",
    events_url: "https://api.github.com/repos/appleboy/ssh-action/events",
    assignees_url:
      "https://api.github.com/repos/appleboy/ssh-action/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/appleboy/ssh-action/branches{/branch}",
    tags_url: "https://api.github.com/repos/appleboy/ssh-action/tags",
    blobs_url:
      "https://api.github.com/repos/appleboy/ssh-action/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/appleboy/ssh-action/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/appleboy/ssh-action/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/appleboy/ssh-action/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/appleboy/ssh-action/statuses/{sha}",
    languages_url: "https://api.github.com/repos/appleboy/ssh-action/languages",
    stargazers_url:
      "https://api.github.com/repos/appleboy/ssh-action/stargazers",
    contributors_url:
      "https://api.github.com/repos/appleboy/ssh-action/contributors",
    subscribers_url:
      "https://api.github.com/repos/appleboy/ssh-action/subscribers",
    subscription_url:
      "https://api.github.com/repos/appleboy/ssh-action/subscription",
    commits_url:
      "https://api.github.com/repos/appleboy/ssh-action/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/appleboy/ssh-action/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/appleboy/ssh-action/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/appleboy/ssh-action/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/appleboy/ssh-action/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/appleboy/ssh-action/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/appleboy/ssh-action/merges",
    archive_url:
      "https://api.github.com/repos/appleboy/ssh-action/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/appleboy/ssh-action/downloads",
    issues_url:
      "https://api.github.com/repos/appleboy/ssh-action/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/appleboy/ssh-action/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/appleboy/ssh-action/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/appleboy/ssh-action/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/appleboy/ssh-action/labels{/name}",
    releases_url:
      "https://api.github.com/repos/appleboy/ssh-action/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/appleboy/ssh-action/deployments",
    created_at: "2019-05-12T02:28:18Z",
    updated_at: "2021-03-20T17:02:39Z",
    pushed_at: "2021-03-06T15:00:42Z",
    git_url: "git://github.com/appleboy/ssh-action.git",
    ssh_url: "git@github.com:appleboy/ssh-action.git",
    clone_url: "https://github.com/appleboy/ssh-action.git",
    svn_url: "https://github.com/appleboy/ssh-action",
    homepage: "https://github.com/marketplace/actions/ssh-remote-commands",
    size: 385,
    stargazers_count: 1104,
    watchers_count: 1104,
    language: "Dockerfile",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 130,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 19,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    forks: 130,
    open_issues: 19,
    watchers: 1104,
    default_branch: "master",
    permissions: { admin: false, push: false, pull: true },
    temp_clone_token: "",
    network_count: 130,
    subscribers_count: 14,
  });
  expect(repos[2]).toMatchObject({
    id: 39879320,
    node_id: "MDEwOlJlcG9zaXRvcnkzOTg3OTMyMA==",
    name: "moderncv",
    full_name: "xdanaux/moderncv",
    private: false,
    owner: {
      login: "xdanaux",
      id: 2313025,
      node_id: "MDQ6VXNlcjIzMTMwMjU=",
      avatar_url: "https://avatars.githubusercontent.com/u/2313025?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/xdanaux",
      html_url: "https://github.com/xdanaux",
      followers_url: "https://api.github.com/users/xdanaux/followers",
      following_url:
        "https://api.github.com/users/xdanaux/following{/other_user}",
      gists_url: "https://api.github.com/users/xdanaux/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/xdanaux/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/xdanaux/subscriptions",
      organizations_url: "https://api.github.com/users/xdanaux/orgs",
      repos_url: "https://api.github.com/users/xdanaux/repos",
      events_url: "https://api.github.com/users/xdanaux/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/xdanaux/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/xdanaux/moderncv",
    description: "A modern curriculum vitae class for LaTeX",
    fork: false,
    url: "https://api.github.com/repos/xdanaux/moderncv",
    forks_url: "https://api.github.com/repos/xdanaux/moderncv/forks",
    keys_url: "https://api.github.com/repos/xdanaux/moderncv/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/xdanaux/moderncv/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/xdanaux/moderncv/teams",
    hooks_url: "https://api.github.com/repos/xdanaux/moderncv/hooks",
    issue_events_url:
      "https://api.github.com/repos/xdanaux/moderncv/issues/events{/number}",
    events_url: "https://api.github.com/repos/xdanaux/moderncv/events",
    assignees_url:
      "https://api.github.com/repos/xdanaux/moderncv/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/xdanaux/moderncv/branches{/branch}",
    tags_url: "https://api.github.com/repos/xdanaux/moderncv/tags",
    blobs_url: "https://api.github.com/repos/xdanaux/moderncv/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/xdanaux/moderncv/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/xdanaux/moderncv/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/xdanaux/moderncv/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/xdanaux/moderncv/statuses/{sha}",
    languages_url: "https://api.github.com/repos/xdanaux/moderncv/languages",
    stargazers_url: "https://api.github.com/repos/xdanaux/moderncv/stargazers",
    contributors_url:
      "https://api.github.com/repos/xdanaux/moderncv/contributors",
    subscribers_url:
      "https://api.github.com/repos/xdanaux/moderncv/subscribers",
    subscription_url:
      "https://api.github.com/repos/xdanaux/moderncv/subscription",
    commits_url: "https://api.github.com/repos/xdanaux/moderncv/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/xdanaux/moderncv/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/xdanaux/moderncv/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/xdanaux/moderncv/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/xdanaux/moderncv/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/xdanaux/moderncv/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/xdanaux/moderncv/merges",
    archive_url:
      "https://api.github.com/repos/xdanaux/moderncv/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/xdanaux/moderncv/downloads",
    issues_url: "https://api.github.com/repos/xdanaux/moderncv/issues{/number}",
    pulls_url: "https://api.github.com/repos/xdanaux/moderncv/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/xdanaux/moderncv/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/xdanaux/moderncv/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/xdanaux/moderncv/labels{/name}",
    releases_url: "https://api.github.com/repos/xdanaux/moderncv/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/xdanaux/moderncv/deployments",
    created_at: "2015-07-29T07:15:53Z",
    updated_at: "2021-03-20T12:02:23Z",
    pushed_at: "2021-02-09T23:15:02Z",
    git_url: "git://github.com/xdanaux/moderncv.git",
    ssh_url: "git@github.com:xdanaux/moderncv.git",
    clone_url: "https://github.com/xdanaux/moderncv.git",
    svn_url: "https://github.com/xdanaux/moderncv",
    homepage: "",
    size: 65364,
    stargazers_count: 1321,
    watchers_count: 1321,
    language: "TeX",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 351,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 78,
    license: null,
    forks: 351,
    open_issues: 78,
    watchers: 1321,
    default_branch: "master",
    permissions: { admin: false, push: false, pull: true },
    temp_clone_token: "",
    network_count: 351,
    subscribers_count: 45,
  });
});
